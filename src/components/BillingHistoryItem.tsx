import ButtonComp from '@/components/ButtonComp';
import MyIcons from '@/components/MyIcons';
import TextComp from '@/components/TextComp';
import { Colors } from '@/styles/colors';
import fontFamily from '@/styles/fontFamily';
import { moderateScale } from '@/styles/scaling';
import React, { useCallback, useMemo } from 'react';
import { I18nManager, StyleSheet, View } from 'react-native';

export interface BillingHistoryItemProps {
    amount: string;
    date: string;
    onDownloadInvoice: () => void;
}

const BillingHistoryItem: React.FC<BillingHistoryItemProps> = ({
    amount,
    date,
    onDownloadInvoice,
}) => {
    const handlePress = useCallback(() => {
        onDownloadInvoice();
    }, [onDownloadInvoice]);

    const downloadIcon = useMemo(
        () => (
            <MyIcons
                name="search"
                size={moderateScale(18)}
                stroke={Colors.brandPurple}
                style={styles.downloadIcon}
            />
        ),
        []
    );

    return (
        <View style={styles.card}>
            <View style={styles.statusBadge}>
                <TextComp text="Paid" style={styles.statusText} />
            </View>
            <TextComp text={amount} style={styles.amount} />
            <TextComp text={date} style={styles.date} />
            <ButtonComp
                title="Download Invoice"
                onPress={handlePress}
                variant="outline"
                leftIcon={downloadIcon}
                style={styles.downloadButton}
                textStyle={styles.downloadText}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: Colors.white,
        borderRadius: moderateScale(12),
        padding: moderateScale(16),
        marginBottom: moderateScale(16),
        shadowColor: Colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 8,
        elevation: 3,
        overflow: 'hidden',
    },
    statusBadge: {
        position: 'absolute',
        top: moderateScale(12),
        [I18nManager.isRTL ? 'left' : 'right']: moderateScale(12),
        backgroundColor: Colors.success,
        paddingHorizontal: moderateScale(10),
        paddingVertical: moderateScale(4),
        borderRadius: moderateScale(12),
    },
    statusText: {
        fontSize: moderateScale(12),
        fontFamily: fontFamily.bold,
        color: Colors.white,
    },
    amount: {
        fontSize: moderateScale(24),
        fontFamily: fontFamily.bold,
        color: Colors.text,
        marginBottom: moderateScale(4),
    },
    date: {
        fontSize: moderateScale(14),
        fontFamily: fontFamily.regular,
        color: Colors.brandSalmon,
        marginBottom: moderateScale(12),
    },
    downloadButton: {
        alignSelf: 'flex-start',
        backgroundColor: Colors.transparent,
        borderWidth: 0,
        paddingVertical: moderateScale(4),
        paddingHorizontal: 0,
        minHeight: undefined,
        height: undefined,
    },
    downloadIcon: {
        marginEnd: moderateScale(6),
    },
    downloadText: {
        fontSize: moderateScale(14),
        fontFamily: fontFamily.regular,
        color: Colors.brandPurple,
        textDecorationLine: 'underline',
    },
});

export default React.memo(BillingHistoryItem);
