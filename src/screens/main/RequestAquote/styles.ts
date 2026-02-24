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
    content: {
        flex: 1,
    },
    scroll: {
        flex: 1,
    },
    scrollContent: {
        paddingHorizontal: moderateScale(16),
        paddingBottom: moderateScale(120),
    },
    formCard: {
        backgroundColor: Colors.surface,
        borderRadius: moderateScale(16),
        paddingHorizontal: moderateScale(14),
        paddingVertical: moderateScale(14),
        shadowColor: Colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.06,
        shadowRadius: 8,
        elevation: 2,
    },
    inputWrap: {
        marginBottom: moderateScale(12),
    },
    fieldLabel: {
        color: Colors.gray600,
        fontFamily: fontFamily.bold,
        fontSize: moderateScale(15),
        marginBottom: moderateScale(8),
    },
    inputContainer: {
        height: moderateScale(52),
        borderRadius: moderateScale(28),
        borderWidth: 0,
        backgroundColor: '#F6F6F8',
        paddingHorizontal: moderateScale(14),
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputText: {
        flex: 1,
        color: Colors.gray600,
        fontFamily: fontFamily.regular,
        fontSize: moderateScale(15),
    },
    placeholderText: {
        color: Colors.gray300,
    },
    dropdownIcon: {
    },
    dropdownCard: {
        marginTop: moderateScale(8),
        borderRadius: moderateScale(10),
        backgroundColor: Colors.surface,
        borderWidth: 1,
        borderColor: Colors.gray100,
        paddingVertical: moderateScale(6),
    },
    dropdownItem: {
        paddingHorizontal: moderateScale(12),
        paddingVertical: moderateScale(8),
    },
    dropdownItemText: {
        color: Colors.gray600,
        fontFamily: fontFamily.regular,
        fontSize: moderateScale(14),
    },
    notesWrap: {
        marginTop: moderateScale(2),
    },
    notesInput: {
        minHeight: moderateScale(205),
        borderRadius: moderateScale(14),
        backgroundColor: '#F6F6F8',
        paddingHorizontal: moderateScale(14),
        paddingTop: moderateScale(14),
        paddingBottom: moderateScale(14),
        color: Colors.gray600,
        fontFamily: fontFamily.regular,
        fontSize: moderateScale(15),
    },
    bottomButtonWrap: {
        position: 'absolute',
        left: moderateScale(16),
        right: moderateScale(16),
        bottom: moderateScale(20),
    },
    bottomButton: {
        borderRadius: moderateScale(30),
    },
});

export default styles;
