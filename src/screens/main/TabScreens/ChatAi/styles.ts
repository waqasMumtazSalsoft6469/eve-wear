import { Colors, } from '@/styles/colors';
import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

const useRTLStyles = (isRTL: boolean) => {
    const colors = Colors;

    return useMemo(() => StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.background,
        },
        content: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
    }), [isRTL, colors]);
};

export default useRTLStyles;
