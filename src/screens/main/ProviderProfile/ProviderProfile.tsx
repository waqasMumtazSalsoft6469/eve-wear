import HeaderComp from '@/components/HeaderComp';
import ButtonComp from '@/components/ButtonComp';
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

const ProviderProfile: React.FC = () => {
    const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();

    return (
        <WrapperContainer style={styles.container}>
            <View style={styles.topBackground} />

            <HeaderComp
                title=""
                leftIcon="backBlack"
                rightIcon="notification"
                iconColor={Colors.brandPurple}
            />

            <ScrollView
                style={styles.scroll}
                contentContainerStyle={styles.contentContainer}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.profileImageWrap}>
                    <Image source={localImages.doctor1} style={styles.profileImage} resizeMode="cover" />
                </View>

                <View style={styles.card}>
                    <TextComp text="Dr. Emily Carter" style={styles.nameText} />
                    <TextComp text="Gynecologist" style={styles.specialtyText} />
                    <TextComp text="5+ Years of Experience" style={styles.experienceYearsText} />

                    <View style={styles.contactRow}>
                        <View style={styles.contactIconWrap}>
                            <MyIcons name="callWhite" size={14} fill={Colors.white} />
                        </View>
                        <TextComp text="(555) 123-4567" style={styles.contactText} />
                    </View>

                    <View style={styles.contactRow}>
                        <View style={styles.contactIconWrap}>
                            <MyIcons name="mailWhite" size={14} fill={Colors.white} />
                        </View>
                        <TextComp text="emily_carter@email.com" style={styles.contactText} />
                    </View>

                    <TextComp text="Experience" style={styles.sectionTitle} />
                    <View style={styles.infoCard}>
                        <TextComp
                            text="Dr. Harper is a board-certified gynecologist with 5 years of experience in treating a wide range of skin conditions. She is known for her patient-centered approach and commitment to providing personalized care."
                            style={styles.infoText}
                        />
                    </View>

                    <TextComp text="Clinic Location" style={styles.sectionTitle} />
                    <View style={styles.mapCard}>
                        <Image source={localImages.map} style={{height: '100%',  resizeMode: 'cover'}} />
                    </View>

                    <TextComp text="Consultation Type" style={styles.sectionTitle} />
                    <View style={styles.consultationRow}>
                        <TouchableOpacity activeOpacity={0.85} style={[styles.consultationChip, styles.chipMuted]}>
                            <MyIcons name="inPerson" size={16} stroke={Colors.brandSalmon} />
                            <TextComp text="In-person" style={styles.chipMutedText} />
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={0.85} style={[styles.consultationChip, styles.chipActive]}>
                            <MyIcons name="videoCall" size={16} stroke={Colors.brandPurple} />
                            <TextComp text="Video Call" style={styles.chipActiveText} />
                        </TouchableOpacity>
                    </View>
                </View>

                <ButtonComp
                    title="Request Appointment"
                    onPress={() => navigation.navigate(routes.main.requestAppointment)}
                    height={50}
                    style={styles.requestButton}
                />
            </ScrollView>
        </WrapperContainer>
    );
};

export default ProviderProfile;
