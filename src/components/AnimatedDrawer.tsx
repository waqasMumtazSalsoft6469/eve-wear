import { family } from '@/assets/fonts';
import { localImages } from '@/assets/images';
import routes from '@/constants/routes';
import { useDrawer } from '@/context/DrawerContext';
import { clearDataAction } from '@/redux/actions/auth';
import { Colors } from '@/styles/colors';
import { height, moderateScale, width } from '@/styles/scaling';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { I18nManager, ImageBackground, StyleSheet, TouchableOpacity, View } from 'react-native';
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MyIcons, { IconName } from './MyIcons';
import TextComp from './TextComp';

const DRAWER_WIDTH = width * 0.50;

interface MenuItem {
    label: string;
    icon: IconName;
    screen: string;
}

const TAB_SCREENS: string[] = [
    routes.tab.home,
    routes.tab.cycleOverview,
    routes.tab.chatAi,
    routes.tab.shop,
    routes.tab.categories,
];

const MENU_ITEMS: MenuItem[] = [
    { label: 'Home', icon: 'drawerHome', screen: routes.tab.home },
    { label: 'My Orders', icon: 'drawerOrders', screen: routes.main.myOrders },
    { label: 'My Sessions', icon: 'drawerSessions', screen: routes.main.mySessions },
    { label: 'Subscription', icon: 'drawerSubscription', screen: routes.main.subscription },
    { label: 'Insurance', icon: 'drawerInsurance', screen: routes.main.insurance },
    { label: 'Contact Us', icon: 'drawerContact', screen: routes.main.contactUs },
    { label: 'Our Collaborators', icon: 'drawerCollaboration', screen: routes.main.ourCollaboration },
];

const DrawerContent: React.FC = () => {
    const insets = useSafeAreaInsets();
    const { close } = useDrawer();
    const navigation = useNavigation<any>();

    const handleNavigate = (screen: string) => {
        if (TAB_SCREENS.includes(screen)) {
            navigation.navigate(routes.navigator.main as never, {
                screen: routes.navigator.tab,
                params: { screen },
            } as never);
        } else {
            navigation.navigate(routes.navigator.main as never, { screen } as never);
        }
        setTimeout(() => close(), 0);
    };

    const handleLogout = () => {
        close();
        setTimeout(() => clearDataAction(), 400);
    };

    return (
        <View style={[styles.drawerContent]}>

            <View>
                <TouchableOpacity onPress={close} hitSlop={moderateScale(10)}>
                    <MyIcons name="tabCross" size={moderateScale(22)} />
                </TouchableOpacity>
                {/* Profile */}
                <View style={styles.profileSection}>
                    <TextComp text="Eve User" style={styles.profileName} />
                </View>

                {/* Menu */}
                <View style={styles.menuSection}>
                    {MENU_ITEMS.map((item, index) => (
                        <TouchableOpacity
                            key={index}
                            style={styles.menuItem}
                            onPress={() => handleNavigate(item.screen)}
                            activeOpacity={0.7}
                        >
                            <MyIcons name={item.icon} size={moderateScale(22)} />
                            <TextComp text={item.label} style={styles.menuLabel} />
                        </TouchableOpacity>
                    ))}
                </View>
            </View>

            {/* Logout */}
            <TouchableOpacity
                style={[styles.logoutButton, { marginBottom: insets.bottom + moderateScale(10) }]}
                onPress={handleLogout}
                activeOpacity={0.7}
            >
                <MyIcons name="drawerLogout" size={moderateScale(22)} />
                <TextComp text="Logout" style={styles.logoutLabel} />
            </TouchableOpacity>
        </View>
    );
};

interface AnimatedDrawerProps {
    children: React.ReactNode;
}

const AnimatedDrawer: React.FC<AnimatedDrawerProps> = ({ children }) => {
    const { isOpen, progress, close } = useDrawer();

    const mainAnimatedStyle = useAnimatedStyle(() => {
        const scale = interpolate(progress.value, [0, 1], [1, 0.75]);
        const translateX = interpolate(progress.value, [0, 1], [0, DRAWER_WIDTH]);
        const borderRadius = interpolate(progress.value, [0, 1], [0, 28]);

        return {
            transform: [{ translateX }, { scale }],
            borderRadius,
        };
    });

    const drawerAnimatedStyle = useAnimatedStyle(() => {
        const translateX = interpolate(progress.value, [0, 1], [-DRAWER_WIDTH * 0.4, 0]);
        const opacity = interpolate(progress.value, [0, 1], [0, 1]);

        return {
            transform: [{ translateX }],
            opacity,
        };
    });

    const overlayAnimatedStyle = useAnimatedStyle(() => ({
        opacity: interpolate(progress.value, [0, 1], [0, 0.4]),
    }));

    return (

        <ImageBackground source={localImages.drawerBg} style={styles.container}>
            <Animated.View style={[styles.drawerContainer, drawerAnimatedStyle]}>
                <DrawerContent />
            </Animated.View>

            <Animated.View style={[styles.mainContainer, mainAnimatedStyle]}>
                {children}
                <Animated.View
                    style={[StyleSheet.absoluteFill, styles.overlay, overlayAnimatedStyle]}
                    pointerEvents={isOpen ? 'auto' : 'none'}
                >
                    <TouchableOpacity
                        style={StyleSheet.absoluteFill}
                        activeOpacity={1}
                        onPress={close}
                    />
                </Animated.View>
            </Animated.View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    drawerContainer: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        width: DRAWER_WIDTH,
        paddingLeft: moderateScale(20),
        justifyContent: 'center',
        marginTop: height * 0.08
    },
    mainContainer: {
        flex: 1,
        overflow: 'hidden',
    },
    overlay: {
        // backgroundColor: Colors.black,
    },

    // Drawer content
    drawerContent: {
        flex: 1,
        justifyContent: 'space-between',
    },


    profileName: {
        color: Colors.orange,
        fontSize: moderateScale(30),
        fontFamily: family.bold,
        marginBottom: moderateScale(4),
    },
    profileSection: {
        marginTop: moderateScale(30),
        marginBottom: moderateScale(20)
    },
    profileEmail: {
        color: Colors.black,
        fontSize: moderateScale(13),
        fontFamily: family.regular,
    },
    menuSection: {
        paddingTop: moderateScale(10),
        gap: moderateScale(6)
    },
    menuItem: {
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        alignItems: 'center',
        paddingVertical: moderateScale(14),
        gap: moderateScale(16),
    },
    menuLabel: {
        color: Colors.black,
        fontSize: moderateScale(16),
        fontFamily: family.regular,
    },
    logoutButton: {
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        alignItems: 'center',
        paddingVertical: moderateScale(14),
        gap: moderateScale(16),
        borderTopWidth: StyleSheet.hairlineWidth,
        borderTopColor: 'rgba(255,255,255,0.2)',
    },
    logoutLabel: {
        color: Colors.black,
        fontSize: moderateScale(16),
        fontFamily: family.regular,
    },
});

export default AnimatedDrawer;
