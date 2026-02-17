//import liraries
import MyIcons, { IconName } from '@/components/MyIcons';
import { Colors } from '@/styles/colors';
import { moderateScale } from '@/styles/scaling';
import React from 'react';
import { StyleSheet, TouchableOpacity, View, I18nManager } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
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
            return 'tabPlus';
        default:
            return 'tabBag';
    }
};


const MyTabBar = ({ state, descriptors, navigation }: any) => {

    return (
        <LinearGradient
            colors={[Colors.tabPrimary, Colors.tabSecondary]}
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

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: moderateScale(20),
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
        backgroundColor: Colors.tabActive,
    },
    gradientContainer: {
        borderTopLeftRadius: moderateScale(20),
        borderTopRightRadius: moderateScale(20),
        backgroundColor: Colors.background,
    }
});

//make this component available to the app
export default React.memo(MyTabBar);
