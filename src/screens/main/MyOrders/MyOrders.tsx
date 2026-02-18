import HeaderComp from '@/components/HeaderComp';
import FilterChipsComp, { FilterChipOption } from '@/components/FilterChipsComp';
import OrderCardComp from '@/components/OrderCardComp';
import SearchBar from '@/components/SearchBar';
import TextComp from '@/components/TextComp';
import WrapperContainer from '@/components/WrapperContainer';
import { localImages } from '@/assets/images';
import { Colors } from '@/styles/colors';
import { Order, OrderStatus } from '@/models/Order';
import { moderateScale } from '@/styles/scaling';
import React, { useMemo, useState } from 'react';
import { FlatList, View } from 'react-native';
import styles from './styles';

type OrderFilterKey = 'All' | OrderStatus;

const FILTER_OPTIONS: FilterChipOption<OrderFilterKey>[] = [
    { key: 'All', label: 'All' },
    { key: 'Pending', label: 'Pending' },
    { key: 'In-Process', label: 'In-Process' },
    { key: 'Completed', label: 'Completed' },
];

const MOCK_ORDERS: Order[] = [
    {
        id: '1',
        orderId: 'AL5670',
        placedOn: 'Dec 15, 2020 - 12:00 PM',
        total: '$128',
        items: [
            {
                id: '1a',
                image: localImages.product1,
                category: 'Supplements',
                name: 'Arete Energy Supplements',
                price: '$50.09',
                qty: 1,
                status: 'Pending',
            },
            {
                id: '1b',
                image: localImages.product2,
                category: 'Supplements',
                name: "Women's Multivitamin",
                price: '$77.91',
                qty: 1,
                status: 'In-Process',
            },
        ],
    },
    {
        id: '2',
        orderId: 'AL5669',
        placedOn: 'Dec 14, 2020 - 10:30 AM',
        total: '$64',
        items: [
            {
                id: '2a',
                image: localImages.product3,
                category: 'Supplements',
                name: 'Fem Eeze',
                price: '$64.00',
                qty: 1,
                status: 'Completed',
            },
        ],
    },
];

const MyOrders: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeFilter, setActiveFilter] = useState<OrderFilterKey>('All');

    const filteredOrders = useMemo(() => {
        return MOCK_ORDERS.filter((order) => {
            const matchesFilter =
                activeFilter === 'All' ||
                order.items.some((item) => item.status === activeFilter);
            const matchesSearch =
                !searchQuery.trim() ||
                order.orderId.toLowerCase().includes(searchQuery.toLowerCase()) ||
                order.items.some(
                    (item) =>
                        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        item.category.toLowerCase().includes(searchQuery.toLowerCase())
                );
            return matchesFilter && matchesSearch;
        });
    }, [activeFilter, searchQuery]);

    const handleOrderPress = (_order: Order) => {
        // TODO: navigate to order detail screen
    };

    return (
        <WrapperContainer style={styles.container}>
            <HeaderComp
                title="My Orders"
                showBack={false}
                leftIcon="menu"
                iconColor={Colors.brandPurple}
                rightIcon="notification"
                titleStyle={styles.headerTitle}
            />
            <View style={styles.content}>
                <SearchBar
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                    placeholder="Search Product"
                    showFilterButton={false}
                    containerStyle={styles.searchBarContainer}
                />

                <FilterChipsComp
                    options={FILTER_OPTIONS}
                    selectedKey={activeFilter}
                    onSelect={setActiveFilter}
                    containerStyle={styles.filterChipsContainer}
                />

                <FlatList
                    data={filteredOrders}
                    renderItem={({ item }) => (
                        <OrderCardComp
                            order={item}
                            onPress={() => handleOrderPress(item)}
                        />
                    )}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.listContent}
                    ListEmptyComponent={
                        <View style={styles.emptyContainer}>
                            <TextComp text="No orders found" style={styles.emptyText} />
                        </View>
                    }
                />
            </View>
        </WrapperContainer>
    );
};

export default MyOrders;
