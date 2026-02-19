import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Formik } from 'formik';
import React, { useState } from 'react';
import { ImageBackground, ScrollView, TouchableOpacity, View } from 'react-native';
import Animated from 'react-native-reanimated';
import * as Yup from 'yup';

import { localImages } from '@/assets/images';
import ButtonComp from '@/components/ButtonComp';
import TextComp from '@/components/TextComp';
import TextInputComp from '@/components/TextInputComp';
import WrapperContainer from '@/components/WrapperContainer';
import { useFadeSlide } from '@/hooks/animations/useFadeSlide';
import { usePressScale } from '@/hooks/animations/usePressScale';
import { useStagger } from '@/hooks/animations/useStagger';
import routes from '@/constants/routes';
import { AuthStackParamList } from '@/navigation/types';
import { BlurView } from '@sbaiahmed1/react-native-blur';

import styles from './styles';

const STAGGER_DELAY = 80;

const Register = () => {
    const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
    const [isLoading, setIsLoading] = useState(false);

    const cardAnimation = useFadeSlide({ duration: 450, translateY: 35 });
    const titleStyle = useStagger(0, STAGGER_DELAY).animatedStyle;
    const subtitleStyle = useStagger(1, STAGGER_DELAY).animatedStyle;
    const formStyle = useStagger(2, STAGGER_DELAY).animatedStyle;
    const loginRowStyle = useStagger(3, STAGGER_DELAY).animatedStyle;
    const { animatedStyle: registerButtonStyle, onPressIn, onPressOut } = usePressScale();
    const { animatedStyle: loginLinkStyle, onPressIn: loginLinkPressIn, onPressOut: loginLinkPressOut } = usePressScale();

    const validationSchema = Yup.object().shape({

        email: Yup.string()
            .email('Invalid email')
            .required('Required'),
        password: Yup.string()
            .min(6, 'Password too short')
            .required('Required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password')], 'Passwords must match')
            .required('Required'),
    });

    const handleRegister = (values: any) => {
        setIsLoading(true);
        console.log('Register values:', values);
        setTimeout(() => {
            setIsLoading(false);
            navigation.navigate(routes.auth.healthConsent as any);
        }, 1500);
    };

    const handleLogin = () => {
        navigation.navigate('Login');
    };

    return (
        <WrapperContainer style={styles.container}>
            <ImageBackground
                source={localImages.signupBg}
                style={styles.bgImage}
                resizeMode="cover"
            >
                <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                    <Animated.View style={cardAnimation.animatedStyle}>
                        <BlurView
                            blurType="light"
                            blurAmount={30}
                            style={styles.card}
                            overlayColor="rgba(0, 0, 0, 0.2)"
                        >
                            <Animated.View style={titleStyle}>
                                <TextComp text="Register" style={styles.title} />
                            </Animated.View>
                            <Animated.View style={subtitleStyle}>
                                <TextComp text="Create your account to get started" style={styles.subtitle} />
                            </Animated.View>

                            <Formik
                                initialValues={{ username: '', email: '', password: '', confirmPassword: '' }}
                                validationSchema={validationSchema}
                                onSubmit={handleRegister}
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

                                        <TextInputComp
                                            label="Password"
                                            required
                                            underline
                                            placeholder="*************"
                                            onChangeText={handleChange('password')}
                                            onBlur={handleBlur('password')}
                                            value={values.password}
                                            error={errors.password}
                                            touched={touched.password}
                                            secureTextEntry
                                            containerStyle={styles.inputContainer}
                                        />

                                        <TextInputComp
                                            label="Confirm Password"
                                            required
                                            underline
                                            placeholder="*************"
                                            onChangeText={handleChange('confirmPassword')}
                                            onBlur={handleBlur('confirmPassword')}
                                            value={values.confirmPassword}
                                            error={errors.confirmPassword}
                                            touched={touched.confirmPassword}
                                            secureTextEntry
                                            containerStyle={styles.inputContainer}
                                        />

                                        <TouchableOpacity
                                            onPress={handleSubmit as any}
                                            onPressIn={onPressIn}
                                            onPressOut={onPressOut}
                                            activeOpacity={1}
                                        >
                                            <Animated.View style={registerButtonStyle}>
                                                <ButtonComp
                                                    title="REGISTER"
                                                    onPress={handleSubmit as any}
                                                    loading={isLoading}
                                                    style={styles.signupButton}
                                                    textStyle={styles.signupButtonText}
                                                />
                                            </Animated.View>
                                        </TouchableOpacity>
                                    </Animated.View>
                                )}
                            </Formik>

                            <Animated.View style={[styles.loginPromptRow, loginRowStyle]}>
                                <TextComp text="Already have an account?" style={styles.alreadyHaveAccountText} />
                                <TouchableOpacity
                                    onPress={handleLogin}
                                    onPressIn={loginLinkPressIn}
                                    onPressOut={loginLinkPressOut}
                                    activeOpacity={1}
                                >
                                    <Animated.View style={loginLinkStyle}>
                                        <TextComp text="Login here" style={styles.loginText} />
                                    </Animated.View>
                                </TouchableOpacity>
                            </Animated.View>
                        </BlurView>
                    </Animated.View>
                </ScrollView>
            </ImageBackground>
        </WrapperContainer>
    );
};

export default Register;
