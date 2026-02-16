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
        scrollContainer: {
            flexGrow: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: moderateScale(40),
        },
        card: {
            width: width * 0.9,
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
        signupButton: {
            backgroundColor: commonColors.brandPurple,
            borderColor: commonColors.brandPurple,
            height: moderateScale(55),
            borderRadius: moderateScale(30),
            marginTop: moderateScale(10),
        },
        signupButtonText: {
            fontSize: moderateScale(18),
            fontFamily: fontFamily.bold,
        },
        loginPromptRow: {
            flexDirection: isRTL ? 'row-reverse' : 'row',
            justifyContent: 'center',
            marginTop: moderateScale(25),
        },
        alreadyHaveAccountText: {
            fontSize: moderateScale(14),
            fontFamily: fontFamily.regular,
            color: commonColors.white,
        },
        loginText: {
            fontSize: moderateScale(14),
            fontFamily: fontFamily.bold,
            color: commonColors.brandSalmon,
            marginStart: moderateScale(4),
        },
    }), [isRTL, theme]);
};

export default useRTLStyles;
