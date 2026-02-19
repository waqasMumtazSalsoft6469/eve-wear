import TextComp from '@/components/TextComp';
import { Colors } from '@/styles/colors';
import fontFamily from '@/styles/fontFamily';
import { moderateScale } from '@/styles/scaling';
import React, { useCallback } from 'react';
import { I18nManager, LayoutAnimation, Platform, UIManager, StyleSheet, TouchableOpacity, View } from 'react-native';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

export interface FAQItemProps {
    question: string;
    answer: string;
    isExpanded: boolean;
    onPress: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({
    question,
    answer,
    isExpanded,
    onPress,
}) => {
    const handlePress = useCallback(() => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        onPress();
    }, [onPress]);

    return (
        <TouchableOpacity
            onPress={handlePress}
            activeOpacity={0.8}
            style={styles.card}
        >
            <View style={[styles.headerRow, I18nManager.isRTL && styles.headerRowRTL]}>
                <TextComp text={question} style={styles.question} />
                <TextComp
                    text={isExpanded ? '▲' : '▼'}
                    style={styles.chevron}
                />
            </View>
            {isExpanded && (
                <View style={styles.answerWrap}>
                    <TextComp text={answer} style={styles.answer} />
                </View>
            )}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: Colors.gray50,
        borderRadius: moderateScale(12),
        padding: moderateScale(16),
        marginBottom: moderateScale(12),
        shadowColor: Colors.gray400,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.06,
        shadowRadius: 4,
        elevation: 2,
        marginHorizontal:2
    },
    headerRow: {
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    headerRowRTL: {
        flexDirection: 'row-reverse',
    },
    question: {
        flex: 1,
        fontSize: moderateScale(15),
        fontFamily: fontFamily.bold,
        color: Colors.text,
        marginEnd: moderateScale(12),
    },
    chevron: {
        fontSize: moderateScale(12),
        fontFamily: fontFamily.regular,
        color: Colors.text,
    },
    answerWrap: {
        marginTop: moderateScale(12),
        paddingTop: moderateScale(12),
        borderTopWidth: 1,
        borderTopColor: Colors.inputBorder,
    },
    answer: {
        fontSize: moderateScale(14),
        fontFamily: fontFamily.regular,
        color: Colors.textSecondary,
        lineHeight: moderateScale(20),
    },
});

export default React.memo(FAQItem);
