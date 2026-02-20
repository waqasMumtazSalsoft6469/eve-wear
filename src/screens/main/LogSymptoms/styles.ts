import { Colors } from '@/styles/colors';
import fontFamily from '@/styles/fontFamily';
import { moderateScale } from '@/styles/scaling';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: { flex: 1, backgroundColor: Colors.background },
    scroll: { flex: 1 },
    scrollContent: { paddingHorizontal: moderateScale(16), paddingTop: moderateScale(20), paddingBottom: moderateScale(24) },
    sectionTitle: {
        fontSize: moderateScale(16),
        fontFamily: fontFamily.bold,
        color: Colors.text,
        marginBottom: moderateScale(12),
    },
    moodRow: { flexDirection: 'row', gap: moderateScale(10), marginBottom: moderateScale(24) },
    moodChip: {
        backgroundColor: Colors.gray100,
        borderRadius: moderateScale(12),
        paddingVertical: moderateScale(12),
        paddingHorizontal: moderateScale(16),
        alignItems: 'center',
        minWidth: moderateScale(72),
    },
    moodChipSelected: { backgroundColor: '#F0E6F5' },
    moodEmoji: { fontSize: moderateScale(24), marginBottom: moderateScale(4) },
    moodLabel: { fontSize: moderateScale(12), fontFamily: fontFamily.regular, color: Colors.textSecondary },
    moodLabelSelected: { color: Colors.brandPurple },
    sliderRow: { flexDirection: 'row', alignItems: 'center', marginBottom: moderateScale(20) },
    sliderLabel: { fontSize: moderateScale(14), fontFamily: fontFamily.regular, color: Colors.text, width: moderateScale(90) },
    sliderTrack: {
        flex: 1,
        height: moderateScale(8),
        backgroundColor: Colors.gray200,
        borderRadius: moderateScale(4),
        overflow: 'hidden',
    },
    sliderFill: {
        height: '100%',
        backgroundColor: Colors.brandSalmon,
        borderRadius: moderateScale(4),
    },
    sliderValue: { fontSize: moderateScale(14), fontFamily: fontFamily.bold, color: Colors.brandSalmon, marginLeft: moderateScale(8), minWidth: moderateScale(24) },
    notesInput: {
        backgroundColor: Colors.gray100,
        borderRadius: moderateScale(12),
        padding: moderateScale(14),
        fontSize: moderateScale(14),
        fontFamily: fontFamily.regular,
        color: Colors.text,
        minHeight: moderateScale(100),
        textAlignVertical: 'top',
    },
    footer: { paddingHorizontal: moderateScale(16), paddingBottom: moderateScale(24) },
});
