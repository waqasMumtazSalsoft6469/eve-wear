import { Colors } from '@/styles/colors';
import fontFamily from '@/styles/fontFamily';
import { moderateScale } from '@/styles/scaling';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    headerTitle: {
        color: Colors.brandPurple,
    },
    scroll: {
        flex: 1,
    },
    contentContainer: {
        paddingHorizontal: moderateScale(16),
        paddingBottom: moderateScale(28),
    },
    applicationId: {
        fontFamily: fontFamily.bold,
        color: Colors.gray700,
        fontSize: moderateScale(36 / 1.5),
        marginTop: moderateScale(6),
        marginBottom: moderateScale(6),
    },
    applicationSubtext: {
        fontFamily: fontFamily.regular,
        color: Colors.gray500,
        fontSize: moderateScale(16 / 1.1),
        lineHeight: moderateScale(34 / 1.5),
        marginBottom: moderateScale(24),
    },
    timelineTitle: {
        fontFamily: fontFamily.bold,
        color: Colors.gray700,
        fontSize: moderateScale(38 / 1.5),
        marginBottom: moderateScale(12),
    },
    timelineCard: {
        backgroundColor: Colors.surface,
        borderRadius: moderateScale(16),
        paddingHorizontal: moderateScale(14),
        paddingVertical: moderateScale(14),
        shadowColor: Colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.06,
        shadowRadius: 7,
        elevation: 2,
    },
    timelineRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    timelineIconWrap: {
        width: moderateScale(24),
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: moderateScale(1),
    },
    timelineIconActive: {
        marginTop: 0,
    },
    timelineIconTextActive: {
        color: Colors.brandSalmon,
        fontFamily: fontFamily.bold,
        fontSize: moderateScale(20 / 1.3),
    },
    timelineIconTextPending: {
        color: Colors.brandSalmon,
        fontFamily: fontFamily.regular,
        fontSize: moderateScale(20 / 1.3),
    },
    timelineIconTextInactive: {
        color: '#D7B2A8',
        fontFamily: fontFamily.bold,
        fontSize: moderateScale(20 / 1.3),
    },
    timelineTextWrap: {
        marginLeft: moderateScale(8),
        flex: 1,
    },
    timelinePrimaryActive: {
        color: Colors.brandSalmon,
        fontFamily: fontFamily.regular,
        fontSize: moderateScale(17),
        marginBottom: moderateScale(2),
    },
    timelinePrimaryInactive: {
        color: '#D7B2A8',
        fontFamily: fontFamily.regular,
        fontSize: moderateScale(17),
        marginBottom: moderateScale(2),
    },
    timelineSecondary: {
        color: '#6F7C84',
        fontFamily: fontFamily.regular,
        fontSize: moderateScale(16 / 1.1),
    },
    timelineLine: {
        width: StyleSheet.hairlineWidth,
        height: moderateScale(24),
        backgroundColor: Colors.gray200,
        marginLeft: moderateScale(12),
        marginTop: moderateScale(2),
        marginBottom: moderateScale(4),
    },
    supportWrap: {
        alignSelf: 'center',
        marginTop: moderateScale(24),
    },
    supportText: {
        color: Colors.brandSalmon,
        fontFamily: fontFamily.regular,
        fontSize: moderateScale(16 / 1.1),
        textDecorationLine: 'underline',
    },
});

export default styles;
