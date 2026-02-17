import { Colors } from '@/styles/colors';
import fontFamily from '@/styles/fontFamily';
import { height, moderateScale, width } from '@/styles/scaling';
import { StyleSheet, I18nManager } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    imageContainer: {
        height: height * 0.55,
        width: width,
        backgroundColor: Colors.background,
    },
    bgImage: {
        width: '100%',
        height: '100%',
    },
    skipButton: {
        position: 'absolute',
        top: moderateScale(40),
        right: moderateScale(20),
        zIndex: 1,
    },
    skipRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: moderateScale(4),
    },
    skipText: {
        fontSize: moderateScale(16),
        fontFamily: fontFamily.medium,
        color: Colors.text,
    },
    contentContainer: {
        flex: 1,
        paddingHorizontal: moderateScale(24),
        paddingTop: moderateScale(20),
        backgroundColor: Colors.background,
        position: 'relative',
    },
    paginationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: moderateScale(8),
        marginBottom: moderateScale(20),
    },
    dot: {
        height: moderateScale(8),
        width: moderateScale(8),
        borderRadius: moderateScale(4),
        backgroundColor: Colors.gray200,
    },
    activeDot: {
        width: moderateScale(20),
        backgroundColor: Colors.brandPurple,
    },
    title: {
        fontSize: moderateScale(32),
        fontFamily: fontFamily.bold,
        color: Colors.text,
        marginBottom: moderateScale(16),
        textAlign: I18nManager.isRTL ? 'right' : 'left',
    },
    description: {
        fontSize: moderateScale(16),
        fontFamily: fontFamily.regular,
        color: Colors.textSecondary,
        lineHeight: moderateScale(24),
        marginBottom: moderateScale(40),
        textAlign: I18nManager.isRTL ? 'right' : 'left',
    },
    footer: {
        paddingHorizontal: moderateScale(24),
        paddingBottom: moderateScale(40),
        backgroundColor: Colors.background,
    },
    getStartedButton: {
        backgroundColor: Colors.brandPurple,
        height: moderateScale(56),
        borderRadius: moderateScale(28),
    },
    getStartedButtonText: {
        fontSize: moderateScale(18),
        fontFamily: fontFamily.bold,
        color: Colors.white,
    },
});

export default styles;