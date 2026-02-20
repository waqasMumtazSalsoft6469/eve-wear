import HeaderComp from '@/components/HeaderComp';
import PatternChart from '@/components/PatternChart';
import TextComp from '@/components/TextComp';
import WrapperContainer from '@/components/WrapperContainer';
import { Colors } from '@/styles/colors';
import React from 'react';
import { ScrollView, View } from 'react-native';
import styles from './styles';

const INSIGHT_TEXT =
    'Your Cycle Length Is Consistent, Averaging 28 Days Over The Past Three Months. This Indicates A Regular Menstrual Cycle, Which Is Generally Associated With Good Reproductive Health. However, Individual Variations Can Occur, And It\'s Essential To Monitor Any Significant Changes Or Irregularities.';

const DISCLAIMER =
    'This Information Is For General Wellness Purposes And Should Not Replace Professional Medical Advice. Consult A Healthcare Provider For Personalized Guidance.';

const InsightsThreads: React.FC = () => {
    return (
        <WrapperContainer style={styles.container}>
            <HeaderComp
                showBack
                leftIcon="backBlack"
                title="Insights & Trends"
                iconColor={Colors.brandPurple}
                titleStyle={{ color: Colors.brandPurple }}
            />
            <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                <TextComp text="Cycle Patterns" style={styles.sectionTitle} />
                <PatternChart value="28 Days" label="Last 3 months" change="+2%" />

                <TextComp text="Insights" style={styles.sectionTitle} />
                <View style={styles.insightCard}>
                    <TextComp text={INSIGHT_TEXT} style={styles.insightText} />
                </View>

                <View style={styles.disclaimerCard}>
                    <View style={styles.disclaimerIconWrap}>
                        <TextComp text="i" style={styles.disclaimerIcon} />
                    </View>
                    <TextComp text={DISCLAIMER} style={styles.disclaimerText} />
                </View>
            </ScrollView>
        </WrapperContainer>
    );
};

export default InsightsThreads;
