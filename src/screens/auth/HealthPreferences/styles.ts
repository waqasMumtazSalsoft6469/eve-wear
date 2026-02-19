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
        color: Colors.brandSalmon,
        marginBottom: verticalScale(24),
    },
    preferenceRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: verticalScale(20),
    },
    preferenceText: { flex: 1, marginRight: moderateScale(16) },
    prefTitle: {
        fontSize: moderateScale(16),
        fontFamily: fontFamily.bold,
        color: Colors.text,
        marginBottom: moderateScale(4),
    },
    prefDesc: {
        fontSize: moderateScale(13),
        fontFamily: fontFamily.regular,
        color: Colors.textSecondary,
    },
    footer: { paddingHorizontal: moderateScale(20), paddingBottom: verticalScale(40) },
    button: { borderRadius: moderateScale(24)},
});

export default styles;
