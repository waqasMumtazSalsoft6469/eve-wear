import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Formik } from 'formik';
import React from 'react';
import { ImageBackground, TouchableOpacity, View } from 'react-native';
import * as Yup from 'yup';

import { localImages } from '@/assets/images';
import ButtonComp from '@/components/ButtonComp';
import MyIcons from '@/components/MyIcons';
import TextComp from '@/components/TextComp';
import TextInputComp from '@/components/TextInputComp';
import WrapperContainer from '@/components/WrapperContainer';
import { AuthStackParamList } from '@/navigation/types';
import { moderateScale } from '@/styles/scaling';

import styles from './styles';
import { BlurView } from '@sbaiahmed1/react-native-blur';

const Forgot = () => {
    const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

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
                <BlurView
                    blurType="light"
                    blurAmount={30}
                    style={styles.card}
                    overlayColor="rgba(0, 0, 0, 0.2)"
                >
                    <View style={styles.titleSection}>
                        <TextComp text="Forgot" style={styles.title} />
                        <TextComp text="Reset Password" style={styles.title} />
                        <TextComp
                            text="Enter your email to receive a password reset link."
                            style={styles.subtitle}
                        />
                    </View>

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

                                <View style={styles.buttonSection}>
                                    <ButtonComp
                                        title="SEND LINK"
                                        onPress={handleSubmit as any}
                                        style={styles.forgotButton}
                                        textStyle={styles.forgotButtonText}
                                    />
                                </View>
                            </View>
                        )}
                    </Formik>

                    <TouchableOpacity
                        style={styles.backToLoginRow}
                        onPress={handleBackToLogin}
                    >
                        <MyIcons name="back" size={moderateScale(14)} stroke="white" />
                        <TextComp text="Back to Login" style={styles.backToLoginText} />
                    </TouchableOpacity>
                </BlurView>
            </ImageBackground>

        </WrapperContainer>
    );
};

export default Forgot;