import { Colors } from '@/styles/colors';
import fontFamily from '@/styles/fontFamily';
import { moderateScale } from '@/styles/scaling';
import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import ButtonComp from './ButtonComp';
import MyIcons from './MyIcons';
import TextComp from './TextComp';
import { localLottie } from '@/assets/lottie';
import LottieView from 'lottie-react-native';
import { localImages } from '@/assets/images';

export type AppModalType = 'cart' | 'login' | 'filter' | 'payment' | 'appointment' | 'quoteRequest';

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
    appointmentProviderName?: string;
    appointmentProviderSpecialty?: string;
    appointmentDateText?: string;
    appointmentTimeText?: string;
    appointmentLocationText?: string;
    appointmentProviderImage?: ImageSourcePropType;
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
    appointmentProviderName,
    appointmentProviderSpecialty,
    appointmentDateText,
    appointmentTimeText,
    appointmentLocationText,
    appointmentProviderImage,
    children,
}) => {
    const isBottomSheet =
        type === 'cart' ||
        type === 'filter' ||
        type === 'payment' ||
        type === 'appointment' ||
        type === 'quoteRequest';

    const resolvedTitle =
        title ??
        (type === 'cart'
            ? ''
            : type === 'login'
                ? 'Sign In Required'
                : type === 'payment'
                    ? ''
                    : type === 'appointment'
                        ? 'Your appointment is confirmed!'
                        : type === 'quoteRequest'
                            ? 'Your request has been submitted successfully!'
                    : 'Filter');

    const resolvedMessage =
        message ??
        (type === 'cart'
            ? 'Product has been successfully added to cart!'
            : type === 'login'
                ? 'Please login to continue.'
                : type === 'payment'
                    ? 'Your order has been placed successfully!'
                    : type === 'appointment'
                        ? "You're all set! We've sent a confirmation to your email."
                        : type === 'quoteRequest'
                            ? ''
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
                            <LottieView source={localLottie.success} autoPlay loop={false} style={styles.successIcon} />
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
                            <LottieView source={localLottie.success} autoPlay loop={false} speed={1} style={styles.successIcon} />
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

                {type === 'appointment' ? (
                    <>
                        <View style={styles.successIconWrap}>
                            <LottieView source={localLottie.success} autoPlay loop={false} style={styles.successIcon} />
                        </View>

                        {resolvedTitle ? <TextComp text={resolvedTitle} style={styles.appointmentTitle} /> : null}
                        {resolvedMessage ? <TextComp text={resolvedMessage} style={styles.appointmentMessage} /> : null}

                        <View style={styles.appointmentProviderCard}>
                            <Image
                                source={appointmentProviderImage ?? localImages.doctor1}
                                resizeMode="cover"
                                style={styles.appointmentProviderImage}
                            />
                            <View style={styles.appointmentProviderBody}>
                                <TextComp text={appointmentProviderName ?? 'Dr. Emily Carter'} style={styles.appointmentProviderName} />
                                <TextComp text={appointmentProviderSpecialty ?? 'Gynecologist'} style={styles.appointmentProviderSpecialty} />
                            </View>
                        </View>

                        <View style={styles.appointmentMetaRow}>
                            <View style={styles.appointmentMetaIconWrap}>
                                <MyIcons name="dateWhite" size={14} />
                            </View>
                            <TextComp text={appointmentDateText ?? 'Tuesday February 8'} style={styles.appointmentMetaText} />
                        </View>

                        <View style={styles.appointmentMetaRow}>
                            <View style={styles.appointmentMetaIconWrap}>
                                <MyIcons name="clockWhite" size={14} />
                            </View>
                            <TextComp text={appointmentTimeText ?? '10:00 AM'} style={styles.appointmentMetaText} />
                        </View>

                        <View style={styles.appointmentMetaRow}>
                            <View style={styles.appointmentMetaIconWrap}>
                                <MyIcons name="locationWhite" size={14} />
                            </View>
                            <TextComp text={appointmentLocationText ?? '123 Main St, Anytown'} style={styles.appointmentMetaText} />
                        </View>

                        <ButtonComp
                            title={primaryButtonText ?? 'View Appointments'}
                            onPress={onPrimaryPress ?? onClose}
                            height={52}
                            style={styles.primaryButton}
                            variant="premium"
                        />
                    </>
                ) : null}

                {type === 'quoteRequest' ? (
                    <>
                        <View style={styles.successIconWrap}>
                            <LottieView source={localLottie.success} autoPlay loop={false} style={styles.successIcon} />
                        </View>
                        {resolvedTitle ? <TextComp text={resolvedTitle} style={styles.quoteTitle} /> : null}
                        <ButtonComp
                            title={primaryButtonText ?? 'View  Application Status'}
                            onPress={onPrimaryPress ?? onClose}
                            height={52}
                            style={styles.primaryButton}
                            variant="premium"
                        />
                    </>
                ) : null}
            </View>
        </Modal>
    );
};

export default AppModal;

const styles = StyleSheet.create({
    successIcon: {
        width: moderateScale(80),
        height: moderateScale(80),
    },
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
    appointmentTitle: {
        fontSize: moderateScale(34 / 1.4),
        color: Colors.gray700,
        fontFamily: fontFamily.bold,
        textAlign: 'center',
        marginBottom: moderateScale(8),
    },
    appointmentMessage: {
        fontSize: moderateScale(30 / 1.8),
        lineHeight: moderateScale(40 / 1.8),
        color: Colors.gray600,
        fontFamily: fontFamily.regular,
        textAlign: 'center',
        marginBottom: moderateScale(16),
        paddingHorizontal: moderateScale(8),
    },
    appointmentProviderCard: {
        backgroundColor: '#F7DCDD',
        borderRadius: moderateScale(14),
        paddingHorizontal: moderateScale(10),
        paddingVertical: moderateScale(10),
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: moderateScale(16),
    },
    appointmentProviderImage: {
        width: moderateScale(62),
        height: moderateScale(62),
        borderRadius: moderateScale(31),
        backgroundColor: Colors.surface,
    },
    appointmentProviderBody: {
        marginLeft: moderateScale(10),
        flex: 1,
    },
    appointmentProviderName: {
        color: Colors.gray700,
        fontFamily: fontFamily.bold,
        fontSize: moderateScale(30 / 1.7),
        marginBottom: moderateScale(2),
    },
    appointmentProviderSpecialty: {
        color: Colors.gray500,
        fontFamily: fontFamily.regular,
        fontSize: moderateScale(24 / 1.7),
    },
    appointmentMetaRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: moderateScale(10),
    },
    appointmentMetaIconWrap: {
        width: moderateScale(34),
        height: moderateScale(34),
        borderRadius: moderateScale(6),
        backgroundColor: Colors.brandSalmon,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: moderateScale(10),
    },
    appointmentMetaText: {
        color: Colors.gray700,
        fontFamily: fontFamily.regular,
        fontSize: moderateScale(28 / 1.7),
        flex: 1,
    },
    quoteTitle: {
        fontSize: moderateScale(20),
        lineHeight: moderateScale(30),
        color: Colors.gray700,
        fontFamily: fontFamily.bold,
        textAlign: 'center',
        marginBottom: moderateScale(22),
        paddingHorizontal: moderateScale(20),
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
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: moderateScale(6),
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
