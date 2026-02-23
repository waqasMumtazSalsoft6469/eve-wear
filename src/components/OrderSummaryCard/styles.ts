import { Colors } from '@/styles/colors';
import fontFamily from '@/styles/fontFamily';
import { moderateScale } from '@/styles/scaling';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    summaryCard: {
        marginTop: moderateScale(10),
        backgroundColor: Colors.surface,
        borderRadius: moderateScale(16),
        paddingHorizontal: moderateScale(16),
        paddingVertical: moderateScale(16),
        marginBottom: moderateScale(8),
    },
    summaryTitle: {
        fontSize: moderateScale(17),
        color: Colors.gray700,
        fontFamily: fontFamily.bold,
        marginBottom: moderateScale(14),
    },
    summaryRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: moderateScale(10),
    },
    summaryLabel: {
        fontSize: moderateScale(16),
        color: Colors.gray400,
        fontFamily: fontFamily.regular,
    },
    summaryValue: {
        fontSize: moderateScale(16),
        color: Colors.gray400,
        fontFamily: fontFamily.regular,
    },
    summaryTotalRow: {
        marginTop: moderateScale(2),
        marginBottom: 0,
    },
    summaryTotalLabel: {
        fontSize: moderateScale(18),
        color: Colors.gray700,
        fontFamily: fontFamily.bold,
    },
    summaryTotalValue: {
        fontSize: moderateScale(18),
        color: Colors.gray700,
        fontFamily: fontFamily.bold,
    },
    promoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: moderateScale(10),
        marginTop: moderateScale(4),
        marginBottom: moderateScale(12),
    },
    promoInput: {
        flex: 1,
        height: moderateScale(44),
        borderRadius: moderateScale(22),
        backgroundColor: Colors.gray100,
        color: Colors.gray700,
        fontSize: moderateScale(15),
        paddingHorizontal: moderateScale(16),
        fontFamily: fontFamily.regular,
    },
    applyButtonWrap: {
        width: moderateScale(116),
        height: moderateScale(44),
        borderRadius: moderateScale(22),
        overflow: 'hidden',
    },
    applyButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    applyButtonText: {
        fontSize: moderateScale(25 / 2),
        color: Colors.white,
        fontFamily: fontFamily.bold,
    },
});

export default styles;
