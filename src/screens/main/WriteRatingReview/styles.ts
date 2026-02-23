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
        paddingBottom: moderateScale(24),
    },
    sectionTitle: {
        fontFamily: fontFamily.bold,
        color: Colors.gray700,
        fontSize: moderateScale(16 / 1.1),
        marginBottom: moderateScale(10),
    },
    sectionHeading: {
        fontFamily: fontFamily.bold,
        color: Colors.gray700,
        fontSize: moderateScale(36 / 1.5),
        marginTop: moderateScale(10),
        marginBottom: moderateScale(8),
    },
    starRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: moderateScale(18),
    },
    starButton: {
        marginRight: moderateScale(6),
    },
    starText: {
        fontSize: moderateScale(34),
        color: Colors.gray200,
        fontFamily: fontFamily.bold,
    },
    starTextActive: {
        color: '#F3B300',
    },
    writeReviewLabel: {
        fontFamily: fontFamily.regular,
        color: Colors.gray700,
        fontSize: moderateScale(32 / 1.8),
        marginBottom: moderateScale(10),
    },
    reviewInput: {
        minHeight: moderateScale(190),
        borderRadius: moderateScale(14),
        backgroundColor: '#F8F8FA',
        paddingHorizontal: moderateScale(16),
        paddingTop: moderateScale(14),
        paddingBottom: moderateScale(14),
        color: Colors.gray700,
        fontFamily: fontFamily.regular,
        fontSize: moderateScale(15),
        shadowColor: Colors.black,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.04,
        shadowRadius: 4,
        elevation: 1,
    },
});

export default styles;
