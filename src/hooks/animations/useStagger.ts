import {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    withDelay,
} from 'react-native-reanimated';

export const useStagger = (index: number, delayStep = 70) => {
    const opacity = useSharedValue(0);
    const translateY = useSharedValue(15);

    opacity.value = withDelay(
        index * delayStep,
        withTiming(1, { duration: 300 })
    );

    translateY.value = withDelay(
        index * delayStep,
        withTiming(0, { duration: 300 })
    );

    const animatedStyle = useAnimatedStyle(() => ({
        opacity: opacity.value,
        transform: [{ translateY: translateY.value }],
    }));

    return { animatedStyle };
};
