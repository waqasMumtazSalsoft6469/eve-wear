import MyIcons from '@/components/MyIcons';
import TextComp from '@/components/TextComp';
import { Colors } from '@/styles/colors';
import fontFamily from '@/styles/fontFamily';
import { moderateScale } from '@/styles/scaling';
import React, { useCallback } from 'react';
import { I18nManager, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export interface OnboardingHeaderProps {
    /** Current step 0-based (0 to totalSteps - 1) */
    stepIndex: number;
    /** Total number of steps (e.g. 5) */
    totalSteps: number;
    onSkip: () => void;
}

const OnboardingHeader: React.FC<OnboardingHeaderProps> = ({
    stepIndex,
    totalSteps,
    onSkip,
}) => {
    const navigation = useNavigation();

    const handleBack = useCallback(() => {
        navigation.goBack();
    }, [navigation]);

    return (
        <View>
            <TouchableOpacity onPress={onSkip} hitSlop={styles.hitSlop} style={styles.skipWrap}>
                <TextComp text="Skip" style={styles.skipText} />
                <MyIcons name="skip" size={moderateScale(14)} stroke={Colors.brandPurple} />
            </TouchableOpacity>
            <View style={[styles.container, I18nManager.isRTL && styles.containerRTL]}>
                <TouchableOpacity onPress={handleBack} hitSlop={styles.hitSlop} style={styles.backWrap}>
                    <MyIcons name="backBlack" size={moderateScale(24)} />
                </TouchableOpacity>
                <View style={styles.progressWrap}>
                    {Array.from({ length: totalSteps }).map((_, i) => (
                        <View
                            key={i}
                            style={[
                                styles.segment,
                                i <= stepIndex ? styles.segmentFilled : styles.segmentEmpty,
                            ]}
                        />
                    ))}
                </View>

            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        alignItems: 'center',
        paddingHorizontal: moderateScale(16),
        paddingVertical: moderateScale(12),
        marginBottom: moderateScale(4),
    },
    containerRTL: {
        flexDirection: 'row-reverse',
    },
    hitSlop: { top: 10, bottom: 10, left: 10, right: 10 } as any,
    backWrap: {
        marginEnd: moderateScale(12),
    },
    progressWrap: {
        flex: 1,
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        gap: moderateScale(4),
    },
    segment: {
        flex: 1,
        height: moderateScale(6),
        borderRadius: moderateScale(3),
    },
    segmentFilled: {
        backgroundColor: Colors.brandPurple,
    },
    segmentEmpty: {
        backgroundColor: Colors.gray200,
    },
    skipWrap: {
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        alignItems: 'center',
        marginStart: moderateScale(12),
        alignSelf: 'flex-end',
        paddingRight: moderateScale(12),
        paddingTop: moderateScale(12),
    },
    skipText: {
        fontSize: moderateScale(14),
        fontFamily: fontFamily.bold,
        color: Colors.text,
        marginEnd: moderateScale(4),
    },
});

export default React.memo(OnboardingHeader);
