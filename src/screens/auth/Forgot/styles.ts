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
    content: {
        flex: 1,
        width: '100%',
    },
    titleSection: {
        marginBottom: moderateScale(30),
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
        fontFamily: fontFamily.medium,
        color: Colors.white,
        textAlign: I18nManager.isRTL ? 'right' : 'left',
        opacity: 0.9,
        marginBottom: moderateScale(10),
    },
    inputContainer: {
        marginBottom: moderateScale(20),
    },
    buttonSection: {
        marginTop: moderateScale(10),
    },
    forgotButton: {
        backgroundColor: Colors.brandPurple,
        borderColor: Colors.brandPurple,
        height: moderateScale(55),
        borderRadius: moderateScale(30),
    },
    forgotButtonText: {
        fontSize: moderateScale(18),
        fontFamily: fontFamily.bold,
    },
    backToLoginRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: moderateScale(25),
    },
    backToLoginText: {
        fontSize: moderateScale(14),
        fontFamily: fontFamily.medium,
        color: Colors.white,
        marginStart: moderateScale(8),
    },
});

export default styles;