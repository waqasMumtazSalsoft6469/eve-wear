import { RootState } from '@/redux/store';
import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { StatusBar, StyleSheet, ViewStyle } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { SafeAreaView, SafeAreaViewProps } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';

interface WrapperContainerProps extends SafeAreaViewProps {
    children: React.ReactNode;
    style?: ViewStyle;
}

const WrapperContainer: React.FC<WrapperContainerProps> = ({
    children,
    style,
    ...safeAreaProps
}) => {
    // Animation shared value for borderRadius
    const borderRadius = useSharedValue(0);

    const token = useSelector((state: RootState) => state.auth);
    console.log("auth_token", token);
    useFocusEffect(
        useCallback(() => {
            borderRadius.value = 0;
            borderRadius.value = withSpring(20, {
                damping: 15,
                stiffness: 100,
            });

            return () => {

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
            style={[{ backgroundColor: token ? "#FAFAFA" : "#000" }, styles.container, style]}
            {...safeAreaProps}
        >
            <StatusBar barStyle={token ? "dark-content" : "light-content"} backgroundColor={token ? "#FAFAFA" : "#000"} />
            <Animated.View style={[{ flex: 1, overflow: 'hidden', backgroundColor: token ? "#FAFAFA" : "#000" }, animatedStyle]}>
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