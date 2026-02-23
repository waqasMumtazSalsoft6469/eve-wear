import { Order } from '@/models/Order';
import { Colors } from '@/styles/colors';
import fontFamily from '@/styles/fontFamily';
import { moderateScale } from '@/styles/scaling';
import React from 'react';
import { I18nManager, StyleSheet, TouchableOpacity, View } from 'react-native';
import MyIcons from './MyIcons';
import OrderProductItemComp from './OrderProductItemComp';
import TextComp from './TextComp';

interface OrderCardCompProps {
    order: Order;
    onPress?: () => void;
}

const OrderCardComp: React.FC<OrderCardCompProps> = ({ order, onPress }) => {
    return (
        <View style={styles.orderBlock}>
            <TouchableOpacity
                style={styles.orderHeader}
                activeOpacity={0.7}
                onPress={onPress}
            >
                <View style={styles.orderHeaderLeft}>
                    <TextComp
                        text={`Order ID: ${order.orderId}`}
                        style={styles.orderId}
                    />
                    <TextComp
                        text={`Placed on: ${order.placedOn}`}
                        style={styles.orderDate}
                    />
                </View>
                <View style={styles.orderChevron}>
                    <MyIcons
                        name="rightArrow"
                        size={moderateScale(16)}
                    />
                </View>
            </TouchableOpacity>

            {order.items.map((item) => (
                <OrderProductItemComp key={item.id} item={item} />
            ))}

            <View style={styles.orderSummary}>
                <TextComp
                    text={`${order.items.length} Item(s), Total: US ${order.total}`}
                    style={[styles.orderSummaryText, styles.orderSummaryTotal]}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    orderBlock: {
        marginBottom: moderateScale(24),
    },
    orderHeader: {
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        marginBottom: moderateScale(12),
    },
    orderHeaderLeft: {
        flex: 1,
        gap: moderateScale(2),
    },
    orderId: {
        fontSize: moderateScale(15),
        fontFamily: fontFamily.bold,
        color: Colors.text,
        marginBottom: moderateScale(2),
    },
    orderDate: {
        fontSize: moderateScale(12),
        fontFamily: fontFamily.regular,
        color: Colors.gray400,
    },
    orderChevron: {
        padding: moderateScale(4),
    },
    orderSummary: {
        borderTopWidth: StyleSheet.hairlineWidth,
        borderTopColor: Colors.gray200,
        paddingTop: moderateScale(12),
        marginTop: moderateScale(4),
    },
    orderSummaryText: {
        fontSize: moderateScale(14),
        fontFamily: fontFamily.regular,
        color: Colors.textSecondary,
    },
    orderSummaryTotal: {
        fontFamily: fontFamily.bold,
        color: Colors.text,
    },
});

export default OrderCardComp;
