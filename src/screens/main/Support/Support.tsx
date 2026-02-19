import ButtonComp from '@/components/ButtonComp';
import HeaderComp from '@/components/HeaderComp';
import TextComp from '@/components/TextComp';
import TextInputComp from '@/components/TextInputComp';
import WrapperContainer from '@/components/WrapperContainer';
import { useFadeSlide } from '@/hooks/animations/useFadeSlide';
import { Colors } from '@/styles/colors';
import { devLog } from '@/utils/logger';
import React, { useCallback, useState } from 'react';
import { ScrollView, View } from 'react-native';
import styles from './styles';

const Support: React.FC = () => {
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');


    const handleSubmit = useCallback(() => {
        devLog('Submit support', { subject, message });
    }, [subject, message]);

    return (
        <WrapperContainer style={styles.container}>
            <HeaderComp
                title="Contact Support"
                showBack={false}
                leftIcon="menu"
                iconColor={Colors.brandPurple}
                rightIcon="notification"
                titleStyle={styles.headerTitle}
            />
            <View style={styles.content}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.scrollContent}
                    keyboardShouldPersistTaps="handled"
                >
                    <View style={styles.formCard}>
                            <TextInputComp
                                label="Subject"
                                required
                                placeholder="Enter subject"
                                value={subject}
                                onChangeText={setSubject}
                                containerStyle={styles.inputInner}
                                labelStyle={styles.inputLabel}
                                placeholderTextColor={Colors.textSecondary}
                                inputContainerStyle={styles.inputContainer}
                            />
                            <TextInputComp
                                label="Message"
                                placeholder="Write message..."
                                value={message}
                                onChangeText={setMessage}
                                multiline
                                numberOfLines={4}
                                containerStyle={styles.inputInner}
                                inputStyle={styles.messageInput}
                                labelStyle={styles.inputLabel}
                                placeholderTextColor={Colors.textSecondary}
                                inputContainerStyle={styles.inputContainer}
                            />

                    </View>
                    <ButtonComp
                        title="Submit"
                        onPress={handleSubmit}
                        variant="premium"
                        style={styles.submitButton}
                    />
                    <TextComp
                        text="For immediate assistance, email us at support@evewear.com"
                        style={styles.supportEmail}
                    />
                </ScrollView>
            </View>
        </WrapperContainer>
    );
};

export default React.memo(Support);
