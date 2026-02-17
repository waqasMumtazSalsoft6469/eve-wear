//import liraries
import ModalComp from '@/components/ModalComp';
import MyIcons, { IconName } from '@/components/MyIcons';
import TextComp from '@/components/TextComp';
import useIsRTL from '@/hooks/useIsRTL';
import { Colors } from '@/styles/colors';
import { moderateScale } from '@/styles/scaling';
import React, { useMemo } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'react-native-linear-gradient';
import routes from '@/constants/routes';


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
            return 'tabBag';
        default:
            return 'tabPlus';
    }
};


const MyTabBar = ({ state, descriptors, navigation }: any) => {
    const isRTL = useIsRTL();
    const styles = useRTLStyles(isRTL);
    const colors = Colors;
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
                            navigation.navigate({ name: route.name, merge: true });
                        }
                    };
                    return (
                        <TouchableOpacity
                            key={index}
                            accessibilityRole="button"
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            style={[styles.subContainer, isFocused && styles.focused]}
                        >
                            <MyIcons
                                name={getTabIcon(route.name)}
                                size={moderateScale(24)}
                            />
                        </TouchableOpacity>
                    );
                })}
            </View>
        </LinearGradient>
    );
};

const useRTLStyles = (isRTL: boolean) => {
    const colors = Colors;
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
    }), [isRTL, colors]);
};

//make this component available to the app
export default React.memo(MyTabBar);
