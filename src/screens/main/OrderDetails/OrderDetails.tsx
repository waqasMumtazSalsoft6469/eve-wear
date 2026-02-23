import HeaderComp from '@/components/HeaderComp';
import MyIcons from '@/components/MyIcons';
import OrderProductItemComp from '@/components/OrderProductItemComp';
import SearchBar from '@/components/SearchBar';
import TextComp from '@/components/TextComp';
import WrapperContainer from '@/components/WrapperContainer';
import { localImages } from '@/assets/images';
import { OrderItem } from '@/models/Order';
import { Colors } from '@/styles/colors';
import React from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import styles from './styles';

const OrderDetails: React.FC = () => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const [isActionMenuVisible, setIsActionMenuVisible] = React.useState(false);

    const product: OrderItem = {
        id: '1',
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
                title="Order Details"
                leftIcon="back"
                rightIcon="notification"
                iconColor={Colors.brandPurple}
                titleStyle={styles.headerTitle}
            />

            <ScrollView
                style={styles.scroll}
                contentContainerStyle={styles.contentContainer}
                showsVerticalScrollIndicator={false}
            >
                <SearchBar
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                    placeholder="Search items"
                    showFilterButton={false}
                    containerStyle={styles.searchBar}
                />

                <View style={styles.shippingCard}>
                    <View style={styles.shippingTag}>
                        <MyIcons name="locationWhite" size={12} />
                        <TextComp text="SHIP TO HOME" style={styles.shippingTagText} />
                    </View>
                    <TextComp text="Alexa Jones" style={styles.shippingName} />
                    <TextComp text="1458 Biddle Lane, Virginia" style={styles.shippingAddress} />
                    <TextComp text="+145 789 6587" style={styles.shippingPhone} />
                </View>

                <OrderProductItemComp item={product} />

                <View style={styles.orderMetaSection}>
                    <TextComp text="Rate & Review Product" style={styles.rateReviewText} />

                    <View style={styles.orderInfoCard}>
                        <View style={styles.orderInfoTopRow}>
                            <View>
                                <TextComp text="Order ID: AL5670" style={styles.orderIdText} />
                                <TextComp text="Placed on: Dec 15, 2020 - 12:00 PM" style={styles.placedOnText} />
                            </View>

                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => setIsActionMenuVisible(prev => !prev)}
                                style={styles.menuButton}
                            >
                                <View style={styles.menuDot} />
                                <View style={styles.menuDot} />
                                <View style={styles.menuDot} />
                            </TouchableOpacity>
                        </View>

                        {isActionMenuVisible ? (
                            <View style={styles.actionMenu}>
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    onPress={() => setIsActionMenuVisible(false)}
                                >
                                    <TextComp text="Edit" style={styles.actionMenuText} />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    onPress={() => setIsActionMenuVisible(false)}
                                >
                                    <TextComp text="Delete" style={styles.actionMenuText} />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    onPress={() => setIsActionMenuVisible(false)}
                                >
                                    <TextComp text="Cancel" style={styles.actionMenuText} />
                                </TouchableOpacity>
                            </View>
                        ) : null}
                    </View>
                </View>

                <View style={styles.priceSummaryCard}>
                    <View style={styles.summaryRow}>
                        <TextComp text="Subtotal (2 Items)" style={styles.summaryLabel} />
                        <TextComp text="$64.00" style={styles.summaryValue} />
                    </View>
                    <View style={styles.summaryRow}>
                        <TextComp text="Discount" style={styles.summaryLabel} />
                        <TextComp text="$10.00" style={styles.summaryValue} />
                    </View>

                    <View style={styles.summaryDivider} />

                    <TextComp text="1 item, 1 package" style={styles.summaryNote} />

                    <View style={[styles.summaryRow, styles.totalRow]}>
                        <TextComp text="Subtotal" style={styles.totalLabel} />
                        <TextComp text="$74.00" style={styles.totalValue} />
                    </View>
                </View>
            </ScrollView>
        </WrapperContainer>
    );
};

export default OrderDetails;
