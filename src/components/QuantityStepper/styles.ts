import { Colors } from '@/styles/colors';
import fontFamily from '@/styles/fontFamily';
import { moderateScale } from '@/styles/scaling';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    qtyStepper: {
        marginTop: moderateScale(8),
        width: moderateScale(108),
        height: moderateScale(34),
        borderRadius: moderateScale(17),
        borderWidth: 1,
        borderColor: Colors.brandPurple,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: moderateScale(10),
    },
    qtyButton: {
        width: moderateScale(18),
        alignItems: 'center',
    },
    qtyButtonText: {
        fontSize: moderateScale(18),
        color: Colors.brandPurple,
        lineHeight: moderateScale(18),
    },
    qtyText: {
        fontSize: moderateScale(16),
        color: Colors.brandPurple,
        fontFamily: fontFamily.bold,
    },
});

export default styles;
