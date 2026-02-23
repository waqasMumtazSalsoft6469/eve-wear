import { Colors } from '@/styles/colors';
import fontFamily from '@/styles/fontFamily';
import { moderateScale } from '@/styles/scaling';
import React from 'react';
import { I18nManager, StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native';
import TextComp from './TextComp';

export interface FilterChipOption<T extends string = string> {
    key: T;
    label: string;
}

interface FilterChipsCompProps<T extends string = string> {
    options: FilterChipOption<T>[];
    selectedKey: T;
    onSelect: (key: T) => void;
    containerStyle?: ViewStyle;
}

function FilterChipsComp<T extends string>({
    options,
    selectedKey,
    onSelect,
    containerStyle,
}: FilterChipsCompProps<T>) {
    return (
        <View style={[styles.filterRow, containerStyle]}>
            {options.map((opt) => {
                const isActive = selectedKey === opt.key;
                return (
                    <TouchableOpacity
                        key={opt.key}
                        style={[styles.filterTab, isActive && styles.filterTabActive]}
                        onPress={() => onSelect(opt.key as T)}
                        activeOpacity={0.7}
                    >
                        <TextComp
                            text={opt.label}
                            style={[styles.filterTabText, isActive && styles.filterTabTextActive]}
                        />
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    filterRow: {
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        flexWrap: 'wrap',
        gap: moderateScale(10),
    },
    filterTab: {
        paddingHorizontal: moderateScale(16),
        paddingVertical: moderateScale(10),
        borderRadius: moderateScale(20),
        backgroundColor: Colors.background,
        borderWidth: 1,
        borderColor: Colors.gray200,
    },
    filterTabActive: {
        backgroundColor: Colors.brandSalmon,
        borderColor: Colors.brandSalmon,
    },
    filterTabText: {
        fontSize: moderateScale(12),
        fontFamily: fontFamily.regular,
        color: Colors.textSecondary,
    },
    filterTabTextActive: {
        color: Colors.white,
        fontFamily: fontFamily.bold,
    },
});

export default FilterChipsComp;
