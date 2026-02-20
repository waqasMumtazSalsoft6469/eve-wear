import ButtonComp from '@/components/ButtonComp';
import HeaderComp from '@/components/HeaderComp';
import QuestionCard from '@/components/QuestionCard';
import TextComp from '@/components/TextComp';
import WrapperContainer from '@/components/WrapperContainer';
import { Colors } from '@/styles/colors';
import { moderateScale } from '@/styles/scaling';
import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import styles from './styles';
import routes from '@/constants/routes';
import { useNavigation } from '@react-navigation/native';

const ChatAi: React.FC = () => {
    const navigation = useNavigation<any>();
    const [isLoading, setIsLoading] = useState(false);

    const questions = [
        {
            id: 1,
            text: "How can I track my cycle better?",
            color: '#8A5DF5', // Using direct color or style
        },
        {
            id: 2,
            text: "Why do I feel emotional before my period?",
            color: '#FF8C69',
        },
        {
            id: 3,
            text: "What's the best workout for weight loss?",
            color: '#FF4B4B',
        },
        {
            id: 4,
            text: "Why do I feel more tired some weeks?",
            color: '#A52A2A',
        },
    ];

    return (
        <WrapperContainer style={styles.container}>
            <HeaderComp
                title={"Chat AI"}
                showBack={true}
                leftIcon="menu"
                rightIcon="notification"
                iconColor={Colors.text}
                onRightIconPress={() => { }}
            />

            <View style={styles.content}>

                <View style={{ marginBottom: moderateScale(30) }}>
                    <TextComp text="Hi There! 👋" style={styles.headerText} />
                    <TextComp text="How Can I Help You Today?" style={styles.subHeaderText} />
                </View>

                <ScrollView showsVerticalScrollIndicator={false}>
                    {questions.map((q) => (
                        <QuestionCard
                            key={q.id}
                            id={q.id}
                            text={q.text}
                            color={q.color}
                        />
                    ))}
                </ScrollView>

                <ButtonComp
                    title="Start Chat"
                    onPress={() => {
                        setIsLoading(true);
                        setTimeout(() => {setIsLoading(false)
                        navigation.navigate(routes.main.aiChatScreen)
                        , 2000});
                    }}
                    loading={isLoading}
                    style={styles.startChatButton}
                    textStyle={styles.startChatText}
                />

            </View>
        </WrapperContainer>
    );
};

export default ChatAi;
