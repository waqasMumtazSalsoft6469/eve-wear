import ButtonComp from '@/components/ButtonComp';
import HeaderComp from '@/components/HeaderComp';
import TextComp from '@/components/TextComp';
import WrapperContainer from '@/components/WrapperContainer';
import { Colors } from '@/styles/colors';
import React, { useState } from 'react';
import { ScrollView, Switch, View } from 'react-native';
import styles from './styles';

const ReminderAlert: React.FC = () => {
    const [period, setPeriod] = useState(true);
    const [wellness, setWellness] = useState(false);
    const [ovulation, setOvulation] = useState(false);

    return (
        <WrapperContainer style={styles.container}>
            <HeaderComp
                showBack
                leftIcon="backBlack"
                title="Reminder & Alerts"
                iconColor={Colors.brandPurple}
                titleStyle={{ color: Colors.brandPurple }}
            />
            <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                <View style={styles.card}>
                    <View style={styles.cardText}>
                        <TextComp text="Period" style={styles.cardTitle} />
                        <TextComp text="Remind me when my period is about to start." style={styles.cardDesc} />
                    </View>
                    <Switch
                        value={period}
                        onValueChange={setPeriod}
                        trackColor={{ false: Colors.gray200, true: Colors.brandSalmon }}
                        thumbColor={Colors.white}
                    />
                </View>
                <View style={styles.card}>
                    <View style={styles.cardText}>
                        <TextComp text="Wellness" style={styles.cardTitle} />
                        <TextComp text="Remind me to check in with my body." style={styles.cardDesc} />
                    </View>
                    <Switch
                        value={wellness}
                        onValueChange={setWellness}
                        trackColor={{ false: Colors.gray200, true: Colors.brandSalmon }}
                        thumbColor={Colors.white}
                    />
                </View>
                <View style={styles.card}>
                    <View style={styles.cardText}>
                        <TextComp text="Ovulation" style={styles.cardTitle} />
                        <TextComp text="Remind me when I'm most fertile." style={styles.cardDesc} />
                    </View>
                    <Switch
                        value={ovulation}
                        onValueChange={setOvulation}
                        trackColor={{ false: Colors.gray200, true: Colors.brandSalmon }}
                        thumbColor={Colors.white}
                    />
                </View>
            </ScrollView>
            <View style={styles.footer}>
                <ButtonComp title="Save" onPress={() => {}} variant="premium" style={styles.saveButton} />
            </View>
        </WrapperContainer>
    );
};

export default ReminderAlert;
