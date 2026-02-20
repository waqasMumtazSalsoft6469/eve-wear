import { Colors } from '@/styles/colors';
import fontFamily from '@/styles/fontFamily';
import { moderateScale } from '@/styles/scaling';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: { flex: 1, backgroundColor: Colors.background },
    scroll: { flex: 1 },
    scrollContent: { paddingHorizontal: moderateScale(16), paddingTop: moderateScale(20), paddingBottom: moderateScale(24) },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
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
    cardText: { flex: 1, marginRight: moderateScale(16) },
    cardTitle: { fontSize: moderateScale(16), fontFamily: fontFamily.bold, color: Colors.text, marginBottom: moderateScale(4) },
    cardDesc: { fontSize: moderateScale(13), fontFamily: fontFamily.regular, color: Colors.textSecondary },
    footer: { paddingHorizontal: moderateScale(16), paddingBottom: moderateScale(24) },
    saveButton: {},
});
