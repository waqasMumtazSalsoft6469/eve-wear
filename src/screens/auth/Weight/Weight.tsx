import ButtonComp from '@/components/ButtonComp';
import OnboardingHeader from '@/components/OnboardingHeader';
import SegmentedControl from '@/components/SegmentedControl';
import TextComp from '@/components/TextComp';
import WeightRuler from '@/components/WeightRuler';
import WrapperContainer from '@/components/WrapperContainer';
import routes from '@/constants/routes';
import { AuthStackParamList } from '@/navigation/types';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useCallback, useMemo, useState } from 'react';
import { ScrollView, View } from 'react-native';
import styles from './styles';
import { Colors } from '@/styles/colors';

const TOTAL_STEPS = 5;
const STEP_INDEX = 3;

const KG_MIN = 30;
const KG_MAX = 200;
const KG_STEP = 0.5;
const LBS_MIN = 66;
const LBS_MAX = 440;
const LBS_STEP = 1;

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

    const rulerValue = useMemo(
        () => (unitIndex === 1 ? weightKg : Math.round(weightKg * 2.205)),
        [unitIndex, weightKg]
    );
    const rulerMin = unitIndex === 1 ? KG_MIN : LBS_MIN;
    const rulerMax = unitIndex === 1 ? KG_MAX : LBS_MAX;
    const rulerStep = unitIndex === 1 ? KG_STEP : LBS_STEP;

    const handleRulerChange = useCallback(
        (v: number) => {
            if (unitIndex === 1) {
                setWeightKg(v);
            } else {
                setWeightKg(Math.round(v / 2.205 * 10) / 10);
            }
        },
        [unitIndex]
    );

    const valueFormat = useCallback((v: number) => String(rulerStep >= 1 ? Math.round(v) : v), [rulerStep]);

    return (
        <WrapperContainer style={styles.container}>
            <OnboardingHeader stepIndex={STEP_INDEX} totalSteps={TOTAL_STEPS} onSkip={handleSkip} />
            <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                <TextComp text="What's your Weight?" style={styles.subtitle} />
                <View style={styles.segmentWrap}>
                    <SegmentedControl
                        segments={['lbs', 'kg']}
                        selectedIndex={unitIndex}
                        onSelect={handleSegmentSelect}
                        gradientColors={Colors.gradientSecondary}
                    />
                </View>
                <View style={styles.valueRow}>
                    <TextComp text={displayValue} style={styles.valueNumber} />
                    <TextComp text={unitLabel} style={styles.valueUnit} />
                </View>
                <View style={styles.rulerWrap}>
                    <WeightRuler
                        min={rulerMin}
                        max={rulerMax}
                        step={rulerStep}
                        value={rulerValue}
                        onValueChange={handleRulerChange}
                        valueFormat={valueFormat}
                    />
                </View>
            </ScrollView>
            <View style={styles.footer}>
                <ButtonComp title="Next" onPress={handleNext} variant="premium" />
            </View>
        </WrapperContainer>
    );
};

export default React.memo(Weight);
