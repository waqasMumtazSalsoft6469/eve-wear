import { localImages } from '@/assets/images';
import AppModal from '@/components/AppModal';
import ButtonComp from '@/components/ButtonComp';
import CarouselItem from '@/components/CarouselItem';
import CustomAnimatedCarousel from '@/components/CustomAnimatedCarousel';
import HeaderComp from '@/components/HeaderComp';
import TextComp from '@/components/TextComp';
import WrapperContainer from '@/components/WrapperContainer';
import routes from '@/constants/routes';
import { Colors } from '@/styles/colors';
import { moderateScale, width as screenWidth } from '@/styles/scaling';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert, Image, ScrollView, TouchableOpacity, View } from 'react-native';
import Share, { Social } from 'react-native-share';
import styles from './styles';
import MyIcons from '@/components/MyIcons';

type ReviewItem = {
    id: number;
    name: string;
    daysAgo: string;
    comment: string;
    image: any;
};

type ProductCarouselItem = {
    id: string;
    image: any;
    secondaryImage: any;
};

const PRODUCT_SLIDES: ProductCarouselItem[] = [
    { id: '1', image: localImages.product1, secondaryImage: localImages.product2 },
    { id: '2', image: localImages.product2, secondaryImage: localImages.product3 },
    { id: '3', image: localImages.product3, secondaryImage: localImages.product4 },
];

const REVIEWS: ReviewItem[] = [
    {
        id: 1,
        name: 'James Miller',
        daysAgo: '2 days ago',
        comment: 'Product quality is really very good. Size is also perfect. Delivery on time. Nice packaging Highly recommended.',
        image: localImages.doctor1,
    },
    {
        id: 2,
        name: 'Julie Robert',
        daysAgo: '5 days ago',
        comment: 'Product quality is really very good. Size is also perfect. Delivery on time. Nice packaging Highly recommended.',
        image: localImages.doctor2,
    },
    {
        id: 3,
        name: 'Kelly Anderson',
        daysAgo: '1 day ago',
        comment: 'Product quality is really very good. Size is also perfect. Delivery on time. Nice packaging Highly recommended.',
        image: localImages.doctor3,
    },
];

const ProductDetails: React.FC = () => {
    const navigation = useNavigation<any>();
    const [quantity, setQuantity] = useState(1);
    const [isAddedModalVisible, setIsAddedModalVisible] = useState(false);
    const [isShareModalVisible, setIsShareModalVisible] = useState(false);

    const decrementQty = () => {
        setQuantity(prev => (prev > 1 ? prev - 1 : 1));
    };

    const incrementQty = () => {
        setQuantity(prev => prev + 1);
    };

    const handleAddToCart = () => {
        setIsAddedModalVisible(true);
    };

    const handleViewCart = () => {
        setIsAddedModalVisible(false);
        navigation.navigate(routes.main.myOrders);
    };

    const shareBasePayload = {
        title: 'EveWear Product',
        message: 'Check out this product on EveWear: Arete Energy Focused Supplements',
        url: 'https://evewear.app',
    };

    const handleShareTo = async (social: 'facebook' | 'instagram') => {
        try {
            await Share.shareSingle({
                ...shareBasePayload,
                social: social === 'facebook' ? Social.Facebook : Social.Instagram,
            });
            setIsShareModalVisible(false);
        } catch (error: any) {
            if (!error?.message?.includes('User did not share')) {
                Alert.alert(
                    'Share unavailable',
                    `Could not open ${social === 'facebook' ? 'Facebook' : 'Instagram'}.`
                );
            }
        }
    };

    return (
        <WrapperContainer style={styles.container}>
            <HeaderComp
                showBack
                leftIcon="backBlack"
                onRightIconPress={() => navigation.navigate(routes.main.notification)}
                title=""
                iconColor={Colors.brandPurple}
            />

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                <View style={styles.heroSection}>
                    <CustomAnimatedCarousel
                        data={PRODUCT_SLIDES}
                        width={screenWidth - moderateScale(32)}
                        height={moderateScale(210)}
                        autoPlay={false}
                        loop={true}
                        pagingEnabled={true}
                        snapEnabled={true}
                        animationType="cube"
                        renderItem={({ item, index }) => (
                            <CarouselItem
                                item={item}
                                index={index}
                                type="product"
                                width={screenWidth - moderateScale(80)}
                                height={moderateScale(210)}
                            />
                        )}
                    />
                </View>

                <View style={styles.detailsCard}>
                    <View style={styles.titleRow}>
                        <TextComp text="Arete Energy Focused Supplements" style={styles.productTitle} />
                        <View style={styles.actionIconsRow}>
                            <TouchableOpacity activeOpacity={0.8}>
                                <MyIcons name="gradientHeart" size={moderateScale(24)} />
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.8} onPress={() => setIsShareModalVisible(true)}>
                                <MyIcons name="share" size={moderateScale(24)} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <TextComp text="★★★★★" style={styles.starsText} />
                    <TextComp text="$50.09" style={styles.priceText} />

                    <View style={styles.sectionRow}>
                        <View>
                            <TextComp text="Quantity" style={styles.sectionTitle} />
                            <TextComp text={quantity < 10 ? `0${quantity}` : `${quantity}`} style={styles.quantityValueText} />
                        </View>

                        <View style={styles.qtyStepper}>
                            <TouchableOpacity onPress={decrementQty} activeOpacity={0.8} style={styles.qtyButton}>
                                <TextComp text="-" style={styles.qtyButtonText} />
                            </TouchableOpacity>
                            <TextComp text={quantity < 10 ? `0${quantity}` : `${quantity}`} style={styles.qtyText} />
                            <TouchableOpacity onPress={incrementQty} activeOpacity={0.8} style={styles.qtyButton}>
                                <TextComp text="+" style={styles.qtyButtonText} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <TextComp text="Description" style={styles.sectionTitle} />
                    <View style={styles.descriptionCard}>
                        <TextComp
                            text="Aretes Energy & Focus Supplements Are Wellness Formulas Designed To Support Natural Energy, Stamina, And Mental Clarity Using Blends Of Adaptogenic Herbs, Vitamins, Or Performance Nutrients For Steady Daily Performance."
                            style={styles.descriptionText}
                        />
                    </View>

                    <View style={styles.reviewsHeaderRow}>
                        <TextComp text="Rating & Reviews" style={styles.reviewsTitle} />
                        <TouchableOpacity activeOpacity={0.8}>
                            <TextComp text="View All" style={styles.viewAllText} />
                        </TouchableOpacity>
                    </View>

                    {REVIEWS.map(review => (
                        <View key={review.id} style={styles.reviewCard}>
                            <Image source={review.image} style={styles.reviewerImage} resizeMode="cover" />
                            <View style={styles.reviewContent}>
                                <View style={styles.reviewTopRow}>
                                    <View>
                                        <TextComp text={review.name} style={styles.reviewerName} />
                                        <TextComp text={review.daysAgo} style={styles.reviewDaysText} />
                                    </View>
                                    <TextComp text="★★★★★" style={styles.reviewStars} />
                                </View>
                                <TextComp text={review.comment} style={styles.reviewComment} />
                            </View>
                        </View>
                    ))}
                </View>
            </ScrollView>

            <View style={styles.bottomButtonWrap}>
                <ButtonComp title="Add to Cart" onPress={handleAddToCart} height={52} style={styles.addToCartButton} />
            </View>

            <AppModal
                isVisible={isAddedModalVisible}
                onClose={() => setIsAddedModalVisible(false)}
                type="cart"
                message="Product has been successfully added to cart!"
                primaryButtonText="View Cart"
                onPrimaryPress={handleViewCart}
            />

            <AppModal
                isVisible={isShareModalVisible}
                onClose={() => setIsShareModalVisible(false)}
                type="filter"
                title=""
            >
                <View style={styles.shareSheetRow}>
                    <TouchableOpacity
                        style={styles.shareIconButton}
                        activeOpacity={0.8}
                        onPress={() => handleShareTo('facebook')}
                    >
                        <MyIcons name="facebook" size={moderateScale(50)} />
                        <TextComp text="Facebook" style={styles.sharePlatformText} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.shareIconButton}
                        activeOpacity={0.8}
                        onPress={() => handleShareTo('instagram')}
                    >
                        <MyIcons name="instagram" size={moderateScale(50)} />
                        <TextComp text="Instagram" style={styles.sharePlatformText} />
                    </TouchableOpacity>
                </View>
            </AppModal>
        </WrapperContainer>
    );
};

export default ProductDetails;
