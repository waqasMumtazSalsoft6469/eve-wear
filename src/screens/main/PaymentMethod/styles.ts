import { Colors } from '@/styles/colors';
import fontFamily from '@/styles/fontFamily';
import { moderateScale } from '@/styles/scaling';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.gray50,
    },
    headerTitle: {
        fontSize: moderateScale(20),
        fontFamily: fontFamily.bold,
        color: Colors.brandPurple,
    },
    content: {
        flex: 1,
        paddingHorizontal: moderateScale(16),
    },
    listContent: {
        paddingTop: moderateScale(16),
        paddingBottom: moderateScale(24),
    },
    addCardButton: {
        borderRadius: moderateScale(30),
        backgroundColor: Colors.white,
        borderWidth: 1.5,
        borderColor: Colors.inputBorder,
        marginTop: moderateScale(8),
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical: moderateScale(14),
        paddingHorizontal: moderateScale(16),
        gap: moderateScale(8),
    },
    addCardButtonText: {
        fontSize: moderateScale(16),
        fontFamily: fontFamily.regular,
        color: Colors.gray600,
    },
});

export default styles;
