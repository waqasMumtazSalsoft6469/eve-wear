import TextComp from '@/components/TextComp';
import useIsRTL from '@/hooks/useIsRTL';
import { changeLanguageState } from '@/redux/actions/settings';
import { useSelector } from '@/redux/hooks';
import { Colors } from '@/styles/colors';
import fontFamily from '@/styles/fontFamily';
import { moderateScale } from '@/styles/scaling';
import React, { useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ModalComp from './ModalComp';
import { LanguageInterface } from '@/redux/reducers/settings';
import { secureStorage } from '@/utils/secureStorage';
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
    const isRTL = useIsRTL();
    const styles = useRTLStyles(isRTL);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const colors = Colors;

    const { defaultTheme } = useSelector(state => state.settings);
    const { isFirstTime } = useSelector(state => state.auth);


    const changedLanguage = (language: LanguageInterface) => {
        changeLanguageState(language);
        closeModal();
    }

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
                        <MyIcons name="menu" size={moderateScale(20)} stroke={colors.text} />
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
                        <MyIcons name="notification" size={moderateScale(20)} stroke={colors.text} />
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
                    <View style={styles.section}>
                        <TextComp
                            text="LANGUAGE"
                            style={styles.sectionTitle}
                        />
                        <View style={styles.optionRow}>
                            <TouchableOpacity
                                style={[styles.optionButton, isRTL && styles.optionButtonActive]}
                                onPress={() => changedLanguage({ name: 'Arabic', sortName: 'ar' })}
                            >
                                <TextComp text="Arabic" isDynamic style={[
                                    styles.optionText,
                                    isRTL && styles.optionTextActive
                                ]} />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.optionButton, !isRTL && styles.optionButtonActive]}
                                onPress={() => changedLanguage({ name: 'English', sortName: 'en' })}
                            >
                                <TextComp text="English" isDynamic style={[
                                    styles.optionText,
                                    !isRTL && styles.optionTextActive
                                ]} />
                            </TouchableOpacity>
                        </View>
                    </View>

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


const useRTLStyles = (isRTL: boolean) => {
    const colors = Colors;
    return StyleSheet.create({
        container: {
            width: '100%',
            paddingHorizontal: moderateScale(16),
            paddingTop: moderateScale(20),
            paddingBottom: moderateScale(20),
            borderBottomLeftRadius: moderateScale(24),
            borderBottomRightRadius: moderateScale(24),
        },
        headerContent: {
            flexDirection: isRTL ? 'row-reverse' : 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        leftSection: {
            flexDirection: isRTL ? 'row-reverse' : 'row',
            alignItems: 'center',
            flex: 1,
        },
        rightSection: {
            flexDirection: isRTL ? 'row-reverse' : 'row',
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
            color: colors.text,
        },
        subText: {
            fontSize: moderateScale(13),
            fontFamily: fontFamily.regular,
            color: colors.text,
            opacity: 0.8,
        },
        profileContainer: {
            padding: moderateScale(2),
            borderRadius: moderateScale(25),
            borderWidth: 1.5,
            borderColor: colors.tabActive,
        },
        profileImage: {
            width: moderateScale(40),
            height: moderateScale(40),
            borderRadius: moderateScale(20),
            backgroundColor: colors.surface,
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
            borderColor: colors.tabPrimary,
        },
        modalContainer: {
            backgroundColor: colors.background,
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
        section: {
            marginBottom: moderateScale(24),
        },
        sectionTitle: {
            fontSize: moderateScale(16),
            fontFamily: fontFamily.medium,
            marginBottom: moderateScale(12),
            opacity: 0.8,
        },
        optionRow: {
            flexDirection: isRTL ? 'row-reverse' : 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: moderateScale(12),
        },
        optionButton: {
            flex: 1,
            padding: moderateScale(12),
            borderRadius: moderateScale(12),
            backgroundColor: colors.surface,
            alignItems: 'center',
            borderWidth: 1,
            borderColor: colors.inputBorder,
        },
        optionButtonActive: {
            backgroundColor: colors.text,
            borderColor: colors.text,
        },
        optionText: {
            fontSize: moderateScale(16),
            fontFamily: fontFamily.medium,
            color: colors.text,
        },
        optionTextActive: {
            color: colors.background,
        },
    });
};

export default HomeHeaderComp;
