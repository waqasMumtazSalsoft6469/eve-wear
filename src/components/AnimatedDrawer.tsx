import { family } from '@/assets/fonts';
import { localImages } from '@/assets/images';
import routes from '@/constants/routes';
import { useDrawer } from '@/context/DrawerContext';
import { clearDataAction } from '@/redux/actions/auth';
import { Colors } from '@/styles/colors';
import { height, moderateScale, width } from '@/styles/scaling';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { I18nManager, ImageBackground, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import AppModal from './AppModal';
import ButtonComp from './ButtonComp';
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
    { label: 'Contact Us', icon: 'drawerContact', screen: routes.main.support },
    { label: "Help And FAQ's", icon: 'help', screen: routes.main.help },
    { label: 'Our Collaborators', icon: 'drawerCollaboration', screen: routes.main.ourCollaboration },
    { label: 'Log Symptoms', icon: 'drawerLogs', screen: routes.main.logSymptoms },
    { label: 'Cycle History', icon: 'drawerBlood', screen: routes.main.cycleHistory },
    { label: 'Insights Threads', icon: 'drawerInsights', screen: routes.main.insightsThreads },
    { label: 'Reminder & Alerts', icon: 'drawerReminder', screen: routes.main.reminderAlert },
    { label: 'My Cart', icon: 'drawerCart', screen: routes.main.cart },
    { label: 'Request A Quote', icon: 'drawerQuote', screen: routes.main.requestAquote },
];

const DrawerContent: React.FC = () => {
    const insets = useSafeAreaInsets();
    const { close } = useDrawer();
    const navigation = useNavigation<any>();
    const [isLogoutModalVisible, setIsLogoutModalVisible] = React.useState(false);

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
        setIsLogoutModalVisible(true);
    };

    return (
        <View style={[styles.drawerContent]}>
            <View style={styles.drawerHeader}>
                <TouchableOpacity onPress={close} hitSlop={moderateScale(10)}>
                    <MyIcons name="tabCross" size={moderateScale(22)} />
                </TouchableOpacity>
                <View style={styles.profileSection}>
                    <TextComp text="Eve User" style={styles.profileName} />
                </View>
            </View>

            <ScrollView
                style={styles.menuScroll}
                contentContainerStyle={styles.menuScrollContent}
                showsVerticalScrollIndicator={false}
                bounces={false}
            >
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
            </ScrollView>

            <TouchableOpacity
                style={[styles.logoutButton, { marginBottom: insets.bottom + moderateScale(10) }]}
                onPress={handleLogout}
                activeOpacity={0.7}
            >
                <MyIcons name="drawerLogout" size={moderateScale(22)} />
                <TextComp text="Logout" style={styles.logoutLabel} />
            </TouchableOpacity>

            <AppModal
                isVisible={isLogoutModalVisible}
                onClose={() => setIsLogoutModalVisible(false)}
                type="filter"
                title=""
            >
                <View style={styles.logoutModalIconWrap}>
                    <View style={styles.logoutModalIconCircle}>
                        <MyIcons name="profileLogout" size={34} stroke={Colors.white} />
                    </View>
                </View>

                <TextComp text="Are you sure you want to logout?" style={styles.logoutModalTitle} />

                <View style={styles.logoutModalActionsRow}>
                    <ButtonComp
                        title="No"
                        onPress={() => setIsLogoutModalVisible(false)}
                        variant="outline"
                        height={46}
                        style={styles.logoutModalActionButton}
                        textStyle={styles.logoutModalNoText}
                    />

                    <ButtonComp
                        title="Yes"
                        onPress={() => {
                            setIsLogoutModalVisible(false);
                            close();
                            setTimeout(() => clearDataAction(), 400);
                        }}
                        variant="primary"
                        height={46}
                        style={styles.logoutModalActionButton}
                        textStyle={styles.logoutModalYesText}
                    />
                </View>
            </AppModal>
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
    drawerHeader: {
        marginTop: moderateScale(30),
    },
    menuScroll: {
        flex: 1,
    },
    menuScrollContent: {
        paddingVertical: moderateScale(8),
        paddingRight: moderateScale(8),
    },
    profileName: {
        color: Colors.orange,
        fontSize: moderateScale(30),
        fontFamily: family.bold,
        marginBottom: moderateScale(4),
    },
    profileSection: {
        marginTop: moderateScale(12),
        marginBottom: moderateScale(8),
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
    logoutModalIconWrap: {
        alignItems: 'center',
        marginBottom: moderateScale(16),
    },
    logoutModalIconCircle: {
        width: moderateScale(80),
        height: moderateScale(80),
        borderRadius: moderateScale(44),
        backgroundColor: Colors.brandPurple,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: moderateScale(10),
    },
    logoutModalTitle: {
        color: Colors.gray700,
        fontSize: moderateScale(19),
        fontFamily: family.bold,
        textAlign: 'center',
        marginBottom: moderateScale(14),
        paddingHorizontal: moderateScale(8),
    },
    logoutModalActionsRow: {
        flexDirection: 'row',
        gap: moderateScale(10),
        width: '100%',
    },
    logoutModalActionButton: {
        flex: 1,
        borderRadius: moderateScale(22),
        borderWidth: 1,
        borderColor: Colors.gray200,
    },
    logoutModalNoText: {
        color: Colors.gray700,
        fontSize: moderateScale(15),
        fontFamily: family.bold,
    },
    logoutModalYesText: {
        color: Colors.white,
        fontSize: moderateScale(15),
        fontFamily: family.bold,
    },
});

export default AnimatedDrawer;
