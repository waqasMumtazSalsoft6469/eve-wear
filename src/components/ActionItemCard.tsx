import TextComp from '@/components/TextComp';
import { Colors } from '@/styles/colors';
import fontFamily from '@/styles/fontFamily';
import { moderateScale } from '@/styles/scaling';
import React, { useCallback } from 'react';
import { I18nManager, StyleSheet, TouchableOpacity, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { usePressScale } from '@/hooks/animations/usePressScale';

export interface ActionItemCardProps {
    title: string;
    iconBackgroundColor: string;
    iconPlaceholder: React.ReactNode;
    onPress: () => void;
}

const ActionItemCard: React.FC<ActionItemCardProps> = ({
    title,
    iconBackgroundColor,
    iconPlaceholder,
    onPress,
}) => {
    const { animatedStyle, onPressIn, onPressOut } = usePressScale();

    const handlePress = useCallback(() => {
        onPress();
    }, [onPress]);

    return (
        <TouchableOpacity
            onPress={handlePress}
            onPressIn={onPressIn}
            onPressOut={onPressOut}
            activeOpacity={1}
        >
            <Animated.View style={[styles.card, animatedStyle]}>
                <View style={[styles.iconWrap, { backgroundColor: iconBackgroundColor }]}>
                    {iconPlaceholder}
                </View>
                <TextComp text={title} style={styles.title} />
                <TextComp text="›" style={styles.chevron} />
            </Animated.View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        alignItems: 'center',
        backgroundColor: Colors.white,
        borderRadius: moderateScale(12),
        padding: moderateScale(16),
        marginBottom: moderateScale(12),
        shadowColor: Colors.black,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.06,
        shadowRadius: 4,
        elevation: 2,
    },
    iconWrap: {
        width: moderateScale(44),
        height: moderateScale(44),
        borderRadius: moderateScale(12),
        alignItems: 'center',
        justifyContent: 'center',
        marginEnd: moderateScale(14),
    },
    title: {
        flex: 1,
        fontSize: moderateScale(16),
        fontFamily: fontFamily.bold,
        color: Colors.text,
    },
    chevron: {
        fontSize: moderateScale(20),
        fontFamily: fontFamily.regular,
        color: Colors.textSecondary,
        marginStart: moderateScale(8),
    },
});

export default React.memo(ActionItemCard);
