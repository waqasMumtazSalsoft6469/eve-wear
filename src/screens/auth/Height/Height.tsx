import ButtonComp from '@/components/ButtonComp';
import OnboardingHeader from '@/components/OnboardingHeader';
import TextComp from '@/components/TextComp';
import WeightRuler from '@/components/WeightRuler';
import WrapperContainer from '@/components/WrapperContainer';
import SegmentedControl from '@/components/SegmentedControl';
import { Colors } from '@/styles/colors';
import routes from '@/constants/routes';
import React, { useCallback, useMemo, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList } from '@/navigation/types';
import styles from './styles';

const TOTAL_STEPS = 5;
const STEP_INDEX = 2;
const HEIGHT_CM_MIN = 100;
const HEIGHT_CM_MAX = 250;
const HEIGHT_FT_MIN = 3.2;
const HEIGHT_FT_MAX = 8.2;
const HEIGHT_FT_STEP = 0.1;

const Height: React.FC = () => {
    const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
    const [heightCm, setHeightCm] = useState(165);
    const [unitIndex, setUnitIndex] = useState(0); // 0 = cm, 1 = ft

    const handleSkip = useCallback(() => {
        navigation.navigate(routes.auth.weight);
    }, [navigation]);

    const handleNext = useCallback(() => {
        navigation.navigate(routes.auth.weight);
    }, [navigation]);

    const handleSegmentSelect = useCallback((index: number) => {
        setUnitIndex(index);
    }, []);

    const displayValue = unitIndex === 0 ? heightCm.toFixed(1) : (heightCm / 30.48).toFixed(1);
    const unitLabel = unitIndex === 0 ? 'cm' : 'ft';

    const rulerValue = useMemo(
        () => (unitIndex === 0 ? heightCm : Math.round((heightCm / 30.48) * 10) / 10),
        [unitIndex, heightCm]
    );
    const rulerMin = unitIndex === 0 ? HEIGHT_CM_MIN : HEIGHT_FT_MIN;
    const rulerMax = unitIndex === 0 ? HEIGHT_CM_MAX : HEIGHT_FT_MAX;
    const rulerStep = unitIndex === 0 ? 1 : HEIGHT_FT_STEP;

    const handleRulerChange = useCallback(
        (v: number) => {
            if (unitIndex === 0) {
                setHeightCm(v);
            } else {
                setHeightCm(Math.round(v * 30.48 * 10) / 10);
            }
        },
        [unitIndex]
    );

    const valueFormat = useCallback((v: number) => String(rulerStep >= 1 ? Math.round(v) : v), [rulerStep]);

    return (
        <WrapperContainer style={styles.container}>
            <OnboardingHeader stepIndex={STEP_INDEX} totalSteps={TOTAL_STEPS} onSkip={handleSkip} />
            <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                <TextComp text="What's your Height?" style={styles.subtitle} />
                <View style={styles.segmentWrap}>
                    <SegmentedControl
                        segments={['cm', 'ft']}
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
                <ButtonComp title="Next" onPress={handleNext} variant="premium" style={styles.button} />
            </View>
        </WrapperContainer>
    );
};

export default React.memo(Height);
