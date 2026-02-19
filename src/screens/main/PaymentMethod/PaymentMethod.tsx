import ButtonComp from '@/components/ButtonComp';
import HeaderComp from '@/components/HeaderComp';
import MyIcons, { IconName } from '@/components/MyIcons';
import PaymentMethodOption from '@/components/PaymentMethodOption';
import WrapperContainer from '@/components/WrapperContainer';
import { useStagger } from '@/hooks/animations/useStagger';
import { Colors } from '@/styles/colors';
import { devLog } from '@/utils/logger';
import { moderateScale } from '@/styles/scaling';
import React, { useCallback, useMemo, useState } from 'react';
import { Pressable, ScrollView, View } from 'react-native';
import Animated from 'react-native-reanimated';
import styles from './styles';
import fontFamily from '@/styles/fontFamily';
import TextComp from '@/components/TextComp';


type PaymentId = 'paypal' | 'google' | 'apple' | 'visa';

interface PaymentOption {
    id: PaymentId;
    title: string;
    subtitle?: string;
    icon?: IconName;
}

const PAYMENT_OPTIONS: PaymentOption[] = [
    { id: 'paypal', title: 'Paypal', icon: 'paypal' },
    { id: 'google', title: 'Google Pay', icon: 'google' },
    { id: 'apple', title: 'Apple Pay', icon: 'apple' },
    { id: 'visa', title: '... 4567', subtitle: 'Expires 08/25', icon: 'visa' },
];

const PaymentMethod: React.FC = () => {
    const [selectedId, setSelectedId] = useState<PaymentId>('visa');

    const handleSelect = useCallback((id: PaymentId) => {
        setSelectedId(id);
    }, []);

    const handleAddCard = useCallback(() => {
        devLog('Add new card');
    }, []);



    const plusIcon = useMemo(
        () => (
            <MyIcons
                name="tabPlus"
                size={moderateScale(22)}
                stroke={Colors.text}
            />
        ),
        []
    );

    return (
        <WrapperContainer style={styles.container}>
            <HeaderComp
                title="Payment Method"
                showBack={true}
                leftIcon="backBlack"
                iconColor={Colors.brandPurple}
                titleStyle={styles.headerTitle}
            />
            <View style={styles.content}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.listContent}
                >
                    {PAYMENT_OPTIONS.map((option, index) => (
                        <PaymentMethodOption
                            key={option.id}
                            icon={option.icon}
                            title={option.title}
                            subtitle={option.subtitle}
                            isSelected={selectedId === option.id}
                            onPress={() => handleSelect(option.id)}
                        />
                    ))}
                    {/* <ButtonComp
                            title="Add New Card"
                            onPress={handleAddCard}
                            variant="outline"
                            leftIcon={plusIcon}
                            style={styles.addCardButton}
                            textStyle={{ color: Colors.gray300, fontSize: moderateScale(16), fontFamily: fontFamily.regular }}
                        /> */}
                    <Pressable
                        onPress={handleAddCard}
                        style={styles.addCardButton}
                    >
                        <MyIcons name="plus" size={moderateScale(20)} />
                        <TextComp text="Add New Card" style={styles.addCardButtonText} />
                    </Pressable>
                </ScrollView>
            </View>
        </WrapperContainer>
    );
};

export default React.memo(PaymentMethod);
