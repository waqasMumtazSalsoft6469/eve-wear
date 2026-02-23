import HeaderComp from '@/components/HeaderComp';
import AppModal from '@/components/AppModal';
import ButtonComp from '@/components/ButtonComp';
import TextComp from '@/components/TextComp';
import WrapperContainer from '@/components/WrapperContainer';
import routes from '@/constants/routes';
import { MainStackParamList } from '@/navigation/types';
import { Colors } from '@/styles/colors';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useMemo, useRef, useState } from 'react';
import { Pressable, TextInput, View } from 'react-native';
import styles from './styles';

const PIN_LENGTH = 5;

const EnterPin: React.FC = () => {
    const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();
    const [pin, setPin] = useState('');
    const [isPaymentSuccessVisible, setIsPaymentSuccessVisible] = useState(false);
    const pinInputRef = useRef<TextInput>(null);

    const normalizedPin = useMemo(() => pin.replace(/\D/g, '').slice(0, PIN_LENGTH), [pin]);
    const isComplete = normalizedPin.length === PIN_LENGTH;

    const getSlotText = (index: number) => {
        if (index < normalizedPin.length - 1) return '•';
        if (index === normalizedPin.length - 1) return normalizedPin[index];
        return '';
    };

    const getSlotStyle = (index: number) => {
        const isActive =
            (normalizedPin.length === 0 && index === 0) ||
            (normalizedPin.length > 0 && normalizedPin.length < PIN_LENGTH && index === normalizedPin.length - 1);
        return isActive ? [styles.pinSlot, styles.pinSlotActive] : styles.pinSlot;
    };

    return (
        <WrapperContainer style={styles.container}>
            <HeaderComp
                showBack
                leftIcon="backBlack"
                title="Enter Pin"
                iconColor={Colors.brandPurple}
                rightIcon="notification"
                onRightIconPress={() => navigation.navigate(routes.main.notification)}
                titleStyle={{ color: Colors.brandPurple }}
            />
            <View style={styles.content}>
                <TextComp text="Please enter your pincode." style={styles.subtitle} />

                <Pressable style={styles.pinRow} onPress={() => pinInputRef.current?.focus()}>
                    {Array.from({ length: PIN_LENGTH }).map((_, index) => (
                        <View key={index} style={getSlotStyle(index)}>
                            <TextComp text={getSlotText(index)} style={styles.pinText} />
                        </View>
                    ))}
                </Pressable>

                <TextInput
                    ref={pinInputRef}
                    value={normalizedPin}
                    onChangeText={setPin}
                    keyboardType="number-pad"
                    maxLength={PIN_LENGTH}
                    style={styles.hiddenInput}
                    caretHidden
                    autoFocus
                />
                <View style={styles.bottomButtonWrap}>
                    <ButtonComp
                        title="Confirm"
                        onPress={() => {
                            if (!isComplete) return;
                            setIsPaymentSuccessVisible(true);
                        }}
                        disabled={!isComplete}
                        variant="premium"
                        height={52}
                        style={styles.bottomButton}
                    />
                </View>
            </View>

            <AppModal
                isVisible={isPaymentSuccessVisible}
                onClose={() => setIsPaymentSuccessVisible(false)}
                type="payment"
                message="Your order has been placed successfully!"
                primaryButtonText="View Order History"
                onPrimaryPress={() => {
                    setIsPaymentSuccessVisible(false);
                    navigation.navigate(routes.main.myOrders);
                }}
            />
        </WrapperContainer>
    );
};

export default EnterPin;
