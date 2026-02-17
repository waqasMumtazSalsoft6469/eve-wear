import { Colors } from '@/styles/colors';
import fontFamily from '@/styles/fontFamily';
import { moderateScale } from '@/styles/scaling';
import { StyleSheet, I18nManager } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    content: {
        flex: 1,
        paddingHorizontal: moderateScale(16),
        paddingTop: moderateScale(20),
    },
    calendarCard: {
        backgroundColor: Colors.surface,
        borderRadius: moderateScale(20),
        padding: moderateScale(16),
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        marginBottom: moderateScale(20),
    },
    calendarHeader: {
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: moderateScale(16),
    },
    monthText: {
        fontSize: moderateScale(16),
        fontFamily: fontFamily.semiBold,
        color: Colors.text,
    },
    daysRow: {
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        justifyContent: 'space-between',
        marginBottom: moderateScale(8),
    },
    dayLabel: {
        width: moderateScale(36),
        textAlign: 'center',
        fontSize: moderateScale(12),
        fontFamily: fontFamily.medium,
        color: Colors.gray400,
    },
    dateGrid: {
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    dateCell: {
        width: moderateScale(36),
        height: moderateScale(36),
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: moderateScale(8),
        borderRadius: moderateScale(18),
    },
    dateText: {
        fontSize: moderateScale(14),
        fontFamily: fontFamily.medium,
        color: Colors.text,
    },
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
        shadowColor: "#000",
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
    cycleInfo: {
        flex: 1,
    },
    cycleText: {
        fontSize: moderateScale(16),
        fontFamily: fontFamily.medium,
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
        fontFamily: fontFamily.medium,
        color: Colors.secondary,
    },
    arrowButton: {
        padding: moderateScale(8),
    },
    periodDay: {
        backgroundColor: '#FBD2D3',
    },
    periodStart: {
        backgroundColor: '#CD0105', // Use secondary color or a specific red
        borderRadius: moderateScale(18),
    },
    periodEnd: {
        backgroundColor: '#CD0105',
        borderRadius: moderateScale(18),
    },
    selectedDay: {
        backgroundColor: '#CD0105',
    },
    selectedDayText: {
        color: Colors.white,
        fontFamily: fontFamily.bold,
    },
});

export default styles;
