import { commonColors, ThemeType } from '@/styles/colors';
import fontFamily from '@/styles/fontFamily';
import { height, moderateScale, width } from '@/styles/scaling';
import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

const useRTLStyles = (isRTL: boolean, theme: ThemeType) => {
    return useMemo(() => StyleSheet.create({
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
            color: commonColors.white,
            textAlign: isRTL ? 'right' : 'left',
            marginBottom: moderateScale(8),
        },
        subtitle: {
            fontSize: moderateScale(14),
            fontFamily: fontFamily.medium,
            color: commonColors.white,
            textAlign: isRTL ? 'right' : 'left',
            marginBottom: moderateScale(30),
            opacity: 0.9,
        },
        inputContainer: {
            marginBottom: moderateScale(20),
        },
        footerRow: {
            flexDirection: isRTL ? 'row-reverse' : 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: moderateScale(10),
            marginBottom: moderateScale(25),
        },
        rememberMeRow: {
            flexDirection: isRTL ? 'row-reverse' : 'row',
            alignItems: 'center',
        },
        checkbox: {
            width: moderateScale(16),
            height: moderateScale(16),
            borderWidth: 1,
            borderColor: commonColors.white,
            borderRadius: moderateScale(3),
            marginEnd: moderateScale(8),
            backgroundColor: 'rgba(255,255,255,0.2)',
        },
        rememberMeText: {
            fontSize: moderateScale(12),
            fontFamily: fontFamily.regular,
            color: commonColors.white,
        },
        forgotPasswordText: {
            fontSize: moderateScale(12),
            fontFamily: fontFamily.medium,
            color: commonColors.brandSalmon,
        },
        loginButton: {
            backgroundColor: commonColors.brandPurple,
            borderColor: commonColors.brandPurple,
            height: moderateScale(55),
            borderRadius: moderateScale(30),
        },
        loginButtonText: {
            fontSize: moderateScale(18),
            fontFamily: fontFamily.bold,
        },
        registerPromptRow: {
            flexDirection: isRTL ? 'row-reverse' : 'row',
            justifyContent: 'center',
            marginTop: moderateScale(25),
        },
        noAccountText: {
            fontSize: moderateScale(14),
            fontFamily: fontFamily.regular,
            color: commonColors.white,
        },
        registerText: {
            fontSize: moderateScale(14),
            fontFamily: fontFamily.bold,
            color: commonColors.brandSalmon,
            marginStart: moderateScale(4),
        },
    }), [isRTL, theme]);
};

export default useRTLStyles;