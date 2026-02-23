import MyIcons from '@/components/MyIcons';
import TextComp from '@/components/TextComp';
import { ImageSourcePropType, TouchableOpacity, View, Image } from 'react-native';
import React from 'react';
import QuantityStepper from '../QuantityStepper';
import styles from './styles';

interface CartItemCardProps {
    category: string;
    title: string;
    priceText: string;
    image: ImageSourcePropType;
    quantity: number;
    onIncrease: () => void;
    onDecrease: () => void;
    onDelete: () => void;
}

const CartItemCard: React.FC<CartItemCardProps> = ({
    category,
    title,
    priceText,
    image,
    quantity,
    onIncrease,
    onDecrease,
    onDelete,
}) => {
    return (
        <View style={styles.itemCard}>
            <View style={styles.itemRow}>
                <View style={styles.imageWrap}>
                    <Image source={image} style={styles.productImage} resizeMode="contain" />
                </View>

                <View style={styles.itemInfo}>
                    <View style={styles.itemTopRow}>
                        <TextComp text={category} style={styles.categoryText} />
                        <TouchableOpacity onPress={onDelete} activeOpacity={0.8}>
                            <MyIcons name="delete" size={24} />
                        </TouchableOpacity>
                    </View>

                    <TextComp text={title} style={styles.itemTitle} />
                    <TextComp text={priceText} style={styles.itemPrice} />

                    <QuantityStepper
                        quantity={quantity}
                        onIncrease={onIncrease}
                        onDecrease={onDecrease}
                    />
                </View>
            </View>
        </View>
    );
};

export default CartItemCard;
