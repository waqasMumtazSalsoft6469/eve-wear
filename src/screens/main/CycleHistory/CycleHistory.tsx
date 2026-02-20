import HeaderComp from '@/components/HeaderComp';
import TextComp from '@/components/TextComp';
import WrapperContainer from '@/components/WrapperContainer';
import React from 'react';
import { View } from 'react-native';
import styles from './styles';

const CycleHistory: React.FC = () => {
    return (
        <WrapperContainer style={styles.container}>
            <HeaderComp title="CycleHistory" />
            <View style={styles.content}>
                <TextComp text="Welcome to CycleHistory" />
            </View>
        </WrapperContainer>
    );
};

export default CycleHistory;
