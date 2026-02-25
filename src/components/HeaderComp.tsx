import TextComp from '@/components/TextComp';
import routes from '@/constants/routes';
import { useDrawerSafe } from '@/context/DrawerContext';
import { clearDataAction } from '@/redux/actions/auth';
import { useSelector } from '@/redux/hooks';
import { Colors } from '@/styles/colors';
import fontFamily from '@/styles/fontFamily';
import { moderateScale } from '@/styles/scaling';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { I18nManager, Pressable, StyleSheet, View } from 'react-native';
import MyIcons, { IconName } from './MyIcons';

interface HeaderCompProps {
    title?: string;
    showBack?: boolean;
    customStyle?: object;
    iconColor?: string;
    leftIcon?: IconName;
    onLeftIconPress?: () => void;
    rightIcon?: IconName;
    onRightIconPress?: () => void;
    titleStyle?: object;
}

const HeaderComp: React.FC<HeaderCompProps> = ({
    title,
    showBack = true,
    customStyle,
    iconColor = Colors.white,
    leftIcon,
    onLeftIconPress,
    rightIcon,
    onRightIconPress,
    titleStyle
}) => {
    const navigation = useNavigation();
    const drawer = useDrawerSafe();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isLoadingLogout, setIsLoadingLogout] = useState(false);

    const { isFirstTime } = useSelector(state => state.auth);

    const handleBackPress = () => {
        navigation.goBack();
    };
    const handleMenuPress = () => {
        drawer?.open();
    };

    const closeModal = () => {
        setIsModalVisible(false);
    }

    const onLogout = () => {
        setIsLoadingLogout(true);
        setTimeout(() => {
            closeModal();
            setTimeout(() => {
                clearDataAction();
                setIsLoadingLogout(false);
            }, 400);
        }, 1500);
    }

    return (
        <View style={[styles.container, customStyle]}>
            {leftIcon ? (
                <Pressable
                    onPress={leftIcon === "menu" ? handleMenuPress : handleBackPress}
                    hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                    style={styles.iconButton}
                >
                    <MyIcons name={leftIcon || "back"} size={moderateScale(24)} />
                </Pressable>
            ) : (
                <View style={{ width: moderateScale(40) }} />
            )}

            {title && (
                <TextComp
                    text={title}
                    style={[styles.titleText, { color: iconColor }, titleStyle]}
                />
            )}

            {rightIcon ? <Pressable onPress={onRightIconPress ? onRightIconPress : () => navigation.navigate(routes.main.notification as never)} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }} style={styles.rightIconButton}>
                <MyIcons name={rightIcon} size={moderateScale(24)} />
            </Pressable> : <View style={{ width: moderateScale(40) }} />}


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
        fontFamily: fontFamily.bold,
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
    iconButton: {
        width: moderateScale(40),
        height: moderateScale(40),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.white,
        borderRadius: moderateScale(60),
        elevation: 2,
        shadowColor: Colors.inputBorder,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        
    },
    rightIconButton: {
        width: moderateScale(40),
        height: moderateScale(40),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.white,
        borderRadius: moderateScale(60),
        elevation: 2,
        shadowColor: Colors.inputBorder,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84
    }
});

export default HeaderComp;
