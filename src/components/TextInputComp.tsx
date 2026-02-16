import React from 'react';
import {
    StyleSheet,
    TextInput,
    TextInputProps,
    ViewStyle,
    View,
    TextStyle,
    TouchableOpacity,
} from 'react-native';
import fontFamily from '@/styles/fontFamily';
import { moderateScale } from '@/styles/scaling';
import { t } from 'i18next';
import useIsRTL from '@/hooks/useIsRTL';
import { useTheme } from '@/context/ThemeContext';
import { Colors, commonColors } from '@/styles/colors';
import { ThemeType } from '@/styles/colors';

interface TextInputCompProps extends TextInputProps {
    containerStyle?: ViewStyle;
    inputStyle?: TextStyle;
    error?: boolean;
    touched?: boolean;
    placeholder?: string;
    rightIcon?: React.ReactNode;
    onRightIconPress?: () => void;
    underline?: boolean;
    label?: string;
    required?: boolean;
}

const TextInputComp: React.FC<TextInputCompProps> = ({
    containerStyle,
    inputStyle,
    error,
    touched,
    placeholder = '',
    rightIcon,
    onRightIconPress,
    underline,
    label,
    required,
    ...props
}) => {

    const { theme } = useTheme();
    const isRTL = useIsRTL()
    const styles = useRTLStyles(isRTL, theme);
    const colors = Colors[theme ?? 'light'];

    return (
        <View style={containerStyle}>
            {label && (
                <View style={styles.labelContainer}>
                    <TextComp text={label} style={styles.label} />
                    {required && <TextComp text="*" style={styles.requiredStar} />}
                </View>
            )}
            <View
                style={[
                    styles.container,
                    underline && styles.underlineContainer,
                    error && touched && styles.errorContainer,
                ]}
            >
                <TextInput
                    style={[
                        styles.input,
                        underline && styles.underlineInput,
                        error && touched && styles.errorInput,
                        inputStyle
                    ]}
                    placeholderTextColor={colors.inputPlaceholder}
                    placeholder={t(placeholder)}
                    textAlign={isRTL ? 'right' : 'left'}
                    {...props}
                />
                {rightIcon && (
                    <TouchableOpacity
                        onPress={onRightIconPress}
                        disabled={!onRightIconPress}
                    >
                        {rightIcon}
                    </TouchableOpacity>
                )}
            </View>
            {error && touched && typeof error === 'string' && (
                <TextComp text={error} style={styles.errorText} />
            )}
            {error && touched && typeof error !== 'string' && placeholder && (
                <TextComp text={`${t(placeholder)} ${t('REQUIRED')}`} style={styles.errorText} />
            )}
        </View>
    );
};

import TextComp from './TextComp';

const useRTLStyles = (isRTL: boolean, theme?: ThemeType) => {
    const colors = Colors[theme ?? 'light'];

    return StyleSheet.create({
        container: {
            backgroundColor: colors.inputBackground,
            borderWidth: 1,
            borderColor: colors.inputBorder,
            borderRadius: moderateScale(7),
            padding: moderateScale(14),
            flexDirection: isRTL ? 'row-reverse' : 'row',
            alignItems: 'center',
        },
        underlineContainer: {
            backgroundColor: 'transparent',
            borderWidth: 0,
            borderBottomWidth: 1,
            borderColor: commonColors.white,
            borderRadius: 0,
            paddingHorizontal: 0,
        },
        input: {
            flex: 1,
            fontFamily: fontFamily.regular,
            fontSize: moderateScale(14),
            color: colors.text,
            padding: 0,
            margin: 0,
        },
        underlineInput: {
            color: commonColors.white,
        },
        labelContainer: {
            flexDirection: isRTL ? 'row-reverse' : 'row',
            marginBottom: moderateScale(8),
        },
        label: {
            fontSize: moderateScale(14),
            fontFamily: fontFamily.medium,
            color: commonColors.white,
        },
        requiredStar: {
            color: commonColors.error,
            marginStart: moderateScale(4),
        },
        errorContainer: {
            borderColor: commonColors.error,
        },
        errorInput: {
            color: commonColors.error,
        },
        errorText: {
            color: commonColors.error,
            fontSize: moderateScale(12),
            fontFamily: fontFamily.regular,
            marginTop: moderateScale(4),
            textAlign: isRTL ? 'right' : 'left',
        },
    });
};

export default React.memo(TextInputComp);
