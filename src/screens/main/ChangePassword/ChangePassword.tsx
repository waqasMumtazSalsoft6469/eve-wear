import HeaderComp from '@/components/HeaderComp';
import ButtonComp from '@/components/ButtonComp';
import TextComp from '@/components/TextComp';
import TextInputComp from '@/components/TextInputComp';
import WrapperContainer from '@/components/WrapperContainer';
import { Colors } from '@/styles/colors';
import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import styles from './styles';

const ChangePassword: React.FC = () => {
    const [currentPassword, setCurrentPassword] = React.useState('');
    const [newPassword, setNewPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');

    return (
        <WrapperContainer style={styles.container}>
            <HeaderComp
                title="Change Password"
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
                        <TextComp text="Update your password" style={styles.subtitle} />

                        <TextInputComp
                            label="Current Password"
                            value={currentPassword}
                            onChangeText={setCurrentPassword}
                            placeholder="Enter current password"
                            placeholderTextColor={Colors.gray300}
                            secureTextEntry
                            containerStyle={styles.inputWrap}
                            inputContainerStyle={styles.inputContainer}
                            inputStyle={styles.inputText}
                            labelStyle={styles.label}
                        />

                        <TextInputComp
                            label="New Password"
                            value={newPassword}
                            onChangeText={setNewPassword}
                            placeholder="Enter new password"
                            placeholderTextColor={Colors.gray300}
                            secureTextEntry
                            containerStyle={styles.inputWrap}
                            inputContainerStyle={styles.inputContainer}
                            inputStyle={styles.inputText}
                            labelStyle={styles.label}
                        />

                        <TextInputComp
                            label="Confirm New Password"
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                            placeholder="Re-enter new password"
                            placeholderTextColor={Colors.gray300}
                            secureTextEntry
                            containerStyle={styles.inputWrapLast}
                            inputContainerStyle={styles.inputContainer}
                            inputStyle={styles.inputText}
                            labelStyle={styles.label}
                        />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>

            <View style={styles.bottomButtonWrap}>
                <ButtonComp
                    title="Update Password"
                    onPress={() => {}}
                    variant="premium"
                    height={52}
                    style={styles.bottomButton}
                />
            </View>
        </WrapperContainer>
    );
};

export default ChangePassword;

