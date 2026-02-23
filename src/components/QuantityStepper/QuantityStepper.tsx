import TextComp from '@/components/TextComp';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import styles from './styles';

interface QuantityStepperProps {
    quantity: number;
    onIncrease: () => void;
    onDecrease: () => void;
}

const QuantityStepper: React.FC<QuantityStepperProps> = ({
    quantity,
    onIncrease,
    onDecrease,
}) => {
    return (
        <View style={styles.qtyStepper}>
            <TouchableOpacity onPress={onDecrease} activeOpacity={0.8} style={styles.qtyButton}>
                <TextComp text="-" style={styles.qtyButtonText} />
            </TouchableOpacity>

            <TextComp text={quantity < 10 ? `0${quantity}` : `${quantity}`} style={styles.qtyText} />

            <TouchableOpacity onPress={onIncrease} activeOpacity={0.8} style={styles.qtyButton}>
                <TextComp text="+" style={styles.qtyButtonText} />
            </TouchableOpacity>
        </View>
    );
};

export default QuantityStepper;
