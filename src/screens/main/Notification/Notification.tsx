import HeaderComp from '@/components/HeaderComp';
import TextComp from '@/components/TextComp';
import WrapperContainer from '@/components/WrapperContainer';
import SegmentedControl from '@/components/SegmentedControl';
import MyIcons, { IconName } from '@/components/MyIcons';
import { Colors } from '@/styles/colors';
import { moderateScale } from '@/styles/scaling';
import React, { useState } from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import styles from './styles';

const TODAY_ITEMS: { id: string; title: string; time: string; body: string; icon: IconName; iconBg: string; unread: boolean }[] = [
    { id: '1', title: 'Streak Achieved', time: '25 min', body: "You've reached a new streak of 7 days of tracking your symptoms.", icon: 'streak', iconBg: Colors.brandSalmon, unread: false },
    { id: '2', title: 'Cycle Consistency', time: '30 min', body: 'Your cycle length has been consistent for the past 3 months.', icon: 'cycleConsistency', iconBg: Colors.brandPurple, unread: false },
];

const EARLIER_ITEMS: { id: string; title: string; time: string; body: string; icon: IconName; iconBg: string }[] = [
    { id: '3', title: 'Badge Earned', time: 'Yesterday', body: "You've earned a badge for completing your cycle tracking for 6 months.", icon: 'badgeEarned', iconBg: Colors.brandPurple },
    { id: '4', title: 'Challenge Level Up', time: '24/1/2025', body: "You've reached a new level in the symptom tracking challenge.", icon: 'challengeLevel', iconBg: Colors.brandPurple },
];

const Notification: React.FC = () => {
    const [filterIndex, setFilterIndex] = useState(0);

    return (
        <WrapperContainer style={styles.container}>
            <HeaderComp
                showBack
                leftIcon="backBlack"
                title="Notifications"
                iconColor={Colors.brandPurple}
                titleStyle={{ color: Colors.brandPurple }}
            />
   
            <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                <TextComp text="Today" style={styles.sectionTitle} />
                {TODAY_ITEMS.map((item) => (
                    <View key={item.id} style={[styles.card, item.unread && styles.cardUnread]}>
                        <MyIcons name={item.icon} size={moderateScale(22)} />
                        <View style={styles.cardBody}>
                            <View style={styles.cardTitleRow}>
                                <TextComp text={item.title} style={styles.cardTitle} />
                                <TextComp text={item.time} style={styles.cardTime} />
                            </View>
                            <TextComp text={item.body} style={styles.cardBodyText} />
                        </View>
                    </View>
                ))}
                <TextComp text="Earlier" style={styles.sectionTitle} />
                {EARLIER_ITEMS.map((item) => (
                    <View key={item.id} style={styles.card}>
                        <MyIcons name={item.icon} size={moderateScale(22)} />
                        <View style={styles.cardBody}>
                            <View style={styles.cardTitleRow}>
                                <TextComp text={item.title} style={styles.cardTitle} />
                                <TextComp text={item.time} style={styles.cardTime} />
                            </View>
                            <TextComp text={item.body} style={styles.cardBodyText} />
                        </View>
                    </View>
                ))}
            </ScrollView>
        </WrapperContainer>
    );
};

export default Notification;
