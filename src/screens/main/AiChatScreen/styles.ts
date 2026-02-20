import { Colors } from '@/styles/colors';
import fontFamily from '@/styles/fontFamily';
import { moderateScale } from '@/styles/scaling';
import { StyleSheet } from 'react-native';

const bubbleMaxWidth = '78%';
const receivedBubbleBg = '#F8E8EC';
const sentBubbleBg = '#EDE5F4';
const datePillBg = Colors.brandPurple;

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F0F8',
    },
    keyboardView: {
        flex: 1,
    },
    chatArea: {
        flex: 1,
        paddingHorizontal: moderateScale(16),
    },
    flatListContent: {
        flexGrow: 1,
        paddingVertical: moderateScale(16),
    },

    // Date separator
    dateSeparatorWrap: {
        alignItems: 'center',
        marginBottom: moderateScale(20),
    },
    datePill: {
        backgroundColor: datePillBg,
        paddingHorizontal: moderateScale(16),
        paddingVertical: moderateScale(6),
        borderRadius: moderateScale(20),
    },
    datePillText: {
        fontSize: moderateScale(12),
        fontFamily: fontFamily.regular,
        color: Colors.white,
    },

    // Sent (user) message
    sentWrapper: {
        alignItems: 'flex-end',
        marginBottom: moderateScale(16),
    },
    sentBubble: {
        backgroundColor: sentBubbleBg,
        borderTopRightRadius: 4,
        alignSelf: 'flex-end',
        maxWidth: bubbleMaxWidth,
    },
    timestampRowSent: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: moderateScale(4),
        gap: moderateScale(4),
    },
    timestamp: {
        fontSize: moderateScale(11),
        fontFamily: fontFamily.regular,
        color: Colors.gray400,
    },
    checks: {
        fontSize: moderateScale(12),
        color: Colors.gray300,
    },

    // Received (AI) message
    receivedWrapper: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginBottom: moderateScale(16),
    },
    avatarWrap: {
        marginRight: moderateScale(10),
        marginBottom: moderateScale(2),
    },
    avatarPlaceholder: {
        width: moderateScale(40),
        height: moderateScale(40),
        borderRadius: moderateScale(20),
        backgroundColor: Colors.brandPurple,
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatarLetter: {
        fontSize: moderateScale(18),
        fontFamily: fontFamily.bold,
        color: Colors.white,
    },
    receivedContent: {
        flex: 1,
        maxWidth: bubbleMaxWidth,
    },
    receivedNameRow: {
        flexDirection: 'row',
        marginBottom: moderateScale(4),
    },
    senderName: {
        fontSize: moderateScale(13),
        fontFamily: fontFamily.bold,
        color: Colors.text,
    },
    senderSubtitle: {
        fontSize: moderateScale(13),
        fontFamily: fontFamily.regular,
        color: Colors.orange,
    },
    receivedBubble: {
        backgroundColor: receivedBubbleBg,
        borderTopLeftRadius: 4,
        alignSelf: 'flex-start',
    },
    timestampRowReceived: {
        marginTop: moderateScale(4),
    },
    bubble: {
        paddingHorizontal: moderateScale(14),
        paddingVertical: moderateScale(10),
        borderRadius: moderateScale(14),
    },
    bubbleText: {
        fontSize: moderateScale(14),
        fontFamily: fontFamily.regular,
        color: Colors.text,
        lineHeight: moderateScale(20),
    },

    // Input area
    inputArea: {
        backgroundColor: Colors.white,
        paddingVertical: moderateScale(12),
        paddingHorizontal: moderateScale(16),
        borderTopWidth: 1,
        borderTopColor: Colors.gray100,
    },
    inputRow: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.white,
        borderRadius: moderateScale(24),
        borderWidth: 1,
        borderColor: Colors.gray200,
        paddingLeft: moderateScale(12),
        paddingRight: moderateScale(6),
        paddingVertical: moderateScale(6),
        minHeight: moderateScale(48),
    },
    attachButton: {
        padding: moderateScale(6),
        marginRight: moderateScale(4),
    },
    input: {
        flex: 1,
        fontSize: moderateScale(15),
        fontFamily: fontFamily.regular,
        color: Colors.text,
        paddingVertical: moderateScale(8),
        paddingHorizontal: moderateScale(8),
        maxHeight: moderateScale(100),
    },
    sendButtonWrap: {
        width: moderateScale(44),
        height: moderateScale(44),
        borderRadius: moderateScale(22),
        overflow: 'hidden',
    },
    sendButtonGradient: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
