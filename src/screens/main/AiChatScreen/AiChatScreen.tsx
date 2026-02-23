import HeaderComp from '@/components/HeaderComp';
import MyIcons from '@/components/MyIcons';
import TextComp from '@/components/TextComp';
import WrapperContainer from '@/components/WrapperContainer';
import { Colors } from '@/styles/colors';
import { moderateScale } from '@/styles/scaling';
import React, { useRef, useState } from 'react';
import {
    Alert,
    FlatList,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { TextInput } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

const AI_NAME = 'Jamie';
const AI_SUBTITLE = 'AI Assistant';
const DATE_LABEL = 'Wed, 17 Nov';

type MessageItem =
    | { id: string; type: 'date'; dateLabel: string }
    | { id: string; type: 'message'; message: string; timestamp: string; sent: boolean };

const INITIAL_MESSAGES: MessageItem[] = [
    {
        id: '4',
        type: 'message',
        message: 'Awesome!! :)',
        timestamp: '10:06',
        sent: true,
    },
    {
        id: '3',
        type: 'message',
        message:
            'For weight loss, a combination of cardio and strength training is most effective. Cardio burns calories and improves heart health, while strength training builds muscle and boosts metabolism. Aim for 150+ minutes of moderate cardio per week and 2–3 strength sessions.',
        timestamp: '10:02',
        sent: false,
    },
    {
        id: '2',
        type: 'message',
        message: "What's the best workout for weight loss?",
        timestamp: '10:02',
        sent: true,
    },
    {
        id: '1',
        type: 'message',
        message: 'Hi there! How can I help you today?',
        timestamp: '10:02',
        sent: false,
    },
    { id: 'date', type: 'date', dateLabel: DATE_LABEL },
];

const AiChatScreen: React.FC = () => {
    const [inputText, setInputText] = useState('');
    const [messages, setMessages] = useState<MessageItem[]>(INITIAL_MESSAGES);
    const flatListRef = useRef<FlatList<MessageItem>>(null);

    const handleSend = () => {
        if (!inputText.trim()) {
            Alert.alert('Please enter a message');
            return;
        }
        const newMessage: MessageItem = {
            id: String(messages.length + 1),
            type: 'message',
            message: inputText.trim(),
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            sent: true,
        };
        setMessages(prev => [newMessage, ...prev]);
        setInputText('');
        Keyboard.dismiss();
        setTimeout(() => {
            flatListRef.current?.scrollToOffset({ offset: 0, animated: true });
        }, 100);
    };

    const renderItem = ({ item }: { item: MessageItem }) => {
        if (item.type === 'date') {
            return (
                <View style={styles.dateSeparatorWrap}>
                    <View style={styles.datePill}>
                        <TextComp text={item.dateLabel} style={styles.datePillText} />
                    </View>
                </View>
            );
        }

        if (item.sent) {
            return (
                <View style={styles.sentWrapper}>
                    <View style={[styles.bubble, styles.sentBubble]}>
                        <TextComp text={item.message} style={styles.bubbleText} />
                    </View>
                    <View style={styles.timestampRowSent}>
                        <Text style={styles.timestamp}>{item.timestamp}</Text>
                        <Text style={styles.checks}>✓✓</Text>
                    </View>
                </View>
            );
        }

        return (
            <View style={styles.receivedWrapper}>
                <View style={styles.avatarWrap}>
                    <View style={styles.avatarPlaceholder}>
                        <TextComp text={AI_NAME.slice(0, 1)} style={styles.avatarLetter} />
                    </View>
                </View>
                <View style={styles.receivedContent}>
                    <View style={styles.receivedNameRow}>
                        <TextComp text={AI_NAME} style={styles.senderName} />
                        <TextComp text={` - ${AI_SUBTITLE}`} style={styles.senderSubtitle} />
                    </View>
                    <View style={[styles.bubble, styles.receivedBubble]}>
                        <TextComp text={item.message} style={styles.bubbleText} />
                    </View>
                    <View style={styles.timestampRowReceived}>
                        <Text style={styles.timestamp}>{item.timestamp}</Text>
                    </View>
                </View>
            </View>
        );
    };

    return (
        <WrapperContainer style={styles.container}>
            <HeaderComp
                showBack
                leftIcon="backBlack"
                title="AI Chat"
                iconColor={Colors.brandPurple}
                titleStyle={{ color: Colors.brandPurple }}
            />
            <KeyboardAvoidingView
                style={styles.keyboardView}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
            >
                <View style={styles.chatArea}>
                    <FlatList
                        ref={flatListRef}
                        data={messages}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        inverted
                        showsVerticalScrollIndicator={false}
                        keyboardShouldPersistTaps="handled"
                        contentContainerStyle={styles.flatListContent}
                    />
                </View>
                <View style={styles.inputArea}>
                    <View style={styles.inputRow}>
                        <TouchableOpacity style={styles.attachButton} activeOpacity={0.7}>
                            <MyIcons name="attachment" size={moderateScale(20)} stroke={Colors.gray400} />
                        </TouchableOpacity>
                        <TextInput
                            style={styles.input}
                            placeholder="Write a message..."
                            placeholderTextColor={Colors.gray300}
                            value={inputText}
                            onChangeText={setInputText}
                            multiline
                            maxLength={500}
                            onSubmitEditing={handleSend}
                        />
                        <TouchableOpacity
                            onPress={handleSend}
                            activeOpacity={0.8}
                            style={styles.sendButtonWrap}
                        >
                            <LinearGradient
                                colors={[Colors.tabPrimary, Colors.tabSecondary]}
                                style={styles.sendButtonGradient}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 1 }}
                            >
                                <MyIcons name="mic" size={moderateScale(22)} fill={Colors.white} />
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </WrapperContainer>
    );
};

export default AiChatScreen;
