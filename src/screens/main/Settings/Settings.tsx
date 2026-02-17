//import libraries
import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import WrapperContainer from '@/components/WrapperContainer';
import HeaderComp from '@/components/HeaderComp';
import TextComp from '@/components/TextComp';

// create a component
const Settings = () => {
    return (
        <WrapperContainer style={styles.container}>
            <HeaderComp showBack={false} title="SETTINGS" />
            <View style={styles.content}>
                <TextComp text='SETTINGS' />
            </View>
        </WrapperContainer>
    );
};

export default Settings;
