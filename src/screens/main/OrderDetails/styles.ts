import { Colors } from '@/styles/colors';
import fontFamily from '@/styles/fontFamily';
import { moderateScale } from '@/styles/scaling';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    headerTitle: {
        color: Colors.brandPurple,
    },
    scroll: {
        flex: 1,
    },
    contentContainer: {
        paddingHorizontal: moderateScale(16),
        paddingBottom: moderateScale(30),
    },
    searchBar: {
        marginBottom: moderateScale(18),
    },
    shippingCard: {
        backgroundColor: Colors.surface,
        borderRadius: moderateScale(14),
        paddingHorizontal: moderateScale(14),
        paddingVertical: moderateScale(14),
        marginBottom: moderateScale(16),
        shadowColor: Colors.black,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 6,
        elevation: 2,
    },
    shippingTag: {
        alignSelf: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.brandSalmon,
        borderRadius: moderateScale(12),
        paddingHorizontal: moderateScale(8),
        paddingVertical: moderateScale(4),
        marginBottom: moderateScale(10),
        gap: moderateScale(4),
    },
    shippingTagText: {
        color: Colors.white,
        fontFamily: fontFamily.bold,
        fontSize: moderateScale(11),
    },
    shippingName: {
        fontFamily: fontFamily.bold,
        fontSize: moderateScale(24 / 1.6),
        color: Colors.gray600,
        marginBottom: moderateScale(4),
    },
    shippingAddress: {
        fontFamily: fontFamily.regular,
        fontSize: moderateScale(14),
        color: Colors.gray400,
        marginBottom: moderateScale(2),
    },
    shippingPhone: {
        fontFamily: fontFamily.regular,
        fontSize: moderateScale(14),
        color: Colors.gray400,
    },
    orderMetaSection: {
        marginTop: moderateScale(6),
    },
    rateReviewText: {
        color: Colors.orange,
        fontFamily: fontFamily.bold,
        fontSize: moderateScale(15),
        textDecorationLine: 'underline',
        marginBottom: moderateScale(12),
    },
    orderInfoCard: {
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: Colors.gray200,
        paddingVertical: moderateScale(14),
        marginBottom: moderateScale(14),
        position: 'relative',
    },
    orderInfoTopRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    orderIdText: {
        fontFamily: fontFamily.bold,
        fontSize: moderateScale(31 / 1.5),
        color: Colors.gray700,
        marginBottom: moderateScale(2),
    },
    placedOnText: {
        fontFamily: fontFamily.regular,
        fontSize: moderateScale(14),
        color: Colors.gray400,
    },
    menuButton: {
        width: moderateScale(20),
        alignItems: 'center',
        paddingTop: moderateScale(2),
    },
    menuDot: {
        width: moderateScale(5),
        height: moderateScale(5),
        borderRadius: moderateScale(3),
        backgroundColor: Colors.brandSalmon,
        marginVertical: moderateScale(1.5),
    },
    actionMenu: {
        position: 'absolute',
        right: moderateScale(2),
        top: moderateScale(40),
        backgroundColor: Colors.surface,
        borderRadius: moderateScale(8),
        paddingHorizontal: moderateScale(16),
        paddingVertical: moderateScale(8),
        shadowColor: Colors.black,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.12,
        shadowRadius: 8,
        elevation: 4,
        gap: moderateScale(6),
        zIndex: 20,
    },
    actionMenuText: {
        color: Colors.gray600,
        fontFamily: fontFamily.regular,
        fontSize: moderateScale(14),
    },
    priceSummaryCard: {
        paddingHorizontal: moderateScale(12),
        paddingTop: moderateScale(10),
        paddingBottom: moderateScale(8),
    },
    summaryRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: moderateScale(14),
    },
    summaryLabel: {
        color: Colors.gray400,
        fontFamily: fontFamily.regular,
        fontSize: moderateScale(17 / 1.2),
    },
    summaryValue: {
        color: Colors.gray400,
        fontFamily: fontFamily.regular,
        fontSize: moderateScale(17 / 1.2),
    },
    summaryDivider: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: Colors.gray200,
        marginVertical: moderateScale(2),
    },
    summaryNote: {
        marginTop: moderateScale(12),
        marginBottom: moderateScale(12),
        color: Colors.gray400,
        fontFamily: fontFamily.regular,
        fontSize: moderateScale(16 / 1.2),
    },
    totalRow: {
        marginBottom: 0,
    },
    totalLabel: {
        color: Colors.gray700,
        fontFamily: fontFamily.bold,
        fontSize: moderateScale(18 / 1.2),
    },
    totalValue: {
        color: Colors.gray700,
        fontFamily: fontFamily.bold,
        fontSize: moderateScale(18 / 1.2),
    },
});

export default styles;
