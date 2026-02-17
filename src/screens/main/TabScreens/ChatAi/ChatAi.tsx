import HeaderComp from '@/components/HeaderComp';
import TextComp from '@/components/TextComp';
import WrapperContainer from '@/components/WrapperContainer';
import useIsRTL from '@/hooks/useIsRTL';
import React from 'react';
import { View } from 'react-native';
import useRTLStyles from './styles';

const ChatAi: React.FC = () => {
    const isRTL = useIsRTL();
    const styles = useRTLStyles(isRTL);

    return (
        <WrapperContainer style={styles.container}>
            <HeaderComp title="ChatAi" />
            <View style={styles.content}>
                <TextComp text="Welcome to ChatAi" style={{ color: 'red' }} />
            </View>
        </WrapperContainer>
    );
};

export default ChatAi;
