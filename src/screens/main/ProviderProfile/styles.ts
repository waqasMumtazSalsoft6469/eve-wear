import { Colors } from '@/styles/colors';
import fontFamily from '@/styles/fontFamily';
import { moderateScale } from '@/styles/scaling';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    topBackground: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: moderateScale(210),
        backgroundColor: '#F3E3F5',
    },
    scroll: {
        flex: 1,
    },
    contentContainer: {
        paddingHorizontal: moderateScale(8),
        paddingBottom: moderateScale(26),
    },
    profileImageWrap: {
        width: moderateScale(108),
        height: moderateScale(108),
        borderRadius: moderateScale(54),
        alignSelf: 'center',
        marginTop: moderateScale(8),
        marginBottom: moderateScale(-22),
        zIndex: 2,
        backgroundColor: Colors.surface,
        padding: moderateScale(3),
        shadowColor: Colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 6,
        elevation: 3,
    },
    profileImage: {
        width: '100%',
        height: '100%',
        borderRadius: moderateScale(50),
    },
    card: {
        backgroundColor: Colors.surface,
        borderRadius: moderateScale(24),
        paddingHorizontal: moderateScale(18),
        paddingTop: moderateScale(42),
        paddingBottom: moderateScale(18),
        shadowColor: Colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 8,
        elevation: 2,
    },
    nameText: {
        textAlign: 'center',
        color: Colors.gray600,
        fontFamily: fontFamily.bold,
        fontSize: moderateScale(35 / 1.6),
        marginBottom: moderateScale(2),
    },
    specialtyText: {
        textAlign: 'center',
        color: Colors.brandSalmon,
        fontFamily: fontFamily.regular,
        fontSize: moderateScale(15),
        marginBottom: moderateScale(4),
    },
    experienceYearsText: {
        textAlign: 'center',
        color: Colors.brandPurple,
        fontFamily: fontFamily.regular,
        fontSize: moderateScale(24 / 1.6),
        marginBottom: moderateScale(20),
    },
    contactRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: moderateScale(12),
    },
    contactIconWrap: {
        width: moderateScale(32),
        height: moderateScale(32),
        borderRadius: moderateScale(8),
        backgroundColor: Colors.brandSalmon,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: moderateScale(10),
    },
    contactText: {
        color: Colors.gray600,
        fontFamily: fontFamily.regular,
        fontSize: moderateScale(16),
    },
    sectionTitle: {
        color: Colors.gray700,
        fontFamily: fontFamily.bold,
        fontSize: moderateScale(19 / 1.2),
        marginTop: moderateScale(8),
        marginBottom: moderateScale(8),
    },
    infoCard: {
        backgroundColor: '#FBFBFC',
        borderRadius: moderateScale(12),
        borderWidth: 1,
        borderColor: Colors.gray100,
        paddingHorizontal: moderateScale(12),
        paddingVertical: moderateScale(12),
        marginBottom: moderateScale(10),
    },
    infoText: {
        color: Colors.gray600,
        fontFamily: fontFamily.regular,
        fontSize: moderateScale(14),
    },
    mapCard: {
        height: moderateScale(145),
        borderRadius: moderateScale(14),
        backgroundColor: '#D9E5CC',
        borderWidth: 1,
        borderColor: '#C9D9B8',
        overflow: 'hidden',
        marginBottom: moderateScale(10),
        alignItems: 'center',
        justifyContent: 'center',
    },
    mapPin: {
        width: moderateScale(32),
        height: moderateScale(32),
        borderRadius: moderateScale(16),
        backgroundColor: Colors.secondary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    consultationRow: {
        flexDirection: 'row',
        gap: moderateScale(8),
    },
    consultationChip: {
        flex: 1,
        height: moderateScale(44),
        borderRadius: moderateScale(8),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: moderateScale(6),
    },
    chipMuted: {
        backgroundColor: '#FCECE8',
    },
    chipMutedText: {
        color: '#A86A61',
        fontFamily: fontFamily.bold,
        fontSize: moderateScale(24 / 1.6),
    },
    chipActive: {
        backgroundColor: '#EFE8FA',
    },
    chipActiveText: {
        color: Colors.brandPurple,
        fontFamily: fontFamily.bold,
        fontSize: moderateScale(24 / 1.6),
    },
    requestButton: {
        marginTop: moderateScale(14),
        borderRadius: moderateScale(28),
    },
});

export default styles;
