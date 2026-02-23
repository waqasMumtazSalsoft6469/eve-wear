import { Colors } from '@/styles/colors';
import fontFamily from '@/styles/fontFamily';
import { moderateScale } from '@/styles/scaling';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.gray100,
    },
    header: {
        backgroundColor: Colors.gray100,
        paddingTop: moderateScale(4),
        paddingBottom: moderateScale(2),
    },
    scrollContent: {
        paddingBottom: moderateScale(120),
    },
    heroSection: {
        paddingHorizontal: moderateScale(16),
        paddingTop: moderateScale(8),
    },
    imageRail: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    carouselViewport: {
        flex: 1,
    },
    carouselItem: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    arrowButton: {
        width: moderateScale(28),
        alignItems: 'center',
    },
    arrowText: {
        fontSize: moderateScale(30),
        color: Colors.gray300,
        lineHeight: moderateScale(30),
    },
    productImagesWrap: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        gap: moderateScale(8),
        minHeight: moderateScale(180),
    },
    mainProductImage: {
        width: moderateScale(150),
        height: moderateScale(190),
    },
    sideProductImage: {
        width: moderateScale(96),
        height: moderateScale(150),
    },
    detailsCard: {
        marginTop: moderateScale(4),
        marginHorizontal: moderateScale(6),
        backgroundColor: Colors.gray100,
        borderTopLeftRadius: moderateScale(24),
        borderTopRightRadius: moderateScale(24),
        borderBottomLeftRadius: moderateScale(20),
        borderBottomRightRadius: moderateScale(20),
        paddingHorizontal: moderateScale(18),
        paddingTop: moderateScale(18),
        paddingBottom: moderateScale(16),
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.07,
        shadowRadius: 6,
        elevation: 3,
    },
    titleRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        marginBottom: moderateScale(4),
    },
    productTitle: {
        flex: 1,
        fontSize: moderateScale(34 / 2),
        lineHeight: moderateScale(22),
        color: Colors.text,
        fontFamily: fontFamily.bold,
        marginRight: moderateScale(10),
    },
    actionIconsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: moderateScale(8),
    },
    actionIconHeart: {
        fontSize: moderateScale(24),
        color: Colors.brandSalmon,
        lineHeight: moderateScale(24),
    },
    actionIconShare: {
        fontSize: moderateScale(20),
        color: Colors.brandSalmon,
        lineHeight: moderateScale(20),
    },
    starsText: {
        fontSize: moderateScale(16),
        color: Colors.warning,
        letterSpacing: 1,
        marginBottom: moderateScale(4),
    },
    priceText: {
        fontSize: moderateScale(40 / 2),
        color: Colors.gray700,
        fontFamily: fontFamily.bold,
        marginBottom: moderateScale(16),
    },
    sectionRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: moderateScale(14),
    },
    sectionTitle: {
        fontSize: moderateScale(17),
        color: Colors.gray600,
        fontFamily: fontFamily.bold,
        marginBottom: moderateScale(2),
    },
    quantityValueText: {
        fontSize: moderateScale(16),
        color: Colors.gray500,
        fontFamily: fontFamily.regular,
    },
    qtyStepper: {
        minWidth: moderateScale(108),
        height: moderateScale(36),
        borderRadius: moderateScale(18),
        borderWidth: 1,
        borderColor: Colors.tabActive,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: moderateScale(10),
    },
    qtyButton: {
        width: moderateScale(18),
        alignItems: 'center',
    },
    qtyButtonText: {
        fontSize: moderateScale(20),
        color: Colors.brandPurple,
        lineHeight: moderateScale(20),
    },
    qtyText: {
        fontSize: moderateScale(16),
        color: Colors.brandPurple,
        fontFamily: fontFamily.bold,
    },
    descriptionCard: {
        marginTop: moderateScale(4),
        backgroundColor: Colors.white,
        borderRadius: moderateScale(10),
        padding: moderateScale(12),
    },
    descriptionText: {
        fontSize: moderateScale(14),
        color: Colors.gray400,
        fontFamily: fontFamily.regular,
        textTransform: 'capitalize',
    },
    reviewsHeaderRow: {
        marginTop: moderateScale(20),
        marginBottom: moderateScale(10),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    reviewsTitle: {
        fontSize: moderateScale(18),
        color: Colors.gray600,
        fontFamily: fontFamily.bold,
    },
    viewAllText: {
        fontSize: moderateScale(14),
        color: Colors.brandSalmon,
        fontFamily: fontFamily.bold,
    },
    reviewCard: {
        flexDirection: 'row',
        backgroundColor: Colors.gray50,
        borderRadius: moderateScale(10),
        padding: moderateScale(10),
        marginBottom: moderateScale(10),
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.06,
        shadowRadius: 4,
        elevation: 2,
    },
    reviewerImage: {
        width: moderateScale(44),
        height: moderateScale(44),
        borderRadius: moderateScale(22),
        marginRight: moderateScale(10),
    },
    reviewContent: {
        flex: 1,
    },
    reviewTopRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: moderateScale(4),
    },
    reviewerName: {
        fontSize: moderateScale(14),
        color: Colors.gray700,
        fontFamily: fontFamily.bold,
    },
    reviewDaysText: {
        fontSize: moderateScale(12),
        color: Colors.gray300,
        fontFamily: fontFamily.regular,
    },
    reviewStars: {
        fontSize: moderateScale(14),
        color: Colors.warning,
        letterSpacing: 1,
    },
    reviewComment: {
        fontSize: moderateScale(13),
        color: Colors.gray500,
        fontFamily: fontFamily.regular,
        lineHeight: moderateScale(20),
    },
    bottomButtonWrap: {
        position: 'absolute',
        left: moderateScale(16),
        right: moderateScale(16),
        bottom: moderateScale(16),
    },
    addToCartButton: {
        borderRadius: moderateScale(26),
    },
    shareSheetRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        paddingTop: moderateScale(4),
        paddingBottom: moderateScale(8),
    },
    shareIconButton: {
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: moderateScale(110),
    },
    sharePlatformText: {
        marginTop: moderateScale(10),
        fontSize: moderateScale(22 / 2),
        fontFamily: fontFamily.bold,
        color: Colors.gray600,
    },
});

export default styles;
