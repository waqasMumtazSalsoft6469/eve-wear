import HeaderComp from '@/components/HeaderComp';
import TextComp from '@/components/TextComp';
import WrapperContainer from '@/components/WrapperContainer';
import React from 'react';
import { View } from 'react-native';
import styles from './styles';

const ReminderAlert: React.FC = () => {
    return (
        <WrapperContainer style={styles.container}>
            <HeaderComp title="ReminderAlert" />
            <View style={styles.content}>
                <TextComp text="Welcome to ReminderAlert" />
            </View>
        </WrapperContainer>
    );
};

export default ReminderAlert;
