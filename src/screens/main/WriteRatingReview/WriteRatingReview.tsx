import HeaderComp from '@/components/HeaderComp';
import OrderProductItemComp from '@/components/OrderProductItemComp';
import TextComp from '@/components/TextComp';
import WrapperContainer from '@/components/WrapperContainer';
import { localImages } from '@/assets/images';
import { OrderItem } from '@/models/Order';
import { Colors } from '@/styles/colors';
import React from 'react';
import { ScrollView, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import ButtonComp from '@/components/ButtonComp';
import { moderateScale } from '@/styles/scaling';

const WriteRatingReview: React.FC = () => {
    const [rating, setRating] = React.useState(0);
    const [reviewText, setReviewText] = React.useState('');

    const product: OrderItem = {
        id: 'review-item',
        image: localImages.product1,
        category: 'Supplements',
        name: 'Arete Energy Supplements',
        price: '$50.09',
        qty: 1,
        status: 'Completed',
    };

    return (
        <WrapperContainer style={styles.container}>
            <HeaderComp
                showBack={true}
                title="Rating & Reviews"
                leftIcon="backBlack"
                rightIcon="notification"
                iconColor={Colors.brandPurple}
                titleStyle={styles.headerTitle}
            />

            <ScrollView
                style={styles.scroll}
                contentContainerStyle={styles.contentContainer}
                showsVerticalScrollIndicator={false}
            >
                <TextComp text="Package" style={styles.sectionTitle} />
                <OrderProductItemComp item={product} />

                <TextComp text="Rating & Reviews" style={styles.sectionHeading} />

                <View style={styles.starRow}>
                    {[1, 2, 3, 4, 5].map(star => (
                        <TouchableOpacity
                            key={star}
                            activeOpacity={0.85}
                            onPress={() => setRating(star)}
                            style={styles.starButton}
                        >
                            <TextComp
                                text={star <= rating ? '★' : '☆'}
                                style={[styles.starText, star <= rating && styles.starTextActive]}
                            />
                        </TouchableOpacity>
                    ))}
                </View>

                <TextComp text="Write your review" style={styles.writeReviewLabel} />
                <TextInput
                    value={reviewText}
                    onChangeText={setReviewText}
                    multiline
                    textAlignVertical="top"
                    placeholder="Enter Review"
                    placeholderTextColor={Colors.gray300}
                    style={styles.reviewInput}
                />

                <ButtonComp onPress={() => {}} title="Submit Review"  style={{marginTop: moderateScale(14)}}/>
            </ScrollView>
        </WrapperContainer>
    );
};

export default WriteRatingReview;
