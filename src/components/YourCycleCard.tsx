import React from 'react';
import { View, StyleSheet, ViewStyle, I18nManager } from 'react-native';
import TextComp from './TextComp';
import { Colors } from '@/styles/colors';
import fontFamily from '@/styles/fontFamily';
import { moderateScale } from '@/styles/scaling';

export interface YourCycleCardProps {
    /** Section heading above the card (e.g. "Your Cycle") */
    sectionTitle?: string;
    /** Main line (e.g. "Average cycle length: 28 days") */
    cycleLengthText: string;
    /** Badge text (e.g. "Next period: Nov 1, 2024") */
    nextPeriodText: string;
    /** Optional style overrides */
    containerStyle?: ViewStyle;
    cardStyle?: ViewStyle;
}

const YourCycleCard: React.FC<YourCycleCardProps> = ({
    sectionTitle = 'Your Cycle',
    cycleLengthText,
    nextPeriodText,
    containerStyle,
    cardStyle,
}) => {
    return (
        <View style={[styles.container, containerStyle]}>
            <TextComp text={sectionTitle} style={styles.sectionTitle} />
            <View style={[styles.cycleCard, cardStyle]}>
                <View style={styles.dropIconContainer}>
                    <View style={styles.dropIcon} />
                </View>
                <View style={styles.cycleInfo}>
                    <TextComp text={cycleLengthText} style={styles.cycleText} />
                    <View style={styles.nextPeriodBadge}>
                        <TextComp text={nextPeriodText} style={styles.nextPeriodText} />
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {},
    sectionTitle: {
        fontSize: moderateScale(18),
        fontFamily: fontFamily.bold,
        color: Colors.text,
        marginBottom: moderateScale(16),
        textAlign: I18nManager.isRTL ? 'right' : 'left',
    },
    cycleCard: {
        backgroundColor: Colors.surface,
        borderRadius: moderateScale(20),
        padding: moderateScale(16),
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    dropIconContainer: {
        width: moderateScale(48),
        height: moderateScale(48),
        borderRadius: moderateScale(24),
        backgroundColor: '#FFEBEB',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: I18nManager.isRTL ? 0 : moderateScale(16),
        marginLeft: I18nManager.isRTL ? moderateScale(16) : 0,
    },
    dropIcon: {
        width: 14,
        height: 14,
        borderRadius: 0,
        borderBottomLeftRadius: 7,
        borderBottomRightRadius: 7,
        borderTopLeftRadius: 7,
        backgroundColor: Colors.secondary,
        transform: [{ rotate: '-45deg' }],
    },
    cycleInfo: {
        flex: 1,
    },
    cycleText: {
        fontSize: moderateScale(16),
        fontFamily: fontFamily.regular,
        color: Colors.text,
        marginBottom: moderateScale(8),
        textAlign: I18nManager.isRTL ? 'right' : 'left',
    },
    nextPeriodBadge: {
        backgroundColor: '#FBD2D3',
        paddingHorizontal: moderateScale(12),
        paddingVertical: moderateScale(6),
        borderRadius: moderateScale(8),
        alignSelf: I18nManager.isRTL ? 'flex-end' : 'flex-start',
    },
    nextPeriodText: {
        fontSize: moderateScale(12),
        fontFamily: fontFamily.regular,
        color: Colors.secondary,
    },
});

export default YourCycleCard;
