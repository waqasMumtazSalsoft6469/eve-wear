import { localImages } from '@/assets/images';
import AddressInfoCard from '@/components/AddressInfoCard';
import ButtonComp from '@/components/ButtonComp';
import CartItemCard from '@/components/CartItemCard';
import HeaderComp from '@/components/HeaderComp';
import OrderSummaryCard from '@/components/OrderSummaryCard';
import TextComp from '@/components/TextComp';
import WrapperContainer from '@/components/WrapperContainer';
import routes from '@/constants/routes';
import { MainStackParamList } from '@/navigation/types';
import { Colors } from '@/styles/colors';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useMemo, useState } from 'react';
import { ImageSourcePropType, ScrollView, View } from 'react-native';
import styles from './styles';

type CheckoutItem = {
    id: number;
    category: string;
    title: string;
    price: number;
    image: ImageSourcePropType;
    quantity: number;
};

const INITIAL_CHECKOUT_ITEMS: CheckoutItem[] = [
    {
        id: 1,
        category: 'Supplements',
        title: 'Arete Energy Supplements',
        price: 50.09,
        image: localImages.product1,
        quantity: 1,
    },
    {
        id: 2,
        category: 'Supplements',
        title: 'Fem Ezee',
        price: 75,
        image: localImages.product2,
        quantity: 1,
    },
];

const Checkout: React.FC = () => {
    const screenStyles = styles as any;
    const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();
    const [promoCode, setPromoCode] = useState('');
    const [items, setItems] = useState<CheckoutItem[]>(INITIAL_CHECKOUT_ITEMS);

    const updateQuantity = (id: number, delta: number) => {
        setItems(prev =>
            prev.map(item =>
                item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
            )
        );
    };

    const removeItem = (id: number) => {
        setItems(prev => prev.filter(item => item.id !== id));
    };

    const totals = useMemo(() => {
        const itemsTotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
        const shipping = items.length > 0 ? 10 : 0;
        const total = itemsTotal + shipping;
        return { itemsTotal, shipping, total };
    }, [items]);

    const formatPrice = (value: number) => `$${value.toFixed(2)}`;

    return (
        <WrapperContainer style={screenStyles.container}>
            <HeaderComp
                showBack
                leftIcon="backBlack"
                title="Checkout"
                iconColor={Colors.brandPurple}
                rightIcon="notification"
                onRightIconPress={() => navigation.navigate(routes.main.notification)}
                titleStyle={{ color: Colors.brandPurple }}
            />

            <View style={screenStyles.content}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={screenStyles.scrollContent}
                >
                    <AddressInfoCard
                        name="Alexa Jones"
                        address="1458 Biddle Lane, Virginia"
                        phone="+970 000 000"
                        email="example@gmail.com"
                        onEditPress={() => navigation.navigate(routes.main.shippingAddress)}
                    />

                    {items.map((item, index) => (
                        <View key={item.id} style={screenStyles.packageWrap}>
                            <View style={screenStyles.packageTitleWrap}>
                                <TextComp text={`Package ${index + 1} of ${items.length}`} style={screenStyles.packageTitle} />
                            </View>

                            <CartItemCard
                                category={item.category}
                                title={item.title}
                                priceText={formatPrice(item.price)}
                                image={item.image}
                                quantity={item.quantity}
                                onDecrease={() => updateQuantity(item.id, -1)}
                                onIncrease={() => updateQuantity(item.id, 1)}
                                onDelete={() => removeItem(item.id)}
                            />
                        </View>
                    ))}

                    <OrderSummaryCard
                        title=""
                        itemsCount={items.reduce((sum, item) => sum + item.quantity, 0)}
                        itemsTotalText={formatPrice(totals.itemsTotal)}
                        shippingText={formatPrice(totals.shipping)}
                        totalText={formatPrice(totals.total)}
                        totalLabel="Total"
                        showPromoSection
                        promoCode={promoCode}
                        onPromoCodeChange={setPromoCode}
                        onApplyPromo={() => { }}
                    />
                </ScrollView>
            </View>

            <View style={screenStyles.bottomButtonWrap}>
                <ButtonComp
                    title="Proceed to Pay"
                    onPress={() => navigation.navigate(routes.main.cardDetails)}
                    height={52}
                    style={screenStyles.bottomButton}
                />
            </View>
        </WrapperContainer>
    );
};

export default Checkout;
