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
    scrollContent: {
        paddingTop: moderateScale(8),
        paddingBottom: moderateScale(140),
    },
    addAddressCard: {
        height: moderateScale(100),
        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor: Colors.gray300,
        borderRadius: moderateScale(10),
        backgroundColor: Colors.surface,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: moderateScale(16),
    },
    addAddressText: {
        color: Colors.gray300,
        fontFamily: fontFamily.regular,
        fontSize: moderateScale(16),
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
});

export default styles;
