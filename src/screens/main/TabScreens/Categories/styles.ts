import { Colors } from '@/styles/colors';
import { moderateScale } from '@/styles/scaling';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    content: {
        flex: 1,
        paddingHorizontal: moderateScale(16),
        paddingVertical: moderateScale(12),
    },
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingBottom: moderateScale(20),
    },
});

export default styles;
