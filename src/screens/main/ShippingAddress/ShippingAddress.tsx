import AddressInfoCard from '@/components/AddressInfoCard';
import ButtonComp from '@/components/ButtonComp';
import HeaderComp from '@/components/HeaderComp';
import OrderSummaryCard from '@/components/OrderSummaryCard';
import TextComp from '@/components/TextComp';
import WrapperContainer from '@/components/WrapperContainer';
import routes from '@/constants/routes';
import { MainStackParamList } from '@/navigation/types';
import { Colors } from '@/styles/colors';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import styles from './styles';

const ShippingAddress: React.FC = () => {
    const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();
    const [promoCode, setPromoCode] = useState('');

    return (
        <WrapperContainer style={styles.container}>
            <HeaderComp
                showBack
                leftIcon="backBlack"
                title="Shipping Address"
                iconColor={Colors.brandPurple}
                rightIcon="notification"
                onRightIconPress={() => navigation.navigate(routes.main.notification)}
                titleStyle={{ color: Colors.brandPurple }}
            />

            <View style={styles.content}>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                    <TouchableOpacity activeOpacity={0.8} style={styles.addAddressCard} onPress={ () => navigation.navigate(routes.main.addShippingAddress)}>
                        <TextComp text="+ Add Address" style={styles.addAddressText} />
                    </TouchableOpacity>

                    <AddressInfoCard
                        name="Alexa Jones"
                        address="1458 Biddle Lane, Virginia"
                        phone="+970 000 000"
                        email="example@gmail.com"
                        onEditPress={() => { }}
                    />

                    <OrderSummaryCard
                        title=""
                        itemsCount={4}
                        itemsTotalText="$64.00"
                        shippingText="$10.00"
                        totalText="$74.00"
                        totalLabel="Total"
                        showPromoSection
                        promoCode={promoCode}
                        onPromoCodeChange={setPromoCode}
                        onApplyPromo={() => { }}
                    />
                </ScrollView>
            </View>

            <View style={styles.bottomButtonWrap}>
                <ButtonComp
                    title="Proceed to Pay"
                    onPress={() => { }}
                    height={52}
                    variant="premium"
                    style={styles.bottomButton}
                />
            </View>
        </WrapperContainer>
    );
};

export default ShippingAddress;
