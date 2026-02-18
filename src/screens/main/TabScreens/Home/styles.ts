import { Colors } from '@/styles/colors';
import fontFamily from '@/styles/fontFamily';
import { moderateScale } from '@/styles/scaling';
import { StyleSheet, I18nManager } from 'react-native';

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    gradientContainer: {
        paddingBottom: moderateScale(20),
        borderBottomLeftRadius: moderateScale(40),
        borderBottomRightRadius: moderateScale(40),
        backgroundColor: Colors.background
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
    calendarStripLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(123, 55, 128, 0.6)',
        borderRadius: moderateScale(50),
        padding: moderateScale(10),
        gap: moderateScale(8),

    },
    monthText: {
        fontSize: moderateScale(16),
        fontFamily: fontFamily.medium,
        color: Colors.white,
        marginLeft: moderateScale(8),
    },
    calendarStrip: {
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    dateItem: {
        alignItems: 'center',
        paddingVertical: moderateScale(6),
        paddingHorizontal: moderateScale(14),
        borderRadius: moderateScale(30),
    },
    activeDateItem: {
        backgroundColor: Colors.orange,
        borderRadius: moderateScale(30),
    },
    dayName: {
        fontSize: moderateScale(12),
        fontFamily: fontFamily.regular,
        color: Colors.white,
        opacity: 0.8,
    },
    dateNumber: {
        fontSize: moderateScale(16),
        fontFamily: fontFamily.bold,
        color: Colors.white,
        marginTop: moderateScale(4),
    },
    cycleSection: {
        alignItems: 'center',
        zIndex: 1,
        backgroundColor: Colors.background,
        marginTop: moderateScale(20),
    },
    cycleCircle: {
        width: moderateScale(220),
        height: moderateScale(220),
        borderRadius: moderateScale(110),
        backgroundColor: Colors.background,
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
        color: Colors.textSecondary,
    },
    dayValue: {
        fontSize: moderateScale(48),
        fontFamily: fontFamily.bold,
        color: Colors.text,
    },
    phaseLabel: {
        fontSize: moderateScale(16),
        fontFamily: fontFamily.medium,
        color: Colors.text,
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
        color: Colors.text,
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
        backgroundColor: Colors.background,

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
        color: Colors.text,
    },
    viewAllText: {
        fontSize: moderateScale(14),
        fontFamily: fontFamily.medium,
        color: '#FF8C69',
    },
    reminderList: {
        paddingHorizontal: moderateScale(16),
        backgroundColor: Colors.background,

    },
    reminderCard: {
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        alignItems: 'center',
        backgroundColor: Colors.surface,
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
        backgroundColor: Colors.background,
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
        color: Colors.text,
    },
    reminderTime: {
        fontSize: moderateScale(12),
        fontFamily: fontFamily.regular,
        color: Colors.textSecondary,
        marginTop: moderateScale(2),
    },
});

export default styles;
