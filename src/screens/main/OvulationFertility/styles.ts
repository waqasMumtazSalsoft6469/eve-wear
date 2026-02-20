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
        paddingTop: moderateScale(20),
    },
    calendarCard: {
        backgroundColor: Colors.surface,
        borderRadius: moderateScale(20),
        padding: moderateScale(16),
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        marginBottom: moderateScale(20),
    },
});

export default styles;
