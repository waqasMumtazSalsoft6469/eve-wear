import FAQItem from '@/components/FAQItem';
import HeaderComp from '@/components/HeaderComp';
import WrapperContainer from '@/components/WrapperContainer';
import { Colors } from '@/styles/colors';
import React, { useCallback, useState } from 'react';
import { ScrollView, View } from 'react-native';
import styles from './styles';


interface FAQEntry {
    id: string;
    question: string;
    answer: string;
}

const FAQ_DATA: FAQEntry[] = [
    {
        id: '1',
        question: 'What is this app used for?',
        answer:
            'This app helps you track your cycle, understand symptoms, access AI health support, shop wellness products, and connect with doctors.',
    },
    {
        id: '2',
        question: 'Is my health data safe?',
        answer:
            'Yes. We use industry-standard encryption and never sell your personal health information.',
    },
    {
        id: '3',
        question: 'How accurate are cycle predictions?',
        answer:
            'Predictions improve over time as you log more data. We use evidence-based algorithms to estimate your cycle.',
    },
    {
        id: '4',
        question: 'Can I buy health products from the app?',
        answer:
            'Yes. You can browse and purchase wellness products in the Shop section.',
    },
    {
        id: '5',
        question: 'Is the AI assistant a doctor?',
        answer:
            'No. The AI provides general wellness information only. Always consult a healthcare provider for medical advice.',
    },
];

const Help: React.FC = () => {
    const [expandedId, setExpandedId] = useState<string | null>(FAQ_DATA[0]?.id ?? null);

    const handleToggle = useCallback((id: string) => {
        setExpandedId((prev) => (prev === id ? null : id));
    }, []);


 

    return (
        <WrapperContainer style={styles.container}>
            <HeaderComp
                title="Help & FAQs"
                showBack={true}
                leftIcon="menu"
                iconColor={Colors.brandPurple}
                titleStyle={styles.headerTitle}
            />
            <View style={styles.content}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.listContent}
                >
                    {FAQ_DATA.map((item, index) => (
                            <FAQItem
                                question={item.question}
                                answer={item.answer}
                                isExpanded={expandedId === item.id}
                                onPress={() => handleToggle(item.id)}
                            />
                    ))}
                </ScrollView>
            </View>
        </WrapperContainer>
    );
};

export default React.memo(Help);
