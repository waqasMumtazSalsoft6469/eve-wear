import React from 'react';
import { Image, ScrollView, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { localImages } from '@/assets/images';
import ButtonComp from '@/components/ButtonComp';
import MyIcons from '@/components/MyIcons';
import TextComp from '@/components/TextComp';
import WrapperContainer from '@/components/WrapperContainer';
import { AuthStackParamList } from '@/navigation/types';
import { moderateScale } from '@/styles/scaling';
import styles from './styles';

const OnBoard = () => {
    const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

    const handleGetStarted = () => {
        navigation.navigate('Login');
    };

    const handleSkip = () => {
        navigation.navigate('Login');
    };

    return (
        <WrapperContainer style={styles.container}>
            <ScrollView>
                <View style={styles.imageContainer}>
                    <TouchableOpacity
                        style={styles.skipButton}
                        onPress={handleSkip}
                    >
                        <View style={styles.skipRow}>
                            <TextComp text="Skip" style={styles.skipText} />
                            <MyIcons name="skip" size={moderateScale(14)} />
                        </View>
                    </TouchableOpacity>
                    <Image
                        source={localImages.onboardBg}
                        style={styles.bgImage}
                        resizeMode="stretch"
                    />
                </View>

                <View style={styles.contentContainer}>
                    <TextComp
                        text="Welcome to Eve Wear"
                        style={styles.title}
                    />
                    <TextComp
                        text="Your Personal Wellness Companion. We're Here To Support You On Your Journey To Better Health And Well-Being."
                        style={styles.description}
                    />
                </View>

                <View style={styles.footer}>
                    <ButtonComp
                        title="Get Started"
                        onPress={handleGetStarted}
                        style={styles.getStartedButton}
                        textStyle={styles.getStartedButtonText}
                    />
                </View>
            </ScrollView>

        </WrapperContainer >
    );
};

export default OnBoard;
