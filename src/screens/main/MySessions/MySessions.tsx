import HeaderComp from '@/components/HeaderComp';
import UpcomingSessionCard from '@/components/UpcomingSessionCard';
import WrapperContainer from '@/components/WrapperContainer';
import { Colors } from '@/styles/colors';
import { devLog } from '@/utils/logger';
import React, { useCallback } from 'react';
import { ScrollView, View } from 'react-native';
import styles from './styles';
import { localImages } from '@/assets/images';

const UPCOMING_SESSION = {
    doctorName: 'Dr. Emily Carter',
    specialty: 'Gynecologist',
    clinicName: '123 Medical Centre',
    date: 'Tuesday February 8',
    time: '10:00 AM',
    address: '123 Main St, Anytown',
};

const MySessions: React.FC = () => {
    const handleJoinSession = useCallback(() => {
        devLog('Join session');
    }, []);

    return (
        <WrapperContainer style={styles.container}>
            <HeaderComp
                title="My Sessions"
                showBack={false}
                leftIcon="menu"
                iconColor={Colors.brandPurple}
                rightIcon="notification"
                titleStyle={styles.headerTitle}
            />
            <View style={styles.content}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.scrollContent}
                >
                    <UpcomingSessionCard
                        doctorName={UPCOMING_SESSION.doctorName}
                        specialty={UPCOMING_SESSION.specialty}
                        clinicName={UPCOMING_SESSION.clinicName}
                        date={UPCOMING_SESSION.date}
                        profileImageSource={localImages.doctor1}
                        time={UPCOMING_SESSION.time}
                        address={UPCOMING_SESSION.address}
                        onJoinSession={handleJoinSession}
                    />
                </ScrollView>
            </View>
        </WrapperContainer>
    );
};

export default React.memo(MySessions);
