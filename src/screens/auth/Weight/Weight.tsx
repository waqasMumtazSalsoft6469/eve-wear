import ButtonComp from '@/components/ButtonComp';
import OnboardingHeader from '@/components/OnboardingHeader';
import SegmentedControl from '@/components/SegmentedControl';
import TextComp from '@/components/TextComp';
import WrapperContainer from '@/components/WrapperContainer';
import routes from '@/constants/routes';
import { AuthStackParamList } from '@/navigation/types';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useCallback, useState } from 'react';
import { ScrollView, View } from 'react-native';
import styles from './styles';

const TOTAL_STEPS = 5;
const STEP_INDEX = 3;

const Weight: React.FC = () => {
    const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
    const [weightKg, setWeightKg] = useState(45);
    const [unitIndex, setUnitIndex] = useState(1); // 0 = lbs, 1 = kg

    const handleSkip = useCallback(() => {
        navigation.navigate(routes.auth.healthPreferences);
    }, [navigation]);

    const handleNext = useCallback(() => {
        navigation.navigate(routes.auth.healthPreferences);
    }, [navigation]);

    const handleSegmentSelect = useCallback((index: number) => {
        setUnitIndex(index);
    }, []);

    const displayValue = unitIndex === 1 ? weightKg.toFixed(1) : (weightKg * 2.205).toFixed(1);
    const unitLabel = unitIndex === 1 ? 'kg' : 'lbs';

    return (
        <WrapperContainer style={styles.container}>
            <OnboardingHeader stepIndex={STEP_INDEX} totalSteps={TOTAL_STEPS} onSkip={handleSkip} />
            <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                <TextComp text="Let's Begin Your Wellness Journey" style={styles.title} />
                <TextComp text="What's your Weight?" style={styles.subtitle} />
                <View style={styles.segmentWrap}>
                    <SegmentedControl
                        segments={['lbs', 'kg']}
                        selectedIndex={unitIndex}
                        onSelect={handleSegmentSelect}
                    />
                </View>
                <View style={styles.valueRow}>
                    <TextComp text={displayValue} style={styles.valueNumber} />
                    <TextComp text={unitLabel} style={styles.valueUnit} />
                </View>
                <View style={styles.rulerWrap}>
                    {[40, 45, 50].map((n) => (
                        <View key={n} style={styles.rulerTick}>
                            <TextComp text={String(n)} style={styles.rulerLabel} />
                        </View>
                    ))}
                </View>
            </ScrollView>
            <View style={styles.footer}>
                <ButtonComp title="Next" onPress={handleNext} variant="premium" />
            </View>
        </WrapperContainer>
    );
};

export default React.memo(Weight);
