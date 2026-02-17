import HeaderComp from '@/components/HeaderComp';
import TextComp from '@/components/TextComp';
import WrapperContainer from '@/components/WrapperContainer';
import React from 'react';
import { View } from 'react-native';
import styles from './styles';

const UserProfile: React.FC = () => {

    return (
        <WrapperContainer style={styles.container}>
            <HeaderComp title="User Profile" />
            <View style={styles.content}>
                <TextComp text="Welcome to User Profile" />
            </View>
        </WrapperContainer>
    );
};

export default UserProfile;
