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
        fontSize: moderateScale(20),
        fontFamily: fontFamily.bold,
        color: Colors.brandPurple,
    },
    content: {
        flex: 1,
        paddingHorizontal: moderateScale(16),
    },
    searchBarContainer: {
        marginBottom: moderateScale(16),
    },
    filterChipsContainer: {
        marginBottom: moderateScale(20),
    },
    listContent: {
        paddingBottom: moderateScale(24),
    },
    emptyContainer: {
        paddingVertical: moderateScale(40),
        alignItems: 'center',
    },
    emptyText: {
        fontSize: moderateScale(14),
        fontFamily: fontFamily.regular,
        color: Colors.textSecondary,
    },
});

export default styles;
