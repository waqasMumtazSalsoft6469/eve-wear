import { Colors } from '@/styles/colors';
import fontFamily from '@/styles/fontFamily';
import { moderateScale, width } from '@/styles/scaling';
import React from 'react';
import { StyleSheet, TouchableOpacity, View, Image } from 'react-native';
import TextComp from './TextComp';

interface CategoryCardProps {
    id: number | string;
    title: string;
    image?: string;
    color: string;
    onPress?: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
    title,
    image,
    color,
    onPress
}) => {

    // Calculate dynamic width based on screen width minus padding
    // Screen padding is usually 16 on each side (32 total)
    // Gap between cards is effectively some space.
    // Let's assume 2 columns with some gap.
    const cardWidth = (width - moderateScale(48)) / 2;

    return (
        <TouchableOpacity
            style={[styles.categoryCard, { width: cardWidth }]}
            activeOpacity={0.8}
            onPress={onPress}
        >
            <View style={[styles.imageContainer, { height: cardWidth }]}>
                {/* Placeholder Image View */}
                <View style={[styles.placeholderImage, { backgroundColor: Colors.gray50 }]}>
                    {image ? (
                        <Image source={{ uri: image }} style={styles.categoryImage} resizeMode="contain" />
                    ) : (
                        <TextComp text="IMG" style={{ color: Colors.brandPurple, opacity: 0.3 }} />
                    )}
                </View>
            </View>
            <View style={[styles.categoryLabelContainer, { backgroundColor: color }]}>
                <TextComp text={title} style={styles.categoryLabelText} />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    categoryCard: {
        backgroundColor: Colors.surface,
        borderRadius: moderateScale(16),
        marginBottom: moderateScale(16),
        overflow: 'hidden',
        shadowColor: Colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 3,
        elevation: 2,
    },
    imageContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    placeholderImage: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    categoryImage: {
        width: '80%',
        height: '80%',
    },
    categoryLabelContainer: {
        paddingVertical: moderateScale(10),
        alignItems: 'center',
        justifyContent: 'center',
    },
    categoryLabelText: {
        color: Colors.white,
        fontSize: moderateScale(14),
        fontFamily: fontFamily.medium,
        textAlign: 'center',
    },
});

export default CategoryCard;
