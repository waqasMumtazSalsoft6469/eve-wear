import { localImages } from '@/assets/images';
import ButtonComp from '@/components/ButtonComp';
import CartItemCard from '@/components/CartItemCard';
import HeaderComp from '@/components/HeaderComp';
import OrderSummaryCard from '@/components/OrderSummaryCard';
import SearchBar from '@/components/SearchBar';
import WrapperContainer from '@/components/WrapperContainer';
import routes from '@/constants/routes';
import { MainStackParamList } from '@/navigation/types';
import { Colors } from '@/styles/colors';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useMemo, useState } from 'react';
import { ImageSourcePropType } from 'react-native';
import { ScrollView, View } from 'react-native';
import styles from './styles';

type CartItem = {
    id: number;
    category: string;
    title: string;
    price: number;
    image: ImageSourcePropType;
    quantity: number;
};

const INITIAL_CART_ITEMS: CartItem[] = [
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

const Cart: React.FC = () => {
    const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();
    const [searchQuery, setSearchQuery] = useState('');
    const [items, setItems] = useState<CartItem[]>(INITIAL_CART_ITEMS);

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

    const filteredItems = useMemo(() => {
        const q = searchQuery.trim().toLowerCase();
        if (!q) return items;
        return items.filter(item => item.title.toLowerCase().includes(q));
    }, [items, searchQuery]);

    const totals = useMemo(() => {
        const itemsTotal = filteredItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
        const shipping = filteredItems.length > 0 ? 10 : 0;
        const subtotal = itemsTotal + shipping;
        return { itemsTotal, shipping, subtotal };
    }, [filteredItems]);

    const formatPrice = (value: number) => `$${value.toFixed(2)}`;

    return (
        <WrapperContainer style={styles.container}>
            <HeaderComp
                showBack
                leftIcon="backBlack"
                title="My Cart"
                iconColor={Colors.brandPurple}
                rightIcon="notification"
                onRightIconPress={() => navigation.navigate(routes.main.notification)}
                titleStyle={{ color: Colors.brandPurple }}
            />

            <View style={styles.content}>
                <SearchBar
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                    placeholder="Search items"
                    showFilterButton={false}
                />

                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                    {filteredItems.map(item => (
                        <CartItemCard
                            key={item.id}
                            category={item.category}
                            title={item.title}
                            priceText={formatPrice(item.price)}
                            image={item.image}
                            quantity={item.quantity}
                            onDecrease={() => updateQuantity(item.id, -1)}
                            onIncrease={() => updateQuantity(item.id, 1)}
                            onDelete={() => removeItem(item.id)}
                        />
                    ))}

                    <OrderSummaryCard
                        itemsCount={filteredItems.length}
                        itemsTotalText={formatPrice(totals.itemsTotal)}
                        shippingText={formatPrice(totals.shipping)}
                        totalText={formatPrice(totals.subtotal)}
                    />
                </ScrollView>
            </View>

            <View style={styles.checkoutButtonWrap}>
                <ButtonComp
                    title="Proceed to Checkout"
                    onPress={() => navigation.navigate(routes.main.checkout)}
                    style={styles.checkoutButton}
                />
            </View>
        </WrapperContainer>
    );
};

export default Cart;
