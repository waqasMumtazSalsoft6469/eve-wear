import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Formik } from 'formik';
import React, { useState } from 'react';
import { ImageBackground, TouchableOpacity, View } from 'react-native';
import * as Yup from 'yup';

import { localImages } from '@/assets/images';
import ButtonComp from '@/components/ButtonComp';
import TextComp from '@/components/TextComp';
import TextInputComp from '@/components/TextInputComp';
import WrapperContainer from '@/components/WrapperContainer';
import { AuthStackParamList } from '@/navigation/types';

import styles from './styles';

import { BlurView } from '@sbaiahmed1/react-native-blur';

import { loginAction } from '@/redux/actions/auth';

const Login = () => {
    const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

    const [rememberMe, setRememberMe] = useState(false);

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email('Invalid email')
            .required('Required'),
        password: Yup.string()
            .required('Required'),
    });

    const handleLogin = (values: any) => {
        console.log('Login values:', values);
        const { email } = values;

        // Simulating login with static data
        const userData = {
            id: 1,
            email: email,
            username: email.split('@')[0],
            firstName: "Static",
            lastName: "User",
            token: "static_token_12345"
        };

        loginAction(userData);
    };

    const handleRegister = () => {
        navigation.navigate('Register' as any);
    }
    const handleForgotPassword = () => {
        navigation.navigate('Forgot');
    };

    return (
        <WrapperContainer style={styles.container}>
            <ImageBackground
                source={localImages.loginBg}
                style={styles.bgImage}
                resizeMode="cover"
            >
                <BlurView
                    blurType="light"
                    blurAmount={30}
                    style={styles.card}
                    overlayColor="rgba(0, 0, 0, 0.2)"
                >
                    <TextComp text="Login" style={styles.title} />
                    <TextComp text="Welcome back, please login to your account" style={styles.subtitle} />

                    <Formik
                        initialValues={{ email: '', password: '' }}
                        validationSchema={validationSchema}
                        onSubmit={handleLogin}
                    >
                        {({
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            values,
                            errors,
                            touched,
                        }) => (
                            <View>
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

                                <View style={styles.footerRow}>
                                    <TouchableOpacity
                                        style={styles.rememberMeRow}
                                        onPress={() => setRememberMe(!rememberMe)}
                                    >
                                        <View style={[
                                            styles.checkbox,
                                            rememberMe && { backgroundColor: 'white' }
                                        ]} />
                                        <TextComp text="Remember me" style={styles.rememberMeText} />
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={handleForgotPassword}>
                                        <TextComp text="Forgot password?" style={styles.forgotPasswordText} />
                                    </TouchableOpacity>
                                </View>

                                <ButtonComp
                                    title="LOGIN"
                                    onPress={handleSubmit as any}
                                    style={styles.loginButton}
                                    textStyle={styles.loginButtonText}
                                />
                            </View>
                        )}
                    </Formik>

                    <View style={styles.registerPromptRow}>
                        <TextComp text="Don't have an account?" style={styles.noAccountText} />
                        <TouchableOpacity onPress={handleRegister}>
                            <TextComp text="Register here" style={styles.registerText} />
                        </TouchableOpacity>
                    </View>
                </BlurView>
            </ImageBackground>
        </WrapperContainer>
    );
};

export default Login;
