import { Colors } from '@/styles/colors';
import fontFamily from '@/styles/fontFamily';
import { height, moderateScale, width } from '@/styles/scaling';
import { StyleSheet, I18nManager } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bgImage: {
        flex: 1,
        width: width,
        height: height,
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        width: width * 0.85,
        padding: moderateScale(24),
        borderRadius: moderateScale(20),
        shadowColor: '#515151ff',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 5,
        overflow: 'hidden',
    },
    title: {
        fontSize: moderateScale(32),
        fontFamily: fontFamily.bold,
        color: Colors.white,
        textAlign: I18nManager.isRTL ? 'right' : 'left',
        marginBottom: moderateScale(8),
    },
    subtitle: {
        fontSize: moderateScale(14),
        fontFamily: fontFamily.regular,
        color: Colors.white,
        textAlign: I18nManager.isRTL ? 'right' : 'left',
        marginBottom: moderateScale(30),
        opacity: 0.9,
    },
    inputContainer: {
        marginBottom: moderateScale(20),
    },
    footerRow: {
        alignItems: 'flex-end',
        marginBottom: moderateScale(25),
    },
   
    forgotPasswordText: {
        fontSize: moderateScale(12),
        fontFamily: fontFamily.medium,
        color: Colors.brandSalmon,
    },
    loginButton: {

    },
    loginButtonText: {
        fontSize: moderateScale(18),
        fontFamily: fontFamily.bold,
    },
    registerPromptRow: {
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        justifyContent: 'center',
        marginTop: moderateScale(25),
    },
    noAccountText: {
        fontSize: moderateScale(14),
        fontFamily: fontFamily.regular,
        color: Colors.white,
    },
    registerText: {
        fontSize: moderateScale(14),
        fontFamily: fontFamily.bold,
        color: Colors.brandSalmon,
        marginStart: moderateScale(4),
    },
});

export default styles;