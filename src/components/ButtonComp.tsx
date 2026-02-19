import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    TextStyle,
    DimensionValue,
    View,
    I18nManager,
    ActivityIndicator,
    LayoutChangeEvent,
} from 'react-native';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    interpolate,
    Extrapolate,
} from 'react-native-reanimated';
import TextComp from './TextComp';
import { Colors } from '@/styles/colors';
import { moderateScale } from '@/styles/scaling';
import fontFamily from '@/styles/fontFamily';
import LinearGradient from 'react-native-linear-gradient';

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);

interface ButtonCompProps {
    onPress: () => void;
    title: string;
    disabled?: boolean;
    loading?: boolean;
    style?: any;
    textStyle?: TextStyle;
    width?: DimensionValue;
    height?: DimensionValue;
    variant?: 'primary' | 'secondary' | 'premium' | 'outline';
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    iconSize?: number;
}

const ButtonComp: React.FC<ButtonCompProps> = ({
    onPress,
    title,
    disabled = false,
    loading = false,
    style,
    textStyle,
    width = '100%',
    height,
    variant = 'primary',
    leftIcon,
    rightIcon,
    iconSize = moderateScale(20),
}) => {
    const [measuredWidth, setMeasuredWidth] = useState<number | null>(null);
    const loadingProgress = useSharedValue(0);

    const effectiveHeight = typeof height === 'number' ? height : moderateScale(50);
    const flattenedStyle = StyleSheet.flatten(style);
    const initialBorderRadius = flattenedStyle?.borderRadius ?? moderateScale(30);

    useEffect(() => {
        loadingProgress.value = withTiming(loading ? 1 : 0, { duration: 300 });
    }, [loading, loadingProgress]);

    const handleLayout = (event: LayoutChangeEvent) => {
        // Only capture width when not loading to get the "true" expanded width
        if (!loading && measuredWidth === null) {
            setMeasuredWidth(event.nativeEvent.layout.width);
        }
    };

    const animatedButtonStyle = useAnimatedStyle(() => {
        // If we haven't measured the width yet, we can't animate it properly
        if (measuredWidth === null) return {};

        const currentWidth = interpolate(
            loadingProgress.value,
            [0, 1],
            [measuredWidth, effectiveHeight],
            Extrapolate.CLAMP
        );

        const currentBorderRadius = interpolate(
            loadingProgress.value,
            [0, 1],
            [initialBorderRadius, effectiveHeight / 2],
            Extrapolate.CLAMP
        );

        return {
            width: currentWidth,
            borderRadius: currentBorderRadius,
        };
    });

    const contentStyle = useAnimatedStyle(() => ({
        opacity: interpolate(loadingProgress.value, [0, 0.5], [1, 0], Extrapolate.CLAMP),
        transform: [
            { scale: interpolate(loadingProgress.value, [0, 1], [1, 0.8], Extrapolate.CLAMP) }
        ],
    }));

    const loaderStyle = useAnimatedStyle(() => ({
        opacity: interpolate(loadingProgress.value, [0.5, 1], [0, 1], Extrapolate.CLAMP),
        transform: [
            { scale: interpolate(loadingProgress.value, [0, 1], [0.5, 1], Extrapolate.CLAMP) }
        ],
    }));

    const buttonStyles: any = [
        styles.touchable,
        { width },
        style?.paddingVertical ? { minHeight: effectiveHeight } : { height: effectiveHeight },
        style,
        (disabled || loading) && { opacity: 0.7 },
        measuredWidth !== null && animatedButtonStyle,
    ];

    const textStyles = [
        styles.text,
        variant === 'secondary' && styles.textSecondary,
        variant === 'outline' && styles.textOutline,
        disabled && styles.textDisabled,
        textStyle,
    ];

    const iconContainerStyle = [
        styles.iconContainer,
        { width: iconSize, height: iconSize },
    ];

    const loaderColor = (StyleSheet.flatten(textStyles) as TextStyle).color || Colors.white;

    const isGradient = variant === 'primary';
    const isOutline = variant === 'outline';
    const gradientColors: string[] = disabled
        ? [Colors.gray200, Colors.gray200]
        : isGradient
          ? [...Colors.gradientPrimary]
          : [Colors.white, Colors.white];
    const solidBackgroundColor =
        variant === 'secondary'
            ? Colors.secondary
            : variant === 'premium'
              ? Colors.brandPurple
              : isOutline
                ? Colors.transparent
                : undefined;

    const buttonContent = (
        <>
            <Animated.View style={[styles.contentContainer, contentStyle]}>
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
            </Animated.View>
            <Animated.View
                style={[styles.loaderContainer, loaderStyle]}
                pointerEvents="none"
            >
                <ActivityIndicator color={loaderColor} size="small" />
            </Animated.View>
        </>
    );

    return (
        <AnimatedTouchableOpacity
            onPress={onPress}
            disabled={disabled || loading}
            style={buttonStyles}
            activeOpacity={0.8}
            onLayout={handleLayout}
        >
            {isGradient ? (
                <LinearGradient
                    colors={gradientColors}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.gradient}
                >
                    {buttonContent}
                </LinearGradient>
            ) : (
                <View
                    style={[
                        styles.gradient,
                        solidBackgroundColor != null && {
                            backgroundColor: disabled && !isOutline ? Colors.gray200 : solidBackgroundColor,
                        },
                        isOutline && styles.outlineInner,
                    ]}
                >
                    {buttonContent}
                </View>
            )}
        </AnimatedTouchableOpacity>
    );
};

const styles = StyleSheet.create({
    touchable: {
        borderRadius: moderateScale(30),
        overflow: 'hidden',
        alignSelf: 'center',
    },
    gradient: {
        flex: 1,
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: moderateScale(16),
    },
    contentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: moderateScale(8),
    },
    loaderContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: Colors.white,
        fontSize: moderateScale(16),
        fontFamily: fontFamily.bold,
        lineHeight: moderateScale(19),
        textAlign: 'center',
    },
    textSecondary: {
        color: Colors.white,
    },
    textOutline: {
        color: Colors.text,
    },
    textDisabled: {
        color: Colors.gray400,
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    outlineInner: {
        backgroundColor: Colors.transparent,
        borderWidth: 1,
        borderColor: Colors.inputBorder,
    },
});

export default ButtonComp;
