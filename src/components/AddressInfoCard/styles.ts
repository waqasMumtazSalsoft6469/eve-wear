import { Colors } from '@/styles/colors';
import fontFamily from '@/styles/fontFamily';
import { moderateScale } from '@/styles/scaling';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    card: {
        backgroundColor: Colors.surface,
        borderRadius: moderateScale(16),
        padding: moderateScale(14),
        marginBottom: moderateScale(16),
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.06,
        shadowRadius: 4,
        elevation: 2,
    },
    topRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: moderateScale(8),
    },
    tagPill: {
        height: moderateScale(24),
        minWidth: moderateScale(74),
        borderRadius: moderateScale(12),
        paddingHorizontal: moderateScale(10),
        backgroundColor: Colors.brandSalmon,
    },
    tagPillContent: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: moderateScale(3),
    },
    tagText: {
        fontSize: moderateScale(12),
        color: Colors.white,
        fontFamily: fontFamily.bold,
    },
    editButton: {
        width: moderateScale(24),
        height: moderateScale(24),
        borderRadius: moderateScale(6),
        overflow: 'hidden',
    },
    editGradient: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    editIcon: {
        color: Colors.white,
        fontSize: moderateScale(14),
        lineHeight: moderateScale(14),
    },
    name: {
        fontSize: moderateScale(24 / 2),
        color: Colors.gray700,
        fontFamily: fontFamily.bold,
    },
    address: {
        marginTop: moderateScale(2),
        marginBottom: moderateScale(10),
        fontSize: moderateScale(15),
        color: Colors.gray400,
        fontFamily: fontFamily.regular,
    },
    readOnlyInput: {
        height: moderateScale(46),
        borderRadius: moderateScale(23),
        backgroundColor: Colors.gray100,
        color: Colors.gray400,
        fontSize: moderateScale(12),
        paddingHorizontal: moderateScale(16),
        fontFamily: fontFamily.regular,
        marginBottom: moderateScale(10),
    },
    readOnlyInputLast: {
        marginBottom: 0,
    },
});

export default styles;
