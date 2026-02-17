import { Colors } from '@/styles/colors';
import fontFamily from '@/styles/fontFamily';
import { height, moderateScale } from '@/styles/scaling';
import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

const useRTLStyles = (isRTL: boolean) => {
    const colors = Colors;

    return useMemo(() => StyleSheet.create({
        wrapper: {
            flex: 1,
            backgroundColor: colors.background,
        },
        gradientContainer: {
            paddingBottom: moderateScale(20),
            borderBottomLeftRadius: moderateScale(40),
            borderBottomRightRadius: moderateScale(40),
            backgroundColor: colors.background
        },
        calendarSection: {
            paddingHorizontal: moderateScale(16),
            marginTop: moderateScale(10),

        },
        calendarHeader: {
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: moderateScale(10),
        },
        monthText: {
            fontSize: moderateScale(16),
            fontFamily: fontFamily.medium,
            color: colors.text,
            marginLeft: moderateScale(8),
        },
        calendarStrip: {
            flexDirection: isRTL ? 'row-reverse' : 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        dateItem: {
            alignItems: 'center',
            paddingVertical: moderateScale(8),
            paddingHorizontal: moderateScale(12),
            borderRadius: moderateScale(20),
        },
        activeDateItem: {
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
        },
        dayName: {
            fontSize: moderateScale(12),
            fontFamily: fontFamily.regular,
            color: colors.text,
            opacity: 0.8,
        },
        dateNumber: {
            fontSize: moderateScale(16),
            fontFamily: fontFamily.bold,
            color: colors.text,
            marginTop: moderateScale(4),
        },
        cycleSection: {
            alignItems: 'center',
            zIndex: 1,
            backgroundColor: colors.background
        },
        cycleCircle: {
            width: moderateScale(220),
            height: moderateScale(220),
            borderRadius: moderateScale(110),
            backgroundColor: colors.background,
            justifyContent: 'center',
            alignItems: 'center',
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.1,
            shadowRadius: 10,
            elevation: 5,
        },
        cycleInnerContent: {
            alignItems: 'center',
        },
        dayLabel: {
            fontSize: moderateScale(14),
            fontFamily: fontFamily.medium,
            color: colors.textSecondary,
        },
        dayValue: {
            fontSize: moderateScale(48),
            fontFamily: fontFamily.bold,
            color: colors.text,
        },
        phaseLabel: {
            fontSize: moderateScale(16),
            fontFamily: fontFamily.medium,
            color: colors.text,
        },
        predictionCard: {
            margin: moderateScale(16),
            padding: moderateScale(16),
            borderRadius: moderateScale(20),
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#FFEBEB',
        },
        predictionText: {
            flex: 1,
            fontSize: moderateScale(14),
            fontFamily: fontFamily.medium,
            color: colors.text,
        },
        logText: {
            fontSize: moderateScale(12),
            fontFamily: fontFamily.bold,
            color: '#FF4B4B',
            textDecorationLine: 'underline',
            marginTop: moderateScale(4),
        },
        remindersSection: {
            paddingBottom: moderateScale(20),
            backgroundColor: colors.background,

        },
        reminderHeader: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: moderateScale(16),
            marginBottom: moderateScale(12),
        },
        sectionTitle: {
            fontSize: moderateScale(18),
            fontFamily: fontFamily.bold,
            color: colors.text,
        },
        viewAllText: {
            fontSize: moderateScale(14),
            fontFamily: fontFamily.medium,
            color: '#FF8C69',
        },
        reminderList: {
            paddingHorizontal: moderateScale(16),
            backgroundColor: colors.background,

        },
        reminderCard: {
            flexDirection: isRTL ? 'row-reverse' : 'row',
            alignItems: 'center',
            backgroundColor: colors.surface,
            padding: moderateScale(12),
            borderRadius: moderateScale(16),
            marginBottom: moderateScale(12),
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.05,
            shadowRadius: 4,
            elevation: 2,
        },
        reminderImageContainer: {
            width: moderateScale(48),
            height: moderateScale(48),
            borderRadius: moderateScale(12),
            backgroundColor: colors.background,
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: moderateScale(12),
        },
        reminderInfo: {
            flex: 1,
        },
        reminderTitle: {
            fontSize: moderateScale(16),
            fontFamily: fontFamily.medium,
            color: colors.text,
        },
        reminderTime: {
            fontSize: moderateScale(12),
            fontFamily: fontFamily.regular,
            color: colors.textSecondary,
            marginTop: moderateScale(2),
        },
    }), [isRTL, colors]);
};

export default useRTLStyles;
