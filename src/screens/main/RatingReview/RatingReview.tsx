import HeaderComp from '@/components/HeaderComp';
import TextComp from '@/components/TextComp';
import WrapperContainer from '@/components/WrapperContainer';
import { localImages } from '@/assets/images';
import { Colors } from '@/styles/colors';
import React from 'react';
import { Image, ScrollView, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

interface ReviewItem {
    id: string;
    name: string;
    dateText: string;
    reviewText: string;
    image: any;
}

const REVIEWS: ReviewItem[] = [
    {
        id: '1',
        name: 'James Miller',
        dateText: '2 days ago',
        reviewText: 'Product quality is really very good. Size is also perfect. Delivery on time. Nice packaging Highly recommended.',
        image: localImages.doctor1,
    },
    {
        id: '2',
        name: 'Julie Robert',
        dateText: '2 days ago',
        reviewText: 'Product quality is really very good. Size is also perfect. Delivery on time. Nice packaging Highly recommended.',
        image: localImages.doctor2,
    },
    {
        id: '3',
        name: 'James Miller',
        dateText: '2 days ago',
        reviewText: 'Product quality is really very good. Size is also perfect. Delivery on time. Nice packaging Highly recommended.',
        image: localImages.doctor1,
    },
    {
        id: '4',
        name: 'Kelly Anderson',
        dateText: '2 days ago',
        reviewText: 'Product quality is really very good. Size is also perfect. Delivery on time. Nice packaging Highly recommended.',
        image: localImages.doctor3,
    },
];

const RatingReview: React.FC = () => {
    return (
        <WrapperContainer style={styles.container}>
            <HeaderComp
                title="Rating & Reviews"
                leftIcon="back"
                rightIcon="notification"
                iconColor={Colors.brandPurple}
                titleStyle={styles.headerTitle}
            />

            <ScrollView
                contentContainerStyle={styles.contentContainer}
                showsVerticalScrollIndicator={false}
            >
                <LinearGradient
                    colors={['#37184D', '#6B3296', '#37184D']}
                    start={{ x: 0, y: 0.2 }}
                    end={{ x: 1, y: 0.8 }}
                    style={styles.ratingSummaryCard}
                >
                    <View style={styles.scoreHexagon}>
                        <TextComp text="4.8" style={styles.scoreValue} />
                        <TextComp text="Out of 5" style={styles.scoreLabel} />
                    </View>

                    <View style={styles.summaryRight}>
                        <TextComp text="★★★★★" style={styles.starsText} />
                        <TextComp text="100 Reviews" style={styles.reviewsCountText} />
                    </View>
                </LinearGradient>

                {REVIEWS.map(item => (
                    <View key={item.id} style={styles.reviewCard}>
                        <Image source={item.image} resizeMode="cover" style={styles.reviewerAvatar} />
                        <View style={styles.reviewBody}>
                            <View style={styles.reviewHeaderRow}>
                                <View>
                                    <TextComp text={item.name} style={styles.reviewerName} />
                                    <TextComp text={item.dateText} style={styles.reviewDate} />
                                </View>
                                <TextComp text="★★★★★" style={styles.reviewStarsText} />
                            </View>
                            <TextComp text={item.reviewText} style={styles.reviewDescription} />
                        </View>
                    </View>
                ))}
            </ScrollView>
        </WrapperContainer>
    );
};

export default RatingReview;
