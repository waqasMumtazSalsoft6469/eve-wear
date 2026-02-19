import ButtonComp from '@/components/ButtonComp';
import OnboardingHeader from '@/components/OnboardingHeader';
import TextComp from '@/components/TextComp';
import WrapperContainer from '@/components/WrapperContainer';
import SegmentedControl from '@/components/SegmentedControl';
import { Colors } from '@/styles/colors';
import routes from '@/constants/routes';
import fontFamily from '@/styles/fontFamily';
import { moderateScale, verticalScale } from '@/styles/scaling';
import React, { useCallback, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList } from '@/navigation/types';
import styles from './styles';

const TOTAL_STEPS = 5;
const STEP_INDEX = 2;
const HEIGHT_CM_MIN = 100;
const HEIGHT_CM_MAX = 250;

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

    return (
        <WrapperContainer style={styles.container}>
            <OnboardingHeader stepIndex={STEP_INDEX} totalSteps={TOTAL_STEPS} onSkip={handleSkip} />
            <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                <TextComp text="Let's Begin Your Wellness Journey" style={styles.title} />
                <TextComp text="What's your Height?" style={styles.subtitle} />
                <View style={styles.segmentWrap}>
                    <SegmentedControl
                        segments={['cm', 'ft']}
                        selectedIndex={unitIndex}
                        onSelect={handleSegmentSelect}
                    />
                </View>
                <View style={styles.valueRow}>
                    <TextComp text={displayValue} style={styles.valueNumber} />
                    <TextComp text={unitLabel} style={styles.valueUnit} />
                </View>
                <View style={styles.rulerWrap}>
                    {[160, 170, 180].map((n) => (
                        <View key={n} style={styles.rulerTick}>
                            <TextComp text={String(n)} style={styles.rulerLabel} />
                        </View>
                    ))}
                </View>
            </ScrollView>
            <View style={styles.footer}>
                <ButtonComp title="Next" onPress={handleNext} variant="premium" style={styles.button} />
            </View>
        </WrapperContainer>
    );
};

export default React.memo(Height);
