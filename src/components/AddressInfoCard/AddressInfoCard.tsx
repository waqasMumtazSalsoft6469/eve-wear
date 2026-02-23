import MyIcons from '@/components/MyIcons';
import TextComp from '@/components/TextComp';
import { Colors } from '@/styles/colors';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { Pressable, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { moderateScale } from '@/styles/scaling';

interface AddressInfoCardProps {
    tagText?: string;
    name: string;
    address: string;
    phone: string;
    email: string;
    onEditPress?: () => void;
}

const AddressInfoCard: React.FC<AddressInfoCardProps> = ({
    tagText = 'HOME',
    name,
    address,
    phone,
    email,
    onEditPress,
}) => {
    return (
        <View style={styles.card}>
            <View style={styles.topRow}>
                <View style={styles.tagPill}>
                    <View style={styles.tagPillContent}>
                        <MyIcons name="locationWhite" size={12} />
                        <TextComp text={tagText} style={styles.tagText} />
                    </View>
                </View>

                <Pressable style={styles.editButton} onPress={onEditPress}>
                    <MyIcons name="editIcon" size={moderateScale(22)} />
                </Pressable>
            </View>

            <TextComp text={name} style={styles.name} />
            <TextComp text={address} style={styles.address} />

            <TextInput
                value={phone}
                editable={false}
                style={styles.readOnlyInput}
                placeholderTextColor={Colors.gray400}
            />
            <TextInput
                value={email}
                editable={false}
                style={[styles.readOnlyInput, styles.readOnlyInputLast]}
                placeholderTextColor={Colors.gray400}
            />
        </View>
    );
};

export default AddressInfoCard;
