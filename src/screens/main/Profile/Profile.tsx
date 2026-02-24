//import libraries
import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import WrapperContainer from '@/components/WrapperContainer';
import HeaderComp from '@/components/HeaderComp';
import TextComp from '@/components/TextComp';

// create a component
const Profile = () => {
    return (
        <WrapperContainer style={styles.container}>
            <HeaderComp showBack={false} title="Profile"  />
            <View style={styles.content}>
                <TextComp text='PROFILE' />
            </View>
        </WrapperContainer>
    );
};


export default Profile;
