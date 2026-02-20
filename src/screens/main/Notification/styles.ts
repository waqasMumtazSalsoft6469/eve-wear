import { Colors } from '@/styles/colors';
import fontFamily from '@/styles/fontFamily';
import { moderateScale } from '@/styles/scaling';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: { flex: 1, backgroundColor: Colors.background },
    filterRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: moderateScale(16),
        paddingVertical: moderateScale(12),
        backgroundColor: Colors.white,
        marginBottom: moderateScale(8),
    },
    markAllRow: { flexDirection: 'row', alignItems: 'center', gap: moderateScale(6) },
    markAllText: { fontSize: moderateScale(12), fontFamily: fontFamily.bold, color: Colors.brandSalmon },
    scroll: { flex: 1 },
    scrollContent: { paddingHorizontal: moderateScale(16), paddingBottom: moderateScale(24) },
    sectionTitle: {
        fontSize: moderateScale(18),
        fontFamily: fontFamily.bold,
        color: Colors.text,
        marginTop: moderateScale(16),
        marginBottom: moderateScale(12),
    },
    card: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: moderateScale(12),
        backgroundColor: Colors.surface,
        borderRadius: moderateScale(12),
        padding: moderateScale(14),
        marginBottom: moderateScale(10),
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.06,
        shadowRadius: 4,
        elevation: 2,
    },
    cardUnread: { backgroundColor: '#FFF5F5' },
    iconCircle: {
        width: moderateScale(44),
        height: moderateScale(44),
        borderRadius: moderateScale(22),
        marginRight: moderateScale(12),
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardBody: { flex: 1 },
    cardTitleRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: moderateScale(4) },
    cardTitle: { fontSize: moderateScale(15), fontFamily: fontFamily.bold, color: Colors.text },
    cardTime: { fontSize: moderateScale(12), fontFamily: fontFamily.regular, color: Colors.textSecondary },
    cardBodyText: { fontSize: moderateScale(13), fontFamily: fontFamily.regular, color: Colors.textSecondary },
});
