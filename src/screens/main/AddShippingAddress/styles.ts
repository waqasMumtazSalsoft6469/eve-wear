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
    },
    scroll: {
        flex: 1,
    },
    scrollContent: {
        paddingTop: moderateScale(8),
        paddingBottom: moderateScale(140),
    },
    formCard: {
        backgroundColor: Colors.surface,
        borderRadius: moderateScale(16),
        padding: moderateScale(14),
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.06,
        shadowRadius: 4,
        elevation: 2,
        marginBottom: moderateScale(16),
    },
    fieldLabel: {
        color: Colors.gray500,
        fontFamily: fontFamily.bold,
        fontSize: moderateScale(15),
    },
    inputWrap: {
        marginBottom: moderateScale(8),
    },
    inputWrapLast: {
        marginBottom: 0,
    },
    inputContainer: {
        height: moderateScale(44),
        borderWidth: 0,
        borderRadius: moderateScale(22),
        backgroundColor: Colors.gray100,
        paddingHorizontal: moderateScale(14),
        paddingVertical: 0,
    },
    inputText: {
        color: Colors.gray600,
        fontFamily: fontFamily.regular,
        fontSize: moderateScale(14),
    },
    optionsCard: {
        backgroundColor: Colors.surface,
        borderRadius: moderateScale(16),
        padding: moderateScale(14),
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.06,
        shadowRadius: 4,
        elevation: 2,
    },
    optionsTitle: {
        color: Colors.gray500,
        fontFamily: fontFamily.bold,
        fontSize: moderateScale(15),
        marginBottom: moderateScale(12),
    },
    labelRow: {
        flexDirection: 'row',
        gap: moderateScale(8),
        marginBottom: moderateScale(14),
    },
    labelChip: {
        flex: 1,
        height: moderateScale(36),
        borderRadius: moderateScale(6),
        backgroundColor: '#FBE1DF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    labelChipActive: {
        backgroundColor: '#F6D0CD',
    },
    labelText: {
        color: Colors.brandSalmon,
        fontFamily: fontFamily.bold,
        fontSize: moderateScale(14),
    },
    labelTextActive: {
        color: '#C35D50',
    },
    defaultRow: {
        minHeight: moderateScale(44),
        borderRadius: moderateScale(10),
        borderWidth: 1,
        borderColor: Colors.gray200,
        paddingHorizontal: moderateScale(12),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    defaultText: {
        color: Colors.gray600,
        fontFamily: fontFamily.regular,
        fontSize: moderateScale(14),
    },
    bottomButtonWrap: {
        position: 'absolute',
        left: moderateScale(16),
        right: moderateScale(16),
        bottom: moderateScale(16),
    },
    bottomButton: {
        borderRadius: moderateScale(26),
    },
    dropdownModal: {
        paddingTop: moderateScale(16),
    },
    dropdownTitle: {
        color: Colors.gray700,
        fontFamily: fontFamily.bold,
        fontSize: moderateScale(18),
        marginBottom: moderateScale(10),
        textAlign: 'center',
    },
    dropdownOption: {
        minHeight: moderateScale(46),
        borderRadius: moderateScale(10),
        justifyContent: 'center',
        paddingHorizontal: moderateScale(12),
        marginBottom: moderateScale(8),
        backgroundColor: Colors.gray100,
    },
    dropdownOptionText: {
        color: Colors.gray700,
        fontFamily: fontFamily.regular,
        fontSize: moderateScale(14),
    },
});

export default styles;
