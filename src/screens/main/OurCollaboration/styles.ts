import { Colors } from '@/styles/colors';
import fontFamily from '@/styles/fontFamily';
import { moderateScale, verticalScale } from '@/styles/scaling';
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
        paddingBottom: verticalScale(100),
    },
    card: {
        backgroundColor: Colors.white,
        borderRadius: moderateScale(20),
        padding: moderateScale(20),
        marginTop: moderateScale(16),
        elevation: 2,
        shadowColor: Colors.gray200,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 8,
        marginHorizontal:2
      
    },
    sectionTitle: {
        fontSize: moderateScale(22),
        fontFamily: fontFamily.bold,
        color: Colors.text,
        marginBottom: verticalScale(16),
    },
    paragraph: {
        fontSize: moderateScale(15),
        fontFamily: fontFamily.regular,
        color: Colors.text,
        lineHeight: moderateScale(22),
        marginBottom: verticalScale(14),
    },
    paragraphLast: {
        marginBottom: 0,
    },
    linkWrap: {
        marginTop: verticalScale(16),
    },

    linkText: {
        fontSize: moderateScale(14),
        fontFamily: fontFamily.regular,
        color: Colors.supportEmail,
        textDecorationLine: 'underline',
    },
});

export default styles;
