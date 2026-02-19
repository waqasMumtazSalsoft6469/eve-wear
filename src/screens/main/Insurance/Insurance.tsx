import HeaderComp from '@/components/HeaderComp';
import InsurancePlanCard from '@/components/InsurancePlanCard';
import SegmentedControl from '@/components/SegmentedControl';
import WrapperContainer from '@/components/WrapperContainer';
import { Colors } from '@/styles/colors';
import { devLog } from '@/utils/logger';
import React, { useCallback, useMemo, useState } from 'react';
import { ScrollView, View } from 'react-native';
import styles from './styles';

const SEGMENTS = ['Life Insurance', 'Health Insurance'];

interface PlanItem {
    id: string;
    title: string;
    description: string;
    gradientColors: readonly [string, string];
}

const LIFE_PLANS: PlanItem[] = [
    {
        id: 'bronze',
        title: 'Bronze Plan',
        description:
            'Basic coverage with lower premiums. Ideal for those who rarely need medical care.',
        gradientColors: Colors.insuranceBronze,
    },
    {
        id: 'silver',
        title: 'Silver Plan',
        description:
            'Moderate coverage with balanced premiums and out-of-pocket costs.',
        gradientColors: Colors.insuranceSilver,
    },
    {
        id: 'gold',
        title: 'Gold Plan',
        description:
            'Comprehensive coverage with higher premiums but lower out-of-pocket costs.',
        gradientColors: Colors.insuranceGold,
    },
    {
        id: 'platinum',
        title: 'Platinum Plan',
        description:
            'Premium coverage with the highest premiums and the lowest out-of-pocket costs.',
        gradientColors: Colors.insurancePlatinum,
    },
];

const Insurance: React.FC = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleSegmentSelect = useCallback((index: number) => {
        setSelectedIndex(index);
    }, []);

    const handleRequestQuote = useCallback(
        (planId?: string) => {
            devLog('Request quote', { planId, type: SEGMENTS[selectedIndex] });
        },
        [selectedIndex]
    );

    const plans = useMemo(() => LIFE_PLANS, []);

    return (
        <WrapperContainer style={styles.container}>
            <HeaderComp
                title="Insurance Plans"
                showBack={false}
                leftIcon="menu"
                iconColor={Colors.brandPurple}
                rightIcon="notification"
                titleStyle={styles.headerTitle}
            />
            <View style={styles.content}>
                <View style={styles.segmentWrap}>
                    <SegmentedControl
                        segments={SEGMENTS}
                        selectedIndex={selectedIndex}
                        onSelect={handleSegmentSelect}
                    />
                </View>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.listContent}
                >
                    {plans.map((plan) => (
                        <InsurancePlanCard
                            key={plan.id}
                            planId={plan.id}
                            title={plan.title}
                            description={plan.description}
                            gradientColors={plan.gradientColors}
                            onRequestQuote={handleRequestQuote}
                        />
                    ))}
                </ScrollView>
            </View>
        </WrapperContainer>
    );
};

export default React.memo(Insurance);
