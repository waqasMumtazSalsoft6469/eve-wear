import HeaderComp from '@/components/HeaderComp';
import TextComp from '@/components/TextComp';
import WrapperContainer from '@/components/WrapperContainer';
import MyIcons from '@/components/MyIcons';
import { Colors } from '@/styles/colors';
import { moderateScale } from '@/styles/scaling';
import React from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import styles from './styles';

const CYCLES = [
    { id: '1', range: 'Jan 12 - Feb 9', days: '28 days' },
    { id: '2', range: 'Feb 10 - Mar 8', days: '27 days' },
    { id: '3', range: 'Mar 9 - Apr 6', days: '29 days' },
    { id: '4', range: 'Apr 7 - May 4', days: '28 days' },
    { id: '5', range: 'May 5 - May 31', days: '28 days' },
    { id: '6', range: 'Jun 2 - Jun 30', days: '28 days' },
    { id: '7', range: 'Jul 1 - Jul 28', days: '28 days' },
];

const CycleHistory: React.FC = () => {
    return (
        <WrapperContainer style={styles.container}>
            <HeaderComp
                showBack
                leftIcon="backBlack"
                title="Cycle History"
                iconColor={Colors.brandPurple}
                titleStyle={{ color: Colors.brandPurple }}
            />
            <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                {CYCLES.map((item) => (
                    <TouchableOpacity key={item.id} style={styles.card} activeOpacity={0.7}>
                        <View style={styles.iconWrap}>
                            <MyIcons name="dateTime" size={moderateScale(24)} />
                        </View>
                        <View style={styles.cardBody}>
                            <TextComp text={item.range} style={styles.cardRange} />
                            <TextComp text={item.days} style={styles.cardDays} />
                        </View>
                        <View style={styles.arrowRight}>
                            <MyIcons name="back" size={moderateScale(18)} stroke={Colors.gray400} style={{ transform: [{ rotate: '180deg' }] }} />
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </WrapperContainer>
    );
};

export default CycleHistory;
