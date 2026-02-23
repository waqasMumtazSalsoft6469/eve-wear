import { OrderItem } from '@/models/Order';
import { Colors } from '@/styles/colors';
import fontFamily from '@/styles/fontFamily';
import { moderateScale } from '@/styles/scaling';
import React from 'react';
import { Image, I18nManager, StyleSheet, View } from 'react-native';
import StatusBadgeComp from './StatusBadgeComp';
import TextComp from './TextComp';

interface OrderProductItemCompProps {
    item: OrderItem;
}

const OrderProductItemComp: React.FC<OrderProductItemCompProps> = ({ item }) => {
    return (
        <View style={styles.productCard}>
            <Image
                source={item.image as any}
                style={styles.productImage}
                resizeMode="cover"
            />
            <View style={[styles.productDetails, I18nManager.isRTL && styles.productDetailsRTL]}>
                <View>
                    <TextComp text={item.category} style={styles.categoryTag} />
                    <TextComp text={item.name} style={styles.productName} />
                    <TextComp text={item.price} style={styles.productPrice} />
                    <TextComp text={`Qty: ${item.qty}`} style={styles.productQty} />
                </View>
                <StatusBadgeComp status={item.status} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    productCard: {
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        backgroundColor: Colors.surface,
        borderRadius: moderateScale(12),
        padding: moderateScale(12),
        marginBottom: moderateScale(10),
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.06,
        shadowRadius: 4,
        elevation: 2,
    },
    productImage: {
        width: moderateScale(80),
        height: '100%',
        borderRadius: moderateScale(10),
        backgroundColor: Colors.gray100,
    },
    productDetails: {
        flex: 1,
        marginLeft: moderateScale(12),
        justifyContent: 'space-between',
        gap: moderateScale(3),
    },
    productDetailsRTL: {
        marginLeft: 0,
        marginRight: moderateScale(12),
    },
    categoryTag: {
        fontSize: moderateScale(11),
        fontFamily: fontFamily.regular,
        color: Colors.brandSalmon,
        marginBottom: moderateScale(2),
    },
    productName: {
        fontSize: moderateScale(14),
        fontFamily: fontFamily.bold,
        color: Colors.text,
        marginBottom: moderateScale(2),
    },
    productPrice: {
        fontSize: moderateScale(14),
        fontFamily: fontFamily.bold,
        color: Colors.text,
    },
    productQty: {
        fontSize: moderateScale(12),
        fontFamily: fontFamily.regular,
        color: Colors.gray400,
        marginTop: moderateScale(2),
    },
});

export default OrderProductItemComp;
