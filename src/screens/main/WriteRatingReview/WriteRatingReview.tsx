import HeaderComp from '@/components/HeaderComp';
import TextComp from '@/components/TextComp';
import WrapperContainer from '@/components/WrapperContainer';
import React from 'react';
import { View } from 'react-native';
import styles from './styles';

const WriteRatingReview: React.FC = () => {
    return (
        <WrapperContainer style={styles.container}>
            <HeaderComp title="WriteRatingReview" />
            <View style={styles.content}>
                <TextComp text="Welcome to WriteRatingReview" />
            </View>
        </WrapperContainer>
    );
};

export default WriteRatingReview;
