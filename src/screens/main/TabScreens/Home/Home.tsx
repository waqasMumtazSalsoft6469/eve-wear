import MyIcons from '@/components/MyIcons';
import HomeHeaderComp from '@/components/HomeHeaderComp';
import TextComp from '@/components/TextComp';
import WrapperContainer from '@/components/WrapperContainer';
import { Colors } from '@/styles/colors';
import { moderateScale } from '@/styles/scaling';
import React from 'react';
import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Animated, {
    Easing,
    interpolate,
    useAnimatedStyle,
    useSharedValue,
    withDelay,
    withTiming
} from 'react-native-reanimated';
import Svg, { Circle } from 'react-native-svg';
import styles from './styles';
import { localImages } from '@/assets/images';
import routes from '@/constants/routes';
import { NavigationProp, useFocusEffect, useNavigation } from '@react-navigation/native';
import { MainStackParamList } from '@/navigation/types';

const Home: React.FC = () => {
    const navigation = useNavigation<NavigationProp<MainStackParamList>>();
    const cycleTextProgress = useSharedValue(0);

    useFocusEffect(
        React.useCallback(() => {
            cycleTextProgress.value = 0;
            cycleTextProgress.value = withDelay(
                120,
                withTiming(1, {
                    duration: 650,
                    easing: Easing.out(Easing.cubic),
                })
            );
        }, [cycleTextProgress])
    );

    const dayLabelAnimatedStyle = useAnimatedStyle(() => ({
        opacity: cycleTextProgress.value,
        transform: [{ translateY: (1 - cycleTextProgress.value) * 8 }],
    }));

    const dayValueAnimatedStyle = useAnimatedStyle(() => ({
        opacity: cycleTextProgress.value,
        transform: [{ translateY: (1 - cycleTextProgress.value) * 12 }],
    }));

    const phaseLabelAnimatedStyle = useAnimatedStyle(() => ({
        opacity: cycleTextProgress.value,
        transform: [{ translateY: (1 - cycleTextProgress.value) * 6 }],
    }));

    const gradientRadius = moderateScale(40);
    const gradientRadiusAnimatedStyle = useAnimatedStyle(() => ({
        borderBottomLeftRadius: interpolate(cycleTextProgress.value, [0, 1], [0, gradientRadius]),
        borderBottomRightRadius: interpolate(cycleTextProgress.value, [0, 1], [0, gradientRadius]),
    }));

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
            image: localImages.product1,
        },
        {
            title: 'Eat Healthy Diet',
            time: '12:00 PM',
            image: localImages.product2,
        },
    ];

    return (
        <WrapperContainer style={styles.wrapper}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ backgroundColor: Colors.background }}>
                {/* Header Section with Gradient */}
                <Animated.View style={[styles.gradientContainer, gradientRadiusAnimatedStyle]}>
                    <LinearGradient
                        colors={[Colors.tabPrimary, Colors.tabSecondary]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={StyleSheet.absoluteFill}
                    />
                    <HomeHeaderComp onNotificationPress={() => navigation.navigate(routes.main.notification)}/>

                    <View style={styles.calendarSection}>
                        <View style={styles.calendarHeader}>
                            <MyIcons name="back" size={moderateScale(16)} />
                            <TextComp text="Jan 2026" style={styles.monthText} />
                        </View>

                        <View style={styles.calendarStrip}>
                            <View style={styles.calendarStripLeft}>

                                {dates.map((item, index) => (
                                    <TouchableOpacity
                                        key={index}
                                        style={[styles.dateItem, item.active && styles.activeDateItem]}
                                    >
                                        <TextComp text={item.day} style={styles.dayName} />
                                        <TextComp text={item.date.toString()} style={styles.dateNumber} />
                                    </TouchableOpacity>
                                ))}
                            </View>
                            <TouchableOpacity>
                                <MyIcons name="back" size={moderateScale(20)} style={{ transform: [{ rotate: '180deg' }] }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </Animated.View>
                <View style={styles.cycleSection}>
                    <View style={styles.cycleCircle}>
                        <View style={StyleSheet.absoluteFill}>
                            <Svg height="100%" width="100%" viewBox="0 0 100 100">
                                <Circle
                                    cx="50"
                                    cy="50"
                                    r="46"
                                    stroke="#E0E0E0"
                                    strokeWidth="3"
                                    fill="none"
                                    strokeDasharray="1, 2"
                                />
                                <Circle
                                    cx="50"
                                    cy="50"
                                    r="46"
                                    stroke="#FF8C69"
                                    strokeWidth="4"
                                    fill="none"
                                    strokeDasharray="40, 100"
                                    strokeLinecap="round"
                                />
                            
                            </Svg>
                        </View>
                        <LinearGradient
                            colors={['#F9F0FF', '#FFFFFF']}
                            style={[StyleSheet.absoluteFill, { borderRadius: moderateScale(110), margin: moderateScale(15) }]}
                        />
                        <View style={styles.cycleInnerContent}>
                            <Animated.View style={dayLabelAnimatedStyle}>
                                <TextComp text="Day" style={styles.dayLabel} />
                            </Animated.View>
                            <Animated.View style={dayValueAnimatedStyle}>
                                <TextComp text="23" style={styles.dayValue} />
                            </Animated.View>
                            <Animated.View style={phaseLabelAnimatedStyle}>
                                <TextComp text="Luteal Phase" style={styles.phaseLabel} />
                            </Animated.View>
                        </View>
                    </View>
                </View>

                <View style={styles.predictionCard}>
                    <View style={{ flex: 1 }}>
                        <TextComp
                            text="Your Period Is Predicted To Start In 5 Days"
                            style={styles.predictionText}
                        />
                        <TouchableOpacity onPress={() => navigation.navigate(routes.main.logPeriod)}>
                            <TextComp text="Log Period" style={styles.logText} />
                        </TouchableOpacity>
                    </View>
                    <MyIcons name="bloodDrop" size={moderateScale(32)} />
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
                                        source={item.image as any}
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
