import ButtonComp from '@/components/ButtonComp';
import TextComp from '@/components/TextComp';
import TextInputComp from '@/components/TextInputComp';
import WrapperContainer from '@/components/WrapperContainer';
import { AuthStackParamList } from '@/navigation/types';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import {
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    TouchableOpacity,
    View,
    I18nManager
} from 'react-native';
import styles from './styles';
import { moderateScale } from '@/styles/scaling';
import HeaderComp from '@/components/HeaderComp';
import MyIcons from '@/components/MyIcons';

type SignupScreenNavigationProp = NativeStackNavigationProp<AuthStackParamList>;

const Signup = () => {

    const navigation = useNavigation<SignupScreenNavigationProp>();
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (name: string, value: string) => {
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        setIsLoading(true);
        console.log('Form submitted:', formData);
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    };

    return (
        <WrapperContainer>
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            >
                <HeaderComp customStyle={styles.header} />
                <ScrollView
                    style={styles.scrollView}
                    showsVerticalScrollIndicator={false}
                    keyboardShouldPersistTaps="handled"
                >

                    <View style={styles.headerContainer}>
                        <TextComp text="REGISTER" style={styles.headerTitle} />
                        <View style={styles.loginContainer}>
                            <TextComp text="ALREADY HAVE AN ACCOUNT?" style={styles.loginText} />
                            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                                <TextComp text="LOG IN" style={styles.loginLink} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.formContainer}>
                        <View style={styles.inputGroup}>
                            <TextComp text="FULL NAME" style={styles.label} />
                            <TextInputComp
                                placeholder="YOUR NAME"
                                value={formData.fullName}
                                onChangeText={(text) => handleChange('fullName', text)}
                            />
                        </View>

                        <View style={styles.inputGroup}>
                            <TextComp text="EMAIL ADDRESS" style={styles.label} />
                            <TextInputComp
                                placeholder="YOUR EMAIL"
                                value={formData.email}
                                onChangeText={(text) => handleChange('email', text)}
                                keyboardType="email-address"
                                autoCapitalize="none"
                            />
                        </View>

                        <View style={styles.inputGroup}>
                            <TextComp text="PHONE NUMBER" style={styles.label} />
                            <TextInputComp
                                placeholder="YOUR PHONE"
                                value={formData.phone}
                                onChangeText={(text) => handleChange('phone', text)}
                                keyboardType="phone-pad"
                            />
                        </View>

                        <View style={styles.inputGroup}>
                            <TextComp text="PASSWORD" style={styles.label} />
                            <TextInputComp
                                placeholder="WRITE HERE"
                                value={formData.password}
                                onChangeText={(text) => handleChange('password', text)}
                                secureTextEntry={!showPassword}
                                rightIcon={<MyIcons name="back" size={moderateScale(14)} stroke="white" />}
                                onRightIconPress={() => setShowPassword(!showPassword)}

                            />
                        </View>

                        <View style={styles.inputGroup}>
                            <TextComp text="CONFIRM PASSWORD" style={styles.label} />
                            <TextInputComp
                                placeholder="WRITE HERE"
                                value={formData.confirmPassword}
                                onChangeText={(text) => handleChange('confirmPassword', text)}
                                secureTextEntry={!showConfirmPassword}
                                rightIcon={<MyIcons name="back" size={moderateScale(14)} stroke="white" />}
                                onRightIconPress={() => setShowConfirmPassword(!showConfirmPassword)}
                            />
                        </View>

                        <ButtonComp
                            title="NEXT"
                            onPress={handleSubmit}
                            loading={isLoading}
                            style={styles.submitButton}
                        />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </WrapperContainer>
    );
};

export default Signup;
