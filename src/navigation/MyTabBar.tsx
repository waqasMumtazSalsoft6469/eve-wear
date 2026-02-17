//import liraries
import ModalComp from '@/components/ModalComp';
import MyIcons from '@/components/MyIcons';
import TextComp from '@/components/TextComp';
import { useTheme } from '@/context/ThemeContext';
import useIsRTL from '@/hooks/useIsRTL';
import { Colors, commonColors, ThemeType } from '@/styles/colors';
import { moderateScale } from '@/styles/scaling';
import React, { useMemo } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'react-native-linear-gradient';


// create a component
const MyTabBar = ({ state, descriptors, navigation }) => {
    const isRTL = useIsRTL();
    const { theme } = useTheme();
    const styles = useRTLStyles(isRTL, theme);
    const colors = Colors[theme];
    return (
        <LinearGradient
            colors={[colors.tabPrimary, colors.tabSecondary, colors.tabPrimary]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.gradientContainer}
        >
            <View style={styles.container}>
                {state?.routes.map((route: any, index: any) => {
                    const { options } = descriptors[route.key];
                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event = navigation.emit({ type: 'tabPress', target: route.key, canPreventDefault: true });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name);
                        }
                    };

                    const onLongPress = () => {
                        navigation.emit({ type: 'tabLongPress', target: route.key });
                    };

                    return (
                        <TouchableOpacity
                            key={index}
                            accessibilityRole="button"
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            onLongPress={onLongPress}
                            style={[styles.subContainer, isFocused && styles.focused]}
                        >
                            <MyIcons name={route?.name === "Home" ? "tabHome" : route?.name === "CycleOverview" ? "tabGallery" : route?.name === "ChatAi" ? "tabAi" : route?.name === "Shop" ? "tabBag" : "tabPlus"} size={moderateScale(24)} />
                        </TouchableOpacity>
                    );
                })}
            </View>
        </LinearGradient>
    );
};

const useRTLStyles = (isRTL: boolean, theme: ThemeType) => {
    const colors = Colors[theme];
    return useMemo(() => StyleSheet.create({
        container: {
            flexDirection: isRTL ? 'row-reverse' : 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: moderateScale(30),
            minHeight: moderateScale(76),
        },
        subContainer: {
            alignItems: 'center',
            justifyContent: 'center',
            height: moderateScale(56),
            width: moderateScale(56),
            borderRadius: moderateScale(28),

        },
        focused: {
            backgroundColor: colors.tabActive,
        },
        gradientContainer: {
            borderRadius: moderateScale(20),
        }
    }), [isRTL, theme]);
};

//make this component available to the app
export default React.memo(MyTabBar);
