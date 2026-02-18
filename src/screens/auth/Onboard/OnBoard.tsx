import React, { useMemo } from 'react';
import { Image, ScrollView, TouchableOpacity, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { localImages } from '@/assets/images';
import ButtonComp from '@/components/ButtonComp';
import MyIcons from '@/components/MyIcons';
import TextComp from '@/components/TextComp';
import WrapperContainer from '@/components/WrapperContainer';
import { useFadeSlide } from '@/hooks/animations/useFadeSlide';
import { usePressScale } from '@/hooks/animations/usePressScale';
import { useStagger } from '@/hooks/animations/useStagger';
import { AuthStackParamList } from '@/navigation/types';
import { moderateScale } from '@/styles/scaling';
import { consumeFirstOnBoardAfterLaunch } from '@/utils/splashState';
import styles from './styles';

const STAGGER_DELAY = 80;
/** Delay after splash so onboarding animation is visible. Not used after logout. */
const ANIMATION_DELAY_AFTER_SPLASH = 550;

const OnBoard = () => {
    const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
    const initialDelay = useMemo(
        () => (consumeFirstOnBoardAfterLaunch() ? ANIMATION_DELAY_AFTER_SPLASH : 0),
        []
    );

    const contentAnimation = useFadeSlide({
        duration: 450,
        translateY: 35,
        delay: initialDelay,
    });
    const imageSectionStyle = useStagger(0, STAGGER_DELAY, initialDelay).animatedStyle;
    const titleStyle = useStagger(1, STAGGER_DELAY, initialDelay).animatedStyle;
    const descriptionStyle = useStagger(2, STAGGER_DELAY, initialDelay).animatedStyle;
    const footerStyle = useStagger(3, STAGGER_DELAY, initialDelay).animatedStyle;
    const { animatedStyle: getStartedStyle, onPressIn, onPressOut } = usePressScale();
    const { animatedStyle: skipStyle, onPressIn: skipPressIn, onPressOut: skipPressOut } = usePressScale();

    const handleGetStarted = () => {
        navigation.navigate('Login');
    };

    const handleSkip = () => {
        navigation.navigate('Login');
    };

    return (
        <WrapperContainer style={styles.container}>
            <ScrollView>
                <Animated.View style={contentAnimation.animatedStyle}>
                    <Animated.View style={imageSectionStyle}>
                        <View style={styles.imageContainer}>
                            <TouchableOpacity
                                style={styles.skipButton}
                                onPress={handleSkip}
                                onPressIn={skipPressIn}
                                onPressOut={skipPressOut}
                                activeOpacity={1}
                            >
                                <Animated.View style={[styles.skipRow, skipStyle]}>
                                    <TextComp text="Skip" style={styles.skipText} />
                                    <MyIcons name="skip" size={moderateScale(14)} />
                                </Animated.View>
                            </TouchableOpacity>
                            <Image
                                source={localImages.onboardBg}
                                style={styles.bgImage}
                                resizeMode="stretch"
                            />
                        </View>
                    </Animated.View>

                    <View style={styles.contentContainer}>
                        <Animated.View style={titleStyle}>
                            <TextComp
                                text="Welcome to Eve Wear"
                                style={styles.title}
                            />
                        </Animated.View>
                        <Animated.View style={descriptionStyle}>
                            <TextComp
                                text="Your Personal Wellness Companion. We're Here To Support You On Your Journey To Better Health And Well-Being."
                                style={styles.description}
                            />
                        </Animated.View>
                    </View>

                    <Animated.View style={[styles.footer, footerStyle]}>
                        <TouchableOpacity
                            onPress={handleGetStarted}
                            onPressIn={onPressIn}
                            onPressOut={onPressOut}
                            activeOpacity={1}
                        >
                            <Animated.View style={getStartedStyle}>
                                <ButtonComp
                                    title="Get Started"
                                    onPress={handleGetStarted}
                                    style={styles.getStartedButton}
                                    textStyle={styles.getStartedButtonText}
                                />
                            </Animated.View>
                        </TouchableOpacity>
                    </Animated.View>
                </Animated.View>
            </ScrollView>

        </WrapperContainer >
    );
};

export default OnBoard;
