import { useEffect } from 'react';
import {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    Easing,
} from 'react-native-reanimated';

interface FadeSlideOptions {
    duration?: number;
    delay?: number;
    translateY?: number;
}

export const useFadeSlide = ({
    duration = 300,
    delay = 0,
    translateY = 20,
}: FadeSlideOptions = {}) => {
    const opacity = useSharedValue(0);
    const translate = useSharedValue(translateY);

    useEffect(() => {
        opacity.value = withTiming(1, {
            duration,
            easing: Easing.out(Easing.ease),
        });

        translate.value = withTiming(0, {
            duration,
            easing: Easing.out(Easing.ease),
        });
    }, []);

    const animatedStyle = useAnimatedStyle(() => ({
        opacity: opacity.value,
        transform: [{ translateY: translate.value }],
    }));

    return { animatedStyle };
};
