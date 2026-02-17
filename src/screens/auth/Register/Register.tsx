import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Formik } from 'formik';
import React from 'react';
import { ImageBackground, ScrollView, TouchableOpacity, View } from 'react-native';
import * as Yup from 'yup';

import { localImages } from '@/assets/images';
import ButtonComp from '@/components/ButtonComp';
import TextComp from '@/components/TextComp';
import TextInputComp from '@/components/TextInputComp';
import WrapperContainer from '@/components/WrapperContainer';
import { AuthStackParamList } from '@/navigation/types';

import styles from './styles';
import { BlurView } from '@sbaiahmed1/react-native-blur';

const Register = () => {
    const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

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
        console.log('Register values:', values);
        // Implement register logic here
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
                    <BlurView
                        blurType="light"
                        blurAmount={30}
                        style={styles.card}
                        overlayColor="rgba(0, 0, 0, 0.2)"
                    >
                        <TextComp text="Register" style={styles.title} />
                        <TextComp text="Create your account to get started" style={styles.subtitle} />

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

                                    <ButtonComp
                                        title="REGISTER"
                                        onPress={handleSubmit as any}
                                        style={styles.signupButton}
                                        textStyle={styles.signupButtonText}
                                    />
                                </View>
                            )}
                        </Formik>

                        <View style={styles.loginPromptRow}>
                            <TextComp text="Already have an account?" style={styles.alreadyHaveAccountText} />
                            <TouchableOpacity onPress={handleLogin}>
                                <TextComp text="Login here" style={styles.loginText} />
                            </TouchableOpacity>
                        </View>
                    </BlurView>
                </ScrollView>
            </ImageBackground>
        </WrapperContainer>
    );
};

export default Register;
