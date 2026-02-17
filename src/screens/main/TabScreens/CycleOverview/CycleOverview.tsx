import HeaderComp from '@/components/HeaderComp';
import TextComp from '@/components/TextComp';
import WrapperContainer from '@/components/WrapperContainer';
import { Colors } from '@/styles/colors';
import { moderateScale } from '@/styles/scaling';
import React from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import MyIcons from '@/components/MyIcons';

const CycleOverview: React.FC = () => {

    const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    const currentMonthData = Array.from({ length: 31 }, (_, i) => i + 1);

    // Placeholder Logic for highlighting
    const periodDays = [12, 13, 14, 15, 16];
    const periodStart = 12; // Start of period
    const periodEnd = 16;
    const selectedDay = 1; // Highlighted 1st day as per image

    const isPeriodDay = (day: number) => periodDays.includes(day);
    const isPeriodStart = (day: number) => day === periodStart;
    const isPeriodEnd = (day: number) => day === periodEnd;
    const isSelected = (day: number) => day === selectedDay;

    // Helper to add empty slots for start of month
    // Assuming Jan 2026 starts on Thursday (index 4) for this mock
    const blanks = Array.from({ length: 4 }, (_, i) => null);

    const renderCalendarGrid = () => {
        return (
            <View>
                <View style={styles.daysRow}>
                    {days.map((day, index) => (
                        <View key={`header-${index}`} style={{ width: moderateScale(36), alignItems: 'center' }}>
                            <TextComp
                                text={day}
                                style={styles.dayLabel}
                            />
                        </View>
                    ))}
                </View>

                <View style={styles.dateGrid}>
                    {blanks.map((_, index) => (
                        <View key={`blank-${index}`} style={styles.dateCell} />
                    ))}

                    {currentMonthData.map((day) => {
                        const isP = isPeriodDay(day);
                        const isStart = isPeriodStart(day);
                        const isSel = isSelected(day);

                        const cellStyles: any[] = [styles.dateCell];
                        const textStyles: any[] = [styles.dateText];

                        if (isP) {
                            cellStyles.push(styles.periodDay);
                            if (isStart) {
                                cellStyles.push(styles.periodStart);
                                textStyles.push(styles.selectedDayText);
                            }
                        }

                        if (isSel) {
                            cellStyles.push(styles.selectedDay);
                            textStyles.push(styles.selectedDayText);
                        }

                        return (
                            <TouchableOpacity
                                key={day}
                                style={cellStyles}
                            >
                                <TextComp text={day.toString()} style={textStyles} />
                            </TouchableOpacity>
                        );
                    })}
                </View>
            </View>
        );
    };


    return (
        <WrapperContainer style={styles.container}>
            <HeaderComp
                title="Cycle Overview"
                iconColor={Colors.brandPurple}
                rightIcon="notification"
                titleStyle={{ color: Colors.brandPurple }}
            />
            <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>

                {/* Calendar Card */}
                <View style={styles.calendarCard}>
                    <View style={styles.calendarHeader}>
                        <TouchableOpacity style={styles.arrowButton}>
                            <MyIcons name="back" size={moderateScale(14)} stroke={Colors.text} />
                        </TouchableOpacity>

                        <TextComp text="January 2026" style={styles.monthText} />

                        <TouchableOpacity style={styles.arrowButton}>
                            <MyIcons name="back" size={moderateScale(14)} stroke={Colors.text} style={{ transform: [{ rotate: '180deg' }] }} />
                        </TouchableOpacity>
                    </View>

                    {renderCalendarGrid()}
                </View>

                {/* Your Cycle Section */}
                <TextComp text="Your Cycle" style={styles.sectionTitle} />

                <View style={styles.cycleCard}>
                    <View style={styles.dropIconContainer}>
                        <View style={{ width: 14, height: 14, borderRadius: 0, borderBottomLeftRadius: 7, borderBottomRightRadius: 7, borderTopLeftRadius: 7, backgroundColor: Colors.secondary, transform: [{ rotate: '-45deg' }] }} />
                    </View>
                    <View style={styles.cycleInfo}>
                        <TextComp
                            text="Average cycle length: 28 days"
                            style={styles.cycleText}
                        />
                        <View style={styles.nextPeriodBadge}>
                            <TextComp
                                text="Next period: Nov 1, 2024"
                                style={styles.nextPeriodText}
                            />
                        </View>
                    </View>
                </View>

            </ScrollView>
        </WrapperContainer>
    );
};

export default CycleOverview;
