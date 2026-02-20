import { Colors } from '@/styles/colors';
import fontFamily from '@/styles/fontFamily';
import { moderateScale } from '@/styles/scaling';
import { StyleSheet } from 'react-native';

const CHART_HEIGHT = moderateScale(120);

export default StyleSheet.create({
    card: {
        backgroundColor: Colors.surface,
        borderRadius: moderateScale(16),
        padding: moderateScale(16),
        marginBottom: moderateScale(20),
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.06,
        shadowRadius: 4,
        elevation: 2,
    },
    value: {
        fontSize: moderateScale(24),
        fontFamily: fontFamily.bold,
        color: Colors.text,
    },
    labelRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: moderateScale(4),
        gap: moderateScale(6),
    },
    label: {
        fontSize: moderateScale(13),
        fontFamily: fontFamily.regular,
        color: Colors.brandPurple,
    },
    change: {
        fontSize: moderateScale(13),
        fontFamily: fontFamily.bold,
    },
    changePositive: {
        color: Colors.success,
    },
    changeNegative: {
        color: Colors.error,
    },
    chartContainer: {
        marginTop: moderateScale(16),
        minHeight: CHART_HEIGHT,
        overflow: 'hidden',
        borderRadius: moderateScale(8),
        flex: 1,
    },
});
