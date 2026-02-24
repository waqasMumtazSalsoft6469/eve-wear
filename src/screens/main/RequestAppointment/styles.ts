import { Colors } from '@/styles/colors';
import fontFamily from '@/styles/fontFamily';
import { moderateScale } from '@/styles/scaling';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    headerTitle: {
        color: Colors.brandPurple,
    },
    scroll: {
        flex: 1,
    },
    contentContainer: {
        paddingHorizontal: moderateScale(16),
        paddingBottom: moderateScale(24),
    },
    providerCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.surface,
        borderRadius: moderateScale(14),
        padding: moderateScale(10),
        shadowColor: Colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.06,
        shadowRadius: 6,
        elevation: 2,
        marginBottom: moderateScale(18),
    },
    providerImage: {
        width: moderateScale(92),
        height: moderateScale(92),
        borderRadius: moderateScale(10),
        backgroundColor: Colors.gray100,
    },
    providerBody: {
        flex: 1,
        marginLeft: moderateScale(10),
    },
    providerName: {
        color: Colors.gray700,
        fontFamily: fontFamily.bold,
        fontSize: moderateScale(20 / 1.2),
        marginBottom: moderateScale(2),
    },
    providerSpecialty: {
        color: Colors.gray400,
        fontFamily: fontFamily.regular,
        fontSize: moderateScale(16 / 1.2),
        marginBottom: moderateScale(6),
    },
    locationRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    locationDot: {
        width: moderateScale(16),
        height: moderateScale(16),
        borderRadius: moderateScale(8),
        backgroundColor: Colors.secondary,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: moderateScale(6),
    },
    locationText: {
        color: Colors.brandSalmon,
        fontFamily: fontFamily.regular,
        fontSize: moderateScale(16 / 1.2),
    },
    sectionTitle: {
        color: Colors.gray700,
        fontFamily: fontFamily.bold,
        fontSize: moderateScale(22 / 1.2),
        marginBottom: moderateScale(10),
    },
    calendarCard: {
        backgroundColor: Colors.surface,
        borderRadius: moderateScale(14),
        paddingHorizontal: moderateScale(12),
        paddingVertical: moderateScale(12),
        marginBottom: moderateScale(20),
        shadowColor: Colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 5,
        elevation: 2,
    },
    monthRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: moderateScale(14),
        paddingHorizontal: moderateScale(6),
    },
    nextArrow: {
        transform: [{ rotate: '180deg' }],
    },
    monthText: {
        color: Colors.gray700,
        fontFamily: fontFamily.bold,
        fontSize: moderateScale(21 / 1.2),
    },
    weekDaysRow: {
        flexDirection: 'row',
        marginBottom: moderateScale(8),
    },
    weekDayText: {
        width: `${100 / 7}%`,
        textAlign: 'center',
        color: Colors.gray300,
        fontFamily: fontFamily.regular,
        fontSize: moderateScale(16 / 1.2),
    },
    weekRow: {
        flexDirection: 'row',
        marginBottom: moderateScale(4),
    },
    dayItem: {
        width: `${100 / 7}%`,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: moderateScale(7),
    },
    dayItemActive: {
        backgroundColor: Colors.brandSalmon,
        borderRadius: moderateScale(22),
    },
    dayText: {
        color: Colors.gray700,
        fontFamily: fontFamily.regular,
        fontSize: moderateScale(20 / 1.3),
    },
    dayTextInactive: {
        color: Colors.gray200,
    },
    dayTextActive: {
        color: Colors.white,
        fontFamily: fontFamily.bold,
    },
    slotHeaderRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: moderateScale(8),
    },
    slotGroupTitle: {
        marginLeft: moderateScale(6),
        color: Colors.gray700,
        fontFamily: fontFamily.bold,
        fontSize: moderateScale(20 / 1.3),
    },
    slotWrap: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: moderateScale(8),
        marginBottom: moderateScale(18),
    },
    slotChip: {
        backgroundColor: '#F7F7F8',
        borderRadius: moderateScale(10),
        borderWidth: 1,
        borderColor: '#F1F1F2',
        paddingHorizontal: moderateScale(14),
        paddingVertical: moderateScale(10),
        minWidth: moderateScale(80),
        alignItems: 'center',
    },
    slotChipActive: {
        backgroundColor: '#FFF1EF',
        borderColor: Colors.brandSalmon,
    },
    slotText: {
        color: Colors.gray600,
        fontFamily: fontFamily.regular,
        fontSize: moderateScale(18 / 1.3),
    },
    slotTextActive: {
        color: Colors.gray700,
        fontFamily: fontFamily.bold,
    },
    confirmButton: {
        marginTop: moderateScale(10),
        borderRadius: moderateScale(28),
    },
});

export default styles;
