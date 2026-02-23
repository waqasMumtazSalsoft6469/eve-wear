import { Colors } from '@/styles/colors';
import fontFamily from '@/styles/fontFamily';
import { moderateScale } from '@/styles/scaling';
import { StyleSheet, I18nManager } from 'react-native';

export default StyleSheet.create({
    container: { flex: 1, backgroundColor: Colors.background },
    scroll: { flex: 1 },
    scrollContent: { paddingHorizontal: moderateScale(16), paddingTop: moderateScale(20), paddingBottom: moderateScale(24) },
    card: {
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        alignItems: 'center',
        backgroundColor: Colors.surface,
        borderRadius: moderateScale(16),
        padding: moderateScale(16),
        marginBottom: moderateScale(12),
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.06,
        shadowRadius: 4,
        elevation: 2,
    },
    iconWrap: {
        width: moderateScale(44),
        height: moderateScale(44),
        borderRadius: moderateScale(22),
        // backgroundColor: Colors.gray100,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: I18nManager.isRTL ? 0 : moderateScale(14),
        marginLeft: I18nManager.isRTL ? moderateScale(14) : 0,
    },
    cardBody: { flex: 1 },
    cardRange: { fontSize: moderateScale(15), fontFamily: fontFamily.bold, color: Colors.text },
    cardDays: { fontSize: moderateScale(13), fontFamily: fontFamily.regular, color: Colors.secondary, marginTop: moderateScale(2) },
    arrowRight: { marginLeft: I18nManager.isRTL ? 0 : moderateScale(8), marginRight: I18nManager.isRTL ? moderateScale(8) : 0 },
});
