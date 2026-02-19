import { Colors } from '@/styles/colors';
import fontFamily from '@/styles/fontFamily';
import { moderateScale, verticalScale } from '@/styles/scaling';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: Colors.background },
    scroll: { flex: 1 },
    scrollContent: { paddingHorizontal: moderateScale(20), paddingBottom: verticalScale(24) },
    title: {
        fontSize: moderateScale(26),
        fontFamily: fontFamily.bold,
        color: Colors.brandPurple,
        marginBottom: moderateScale(8),
    },
    subtitle: {
        fontSize: moderateScale(16),
        fontFamily: fontFamily.regular,
        color: Colors.text,
        marginBottom: verticalScale(20),
    },
    segmentWrap: { marginBottom: verticalScale(24) },
    valueRow: { flexDirection: 'row', alignItems: 'baseline', marginBottom: verticalScale(16) },
    valueNumber: {
        fontSize: moderateScale(48),
        fontFamily: fontFamily.bold,
        color: Colors.text,
        marginRight: moderateScale(8),
    },
    valueUnit: { fontSize: moderateScale(18), fontFamily: fontFamily.regular, color: Colors.text },
    rulerWrap: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: moderateScale(8) },
    rulerTick: { alignItems: 'center' },
    rulerLabel: { fontSize: moderateScale(12), fontFamily: fontFamily.regular, color: Colors.text },
    footer: { paddingHorizontal: moderateScale(20), paddingBottom: verticalScale(40) },
    button: { borderRadius: moderateScale(24)},
});

export default styles;
