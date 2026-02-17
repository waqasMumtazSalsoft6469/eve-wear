import TextComp from '@/components/TextComp';
import { useSelector } from '@/redux/hooks';
import { Colors } from '@/styles/colors';
import fontFamily from '@/styles/fontFamily';
import { moderateScale } from '@/styles/scaling';
import React, { useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, View, I18nManager } from 'react-native';
import ModalComp from './ModalComp';
import { clearDataAction } from '@/redux/actions/auth';
import ButtonComp from './ButtonComp';
import MyIcons from './MyIcons';

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
    const [isModalVisible, setIsModalVisible] = useState(false);

    const { isFirstTime } = useSelector(state => state.auth);

    const closeModal = () => {
        setIsModalVisible(false);
    }

    const onLogout = () => {
        closeModal();
        setTimeout(() => {
            clearDataAction();
        }, 400);
    }

    return (

        <View style={[styles.container, customStyle]}>

            <View style={styles.headerContent}>
                <View style={styles.leftSection}>
                    <TouchableOpacity
                        style={styles.iconCircle}
                        onPress={() => setIsModalVisible(true)}
                    >
                        <MyIcons name="menu" size={moderateScale(20)} stroke={Colors.text} />
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
                        onPress={onNotificationPress}
                    >
                        <MyIcons name="notification" size={moderateScale(20)} stroke={Colors.text} />
                        <View style={styles.notificationDot} />
                    </TouchableOpacity>
                </View>
            </View>

            <ModalComp isVisible={isModalVisible} onClose={closeModal}>
                <View style={styles.modalContainer}>
                    <TextComp
                        text="SETTINGS"
                        style={styles.modalTitle}
                    />

                    {isFirstTime ? (
                        <View style={{ marginTop: moderateScale(16) }}>
                            <ButtonComp title="LOGOUT" onPress={onLogout} />
                        </View>
                    ) : null}

                </View>
            </ModalComp>
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
        color: Colors.text,
    },
    subText: {
        fontSize: moderateScale(13),
        fontFamily: fontFamily.regular,
        color: Colors.text,
        opacity: 0.8,
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
    modalContainer: {
        backgroundColor: Colors.background,
        padding: moderateScale(20),
        borderTopLeftRadius: moderateScale(24),
        borderTopRightRadius: moderateScale(24),
    },
    modalTitle: {
        fontSize: moderateScale(24),
        fontFamily: fontFamily.bold,
        marginBottom: moderateScale(24),
        textAlign: 'center',
    },
});

export default HomeHeaderComp;
