import ButtonComp from '@/components/ButtonComp';
import OnboardingHeader from '@/components/OnboardingHeader';
import TextComp from '@/components/TextComp';
import WrapperContainer from '@/components/WrapperContainer';
import { Colors } from '@/styles/colors';
import routes from '@/constants/routes';
import fontFamily from '@/styles/fontFamily';
import { moderateScale, verticalScale } from '@/styles/scaling';
import React, { useCallback, useState } from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList } from '@/navigation/types';
import styles from './styles';

const TOTAL_STEPS = 5;
const STEP_INDEX = 0;

const BODY_TEXT =
    'Eve Wear Uses Your Health Data To Provide Personalized Insights And Recommendations. You Can Revoke Consent At Any Time In Settings.';

const HealthConsent: React.FC = () => {
    const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
    const [agreed, setAgreed] = useState(true);

    const handleSkip = useCallback(() => {
        navigation.navigate(routes.auth.dateOfBirth);
    }, [navigation]);

    const handleNext = useCallback(() => {
        navigation.navigate(routes.auth.dateOfBirth);
    }, [navigation]);

    const handleToggleAgree = useCallback(() => {
        setAgreed((prev) => !prev);
    }, []);

    return (
        <WrapperContainer style={styles.container}>
            <OnboardingHeader
                stepIndex={STEP_INDEX}
                totalSteps={TOTAL_STEPS}
                onSkip={handleSkip}
            />
            <ScrollView
                style={styles.scroll}
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                <TextComp text="Privacy First" style={styles.title} />
                <TextComp text="Health Data Consent" style={styles.subtitle} />
                <TextComp text={BODY_TEXT} style={styles.body} />
                <TouchableOpacity
                    onPress={handleToggleAgree}
                    activeOpacity={0.8}
                    style={styles.checkboxRow}
                >
                    <View style={[styles.checkbox, agreed && styles.checkboxChecked]}>
                        {agreed && <TextComp text="✓" style={styles.checkmark} />}
                    </View>
                    <TextComp
                        text="I Agree To The Privacy Policy & Terms Of Service."
                        style={styles.checkboxLabel}
                    />
                </TouchableOpacity>
            </ScrollView>
            <View style={styles.footer}>
                <ButtonComp
                    title="Next"
                    onPress={handleNext}
                    variant="premium"
                />
            </View>
        </WrapperContainer>
    );
};

export default React.memo(HealthConsent);
