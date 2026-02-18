import { Colors } from '@/styles/colors';
import fontFamily from '@/styles/fontFamily';
import { moderateScale } from '@/styles/scaling';
import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import TextComp from './TextComp';
import { OrderStatus } from '@/models/Order';

const STATUS_COLORS: Record<OrderStatus, string> = {
    Pending: Colors.brandSalmon,
    'In-Process': '#0D9488',
    Completed: Colors.success,
};

interface StatusBadgeCompProps {
    status: OrderStatus;
    /** Override label; defaults to status value. */
    label?: string;
    style?: ViewStyle;
}

const StatusBadgeComp: React.FC<StatusBadgeCompProps> = ({
    status,
    label = status,
    style,
}) => {
    const backgroundColor = STATUS_COLORS[status] ?? Colors.brandSalmon;

    return (
        <View style={[styles.badge, { backgroundColor }, style]}>
            <TextComp text={label} style={styles.badgeText} />
        </View>
    );
};

const styles = StyleSheet.create({
    badge: {
        alignSelf: 'flex-start',
        paddingHorizontal: moderateScale(10),
        paddingVertical: moderateScale(4),
        borderRadius: moderateScale(12),
    },
    badgeText: {
        fontSize: moderateScale(11),
        fontFamily: fontFamily.bold,
        color: Colors.white,
    },
});

export default StatusBadgeComp;
