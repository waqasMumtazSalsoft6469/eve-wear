import { Colors } from '@/styles/colors';
import fontFamily from '@/styles/fontFamily';
import { moderateScale } from '@/styles/scaling';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.gray100,
    },
    content: {
        flex: 1,
        paddingHorizontal: moderateScale(16),
        paddingTop: moderateScale(20),
    },
    subtitle: {
        color: Colors.gray700,
        fontFamily: fontFamily.regular,
        fontSize: moderateScale(16),
        marginBottom: moderateScale(16),
    },
    pinRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: moderateScale(20),
    },
    pinSlot: {
        width: moderateScale(60),
        height: moderateScale(60),
        borderRadius: moderateScale(14),
        borderWidth: 1,
        borderColor: Colors.gray200,
        backgroundColor: Colors.surface,
        alignItems: 'center',
        justifyContent: 'center',
    },
    pinSlotActive: {
        borderColor: Colors.brandSalmon,
        backgroundColor: '#FFF1EF',
    },
    pinText: {
        color: Colors.gray700,
        fontFamily: fontFamily.bold,
        fontSize: moderateScale(30 / 2),
    },
    hiddenInput: {
        position: 'absolute',
        opacity: 0,
        width: 1,
        height: 1,
    },
    bottomButtonWrap: {
        marginTop: moderateScale(8),
    },
    bottomButton: {
        borderRadius: moderateScale(26),
    },
    successModalContainer: {
        minHeight: moderateScale(300),
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: moderateScale(20),
    },
    successIconCircle: {
        width: moderateScale(76),
        height: moderateScale(76),
        borderRadius: moderateScale(38),
        backgroundColor: Colors.success,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: moderateScale(20),
    },
    successIconText: {
        color: Colors.white,
        fontFamily: fontFamily.bold,
        fontSize: moderateScale(34),
        lineHeight: moderateScale(34),
    },
    successMessage: {
        color: Colors.gray700,
        fontFamily: fontFamily.bold,
        fontSize: moderateScale(18),
        textAlign: 'center',
        marginBottom: moderateScale(28),
        maxWidth: '90%',
    },
    successButton: {
        width: '100%',
    },
});

export default styles;
