import ButtonComp from '@/components/ButtonComp';
import HeaderComp from '@/components/HeaderComp';
import TextComp from '@/components/TextComp';
import WrapperContainer from '@/components/WrapperContainer';
import { Colors } from '@/styles/colors';
import { devLog } from '@/utils/logger';
import React, { useCallback } from 'react';
import { Pressable, ScrollView, View } from 'react-native';
import styles from './styles';

const PARAGRAPH_1 =
    'Eve Wear partners with fitness apps to provide you with more ways to track your health and fitness data. When you connect your Eve Wear account to a fitness app, you can share your data between the two apps. This allows you to see all of your health and fitness data in one place, and to get a more complete picture of your overall health.';

const PARAGRAPH_2 =
    "To connect your Eve Wear account to a fitness app, go to the Settings tab in the Eve Wear app and tap on 'Fitness Partners.' From there, you can select the fitness app you want to connect to and follow the instructions.";

const PARAGRAPH_3 =
    'Please note that when you connect your Eve Wear account to a fitness app, you are sharing your data with a third-party service. Eve Wear is not responsible for the privacy practices of these third-party services. Please review the privacy policies of these services before connecting your accounts.';

const OurCollaboration: React.FC = () => {
    const handleTermsPress = useCallback(() => {
        devLog('Terms & Conditions');
    }, []);

    return (
        <WrapperContainer style={styles.container}>
            <HeaderComp
                title="Our Collaborations"
                showBack={false}
                leftIcon="menu"
                iconColor={Colors.brandPurple}
                rightIcon="notification"
                titleStyle={styles.headerTitle}
            />
            <View style={styles.content}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.scrollContent}
                >
                    <View style={styles.card}>
                        <TextComp text="Fitness Partner" style={styles.sectionTitle} />
                        <TextComp text={PARAGRAPH_1} style={styles.paragraph} />
                        <TextComp text={PARAGRAPH_2} style={styles.paragraph} />
                        <TextComp
                            text={PARAGRAPH_3}
                            style={[styles.paragraph, styles.paragraphLast]}
                        />
                    </View>
                    <View style={styles.linkWrap}>
                    <Pressable onPress={handleTermsPress}>
                        <TextComp text="Terms & Conditions" style={styles.linkText} />
                    </Pressable>
                    </View>
                </ScrollView>
            </View>
        </WrapperContainer>
    );
};

export default React.memo(OurCollaboration);
