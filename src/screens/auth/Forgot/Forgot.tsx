import React from 'react';
import {
    ImageBackground,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View
} from 'react-native';
import { BlurView } from '@sbaiahmed1/react-native-blur';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import { moderateScale } from '@/styles/scaling';

import { localImages } from '@/assets/images';
import ButtonComp from '@/components/ButtonComp';
import TextComp from '@/components/TextComp';
import TextInputComp from '@/components/TextInputComp';
import WrapperContainer from '@/components/WrapperContainer';
import { useTheme } from '@/context/ThemeContext';
import useIsRTL from '@/hooks/useIsRTL';
import { AuthStackParamList } from '@/navigation/types';
import useRTLStyles from './styles';
import MyIcons from '@/components/MyIcons';

const Forgot = () => {
    const isRTL = useIsRTL();
    const { theme } = useTheme();
    const { t } = useTranslation();
    const styles = useRTLStyles(isRTL, theme ?? 'light');
    const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email(t('INVALID_EMAIL'))
            .required(t('REQUIRED')),
    });

    const handleResetPassword = (values: { email: string }) => {
        console.log('Reset password for:', values.email);
        // Add reset password logic here
    };

    const handleBackToLogin = () => {
        navigation.navigate('Login');
    };

    return (
        <WrapperContainer style={styles.container}>
            <ImageBackground
                source={localImages.loginBg}
                style={styles.bgImage}
                resizeMode="cover"
            >
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={{ flex: 1, width: '100%' }}
                >
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View style={styles.bgImage}>
                            <BlurView
                                blurType="light"
                                blurAmount={30}
                                style={styles.card}
                                overlayColor="rgba(0, 0, 0, 0.2)"
                            >
                                <View style={styles.titleSection}>
                                    <TextComp
                                        text='Forgot Password'
                                        style={styles.title}
                                    />
                                    <TextComp
                                        text='Please Enter Your Email To Reset.'
                                        style={styles.subtitle}
                                    />
                                </View>

                                <Formik
                                    initialValues={{ email: '' }}
                                    validationSchema={validationSchema}
                                    onSubmit={handleResetPassword}
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
                                                error={!!errors.email}
                                                touched={touched.email}
                                                keyboardType="email-address"
                                                autoCapitalize="none"
                                                containerStyle={styles.inputContainer}
                                            />

                                            <View style={styles.buttonSection}>
                                                <ButtonComp
                                                    title='Send Reset Link'
                                                    onPress={handleSubmit as any}
                                                    style={styles.forgotButton}
                                                    textStyle={styles.forgotButtonText}
                                                />

                                                <TouchableOpacity
                                                    style={styles.backToLoginRow}
                                                    onPress={handleBackToLogin}
                                                >
                                                    <MyIcons name="back" size={moderateScale(14)} stroke="white" />
                                                    <TextComp
                                                        text="Back to Login"
                                                        style={styles.backToLoginText}
                                                    />
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    )}
                                </Formik>
                            </BlurView>
                        </View>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </ImageBackground>
        </WrapperContainer>
    );
};

export default Forgot;