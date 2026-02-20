import TextComp from '@/components/TextComp';
import { useDrawerSafe } from '@/context/DrawerContext';
import { Colors } from '@/styles/colors';
import fontFamily from '@/styles/fontFamily';
import { moderateScale } from '@/styles/scaling';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View, I18nManager } from 'react-native';
import MyIcons from './MyIcons';
import routes from '@/constants/routes';
import { MainStackParamList } from '@/navigation/types';
import { NavigationProp, useNavigation } from '@react-navigation/native';

interface HomeHeaderCompProps {
    name?: string;
    description?: string;
    profileImage?: string;
    onNotificationPress?: () => void;
    customStyle?: object;
}

const HomeHeaderComp: React.FC<HomeHeaderCompProps> = ({
    name = "Alexa",
    description = "Your wellness journey begins here.",
    profileImage = "https://i.pravatar.cc/150?u=alexa",
    onNotificationPress,
    customStyle,
}) => {
    const navigation = useNavigation<NavigationProp<MainStackParamList>>();
    const drawer = useDrawerSafe();

    return (
        <View style={[styles.container, customStyle]}>
            <View style={styles.headerContent}>
                <View style={styles.leftSection}>
                    <TouchableOpacity
                        style={styles.iconCircle}
                        onPress={() => drawer?.open()}
                    >
                        <MyIcons name="drawerMenu" size={moderateScale(20)} />
                    </TouchableOpacity>

                    <View style={styles.textContainer}>
                        <TextComp
                            text={`Hi, ${name}! 👋`}
                            style={styles.greetingText}
                        />
                        <TextComp
                            text={description}
                            style={styles.subText}
                        />
                    </View>
                </View>

                <View style={styles.rightSection}>
                    <TouchableOpacity style={styles.profileContainer}>
                        <Image
                            source={{ uri: profileImage }}
                            style={styles.profileImage}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.iconCircle}
                        onPress={onNotificationPress ? onNotificationPress : () => navigation.navigate(routes.main.notification)}
                    >
                        <MyIcons name="drawerNotificationWhite" size={moderateScale(20)} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: moderateScale(16),
        paddingTop: moderateScale(20),
        paddingBottom: moderateScale(20),
        borderBottomLeftRadius: moderateScale(24),
        borderBottomRightRadius: moderateScale(24),
    },
    headerContent: {
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    leftSection: {
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        alignItems: 'center',
        flex: 1,
    },
    rightSection: {
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        alignItems: 'center',
        gap: moderateScale(12),
    },
    iconCircle: {
        width: moderateScale(44),
        height: moderateScale(44),
        borderRadius: moderateScale(22),
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer: {
        marginHorizontal: moderateScale(12),
    },
    greetingText: {
        fontSize: moderateScale(22),
        fontFamily: fontFamily.bold,
        color: Colors.white,
    },
    subText: {
        fontSize: moderateScale(13),
        fontFamily: fontFamily.regular,
        color: Colors.white,
        opacity: 0.8,
        width: '90%'
    },
    profileContainer: {
        padding: moderateScale(2),
        borderRadius: moderateScale(25),
        borderWidth: 1.5,
        borderColor: Colors.tabActive,
    },
    profileImage: {
        width: moderateScale(40),
        height: moderateScale(40),
        borderRadius: moderateScale(20),
        backgroundColor: Colors.surface,
    },
    notificationDot: {
        position: 'absolute',
        top: moderateScale(12),
        right: moderateScale(12),
        width: moderateScale(8),
        height: moderateScale(8),
        borderRadius: moderateScale(4),
        backgroundColor: '#FF3B30',
        borderWidth: 1.5,
        borderColor: Colors.tabPrimary,
    },
});

export default HomeHeaderComp;
