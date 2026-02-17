import MyIcons from '@/components/MyIcons';
import HomeHeaderComp from '@/components/HomeHeaderComp';
import TextComp from '@/components/TextComp';
import WrapperContainer from '@/components/WrapperContainer';
import { useTheme } from '@/context/ThemeContext';
import useIsRTL from '@/hooks/useIsRTL';
import { Colors } from '@/styles/colors';
import { moderateScale } from '@/styles/scaling';
import React from 'react';
import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Svg, { Circle } from 'react-native-svg';
import useRTLStyles from './styles';

const Home: React.FC = () => {
    const isRTL = useIsRTL();
    const styles = useRTLStyles(isRTL);
    const colors = Colors;

    // Placeholder data
    const dates = [
        { day: 'Mon', date: 12, active: true },
        { day: 'Tue', date: 13 },
        { day: 'Wed', date: 14 },
        { day: 'Thu', date: 15 },
        { day: 'Fri', date: 16 },
    ];

    const reminders = [
        {
            title: 'Take Vitamin D',
            time: '08:00 AM',
            image: 'https://i.pravatar.cc/100?u=vitamind',
        },
        {
            title: 'Eat Healthy Diet',
            time: '12:00 PM',
            image: 'https://i.pravatar.cc/100?u=diet',
        },
    ];

    return (
        <WrapperContainer style={styles.wrapper}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Header Section with Gradient */}
                <LinearGradient
                    colors={[colors.tabPrimary, colors.tabSecondary]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.gradientContainer}
                >
                    <HomeHeaderComp />

                    <View style={styles.calendarSection}>
                        <View style={styles.calendarHeader}>
                            <MyIcons name="back" size={moderateScale(16)} stroke={colors.text} />
                            <TextComp text="Jan 2026" style={styles.monthText} />
                        </View>

                        <View style={styles.calendarStrip}>
                            {dates.map((item, index) => (
                                <TouchableOpacity
                                    key={index}
                                    style={[styles.dateItem, item.active && styles.activeDateItem]}
                                >
                                    <TextComp text={item.day} style={styles.dayName} />
                                    <TextComp text={item.date.toString()} style={styles.dateNumber} />
                                </TouchableOpacity>
                            ))}
                            <TouchableOpacity>
                                <MyIcons name="back" size={moderateScale(20)} stroke={colors.text} style={{ transform: [{ rotate: '180deg' }] }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </LinearGradient>
                <View style={styles.cycleSection}>
                    <View style={styles.cycleCircle}>
                        <View style={StyleSheet.absoluteFill}>
                            <Svg height="100%" width="100%" viewBox="0 0 100 100">
                                <Circle
                                    cx="50"
                                    cy="50"
                                    r="45"
                                    stroke="#E0E0E0"
                                    strokeWidth="2"
                                    fill="none"
                                    strokeDasharray="1, 2"
                                />
                                <Circle
                                    cx="50"
                                    cy="50"
                                    r="45"
                                    stroke="#FF8C69"
                                    strokeWidth="4"
                                    fill="none"
                                    strokeDasharray="40, 100"
                                    strokeLinecap="round"
                                />
                                <Circle
                                    cx="85"
                                    cy="75"
                                    r="3"
                                    fill="#FF8C69"
                                />
                            </Svg>
                        </View>
                        <LinearGradient
                            colors={['#F9F0FF', '#FFFFFF']}
                            style={[StyleSheet.absoluteFill, { borderRadius: moderateScale(110), margin: moderateScale(15) }]}
                        />
                        <View style={styles.cycleInnerContent}>
                            <TextComp text="Day" style={styles.dayLabel} />
                            <TextComp text="23" style={styles.dayValue} />
                            <TextComp text="Luteal Phase" style={styles.phaseLabel} />
                        </View>
                    </View>
                </View>

                <View style={styles.predictionCard}>
                    <View style={{ flex: 1 }}>
                        <TextComp
                            text="Your Period Is Predicted To Start In 5 Days"
                            style={styles.predictionText}
                        />
                        <TouchableOpacity>
                            <TextComp text="Log Period" style={styles.logText} />
                        </TouchableOpacity>
                    </View>
                    <MyIcons name="tabBag" size={moderateScale(32)} fill="#FF4B4B" />
                </View>

                <View style={styles.remindersSection}>
                    <View style={styles.reminderHeader}>
                        <TextComp text="Upcoming Reminders" style={styles.sectionTitle} />
                        <TouchableOpacity>
                            <TextComp text="View All" style={styles.viewAllText} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.reminderList}>
                        {reminders.map((item, index) => (
                            <View key={index} style={styles.reminderCard}>
                                <View style={styles.reminderImageContainer}>
                                    <Image
                                        source={{ uri: item.image }}
                                        style={{ width: '100%', height: '100%', borderRadius: moderateScale(12) }}
                                    />
                                </View>
                                <View style={styles.reminderInfo}>
                                    <TextComp text={item.title} style={styles.reminderTitle} />
                                    <TextComp text={item.time} style={styles.reminderTime} />
                                </View>
                            </View>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </WrapperContainer >
    );
};

export default Home;
