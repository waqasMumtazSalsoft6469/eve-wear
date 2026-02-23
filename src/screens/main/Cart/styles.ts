import { Colors } from '@/styles/colors';
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
        paddingTop: moderateScale(8),
    },
    scrollContent: {
        paddingBottom: moderateScale(140),
    },
    checkoutButtonWrap: {
        position: 'absolute',
        left: moderateScale(16),
        right: moderateScale(16),
        bottom: moderateScale(16),
        paddingHorizontal: moderateScale(16),
    },
    checkoutButton: {
    },
});

export default styles;
