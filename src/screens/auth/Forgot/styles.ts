import { Colors, commonColors, ThemeType } from '@/styles/colors';
import fontFamily from '@/styles/fontFamily';
import { height, moderateScale, width } from '@/styles/scaling';
import { StyleSheet } from 'react-native';
import { useMemo } from 'react';

const useRTLStyles = (isRTL: boolean, theme: ThemeType) => {
    const colors = Colors[theme];

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
            color: commonColors.white,
            textAlign: isRTL ? 'right' : 'left',
            marginBottom: moderateScale(8),
        },
        subtitle: {
            fontSize: moderateScale(14),
            fontFamily: fontFamily.medium,
            color: commonColors.white,
            textAlign: isRTL ? 'right' : 'left',
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
            backgroundColor: commonColors.brandPurple,
            borderColor: commonColors.brandPurple,
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
            color: commonColors.white,
            marginStart: moderateScale(8),
        },
    }), [isRTL, theme]); // Dependencies array includes all variables used in the styles
};

export default useRTLStyles; 