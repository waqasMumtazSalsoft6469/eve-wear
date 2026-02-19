import BillingHistoryItem from '@/components/BillingHistoryItem';
import HeaderComp from '@/components/HeaderComp';
import WrapperContainer from '@/components/WrapperContainer';
import { useStagger } from '@/hooks/animations/useStagger';
import { Colors } from '@/styles/colors';
import { devLog } from '@/utils/logger';
import React, { useCallback, useMemo } from 'react';
import { ScrollView, View } from 'react-native';
import Animated from 'react-native-reanimated';
import styles from './styles';

const STAGGER_DELAY = 70;

interface BillingEntry {
    id: string;
    amount: string;
    date: string;
}

const BILLING_ENTRIES: BillingEntry[] = [
    { id: '1', amount: '$12.99', date: 'Oct 20, 2025' },
    { id: '2', amount: '$12.99', date: 'Oct 20, 2025' },
    { id: '3', amount: '$12.99', date: 'Oct 20, 2025' },
    { id: '4', amount: '$12.99', date: 'Oct 20, 2025' },
];

const BillingHistory: React.FC = () => {
    const handleDownload = useCallback((entryId: string) => {
        devLog('Download invoice:', entryId);
    }, []);

    const stagger0 = useStagger(0, STAGGER_DELAY).animatedStyle;
    const stagger1 = useStagger(1, STAGGER_DELAY).animatedStyle;
    const stagger2 = useStagger(2, STAGGER_DELAY).animatedStyle;
    const stagger3 = useStagger(3, STAGGER_DELAY).animatedStyle;
    const staggerStyles = useMemo(
        () => [stagger0, stagger1, stagger2, stagger3],
        [stagger0, stagger1, stagger2, stagger3]
    );

    return (
        <WrapperContainer style={styles.container}>
            <HeaderComp
                title="Billing History"
                showBack={true}
                iconColor={Colors.brandPurple}
                rightIcon="notification"
                titleStyle={styles.headerTitle}
            />
            <View style={styles.content}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.listContent}
                >
                    {BILLING_ENTRIES.map((entry, index) => (
                        <Animated.View key={entry.id} style={staggerStyles[index]}>
                            <BillingHistoryItem
                                amount={entry.amount}
                                date={entry.date}
                                onDownloadInvoice={() => handleDownload(entry.id)}
                            />
                        </Animated.View>
                    ))}
                </ScrollView>
            </View>
        </WrapperContainer>
    );
};

export default React.memo(BillingHistory);
