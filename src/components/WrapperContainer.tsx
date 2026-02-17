import { useTheme } from '@/context/ThemeContext';
import { Colors } from '@/styles/colors';
import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { StatusBar, StyleSheet, ViewStyle } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { SafeAreaView, SafeAreaViewProps } from 'react-native-safe-area-context';

interface WrapperContainerProps extends SafeAreaViewProps {
    children: React.ReactNode;
    style?: ViewStyle;
}

const WrapperContainer: React.FC<WrapperContainerProps> = ({
    children,
    style,
    ...safeAreaProps
}) => {
    const { theme } = useTheme();
    const colors = Colors[theme ?? 'light'];

    // Animation shared value for borderRadius
    const borderRadius = useSharedValue(0);

    useFocusEffect(
        useCallback(() => {
            // Reset to 0 then animate to 20 whenever screen comes into focus
            borderRadius.value = 0;
            borderRadius.value = withSpring(20, {
                damping: 15,
                stiffness: 100,
            });

            return () => {
                // Optional: Reset when leaving if you want the "exit" feel, 
                // but usually better to let it stay at 20 until focus resets it.
            };
        }, [borderRadius])
    );

    const animatedStyle = useAnimatedStyle(() => {
        return {
            borderRadius: borderRadius.value,
        };
    });

    return (
        <SafeAreaView
            style={[styles.container, style, { backgroundColor: "#000" }]}
            {...safeAreaProps}
        >
            <StatusBar barStyle={"light-content"} backgroundColor={"#000"} />
            <Animated.View style={[{ flex: 1, overflow: 'hidden', backgroundColor: "#000" }, animatedStyle]}>
                {children}
            </Animated.View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default React.memo(WrapperContainer);