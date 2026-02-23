import { Colors } from '@/styles/colors';
import fontFamily from '@/styles/fontFamily';
import { moderateScale, width } from '@/styles/scaling';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import TextComp from './TextComp';

interface CategoryCardProps {
    id: number | string;
    title: string;
    image?: any;
    price?: string;
    actionLabel?: string;
    showFavorite?: boolean;
    showDetails?: boolean;
    isFavorite?: boolean;
    color?: string;
    onPress?: () => void;
    onFavoritePress?: () => void;
    onActionPress?: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
    title,
    image,
    price,
    actionLabel = 'Add to Cart',
    showFavorite = true,
    showDetails = true,
    isFavorite = false,
    onFavoritePress,
    onPress
}) => {
    const cardWidth = (width - moderateScale(48)) / 2;

    return (
        <TouchableOpacity
            style={[styles.cardContainer, { width: cardWidth }]}
            activeOpacity={0.9}
            onPress={onPress}
        >
            <View style={styles.mediaCard}>
                {showFavorite ? (
                    <TouchableOpacity
                        style={styles.favoriteWrap}
                        activeOpacity={0.8}
                        onPress={(e) => {
                            e.stopPropagation();
                            onFavoritePress?.();
                        }}
                    >
                        <TextComp text={isFavorite ? '♥' : '♡'} style={[styles.favoriteIcon, isFavorite && styles.favoriteIconActive]} />
                    </TouchableOpacity>
                ) : null}

                <View style={styles.imageWrap}>
                    {image ? <Image source={image} style={styles.productImage} resizeMode="contain" /> : null}
                </View>

                <LinearGradient
                    colors={[...Colors.gradientPrimary]}
                    style={styles.actionBar}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                >
                    <TextComp text={actionLabel} style={styles.actionText} />
                </LinearGradient>
            </View>

            {showDetails ? (
                <View style={styles.detailsRow}>
                    <TextComp text={title} style={styles.titleText} numberOfLines={1} />
                    {price ? <TextComp text={price} style={styles.priceText} /> : null}
                </View>
            ) : null}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        marginBottom: moderateScale(16),
    },
    mediaCard: {
        backgroundColor: '#EFE8F0',
        borderRadius: moderateScale(14),
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.06,
        shadowRadius: 5,
        elevation: 2,
    },
    favoriteWrap: {
        position: 'absolute',
        top: moderateScale(8),
        left: moderateScale(8),
        zIndex: 2,
    },
    favoriteIcon: {
        color: '#F07A78',
        fontSize: moderateScale(18),
        lineHeight: moderateScale(18),
    },
    favoriteIconActive: {
        color: '#EA6A6A',
    },
    imageWrap: {
        width: '100%',
        height: moderateScale(160),
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: moderateScale(8),
        paddingTop: moderateScale(8),
    },
    productImage: {
        width: '78%',
        height: '78%',
    },
    actionBar: {
        paddingVertical: moderateScale(10),
        alignItems: 'center',
        justifyContent: 'center',
    },
    actionText: {
        color: Colors.white,
        fontSize: moderateScale(14),
        fontFamily: fontFamily.bold,
    },
    detailsRow: {
        marginTop: moderateScale(6),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    titleText: {
        flex: 1,
        color: Colors.text,
        fontSize: moderateScale(15),
        fontFamily: fontFamily.regular,
        marginRight: moderateScale(8),
    },
    priceText: {
        color: '#6D6D6D',
        fontSize: moderateScale(14),
        fontFamily: fontFamily.regular,
        textAlign: 'center',
    },
});

export default CategoryCard;
