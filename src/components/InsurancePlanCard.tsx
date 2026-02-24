import ButtonComp from '@/components/ButtonComp';
import TextComp from '@/components/TextComp';
import { Colors } from '@/styles/colors';
import fontFamily from '@/styles/fontFamily';
import { moderateScale } from '@/styles/scaling';
import React, { useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export interface InsurancePlanCardProps {
    title: string;
    description: string;
    gradientColors: readonly [string, string];
    planId?: string;
    onRequestQuote: (planId?: string) => void;
}

const InsurancePlanCard: React.FC<InsurancePlanCardProps> = ({
    title,
    description,
    gradientColors,
    planId,
    onRequestQuote,
}) => {
    const handlePress = useCallback(() => {
        onRequestQuote(planId);
    }, [onRequestQuote, planId]);

    return (
        <LinearGradient
            colors={[...gradientColors]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.card}
        >
            <TextComp text={title} style={styles.title} />
            <TextComp text={description} style={styles.description} />
            <ButtonComp
                title="Request Quote"
                onPress={handlePress}
                variant="secondary"
                height={moderateScale(40)}
                style={styles.button}
                gradientColors={Colors.gradientPrimary}
            />
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    card: {
        borderRadius: moderateScale(16),
        padding: moderateScale(20),
        marginBottom: moderateScale(16),
        shadowColor: Colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.12,
        shadowRadius: 8,
        elevation: 4,
    },
    title: {
        fontSize: moderateScale(22),
        fontFamily: fontFamily.bold,
        color: Colors.white,
        marginBottom: moderateScale(12),
    },
    description: {
        fontSize: moderateScale(14),
        fontFamily: fontFamily.regular,
        color: Colors.white,
        lineHeight: moderateScale(20),
        marginBottom: moderateScale(20),
        opacity: 0.95,
    },
    button: {
        borderRadius: moderateScale(24),
    },
});

export default React.memo(InsurancePlanCard);
