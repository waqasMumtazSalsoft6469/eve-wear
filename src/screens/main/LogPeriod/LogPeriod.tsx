import HeaderComp from '@/components/HeaderComp';
import WrapperContainer from '@/components/WrapperContainer';
import ButtonComp from '@/components/ButtonComp';
import CalendarComp, { DateData, getMarkedDatesForRange } from '@/components/CalendarComp';
import { Colors } from '@/styles/colors';
import React, { useMemo, useState } from 'react';
import { ScrollView, View } from 'react-native';
import styles from './styles';
import routes from '@/constants/routes';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { MainStackParamList } from '@/navigation/types';

const LogPeriod: React.FC = () => {
    const navigation = useNavigation<NavigationProp<MainStackParamList>>();
    const [rangeStart, setRangeStart] = useState<string | null>(null);
    const [rangeEnd, setRangeEnd] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
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

    const handleSubmit = () => {
        if (!rangeStart) return;
        setIsLoading(true);
        // TODO: Call API to save period (rangeStart, rangeEnd)
        setTimeout(() => {
            setIsLoading(false);
            navigation.navigate(routes.main.ovulationFertility);
        }, 800);
    };

    return (
        <WrapperContainer style={styles.container}>
            <HeaderComp
                showBack={true}
                leftIcon="backBlack"
                title="Log Period"
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
                <ButtonComp
                    title="Save"
                    onPress={handleSubmit}
                    loading={isLoading}
                    disabled={!rangeStart}
                    style={styles.saveButton}
                    textStyle={styles.saveButtonText}
                />
            </ScrollView>
        </WrapperContainer>
    );
};

export default LogPeriod;
