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
    contentContainer: {
        paddingHorizontal: moderateScale(16),
        paddingBottom: moderateScale(20),
    },
    ratingSummaryCard: {
        borderRadius: moderateScale(14),
        paddingVertical: moderateScale(16),
        paddingHorizontal: moderateScale(16),
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: moderateScale(18),
    },
    scoreHexagon: {
        width: moderateScale(110),
        height: moderateScale(110),
        backgroundColor: '#F27E6B',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: moderateScale(14),
        transform: [{ rotate: '22deg' }],
        borderRadius: moderateScale(16),
    },
    scoreValue: {
        fontFamily: fontFamily.bold,
        color: Colors.white,
        fontSize: moderateScale(34),
        lineHeight: moderateScale(34),
        transform: [{ rotate: '-22deg' }],
    },
    scoreLabel: {
        fontFamily: fontFamily.regular,
        color: Colors.white,
        fontSize: moderateScale(22 / 1.4),
        marginTop: moderateScale(4),
        transform: [{ rotate: '-22deg' }],
    },
    summaryRight: {
        flex: 1,
    },
    starsText: {
        color: '#F3B300',
        fontSize: moderateScale(32 / 1.4),
        fontFamily: fontFamily.bold,
        marginBottom: moderateScale(4),
    },
    reviewsCountText: {
        color: Colors.white,
        fontSize: moderateScale(28 / 1.4),
        fontFamily: fontFamily.bold,
    },
    reviewCard: {
        backgroundColor: Colors.surface,
        borderRadius: moderateScale(14),
        padding: moderateScale(12),
        marginBottom: moderateScale(14),
        flexDirection: 'row',
        alignItems: 'flex-start',
        shadowColor: Colors.black,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.06,
        shadowRadius: 4,
        elevation: 2,
    },
    reviewerAvatar: {
        width: moderateScale(62),
        height: moderateScale(62),
        borderRadius: moderateScale(31),
        backgroundColor: Colors.gray100,
    },
    reviewBody: {
        flex: 1,
        marginLeft: moderateScale(10),
    },
    reviewHeaderRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: moderateScale(3),
    },
    reviewerName: {
        fontFamily: fontFamily.bold,
        color: Colors.gray600,
        fontSize: moderateScale(15),
        marginBottom: moderateScale(3),
    },
    reviewDate: {
        fontFamily: fontFamily.regular,
        color: Colors.gray300,
        fontSize: moderateScale(14),
    },
    reviewStarsText: {
        color: '#F3B300',
        fontSize: moderateScale(15),
        fontFamily: fontFamily.bold,
    },
    reviewDescription: {
        color: Colors.gray500,
        fontFamily: fontFamily.regular,
        fontSize: moderateScale(14),
        lineHeight: moderateScale(26 / 1.3),
    },
});

export default styles;
