import { Colors } from '@/styles/colors';
import fontFamily from '@/styles/fontFamily';
import { moderateScale, width } from '@/styles/scaling';
import { StyleSheet } from 'react-native';

const CARD_GAP = moderateScale(12);
const HORIZONTAL_PADDING = moderateScale(16);
const CARD_WIDTH = (width - HORIZONTAL_PADDING * 2 - CARD_GAP) / 2;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    content: {
        flex: 1,
        paddingHorizontal: HORIZONTAL_PADDING,
        paddingVertical: moderateScale(12),
    },
    row: {
        justifyContent: 'space-between',
        marginBottom: CARD_GAP,
    },
    listContent: {
        paddingBottom: moderateScale(20),
    },
    productCard: {
        width: CARD_WIDTH,
        backgroundColor: Colors.surface,
        borderRadius: moderateScale(16),
        padding: moderateScale(10),
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 6,
        elevation: 3,
    },
    productImage: {
        width: '100%',
        height: CARD_WIDTH * 0.78,
    },
    productInfo: {
        marginTop: moderateScale(8),
    },
    productName: {
        fontSize: moderateScale(13),
        fontFamily: fontFamily.bold,
        color: Colors.text,
        minHeight: moderateScale(32),
    },
    productPrice: {
        marginTop: moderateScale(4),
        fontSize: moderateScale(12),
        fontFamily: fontFamily.regular,
        color: Colors.brandPurple,
    },
    emptyWrap: {
        marginTop: moderateScale(28),
        alignItems: 'center',
    },
    emptyText: {
        fontSize: moderateScale(14),
        fontFamily: fontFamily.regular,
        color: Colors.textSecondary,
    },
    sortRow: {
        minHeight: moderateScale(50),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    sortLabel: {
        fontSize: moderateScale(16),
        fontFamily: fontFamily.regular,
        color: Colors.gray400,
    },
    sortCheckWrap: {
        width: moderateScale(20),
        height: moderateScale(20),
        borderRadius: moderateScale(10),
        backgroundColor: Colors.brandSalmon,
        alignItems: 'center',
        justifyContent: 'center',
    },
    sortCheckText: {
        color: Colors.white,
        fontSize: moderateScale(12),
        fontFamily: fontFamily.bold,
    },
    sortDivider: {
        height: 1,
        backgroundColor: Colors.gray100,
    },
});

export default styles;
