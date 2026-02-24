import HeaderComp from '@/components/HeaderComp';
import AppModal from '@/components/AppModal';
import ButtonComp from '@/components/ButtonComp';
import CalendarComp, { DateData } from '@/components/CalendarComp';
import MyIcons from '@/components/MyIcons';
import TextComp from '@/components/TextComp';
import WrapperContainer from '@/components/WrapperContainer';
import { localImages } from '@/assets/images';
import routes from '@/constants/routes';
import { MainStackParamList } from '@/navigation/types';
import { Colors } from '@/styles/colors';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Image, ScrollView, TouchableOpacity, View } from 'react-native';
import styles from './styles';

const MORNING_SLOTS = ['9:00 AM', '9:30 AM', '10:00 AM', '11:00 AM'];
const AFTERNOON_SLOTS = ['3:30 PM', '4:00 PM', '4:30 PM'];

const RequestAppointment: React.FC = () => {
    const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();
    const [currentMonth, setCurrentMonth] = React.useState('2026-02');
    const [selectedDate, setSelectedDate] = React.useState('2026-02-09');
    const [selectedMorningSlot, setSelectedMorningSlot] = React.useState('9:00 AM');
    const [selectedAfternoonSlot, setSelectedAfternoonSlot] = React.useState('');
    const [isAppointmentModalVisible, setIsAppointmentModalVisible] = React.useState(false);
    const markedDates = React.useMemo(
        () => ({
            [selectedDate]: {
                selected: true,
                customStyles: {
                    container: {
                        backgroundColor: Colors.brandSalmon,
                        borderRadius: 20,
                        alignItems: 'center',
                        justifyContent: 'center',
                    },
                    text: {
                        color: Colors.white,
                        textAlign: 'center',
                        includeFontPadding: false,
                    },
                },
            },
        }),
        [selectedDate]
    );
    const appointmentDateText = React.useMemo(() => {
        const date = new Date(`${selectedDate}T00:00:00`);
        return date.toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
        });
    }, [selectedDate]);
    const appointmentTimeText = selectedMorningSlot || selectedAfternoonSlot || '10:00 AM';

    return (
        <WrapperContainer style={styles.container}>
            <HeaderComp
                title="Request Appointment"
                leftIcon="backBlack"
                rightIcon="notification"
                iconColor={Colors.brandPurple}
                titleStyle={styles.headerTitle}
            />

            <ScrollView
                style={styles.scroll}
                contentContainerStyle={styles.contentContainer}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.providerCard}>
                    <Image source={localImages.doctor1} style={styles.providerImage} resizeMode="cover" />
                    <View style={styles.providerBody}>
                        <TextComp text="Dr. Emily Carter" style={styles.providerName} />
                        <TextComp text="Gynecologist" style={styles.providerSpecialty} />
                        <View style={styles.locationRow}>
                            <View style={styles.locationDot}>
                                <MyIcons name="locationWhite" size={11} />
                            </View>
                            <TextComp text="123 Medical Centre" style={styles.locationText} />
                        </View>
                    </View>
                </View>

                <TextComp text="Date" style={styles.sectionTitle} />

                <View style={styles.calendarCard}>
                    <CalendarComp
                        current={currentMonth}
                        selected={selectedDate}
                        markedDates={markedDates}
                        markingType="custom"
                        onDayPress={(day: DateData) => setSelectedDate(day.dateString)}
                        onMonthChange={(month: DateData) =>
                            setCurrentMonth(month.dateString.slice(0, 7))
                        }
                        firstDay={0}
                        hideExtraDays={false}
                    />
                </View>

                <TextComp text="Time Slot" style={styles.sectionTitle} />

                <View style={styles.slotHeaderRow}>
                    <MyIcons name="dateTime" size={16} stroke={Colors.gray500} />
                    <TextComp text="Morning Slots" style={styles.slotGroupTitle} />
                </View>
                <View style={styles.slotWrap}>
                    {MORNING_SLOTS.map(slot => {
                        const isActive = selectedMorningSlot === slot;
                        return (
                            <TouchableOpacity
                                key={slot}
                                activeOpacity={0.85}
                                onPress={() => {
                                    setSelectedMorningSlot(slot);
                                    setSelectedAfternoonSlot('');
                                }}
                                style={[styles.slotChip, isActive && styles.slotChipActive]}
                            >
                                <TextComp text={slot} style={[styles.slotText, isActive && styles.slotTextActive]} />
                            </TouchableOpacity>
                        );
                    })}
                </View>

                <View style={styles.slotHeaderRow}>
                    <MyIcons name="dateTime" size={16} stroke={Colors.gray500} />
                    <TextComp text="Afternoon Slots" style={styles.slotGroupTitle} />
                </View>
                <View style={styles.slotWrap}>
                    {AFTERNOON_SLOTS.map(slot => {
                        const isActive = selectedAfternoonSlot === slot;
                        return (
                            <TouchableOpacity
                                key={slot}
                                activeOpacity={0.85}
                                onPress={() => {
                                    setSelectedAfternoonSlot(slot);
                                    setSelectedMorningSlot('');
                                }}
                                style={[styles.slotChip, isActive && styles.slotChipActive]}
                            >
                                <TextComp text={slot} style={[styles.slotText, isActive && styles.slotTextActive]} />
                            </TouchableOpacity>
                        );
                    })}
                </View>

                <ButtonComp
                    title="Confirm Request"
                    onPress={() => setIsAppointmentModalVisible(true)}
                    variant="premium"
                    height={54}
                    style={styles.confirmButton}
                />
            </ScrollView>

            <AppModal
                isVisible={isAppointmentModalVisible}
                onClose={() => setIsAppointmentModalVisible(false)}
                type="appointment"
                title="Your appointment is confirmed!"
                message="You're All Set! We've Sent A Confirmation To Your Email."
                appointmentProviderName="Dr. Emily Carter"
                appointmentProviderSpecialty="Gynecologist"
                appointmentProviderImage={localImages.doctor1}
                appointmentDateText={appointmentDateText}
                appointmentTimeText={appointmentTimeText}
                appointmentLocationText="123 Main St, Anytown"
                primaryButtonText="View Appointments"
                onPrimaryPress={() => {
                    setIsAppointmentModalVisible(false);
                    navigation.navigate(routes.main.mySessions);
                }}
            />
        </WrapperContainer>
    );
};

export default RequestAppointment;
