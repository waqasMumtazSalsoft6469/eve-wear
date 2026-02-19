import { Colors } from '@/styles/colors';
import fontFamily from '@/styles/fontFamily';
import { moderateScale, verticalScale } from '@/styles/scaling';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    scroll: {
        flex: 1,
    },
    scrollContent: {
        paddingHorizontal: moderateScale(20),
        paddingBottom: verticalScale(24),
    },
    title: {
        fontSize: moderateScale(28),
        fontFamily: fontFamily.bold,
        color: Colors.brandPurple,
        marginBottom: moderateScale(8),
    },
    subtitle: {
        fontSize: moderateScale(18),
        fontFamily: fontFamily.regular,
        color: Colors.brandSalmon,
        marginBottom: verticalScale(20),
    },
    body: {
        fontSize: moderateScale(15),
        fontFamily: fontFamily.regular,
        color: Colors.text,
        lineHeight: moderateScale(22),
        marginBottom: verticalScale(24),
    },
    checkboxRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
    },
    checkbox: {
        width: moderateScale(24),
        height: moderateScale(24),
        borderRadius: moderateScale(6),
        borderWidth: 2,
        borderColor: Colors.gray300,
        marginRight: moderateScale(12),
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkboxChecked: {
        backgroundColor: Colors.brandPurple,
        borderColor: Colors.brandPurple,
    },
    checkmark: {
        color: Colors.white,
        fontSize: moderateScale(14),
        fontFamily: fontFamily.bold,
    },
    checkboxLabel: {
        flex: 1,
        fontSize: moderateScale(14),
        fontFamily: fontFamily.regular,
        color: Colors.text,
    },
    footer: {
        paddingHorizontal: moderateScale(20),
        paddingBottom: verticalScale(40),
    },
    button: {
        borderRadius: moderateScale(24),
        paddingVertical: moderateScale(16),
    },
});

export default styles;
