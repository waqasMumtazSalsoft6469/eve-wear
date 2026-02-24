import HeaderComp from '@/components/HeaderComp';
import ButtonComp from '@/components/ButtonComp';
import TextInputComp from '@/components/TextInputComp';
import WrapperContainer from '@/components/WrapperContainer';
import { Colors } from '@/styles/colors';
import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import styles from './styles';

const EditProfile: React.FC = () => {
    const [fullName, setFullName] = React.useState('Alexa William');
    const [email, setEmail] = React.useState('alexa@email.com');
    const [dateOfBirth, setDateOfBirth] = React.useState('1990-05-15');

    return (
        <WrapperContainer style={styles.container}>
            <HeaderComp
                title="Edit Profile"
                leftIcon="backBlack"
                rightIcon="notification"
                iconColor={Colors.brandPurple}
                titleStyle={styles.headerTitle}
            />

            <KeyboardAvoidingView
                style={styles.content}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            >
                <ScrollView
                    style={styles.scroll}
                    contentContainerStyle={styles.scrollContent}
                    showsVerticalScrollIndicator={false}
                    keyboardShouldPersistTaps="handled"
                >
                    <View style={styles.formCard}>
                        <TextInputComp
                            label="Full Name"
                            value={fullName}
                            onChangeText={setFullName}
                            placeholder="Enter full name"
                            placeholderTextColor={Colors.gray300}
                            labelStyle={styles.label}
                            containerStyle={styles.inputWrap}
                            inputContainerStyle={styles.inputContainer}
                            inputStyle={styles.inputText}
                        />

                        <TextInputComp
                            label="Email"
                            value={email}
                            onChangeText={setEmail}
                            placeholder="Enter email"
                            placeholderTextColor={Colors.gray300}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            labelStyle={styles.label}
                            containerStyle={styles.inputWrap}
                            inputContainerStyle={styles.inputContainer}
                            inputStyle={styles.inputText}
                        />

                        <TextInputComp
                            label="Date of Birth"
                            value={dateOfBirth}
                            onChangeText={setDateOfBirth}
                            placeholder="YYYY-MM-DD"
                            placeholderTextColor={Colors.gray300}
                            labelStyle={styles.label}
                            containerStyle={styles.inputWrapLast}
                            inputContainerStyle={styles.inputContainer}
                            inputStyle={styles.inputText}
                        />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>

            <View style={styles.bottomButtonWrap}>
                <ButtonComp
                    title="Save Changes"
                    onPress={() => {}}
                    variant="premium"
                    height={52}
                    style={styles.bottomButton}
                />
            </View>
        </WrapperContainer>
    );
};

export default EditProfile;

