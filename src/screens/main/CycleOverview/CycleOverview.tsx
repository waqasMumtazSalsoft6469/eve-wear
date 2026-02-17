import HeaderComp from '@/components/HeaderComp';
import TextComp from '@/components/TextComp';
import WrapperContainer from '@/components/WrapperContainer';
import { useTheme } from '@/context/ThemeContext';
import useIsRTL from '@/hooks/useIsRTL';
import React from 'react';
import { View } from 'react-native';
import useRTLStyles from './styles';

const CycleOverview: React.FC = () => {
    const isRTL = useIsRTL();
    const { theme } = useTheme();
    const styles = useRTLStyles(isRTL, theme);

    return (
        <WrapperContainer style={styles.container}>
            <HeaderComp title="CycleOverview" />
            <View style={styles.content}>
                <TextComp text="Welcome to CycleOverview" />
            </View>
        </WrapperContainer>
    );
};

export default CycleOverview;
