import CalendarComp, { DateData, getMarkedDatesForRange } from '@/components/CalendarComp';
import HeaderComp from '@/components/HeaderComp';
import WrapperContainer from '@/components/WrapperContainer';
import YourCycleCard from '@/components/YourCycleCard';
import { Colors } from '@/styles/colors';
import React, { useMemo, useState } from 'react';
import { ScrollView, View } from 'react-native';
import styles from './styles';

const OvulationFertility: React.FC = () => {
    const [rangeStart, setRangeStart] = useState<string | null>(null);
    const [rangeEnd, setRangeEnd] = useState<string | null>(null);
    const [currentMonth, setCurrentMonth] = useState<string>(() => {
        const n = new Date();
        return `${n.getFullYear()}-${String(n.getMonth() + 1).padStart(2, '0')}`;
    });

    const markedDates = useMemo(
        () => getMarkedDatesForRange(rangeStart, rangeEnd),
        [rangeStart, rangeEnd]
    );

    const onDayPress = (day: DateData) => {
        const dateStr = day.dateString;
        if (rangeStart === null) {
            setRangeStart(dateStr);
            setRangeEnd(null);
            return;
        }
        if (rangeEnd === null) {
            const start = new Date(rangeStart);
            const tapped = new Date(dateStr);
            if (tapped < start) {
                setRangeStart(dateStr);
                setRangeEnd(null);
            } else {
                setRangeEnd(dateStr);
            }
            return;
        }
        setRangeStart(dateStr);
        setRangeEnd(null);
    };

    const onMonthChange = (month: DateData) => {
        setCurrentMonth(month.dateString.slice(0, 7));
    };


    return (
        <WrapperContainer style={styles.container}>
            <HeaderComp
                showBack={true}
                leftIcon="backBlack"
                title="Ovulation & Fertility"
                iconColor={Colors.brandPurple}
                titleStyle={{ color: Colors.brandPurple }}
            />
            <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
                <View style={styles.calendarCard}>
                    <CalendarComp
                        current={currentMonth}
                        onMonthChange={onMonthChange}
                        onDayPress={onDayPress}
                        markedDates={markedDates}
                        markingType="period"
                        firstDay={0}
                    />
                </View>

                <YourCycleCard
                    cycleLengthText="Average cycle length: 28 days"
                    nextPeriodText="Next period: Nov 1, 2024"
                />
            </ScrollView>
        </WrapperContainer>
    );
};

export default OvulationFertility;
