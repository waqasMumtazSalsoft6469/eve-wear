import React from 'react';
import { View, TouchableOpacity, StyleSheet, I18nManager } from 'react-native';
import Animated, { useAnimatedStyle, interpolate } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { useDrawer } from '@/context/DrawerContext';
import { clearDataAction } from '@/redux/actions/auth';
import TextComp from './TextComp';
import MyIcons, { IconName } from './MyIcons';
import { Colors } from '@/styles/colors';
import { moderateScale, width } from '@/styles/scaling';
import fontFamily from '@/styles/fontFamily';

const DRAWER_WIDTH = width * 0.65;

interface MenuItem {
    label: string;
    icon: IconName;
    screen: string;
}

const MENU_ITEMS: MenuItem[] = [
    { label: 'Home', icon: 'tabHome', screen: 'Home' },
    { label: 'Cycle Overview', icon: 'tabGallery', screen: 'CycleOverview' },
    { label: 'AI Chat', icon: 'tabAi', screen: 'ChatAi' },
    { label: 'Categories', icon: 'tabBag', screen: 'Categories' },
    { label: 'Shop', icon: 'tabPlus', screen: 'Shop' },
];

const DrawerContent: React.FC = () => {
    const insets = useSafeAreaInsets();
    const { close } = useDrawer();
    const navigation = useNavigation<any>();

    const handleNavigate = (screen: string) => {
        close();
        setTimeout(() => {
            navigation.navigate('Main', {
                screen: 'Tabs',
                params: { screen },
            });
        }, 300);
    };

    const handleLogout = () => {
        close();
        setTimeout(() => clearDataAction(), 400);
    };

    return (
        <View style={[styles.drawerContent, { paddingTop: insets.top + moderateScale(20) }]}>
            <View>
                {/* Profile */}
                <View style={styles.profileSection}>
                    <View style={styles.avatar}>
                        <TextComp text="E" style={styles.avatarText} />
                    </View>
                    <TextComp text="Eve User" style={styles.profileName} />
                    <TextComp text="eve@evewear.com" style={styles.profileEmail} />
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
                            <MyIcons name={item.icon} size={moderateScale(20)} stroke={Colors.white} />
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
                <MyIcons name="back" size={moderateScale(18)} stroke={Colors.white} />
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
        <LinearGradient
            colors={[Colors.tabPrimary, Colors.tabSecondary]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={styles.container}
        >
            {/* Drawer */}
            <Animated.View style={[styles.drawerContainer, drawerAnimatedStyle]}>
                <DrawerContent />
            </Animated.View>

            {/* Main Content */}
            <Animated.View style={[styles.mainContainer, mainAnimatedStyle]}>
                {children}

                {/* Tap-to-close overlay */}
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
        </LinearGradient>
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
        paddingHorizontal: moderateScale(20),
        justifyContent: 'center',
    },
    mainContainer: {
        flex: 1,
        overflow: 'hidden',
        backgroundColor: Colors.background,
    },
    overlay: {
        backgroundColor: Colors.black,
    },

    // Drawer content
    drawerContent: {
        flex: 1,
        justifyContent: 'space-between',
    },
    profileSection: {
        paddingBottom: moderateScale(24),
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: 'rgba(255,255,255,0.2)',
        marginBottom: moderateScale(8),
    },
    avatar: {
        width: moderateScale(56),
        height: moderateScale(56),
        borderRadius: moderateScale(28),
        backgroundColor: 'rgba(255,255,255,0.15)',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: moderateScale(14),
    },
    avatarText: {
        color: Colors.white,
        fontSize: moderateScale(22),
        fontFamily: fontFamily.bold,
    },
    profileName: {
        color: Colors.white,
        fontSize: moderateScale(18),
        fontFamily: fontFamily.bold,
        marginBottom: moderateScale(4),
    },
    profileEmail: {
        color: 'rgba(255,255,255,0.55)',
        fontSize: moderateScale(13),
        fontFamily: fontFamily.regular,
    },
    menuSection: {
        paddingTop: moderateScale(8),
    },
    menuItem: {
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        alignItems: 'center',
        paddingVertical: moderateScale(14),
        gap: moderateScale(16),
    },
    menuLabel: {
        color: Colors.white,
        fontSize: moderateScale(15),
        fontFamily: fontFamily.medium,
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
        color: 'rgba(255,255,255,0.8)',
        fontSize: moderateScale(15),
        fontFamily: fontFamily.medium,
    },
});

export default AnimatedDrawer;
