import ButtonComp from '@/components/ButtonComp';
import OnboardingHeader from '@/components/OnboardingHeader';
import TextComp from '@/components/TextComp';
import WrapperContainer from '@/components/WrapperContainer';
import { Colors } from '@/styles/colors';
import fontFamily from '@/styles/fontFamily';
import { moderateScale, verticalScale } from '@/styles/scaling';
import React, { useCallback, useState } from 'react';
import { ScrollView, Switch, View } from 'react-native';
import { loginAction } from '@/redux/actions/auth';
import styles from './styles';

const TOTAL_STEPS = 5;
const STEP_INDEX = 4;

const HealthPreferences: React.FC = () => {
    const [cycleTracking, setCycleTracking] = useState(true);
    const [aiGuidance, setAiGuidance] = useState(true);
    const [wellnessReminders, setWellnessReminders] = useState(true);

    const handleSkip = useCallback(() => {
        const userData = {
            id: 1,
            email: 'user@evewear.com',
            username: 'user',
            firstName: 'User',
            lastName: 'Wellness',
            token: 'static_token_12345',
        };
        loginAction(userData);
    }, []);

    const handleFinish = useCallback(() => {
        const userData = {
            id: 1,
            email: 'user@evewear.com',
            username: 'user',
            firstName: 'User',
            lastName: 'Wellness',
            token: 'static_token_12345',
        };
        loginAction(userData);
    }, []);

    return (
        <WrapperContainer style={styles.container}>
            <OnboardingHeader stepIndex={STEP_INDEX} totalSteps={TOTAL_STEPS} onSkip={handleSkip} />
            <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                <TextComp text="Let's Begin Your Wellness Journey" style={styles.title} />
                <TextComp text="Health Preferences" style={styles.subtitle} />
                <View style={styles.preferenceRow}>
                    <View style={styles.preferenceText}>
                        <TextComp text="Cycle Tracking" style={styles.prefTitle} />
                        <TextComp text="Track Your Menstrual Cycle And Predict Your Period" style={styles.prefDesc} />
                    </View>
                    <Switch
                        value={cycleTracking}
                        onValueChange={setCycleTracking}
                        trackColor={{ false: Colors.gray200, true: Colors.brandPurple }}
                        thumbColor={Colors.white}
                    />
                </View>
                <View style={styles.preferenceRow}>
                    <View style={styles.preferenceText}>
                        <TextComp text="AI Guidance" style={styles.prefTitle} />
                        <TextComp text="Get Personalized Insights And Recommendations" style={styles.prefDesc} />
                    </View>
                    <Switch
                        value={aiGuidance}
                        onValueChange={setAiGuidance}
                        trackColor={{ false: Colors.gray200, true: Colors.brandPurple }}
                        thumbColor={Colors.white}
                    />
                </View>
                <View style={styles.preferenceRow}>
                    <View style={styles.preferenceText}>
                        <TextComp text="Wellness Reminders" style={styles.prefTitle} />
                        <TextComp text="Receive Reminders For Wellness Activities" style={styles.prefDesc} />
                    </View>
                    <Switch
                        value={wellnessReminders}
                        onValueChange={setWellnessReminders}
                        trackColor={{ false: Colors.gray200, true: Colors.brandPurple }}
                        thumbColor={Colors.white}
                    />
                </View>
            </ScrollView>
            <View style={styles.footer}>
                <ButtonComp title="Finish Setup" onPress={handleFinish} variant="premium" style={styles.button} />
            </View>
        </WrapperContainer>
    );
};

export default React.memo(HealthPreferences);
