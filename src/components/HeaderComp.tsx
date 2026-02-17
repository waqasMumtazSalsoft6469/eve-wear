import TextComp from '@/components/TextComp';
import { useSelector } from '@/redux/hooks';
import { Colors } from '@/styles/colors';
import fontFamily from '@/styles/fontFamily';
import { moderateScale } from '@/styles/scaling';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Pressable, StyleSheet, TouchableOpacity, View, I18nManager } from 'react-native';
import ModalComp from './ModalComp';
import { clearDataAction } from '@/redux/actions/auth';
import ButtonComp from './ButtonComp';
import MyIcons, { IconName } from './MyIcons';

interface HeaderCompProps {
    title?: string;
    showBack?: boolean;
    customStyle?: object;
    iconColor?: string;
    rightIcon?: IconName;
    onRightIconPress?: () => void;
    titleStyle?: object;
}

const HeaderComp: React.FC<HeaderCompProps> = ({
    title,
    showBack = true,
    customStyle,
    iconColor = Colors.white,
    rightIcon,
    onRightIconPress,
    titleStyle
}) => {
    const navigation = useNavigation();
    const [isModalVisible, setIsModalVisible] = useState(false);

    const { isFirstTime } = useSelector(state => state.auth);

    const handleBackPress = () => {
        navigation.goBack();
    };

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
            {showBack ?
                <TouchableOpacity
                    onPress={handleBackPress}
                    hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                >
                    <MyIcons name="back" size={moderateScale(24)} stroke={iconColor} />
                </TouchableOpacity>
                : <View style={{ width: moderateScale(24) }} />}

            {title && (
                <TextComp
                    text={title}
                    style={[styles.titleText, { color: iconColor }, titleStyle]}
                />
            )}

            <Pressable onPress={onRightIconPress || (() => setIsModalVisible(true))}>
                <MyIcons name={rightIcon || "menu"} size={moderateScale(24)} stroke={iconColor} />
            </Pressable>

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
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: moderateScale(16),
        paddingVertical: moderateScale(12),
    },
    titleText: {
        fontSize: moderateScale(18),
        fontFamily: fontFamily.medium,
    },
    modalContainer: {
        backgroundColor: Colors.background,
        minHeight: moderateScale(100),
    },
    modalTitle: {
        fontSize: moderateScale(24),
        fontFamily: fontFamily.bold,
        marginBottom: moderateScale(24),
        textAlign: 'center',
    },
});

export default HeaderComp;
