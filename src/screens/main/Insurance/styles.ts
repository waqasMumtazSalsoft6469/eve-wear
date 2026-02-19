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
    segmentWrap: {
        marginTop: moderateScale(16),
        marginBottom: moderateScale(20),
    },
    listContent: {
        paddingBottom: verticalScale(100),
    },
});

export default styles;
