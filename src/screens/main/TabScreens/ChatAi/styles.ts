import { Colors } from '@/styles/colors';
import fontFamily from '@/styles/fontFamily';
import { moderateScale } from '@/styles/scaling';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9F0FF', // Soft gradient-like background
    },
    content: {
        flex: 1,
        paddingHorizontal: moderateScale(16),
        paddingVertical: moderateScale(20),
    },
    headerText: {
        fontSize: moderateScale(24),
        fontFamily: fontFamily.bold,
        color: Colors.text,
        lineHeight: moderateScale(32),
    },
    subHeaderText: {
        fontSize: moderateScale(24),
        fontFamily: fontFamily.bold,
        color: '#5C2B7E', // Brand Purple
        lineHeight: moderateScale(32),
        marginBottom: moderateScale(24),
    },
    questionCard: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: moderateScale(16),
        borderRadius: moderateScale(16),
        backgroundColor: Colors.surface,
        marginBottom: moderateScale(16),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
    },
    iconBox: {
        width: moderateScale(48),
        height: moderateScale(48),
        borderRadius: moderateScale(8),
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: moderateScale(16),
    },
    questionText: {
        flex: 1,
        fontSize: moderateScale(16),
        fontFamily: fontFamily.medium,
        color: Colors.text,
        lineHeight: moderateScale(22),
    },
    startChatButton: {

    },
    startChatText: {

    },
    // Colors for icons
    iconPurple: {
        backgroundColor: '#8A5DF5',
    },
    iconOrange: {
        backgroundColor: '#FF8C69',
    },
    iconRed: {
        backgroundColor: '#FF4B4B',
    },
    iconDarkRed: {
        backgroundColor: '#A52A2A',
    },
});

export default styles;
