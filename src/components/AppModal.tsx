import { Colors } from '@/styles/colors';
import fontFamily from '@/styles/fontFamily';
import { moderateScale } from '@/styles/scaling';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import ButtonComp from './ButtonComp';
import TextComp from './TextComp';

export type AppModalType = 'cart' | 'login' | 'filter' | 'payment';

interface AppModalProps {
    isVisible: boolean;
    onClose: () => void;
    type: AppModalType;
    title?: string;
    message?: string;
    primaryButtonText?: string;
    secondaryButtonText?: string;
    onPrimaryPress?: () => void;
    onSecondaryPress?: () => void;
    children?: React.ReactNode;
}

const AppModal: React.FC<AppModalProps> = ({
    isVisible,
    onClose,
    type,
    title,
    message,
    primaryButtonText,
    secondaryButtonText,
    onPrimaryPress,
    onSecondaryPress,
    children,
}) => {
    const isBottomSheet = type === 'cart' || type === 'filter' || type === 'payment';

    const resolvedTitle =
        title ??
        (type === 'cart'
            ? ''
            : type === 'login'
              ? 'Sign In Required'
              : type === 'payment'
                ? ''
              : 'Filter');

    const resolvedMessage =
        message ??
        (type === 'cart'
            ? 'Product has been successfully added to cart!'
            : type === 'login'
              ? 'Please login to continue.'
              : type === 'payment'
                ? 'Your order has been placed successfully!'
              : '');

    return (
        <Modal
            isVisible={isVisible}
            onBackdropPress={onClose}
            onBackButtonPress={onClose}
            backdropOpacity={0.55}
            animationIn={isBottomSheet ? 'slideInUp' : 'zoomIn'}
            animationOut={isBottomSheet ? 'slideOutDown' : 'zoomOut'}
            animationInTiming={220}
            animationOutTiming={180}
            backdropTransitionInTiming={220}
            backdropTransitionOutTiming={0}
            style={isBottomSheet ? styles.bottomModalRoot : styles.centerModalRoot}
            useNativeDriver
            useNativeDriverForBackdrop
            hideModalContentWhileAnimating
            avoidKeyboard
            statusBarTranslucent
        >
            <View style={[styles.baseCard, isBottomSheet ? styles.bottomSheetCard : styles.centerCard]}>
                {isBottomSheet ? <View style={styles.handle} /> : null}

                {type === 'cart' ? (
                    <>
                        <View style={styles.successIconWrap}>
                            <TextComp text="✓" style={styles.successIconText} />
                        </View>
                        {resolvedMessage ? <TextComp text={resolvedMessage} style={styles.message} /> : null}
                        <ButtonComp
                            title={primaryButtonText ?? 'View Cart'}
                            onPress={onPrimaryPress ?? onClose}
                            height={52}
                            style={styles.primaryButton}
                        />
                    </>
                ) : null}

                {type === 'payment' ? (
                    <>
                        <View style={styles.successIconWrap}>
                            <TextComp text="✓" style={styles.successIconText} />
                        </View>
                        {resolvedMessage ? <TextComp text={resolvedMessage} style={styles.message} /> : null}
                        <ButtonComp
                            title={primaryButtonText ?? 'View Order History'}
                            onPress={onPrimaryPress ?? onClose}
                            height={52}
                            style={styles.primaryButton}
                            variant="premium"
                        />
                    </>
                ) : null}

                {type === 'login' ? (
                    <>
                        <TextComp text={resolvedTitle} style={styles.loginTitle} />
                        {resolvedMessage ? <TextComp text={resolvedMessage} style={styles.loginMessage} /> : null}
                        <ButtonComp
                            title={primaryButtonText ?? 'Login'}
                            onPress={onPrimaryPress ?? onClose}
                            height={50}
                            style={styles.primaryButton}
                        />
                        {secondaryButtonText ? (
                            <TouchableOpacity onPress={onSecondaryPress ?? onClose} activeOpacity={0.8}>
                                <TextComp text={secondaryButtonText} style={styles.secondaryTextButton} />
                            </TouchableOpacity>
                        ) : null}
                    </>
                ) : null}

                {type === 'filter' ? (
                    <>
                        {resolvedTitle ? <TextComp text={resolvedTitle} style={styles.filterTitle} /> : null}
                        {children}
                    </>
                ) : null}
            </View>
        </Modal>
    );
};

export default AppModal;

const styles = StyleSheet.create({
    bottomModalRoot: {
        margin: 0,
        justifyContent: 'flex-end',
    },
    centerModalRoot: {
        justifyContent: 'center',
        marginHorizontal: moderateScale(24),
    },
    baseCard: {
        backgroundColor: Colors.surface,
    },
    bottomSheetCard: {
        borderTopLeftRadius: moderateScale(28),
        borderTopRightRadius: moderateScale(28),
        paddingHorizontal: moderateScale(22),
        paddingTop: moderateScale(12),
        paddingBottom: moderateScale(28),
    },
    centerCard: {
        borderRadius: moderateScale(20),
        paddingHorizontal: moderateScale(20),
        paddingVertical: moderateScale(22),
    },
    handle: {
        width: moderateScale(58),
        height: moderateScale(5),
        borderRadius: moderateScale(4),
        backgroundColor: Colors.gray200,
        alignSelf: 'center',
        marginBottom: moderateScale(16),
    },
    successIconWrap: {
        width: moderateScale(76),
        height: moderateScale(76),
        borderRadius: moderateScale(38),
        backgroundColor: Colors.success,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: moderateScale(18),
        alignSelf: 'center',
    },
    successIconText: {
        color: Colors.white,
        fontSize: moderateScale(38),
        fontFamily: fontFamily.bold,
        lineHeight: moderateScale(38),
    },
    message: {
        fontSize: moderateScale(18),
        lineHeight: moderateScale(15),
        color: Colors.gray600,
        fontFamily: fontFamily.bold,
        textAlign: 'center',
        marginBottom: moderateScale(22),
        paddingHorizontal: moderateScale(8),
    },
    primaryButton: {
        borderRadius: moderateScale(26),
        width: '100%',
    },
    loginTitle: {
        fontSize: moderateScale(20),
        color: Colors.text,
        fontFamily: fontFamily.bold,
        textAlign: 'center',
        marginBottom: moderateScale(10),
    },
    loginMessage: {
        fontSize: moderateScale(14),
        color: Colors.textSecondary,
        fontFamily: fontFamily.regular,
        textAlign: 'center',
        marginBottom: moderateScale(18),
    },
    secondaryTextButton: {
        marginTop: moderateScale(12),
        color: Colors.brandPurple,
        fontFamily: fontFamily.bold,
        textAlign: 'center',
    },
    filterTitle: {
        fontSize: moderateScale(18),
        color: Colors.text,
        textAlign: 'center',
        fontFamily: fontFamily.bold,
        marginBottom: moderateScale(8),
    },
});
