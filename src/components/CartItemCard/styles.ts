import { Colors } from '@/styles/colors';
import fontFamily from '@/styles/fontFamily';
import { moderateScale } from '@/styles/scaling';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    itemCard: {
        backgroundColor: Colors.surface,
        borderRadius: moderateScale(16),
        padding: moderateScale(12),
        marginBottom: moderateScale(12),
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.06,
        shadowRadius: 4,
        elevation: 2,
    },
    itemRow: {
        flexDirection: 'row',
    },
    imageWrap: {
        width: moderateScale(96),
        height: moderateScale(96),
        borderRadius: moderateScale(10),
        backgroundColor: '#EEE7F1',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: moderateScale(12),
    },
    productImage: {
        width: '82%',
        height: '82%',
    },
    itemInfo: {
        flex: 1,
    },
    itemTopRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    categoryText: {
        fontSize: moderateScale(13),
        color: Colors.brandSalmon,
        fontFamily: fontFamily.regular,
    },
    itemTitle: {
        marginTop: moderateScale(2),
        fontSize: moderateScale(18),
        color: Colors.gray700,
        fontFamily: fontFamily.bold,
    },
    itemPrice: {
        marginTop: moderateScale(2),
        fontSize: moderateScale(17),
        color: Colors.gray700,
        fontFamily: fontFamily.bold,
    },
});

export default styles;
