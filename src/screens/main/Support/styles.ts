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
        fontSize: moderateScale(20),
        fontFamily: fontFamily.bold,
        color: Colors.brandPurple,
    },
    content: {
        flex: 1,
        paddingHorizontal: moderateScale(16),
    },
    scrollContent: {
        paddingBottom: moderateScale(100),
    },
    formCard: {
        backgroundColor: Colors.white,
        borderRadius: moderateScale(16),
        padding: moderateScale(20),
        marginTop: moderateScale(16),
        shadowColor: Colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.06,
        shadowRadius: 8,
        elevation: 2,
        marginHorizontal:2,
        gap: moderateScale(16),
        marginBottom: moderateScale(16),
    },
    inputContainer: {
        backgroundColor:Colors.inputBackgroundApp
    },
    inputLabel: {
        color: Colors.text,
    },
    inputInner: {
        borderRadius: moderateScale(12),
        overflow: 'hidden',
    },
    messageInput: {
        minHeight: moderateScale(100),
        textAlignVertical: 'top',
    },
    inputStyle: {
    },
    submitButton: {
        alignSelf: 'stretch',
        borderRadius: moderateScale(24),
        marginTop: moderateScale(8),
        marginBottom: moderateScale(20),
    },
    supportEmail: {
        fontSize: moderateScale(13),
        fontFamily: fontFamily.regular,
        color: Colors.supportEmail,
        textAlign: 'center',
    },
    
});

export default styles;
