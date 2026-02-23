import HeaderComp from '@/components/HeaderComp';
import TextComp from '@/components/TextComp';
import WrapperContainer from '@/components/WrapperContainer';
import React from 'react';
import { View } from 'react-native';
import styles from './styles';

const RequestAquote: React.FC = () => {
    return (
        <WrapperContainer style={styles.container}>
            <HeaderComp title="RequestAquote" />
            <View style={styles.content}>
                <TextComp text="Welcome to RequestAquote" />
            </View>
        </WrapperContainer>
    );
};

export default RequestAquote;
