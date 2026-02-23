import TextComp from '@/components/TextComp';
import { Colors } from '@/styles/colors';
import React from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

interface OrderSummaryCardProps {
    title?: string;
    itemsCount: number;
    itemsTotalText: string;
    shippingText: string;
    totalText: string;
    totalLabel?: string;
    showPromoSection?: boolean;
    promoCode?: string;
    onPromoCodeChange?: (value: string) => void;
    onApplyPromo?: () => void;
}

const OrderSummaryCard: React.FC<OrderSummaryCardProps> = ({
    title = 'Order Summary',
    itemsCount,
    itemsTotalText,
    shippingText,
    totalText,
    totalLabel = 'Subtotal',
    showPromoSection = false,
    promoCode = '',
    onPromoCodeChange,
    onApplyPromo,
}) => {
    return (
        <View style={styles.summaryCard}>
            {title ? <TextComp text={title} style={styles.summaryTitle} /> : null}

            <View style={styles.summaryRow}>
                <TextComp text={`Items (${itemsCount})`} style={styles.summaryLabel} />
                <TextComp text={itemsTotalText} style={styles.summaryValue} />
            </View>

            <View style={styles.summaryRow}>
                <TextComp text="Shipping" style={styles.summaryLabel} />
                <TextComp text={shippingText} style={styles.summaryValue} />
            </View>

            {showPromoSection ? (
                <View style={styles.promoRow}>
                    <TextInput
                        value={promoCode}
                        onChangeText={onPromoCodeChange}
                        placeholder="Enter Promo Code"
                        placeholderTextColor={Colors.gray400}
                        style={styles.promoInput}
                    />

                    <TouchableOpacity activeOpacity={0.85} onPress={onApplyPromo} style={styles.applyButtonWrap}>
                        <LinearGradient
                            colors={[...Colors.gradientPrimary]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={styles.applyButton}
                        >
                            <TextComp text="Apply" style={styles.applyButtonText} />
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            ) : null}

            <View style={[styles.summaryRow, styles.summaryTotalRow]}>
                <TextComp text={totalLabel} style={styles.summaryTotalLabel} />
                <TextComp text={totalText} style={styles.summaryTotalValue} />
            </View>
        </View>
    );
};

export default OrderSummaryCard;
