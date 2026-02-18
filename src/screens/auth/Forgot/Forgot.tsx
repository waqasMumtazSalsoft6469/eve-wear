import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Formik } from 'formik';
import React from 'react';
import { ImageBackground, TouchableOpacity, View } from 'react-native';
import Animated from 'react-native-reanimated';
import * as Yup from 'yup';

import { localImages } from '@/assets/images';
import ButtonComp from '@/components/ButtonComp';
import MyIcons from '@/components/MyIcons';
import TextComp from '@/components/TextComp';
import TextInputComp from '@/components/TextInputComp';
import WrapperContainer from '@/components/WrapperContainer';
import { useFadeSlide } from '@/hooks/animations/useFadeSlide';
import { usePressScale } from '@/hooks/animations/usePressScale';
import { useStagger } from '@/hooks/animations/useStagger';
import { AuthStackParamList } from '@/navigation/types';
import { moderateScale } from '@/styles/scaling';
import { BlurView } from '@sbaiahmed1/react-native-blur';

import styles from './styles';

const STAGGER_DELAY = 80;

const Forgot = () => {
    const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

    const cardAnimation = useFadeSlide({ duration: 450, translateY: 35 });
    const titleSectionStyle = useStagger(0, STAGGER_DELAY).animatedStyle;
    const formStyle = useStagger(1, STAGGER_DELAY).animatedStyle;
    const backRowStyle = useStagger(2, STAGGER_DELAY).animatedStyle;
    const { animatedStyle: sendButtonStyle, onPressIn, onPressOut } = usePressScale();
    const { animatedStyle: backLinkStyle, onPressIn: backPressIn, onPressOut: backPressOut } = usePressScale();

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email('Invalid email')
            .required('Required'),
    });

    const handleForgotPassword = (values: any) => {
        console.log('Forgot Password values:', values);
        // Implement forgot password logic here
    };

    const handleBackToLogin = () => {
        navigation.goBack();
    };

    return (

        <WrapperContainer style={styles.container}>
            <ImageBackground
                source={localImages.loginBg}
                style={styles.bgImage}
                resizeMode="cover"
            >
                <Animated.View style={cardAnimation.animatedStyle}>
                    <BlurView
                        blurType="light"
                        blurAmount={30}
                        style={styles.card}
                        overlayColor="rgba(0, 0, 0, 0.2)"
                    >
                        <Animated.View style={[styles.titleSection, titleSectionStyle]}>
                            <TextComp text="Forgot" style={styles.title} />
                            <TextComp text="Reset Password" style={styles.title} />
                            <TextComp
                                text="Enter your email to receive a password reset link."
                                style={styles.subtitle}
                            />
                        </Animated.View>

                        <Formik
                        initialValues={{ email: '' }}
                        validationSchema={validationSchema}
                        onSubmit={handleForgotPassword}
                    >
                        {({
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            values,
                            errors,
                            touched,
                        }) => (
                            <Animated.View style={formStyle}>
                                <TextInputComp
                                    label="Email"
                                    required
                                    underline
                                    placeholder="alexa@email.com"
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    value={values.email}
                                    error={errors.email}
                                    touched={touched.email}
                                    keyboardType="email-address"
                                    autoCapitalize="none"
                                    containerStyle={styles.inputContainer}
                                />

                                <View style={styles.buttonSection}>
                                    <TouchableOpacity
                                        onPress={handleSubmit as any}
                                        onPressIn={onPressIn}
                                        onPressOut={onPressOut}
                                        activeOpacity={1}
                                    >
                                        <Animated.View style={sendButtonStyle}>
                                            <ButtonComp
                                                title="SEND LINK"
                                                onPress={handleSubmit as any}
                                                style={styles.forgotButton}
                                                textStyle={styles.forgotButtonText}
                                            />
                                        </Animated.View>
                                    </TouchableOpacity>
                                </View>
                            </Animated.View>
                        )}
                    </Formik>

                    <Animated.View style={backRowStyle}>
                        <TouchableOpacity
                            style={styles.backToLoginRow}
                            onPress={handleBackToLogin}
                            onPressIn={backPressIn}
                            onPressOut={backPressOut}
                            activeOpacity={1}
                        >
                            <Animated.View style={[backLinkStyle, { flexDirection: 'row', alignItems: 'center' }]}>
                                <MyIcons name="back" size={moderateScale(14)} stroke="white" />
                                <TextComp text="Back to Login" style={styles.backToLoginText} />
                            </Animated.View>
                        </TouchableOpacity>
                    </Animated.View>
                </BlurView>
                </Animated.View>
            </ImageBackground>

        </WrapperContainer>
    );
};

export default Forgot;