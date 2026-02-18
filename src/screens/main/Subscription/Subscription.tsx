import HeaderComp from '@/components/HeaderComp';
import TextComp from '@/components/TextComp';
import WrapperContainer from '@/components/WrapperContainer';
import React from 'react';
import { View } from 'react-native';
import styles from './styles';

const Subscription: React.FC = () => {
    return (
        <WrapperContainer style={styles.container}>
            <HeaderComp title="Subscription" />
            <View style={styles.content}>
                <TextComp text="Welcome to Subscription" />
            </View>
        </WrapperContainer>
    );
};

export default Subscription;
