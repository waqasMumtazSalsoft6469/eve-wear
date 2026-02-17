import { BlurView } from '@sbaiahmed1/react-native-blur';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Formik } from 'formik';
import React from 'react';
import { useTranslation } from 'react-i18next';
import {
    ImageBackground,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    TouchableOpacity,
    View
} from 'react-native';
import * as Yup from 'yup';

import { localImages } from '@/assets/images';
import ButtonComp from '@/components/ButtonComp';
import TextComp from '@/components/TextComp';
import TextInputComp from '@/components/TextInputComp';
import WrapperContainer from '@/components/WrapperContainer';
import { useTheme } from '@/context/ThemeContext';
import useIsRTL from '@/hooks/useIsRTL';
import { AuthStackParamList } from '@/navigation/types';

import useRTLStyles from './styles';
import routes from '@/constants/routes';

const Register = () => {
    const isRTL = useIsRTL();
    const { theme } = useTheme();
    const { t } = useTranslation();
    const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
    const styles = useRTLStyles(isRTL, theme ?? 'light');

    const validationSchema = Yup.object().shape({

        email: Yup.string()
            .email(t('INVALID_EMAIL'))
            .required(t('REQUIRED')),

        password: Yup.string()
            .min(6, t('PASSWORD_TOO_SHORT'))
            .required(t('REQUIRED')),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password')], t('PASSWORDS_MUST_MATCH'))
            .required(t('REQUIRED')),
    });

    interface SignupValues {
        name?: string;
        email: string;
        phone?: string;
        password?: string;
        confirmPassword?: string;
    }

    const handleSignup = (values: SignupValues) => {
        console.log('Signup values:', values);
        navigation.navigate(routes.auth.login)
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
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={{ flex: 1, width: '100%' }}
                >
                    <ScrollView
                        contentContainerStyle={styles.scrollContainer}
                        showsVerticalScrollIndicator={false}
                    >
                        <BlurView
                            blurType="light"
                            blurAmount={30}
                            style={styles.card}
                            overlayColor="rgba(0, 0, 0, 0.2)"
                        >
                            <TextComp text="SIGNUP_TITLE" style={styles.title} />
                            <TextComp text="SIGNUP_SUBTITLE" style={styles.subtitle} />

                            <Formik
                                initialValues={{
                                    name: '',
                                    email: '',
                                    phone: '',
                                    password: '',
                                    confirmPassword: ''
                                }}
                                validationSchema={validationSchema}
                                onSubmit={handleSignup}
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
                                            label="EMAIL_LABEL"
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

                                        <TextInputComp
                                            label="PASSWORD_LABEL"
                                            required
                                            underline
                                            placeholder="*************"
                                            onChangeText={handleChange('password')}
                                            onBlur={handleBlur('password')}
                                            value={values.password}
                                            error={!!errors.password}
                                            touched={touched.password}
                                            secureTextEntry
                                            containerStyle={styles.inputContainer}
                                        />

                                        <TextInputComp
                                            label="CONFIRM_PASSWORD_LABEL"
                                            required
                                            underline
                                            placeholder="*************"
                                            onChangeText={handleChange('confirmPassword')}
                                            onBlur={handleBlur('confirmPassword')}
                                            value={values.confirmPassword}
                                            error={!!errors.confirmPassword}
                                            touched={touched.confirmPassword}
                                            secureTextEntry
                                            containerStyle={styles.inputContainer}
                                        />

                                        <ButtonComp
                                            title="SIGN_UP"
                                            onPress={handleSubmit as any}
                                            style={styles.signupButton}
                                            textStyle={styles.signupButtonText}
                                        />
                                    </View>
                                )}
                            </Formik>

                            <View style={styles.registerPromptRow}>
                                <TextComp text="ALREADY_HAVE_ACCOUNT_SIGNUP" style={styles.alreadyHaveAccountText} />
                                <TouchableOpacity onPress={handleLogin}>
                                    <TextComp text="LOGIN_HERE" style={styles.loginText} />
                                </TouchableOpacity>
                            </View>
                        </BlurView>
                    </ScrollView>
                </KeyboardAvoidingView>
            </ImageBackground>
        </WrapperContainer>
    );
};

export default Register;
