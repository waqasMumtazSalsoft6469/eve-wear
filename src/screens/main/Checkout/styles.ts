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
    packageWrap: {
        marginBottom: moderateScale(4),
    },
    packageTitleWrap: {
        marginBottom: moderateScale(10),
    },
    packageTitle: {
        fontSize: moderateScale(36 / 2),
        color: Colors.gray700,
        fontFamily: fontFamily.bold,
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
