import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    TextStyle,
    DimensionValue,
    View,
    I18nManager,
} from 'react-native';
import TextComp from './TextComp';
import { Colors } from '@/styles/colors';
import { moderateScale } from '@/styles/scaling';
import fontFamily from '@/styles/fontFamily';
import LinearGradient from 'react-native-linear-gradient';

interface ButtonCompProps {
    onPress: () => void;
    title: string;
    disabled?: boolean;
    style?: any;
    textStyle?: TextStyle;
    width?: DimensionValue;
    height?: DimensionValue;
    variant?: 'primary' | 'secondary';
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    iconSize?: number;
}

const ButtonComp: React.FC<ButtonCompProps> = ({
    onPress,
    title,
    disabled = false,
    style,
    textStyle,
    width = '100%',
    height, // Removed default here to check styles
    variant = 'primary',
    leftIcon,
    rightIcon,
    iconSize = moderateScale(20),
}) => {

    const effectiveHeight = height || moderateScale(50);

    const buttonStyles = [
        styles.touchable,
        { width },
        // Use minHeight to allow padding to expand button if content is larger, 
        // but default to fixed height for consistency
        style?.paddingVertical ? { minHeight: effectiveHeight } : { height: effectiveHeight },
        style,
        disabled && { opacity: 0.7 }
    ];

    const textStyles = [
        styles.text,
        variant === 'secondary' && styles.textSecondary,
        disabled && styles.textDisabled,
        textStyle,
    ];

    const iconContainerStyle = [
        styles.iconContainer,
        { width: iconSize, height: iconSize },
    ];

    let gradientColors = [Colors.tabPrimary, Colors.tabSecondary];

    if (disabled) {
        gradientColors = [Colors.gray200, Colors.gray200];
    }

    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={disabled}
            style={buttonStyles}
            activeOpacity={0.8}
        >
            <LinearGradient
                colors={gradientColors}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.gradient}
            >
                {leftIcon && (
                    <View style={iconContainerStyle}>
                        {leftIcon}
                    </View>
                )}
                <TextComp style={textStyles} text={title} />
                {rightIcon && (
                    <View style={iconContainerStyle}>
                        {rightIcon}
                    </View>
                )}
            </LinearGradient>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    touchable: {
        borderRadius: moderateScale(30),
        overflow: 'hidden',
    },
    gradient: {
        flex: 1,
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: moderateScale(16),
        gap: moderateScale(8),
    },
    text: {
        color: Colors.white,
        fontSize: moderateScale(16),
        fontFamily: fontFamily.medium,
        lineHeight: moderateScale(19),
        textAlign: 'center',
    },
    textSecondary: {
        color: Colors.white,
    },
    textDisabled: {
        color: Colors.gray400,
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default ButtonComp;
