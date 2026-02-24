import { Colors } from '@/styles/colors';
import fontFamily from '@/styles/fontFamily';
import { moderateScale, width } from '@/styles/scaling';
import { StyleSheet, I18nManager } from 'react-native';

const CARD_GAP = moderateScale(12);
const HORIZONTAL_PADDING = moderateScale(16);
const CARD_WIDTH = (width - HORIZONTAL_PADDING * 2 - CARD_GAP) / 2;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    header: {
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: HORIZONTAL_PADDING,
        paddingVertical: moderateScale(12),
    },
    headerTitle: {
        fontSize: moderateScale(20),
        fontFamily: fontFamily.bold,
        color: Colors.brandPurple,
    },
    notificationBadge: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: moderateScale(8),
        height: moderateScale(8),
        borderRadius: moderateScale(4),
        backgroundColor: Colors.secondary,
    },
    content: {
        flex: 1,
        paddingHorizontal: HORIZONTAL_PADDING,
    },
    row: {
        justifyContent: 'space-between',
        marginBottom: CARD_GAP,
    },
    listContent: {
        paddingBottom: moderateScale(20),
    },
    providerCard: {
        width: CARD_WIDTH,
        backgroundColor: Colors.surface,
        borderRadius: moderateScale(16),
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 8,
        elevation: 3,
    },
    providerImageContainer: {
        width: '100%',
        height: CARD_WIDTH * 0.85,
        overflow: 'hidden',
    },
    providerImage: {
        width: '100%',
        height: '100%',
    },
    imagePlaceholder: {
        backgroundColor: Colors.gray100,
    },
    cardContent: {
        padding: moderateScale(10),
    },
    providerName: {
        fontSize: moderateScale(13),
        fontFamily: fontFamily.bold,
        color: Colors.text,
        marginBottom: moderateScale(2),
    },
    infoRow: {
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        marginBottom: moderateScale(8),
    },
    specialty: {
        fontSize: moderateScale(11),
        fontFamily: fontFamily.regular,
        color: Colors.brandPurple,
    },
    ratingText: {
        fontSize: moderateScale(11),
        fontFamily: fontFamily.regular,
        color: Colors.gray400,
    },
    bookButton: {
        borderRadius: moderateScale(20),
        overflow: 'hidden',
    },
    bookButtonGradient: {
        paddingVertical: moderateScale(8),
        paddingHorizontal: moderateScale(12),
        alignItems: 'center',
        justifyContent: 'center',
    },
    bookButtonText: {
        color: Colors.white,
        fontSize: moderateScale(11),
        fontFamily: fontFamily.medium,
    },
});

export default styles;
