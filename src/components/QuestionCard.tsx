import React from 'react';
import { StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native';
import TextComp from './TextComp';
import MyIcons from './MyIcons';
import { Colors } from '@/styles/colors';
import { moderateScale } from '@/styles/scaling';
import fontFamily from '@/styles/fontFamily';

interface QuestionCardProps {
    id: number;
    text: string;
    color: string;
    onPress?: () => void;
    style?: ViewStyle;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
    text,
    color,
    onPress,
    style,
}) => {
    return (
        <TouchableOpacity style={[styles.container, style]} onPress={onPress} activeOpacity={0.7}>
            <View style={[styles.iconBox, { backgroundColor: color }]}>
                <MyIcons name="tabAi" size={moderateScale(24)} stroke={Colors.white} />
            </View>
            <TextComp text={text} style={styles.text} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: moderateScale(16),
        borderRadius: moderateScale(16),
        backgroundColor: Colors.surface,
        marginBottom: moderateScale(16),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
    },
    iconBox: {
        width: moderateScale(48),
        height: moderateScale(48),
        borderRadius: moderateScale(8),
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: moderateScale(16),
    },
    text: {
        flex: 1,
        fontSize: moderateScale(16),
        fontFamily: fontFamily.medium,
        color: Colors.text,
        lineHeight: moderateScale(22),
    },
});

export default QuestionCard;
