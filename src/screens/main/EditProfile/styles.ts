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
    label: {
        color: Colors.gray600,
        fontFamily: fontFamily.bold,
        fontSize: moderateScale(15),
    },
    inputWrap: {
        marginBottom: moderateScale(12),
    },
    inputWrapLast: {
        marginBottom: 0,
    },
    inputContainer: {
        height: moderateScale(52),
        borderRadius: moderateScale(28),
        borderWidth: 0,
        backgroundColor: '#F6F6F8',
        paddingHorizontal: moderateScale(14),
        justifyContent: 'center',
    },
    inputText: {
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

