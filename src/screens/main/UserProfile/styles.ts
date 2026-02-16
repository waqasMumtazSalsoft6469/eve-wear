import { Colors, ThemeType } from '@/styles/colors';
import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

const useRTLStyles = (isRTL: boolean, theme: ThemeType) => {
    const colors = Colors[theme];

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
    }), [isRTL, theme, colors]);
};

export default useRTLStyles;
