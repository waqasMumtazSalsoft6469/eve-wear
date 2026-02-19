import React from 'react';
import {
    StyleSheet,
    TextInput,
    TextInputProps,
    ViewStyle,
    View,
    TextStyle,
    TouchableOpacity,
    I18nManager
} from 'react-native';
import fontFamily from '@/styles/fontFamily';
import { moderateScale } from '@/styles/scaling';
import { Colors } from '@/styles/colors';
import TextComp from './TextComp';

interface TextInputCompProps extends TextInputProps {
    containerStyle?: ViewStyle;
    inputStyle?: TextStyle;
    error?: boolean | string;
    touched?: boolean;
    placeholder?: string;
    rightIcon?: React.ReactNode;
    onRightIconPress?: () => void;
    underline?: boolean;
    label?: string;
    required?: boolean;
    labelStyle?: TextStyle;
    placeholderTextColor?: string;
    inputContainerStyle?: ViewStyle;
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
    labelStyle,
    placeholderTextColor,
    inputContainerStyle,
    ...props
}) => {
    const resolvedPlaceholderColor = placeholderTextColor ?? Colors.inputPlaceholder;

    return (
        <View style={containerStyle}>
            {label && (
                <View style={styles.labelContainer}>
                    <TextComp text={label} style={[styles.label, labelStyle]} />
                    {required && <TextComp text="*" style={styles.requiredStar} />}
                </View>
            )}
            <View
                style={[
                    styles.container,
                    underline && styles.underlineContainer,
                    error && touched && styles.errorContainer,
                    inputContainerStyle
                ]}
            >
                <TextInput
                    style={[
                        styles.input,
                        underline && styles.underlineInput,
                        error && touched && styles.errorInput,
                        inputStyle
                    ]}
                    placeholderTextColor={resolvedPlaceholderColor}
                    placeholder={placeholder}
                    textAlign={I18nManager.isRTL ? 'right' : 'left'}
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
                <TextComp text={`${placeholder} is required`} style={styles.errorText} />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.inputBackground,
        borderWidth: 1,
        borderColor: Colors.inputBorder,
        borderRadius: moderateScale(7),
        padding: moderateScale(14),
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        alignItems: 'center',
    },
    underlineContainer: {
        backgroundColor: 'transparent',
        borderWidth: 0,
        borderBottomWidth: 1,
        borderColor: Colors.white,
        borderRadius: 0,
        paddingHorizontal: 0,
    },
    input: {
        flex: 1,
        fontFamily: fontFamily.regular,
        fontSize: moderateScale(14),
        color: Colors.text,
        padding: 0,
        margin: 0,
    },
    underlineInput: {
        color: Colors.white,
    },
    labelContainer: {
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        marginBottom: moderateScale(8),
    },
    label: {
        fontSize: moderateScale(14),
        fontFamily: fontFamily.medium,
        color: Colors.white,
    },
    requiredStar: {
        color: Colors.error,
        marginStart: moderateScale(4),
    },
    errorContainer: {
        borderColor: Colors.error,
    },
    errorInput: {
        color: Colors.error,
    },
    errorText: {
        color: Colors.error,
        fontSize: moderateScale(12),
        fontFamily: fontFamily.regular,
        marginTop: moderateScale(4),
        textAlign: I18nManager.isRTL ? 'right' : 'left',
    },
});

export default React.memo(TextInputComp);
