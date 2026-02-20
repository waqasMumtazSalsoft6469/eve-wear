import TextComp from '@/components/TextComp';
import { Colors } from '@/styles/colors';
import fontFamily from '@/styles/fontFamily';
import { moderateScale } from '@/styles/scaling';
import React, { useCallback } from 'react';
import { I18nManager, StyleSheet, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const DEFAULT_GRADIENT = Colors.gradientPrimary;

export interface SegmentedControlProps {
    segments: string[];
    selectedIndex: number;
    onSelect: (index: number) => void;
    gradientColors?: readonly [string, string, string?];
}

const SegmentedControl: React.FC<SegmentedControlProps> = ({
    segments,
    selectedIndex,
    onSelect,
    gradientColors = DEFAULT_GRADIENT,
}) => {
    const handlePress = useCallback(
        (index: number) => {
            onSelect(index);
        },
        [onSelect]
    );

    return (
        <View style={[styles.container, I18nManager.isRTL && styles.containerRTL]}>
            {segments.map((label, index) => {
                const isSelected = selectedIndex === index;
                const content = (
                    <TextComp
                        text={label}
                        style={[styles.label, isSelected ? styles.labelSelected : styles.labelUnselected]}
                    />
                );
                return (
                    <TouchableOpacity
                        key={index}
                        onPress={() => handlePress(index)}
                        activeOpacity={0.8}
                        style={[styles.segment, isSelected && styles.segmentSelected]}
                    >
                        {isSelected ? (
                            <LinearGradient
                                colors={[...gradientColors]}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                style={styles.segmentGradient}
                            >
                                {content}
                            </LinearGradient>
                        ) : (
                            <View style={styles.segmentInner}>{content}</View>
                        )}
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: Colors.white,
        borderRadius: moderateScale(12),
        padding: moderateScale(8),
        paddingVertical: moderateScale(8),
        shadowColor: Colors.black,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.06,
        shadowRadius: 4,
        elevation: 2,
    },
    containerRTL: {
        flexDirection: 'row-reverse',
    },
    segment: {
        flex: 1,
        borderRadius: moderateScale(20),
        overflow: 'hidden',
    },
    segmentSelected: {
        overflow: 'hidden',
    },
    segmentGradient: {
        paddingVertical: moderateScale(12),
        alignItems: 'center',
        justifyContent: 'center',
    },
    segmentInner: {
        paddingVertical: moderateScale(12),
        alignItems: 'center',
        justifyContent: 'center',
    },
    label: {
        fontSize: moderateScale(14),
        fontFamily: fontFamily.bold,
    },
    labelSelected: {
        color: Colors.white,
    },
    labelUnselected: {
        color: Colors.textSecondary,
    },
});

export default React.memo(SegmentedControl);
