import { Colors } from '@/styles/colors';
import fontFamily from '@/styles/fontFamily';
import { moderateScale } from '@/styles/scaling';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: { flex: 1, backgroundColor: Colors.background },
    scroll: { flex: 1 },
    scrollContent: { paddingHorizontal: moderateScale(16), paddingTop: moderateScale(20), paddingBottom: moderateScale(24) },
    sectionTitle: {
        fontSize: moderateScale(18),
        fontFamily: fontFamily.bold,
        color: Colors.text,
        marginBottom: moderateScale(12),
    },
    patternCard: {
        backgroundColor: Colors.surface,
        borderRadius: moderateScale(16),
        padding: moderateScale(16),
        marginBottom: moderateScale(20),
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.06,
        shadowRadius: 4,
        elevation: 2,
    },
    patternValue: { fontSize: moderateScale(24), fontFamily: fontFamily.bold, color: Colors.text },
    patternLabel: { fontSize: moderateScale(13), fontFamily: fontFamily.regular, color: Colors.brandPurple, marginTop: moderateScale(4) },
    patternChange: { fontSize: moderateScale(13), fontFamily: fontFamily.bold, color: Colors.success, marginTop: moderateScale(2) },
    chartPlaceholder: {
        height: moderateScale(80),
        marginTop: moderateScale(16),
        backgroundColor: Colors.gray100,
        borderRadius: moderateScale(8),
    },
    insightCard: {
        backgroundColor: Colors.surface,
        borderRadius: moderateScale(16),
        padding: moderateScale(16),
        marginBottom: moderateScale(20),
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.06,
        shadowRadius: 4,
        elevation: 2,
    },
    insightText: {
        fontSize: moderateScale(14),
        fontFamily: fontFamily.regular,
        color: Colors.text,
        lineHeight: moderateScale(22),
    },
    disclaimerCard: {
        flexDirection: 'row',
        backgroundColor: '#F0E6F5',
        borderRadius: moderateScale(12),
        padding: moderateScale(14),
        alignItems: 'flex-start',
    },
    disclaimerIconWrap: {
        width: moderateScale(24),
        height: moderateScale(24),
        borderRadius: moderateScale(12),
        backgroundColor: Colors.brandPurple,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: moderateScale(10),
    },
    disclaimerIcon: { fontSize: moderateScale(14), fontFamily: fontFamily.bold, color: Colors.white },
    disclaimerText: {
        flex: 1,
        fontSize: moderateScale(12),
        fontFamily: fontFamily.regular,
        color: Colors.brandPurple,
        lineHeight: moderateScale(18),
    },
});
