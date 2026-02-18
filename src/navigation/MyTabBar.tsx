// import liraries
import MyIcons, { IconName } from '@/components/MyIcons';
import { Colors } from '@/styles/colors';
import { moderateScale } from '@/styles/scaling';
import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View, LayoutChangeEvent } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import routes from '@/constants/routes';
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withTiming,
    Easing,
} from 'react-native-reanimated';

// create a component
const getTabIcon = (name: string): IconName => {
    switch (name) {
        case routes.tab.home:
            return 'tabHome';
        case routes.tab.cycleOverview:
            return 'tabGallery';
        case routes.tab.chatAi:
            return 'tabAi';
        case routes.tab.shop:
            return 'tabPlus';
        default:
            return 'tabBag';
    }
};

interface TabItemProps {
    route: any;
    isFocused: boolean;
    onPress: () => void;
    options: any;
    onLayout: (event: LayoutChangeEvent) => void;
}

const TabItem = React.memo(({ route, isFocused, onPress, options, onLayout }: TabItemProps) => {
    return (
        <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLayout={onLayout}
            style={styles.subContainer}
        >
            <MyIcons
                name={getTabIcon(route.name)}
                size={moderateScale(24)}
            />
        </TouchableOpacity>
    );
});

const MyTabBar = ({ state, descriptors, navigation }: any) => {
    const [offsets, setOffsets] = useState<Record<number, number>>({});
    const translateX = useSharedValue(0);

    // Dynamic animation on index change
    useEffect(() => {
        const targetX = offsets[state.index];
        if (targetX !== undefined) {
            translateX.value = withTiming(targetX, {
                duration: 300,
                easing: Easing.inOut(Easing.ease),
            });
        }
    }, [state.index, offsets, translateX]);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: translateX.value }],
    }));

    const handleTabLayout = (index: number) => (event: LayoutChangeEvent) => {
        const { x } = event.nativeEvent.layout;
        setOffsets(prev => {
            if (prev[index] === x) return prev;
            return { ...prev, [index]: x };
        });
    };

    return (
        <LinearGradient
            colors={[Colors.tabPrimary, Colors.tabSecondary]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.gradientContainer}
        >
            <View style={styles.container}>
                {/* Smooth Sliding Background Circle Indicator */}
                <Animated.View style={[styles.activeIndicator, animatedStyle]} />

                {state?.routes.map((route: any, index: number) => {
                    const { options } = descriptors[route.key];
                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate({ name: route.name, merge: true });
                        }
                    };

                    return (
                        <TabItem
                            key={route.key}
                            route={route}
                            isFocused={isFocused}
                            onPress={onPress}
                            options={options}
                            onLayout={handleTabLayout(index)}
                        />
                    );
                })}
            </View>
        </LinearGradient>
    );
};

const TAB_SIZE = moderateScale(56);
const CONTAINER_HEIGHT = moderateScale(76);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: moderateScale(20),
        minHeight: CONTAINER_HEIGHT,
    },
    subContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: TAB_SIZE,
        width: TAB_SIZE,
        borderRadius: TAB_SIZE / 2,
        zIndex: 1, // Keep icons above the indicator
    },
    activeIndicator: {
        position: 'absolute',
        width: TAB_SIZE,
        height: TAB_SIZE,
        borderRadius: TAB_SIZE / 2,
        backgroundColor: Colors.tabActive,
        top: (CONTAINER_HEIGHT - TAB_SIZE) / 2,
    },
    gradientContainer: {
        borderTopLeftRadius: moderateScale(20),
        borderTopRightRadius: moderateScale(20),
        backgroundColor: Colors.background,
    }
});

// make this component available to the app
export default React.memo(MyTabBar);
