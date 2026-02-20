import ButtonComp from '@/components/ButtonComp';
import HeaderComp from '@/components/HeaderComp';
import TextComp from '@/components/TextComp';
import WrapperContainer from '@/components/WrapperContainer';
import { Colors } from '@/styles/colors';
import React, { useState } from 'react';
import { ScrollView, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './styles';

const MOODS = [
    { id: 'happy', label: 'Happy', emoji: '😄' },
    { id: 'calm', label: 'Calm', emoji: '😌' },
    { id: 'tired', label: 'Tired', emoji: '😫' },
    { id: 'stressed', label: 'Stressed', emoji: '😰' },
    { id: 'sad', label: 'Sad', emoji: '😢' },
];

const LogSymptoms: React.FC = () => {
    const [mood, setMood] = useState('happy');
    const [painLevel, setPainLevel] = useState(5);
    const [energyLevel, setEnergyLevel] = useState(4);
    const [notes, setNotes] = useState('');

    return (
        <WrapperContainer style={styles.container}>
            <HeaderComp
                showBack
                leftIcon="backBlack"
                title="Log Symptoms"
                iconColor={Colors.brandPurple}
                titleStyle={{ color: Colors.brandPurple }}
            />
            <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                <TextComp text="Mood" style={styles.sectionTitle} />
                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.moodRow}>
                    {MOODS.map((m) => (
                        <TouchableOpacity
                            key={m.id}
                            onPress={() => setMood(m.id)}
                            style={[styles.moodChip, mood === m.id && styles.moodChipSelected]}
                        >
                            <TextComp text={m.emoji} style={styles.moodEmoji} />
                            <TextComp text={m.label} style={[styles.moodLabel, mood === m.id && styles.moodLabelSelected]} />
                        </TouchableOpacity>
                    ))}
                </ScrollView>

                <TextComp text="Pain" style={styles.sectionTitle} />
                <View style={styles.sliderRow}>
                    <TextComp text="Pain Level" style={styles.sliderLabel} />
                    <View style={styles.sliderTrack}>
                        <View style={[styles.sliderFill, { width: `${painLevel * 10}%` }]} />
                    </View>
                    <TextComp text={String(painLevel).padStart(2, '0')} style={styles.sliderValue} />
                </View>
                <TextComp text="Energy" style={styles.sectionTitle} />
                <View style={styles.sliderRow}>
                    <TextComp text="Energy Level" style={styles.sliderLabel} />
                    <View style={styles.sliderTrack}>
                        <View style={[styles.sliderFill, { width: `${energyLevel * 10}%` }]} />
                    </View>
                    <TextComp text={String(energyLevel).padStart(2, '0')} style={styles.sliderValue} />
                </View>

                <TextComp text="Additional Notes" style={styles.sectionTitle} />
                <TextInput
                    placeholder="Write a note..."
                    placeholderTextColor={Colors.gray400}
                    value={notes}
                    onChangeText={setNotes}
                    multiline
                    style={styles.notesInput}
                />
            </ScrollView>
            <View style={styles.footer}>
                <ButtonComp title="Save" onPress={() => {}} variant="premium" />
            </View>
        </WrapperContainer>
    );
};

export default LogSymptoms;
