import HeaderComp from '@/components/HeaderComp';
import TextComp from '@/components/TextComp';
import WrapperContainer from '@/components/WrapperContainer';
import React from 'react';
import { View } from 'react-native';
import styles from './styles';

const RequestAppointment: React.FC = () => {
    return (
        <WrapperContainer style={styles.container}>
            <HeaderComp title="RequestAppointment" />
            <View style={styles.content}>
                <TextComp text="Welcome to RequestAppointment" />
            </View>
        </WrapperContainer>
    );
};

export default RequestAppointment;
