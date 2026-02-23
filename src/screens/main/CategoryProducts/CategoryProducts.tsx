import { localImages } from '@/assets/images';
import AppModal from '@/components/AppModal';
import CategoryCard from '@/components/CategoryCard';
import HeaderComp from '@/components/HeaderComp';
import SearchBar from '@/components/SearchBar';
import TextComp from '@/components/TextComp';
import WrapperContainer from '@/components/WrapperContainer';
import routes from '@/constants/routes';
import { Colors } from '@/styles/colors';
import fontFamily from '@/styles/fontFamily';
import { moderateScale } from '@/styles/scaling';
import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useMemo, useState } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import styles from './styles';

interface ProductItem {
    id: number;
    categoryId: number;
    name: string;
    price: string;
    image: any;
}

type SortOption = 'default' | 'lowToHigh' | 'highToLow';

const SORT_OPTIONS: { label: string; value: SortOption }[] = [
    { label: 'Default Sorting', value: 'default' },
    { label: 'Price Low to High', value: 'lowToHigh' },
    { label: 'Price High to Low', value: 'highToLow' },
];

const sortStyles = StyleSheet.create({
    sortRow: {
        minHeight: moderateScale(50),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    sortLabel: {
        fontSize: moderateScale(16),
        fontFamily: fontFamily.regular,
        color: Colors.gray400,
    },
    sortCheckWrap: {
        width: moderateScale(20),
        height: moderateScale(20),
        borderRadius: moderateScale(10),
        backgroundColor: Colors.brandSalmon,
        alignItems: 'center',
        justifyContent: 'center',
    },
    sortCheckText: {
        color: Colors.white,
        fontSize: moderateScale(12),
        fontFamily: fontFamily.bold,
    },
    sortDivider: {
        height: 1,
        backgroundColor: Colors.gray100,
    },
});

const ALL_PRODUCTS: ProductItem[] = [
    { id: 1, categoryId: 1, name: 'Iron Plus Capsules', price: '$24.00', image: localImages.product1 },
    { id: 2, categoryId: 1, name: 'Omega Balance', price: '$32.00', image: localImages.product2 },
    { id: 3, categoryId: 2, name: 'PH Restore Support', price: '$21.00', image: localImages.product3 },
    { id: 4, categoryId: 2, name: 'Probiotic Care', price: '$27.00', image: localImages.product4 },
    { id: 5, categoryId: 3, name: 'Vitamin D3', price: '$19.00', image: localImages.product2 },
    { id: 6, categoryId: 3, name: 'Vitamin B-Complex', price: '$23.00', image: localImages.product1 },
    { id: 7, categoryId: 4, name: 'Training Leggings', price: '$39.00', image: localImages.product4 },
    { id: 8, categoryId: 4, name: 'Performance Top', price: '$34.00', image: localImages.product3 },
];

const CategoryProducts: React.FC = () => {
    const navigation = useNavigation<any>();
    const route = useRoute<any>();
    const [searchQuery, setSearchQuery] = useState('');
    const [favoriteIds, setFavoriteIds] = useState<number[]>([]);
    const [isFilterModalVisible, setIsFilterModalVisible] = useState(false);
    const [sortOption, setSortOption] = useState<SortOption>('default');

    const categoryId = route.params?.categoryId as number | undefined;
    const categoryTitle = (route.params?.categoryTitle as string | undefined) ?? 'Category Products';

    const filteredProducts = useMemo(() => {
        const base = categoryId ? ALL_PRODUCTS.filter(item => item.categoryId === categoryId) : ALL_PRODUCTS;
        const q = searchQuery.trim().toLowerCase();
        const searched = q ? base.filter(item => item.name.toLowerCase().includes(q)) : base;

        if (sortOption === 'default') return searched;

        const toNumber = (price: string) => Number(price.replace(/[^0-9.]/g, '')) || 0;
        const sorted = [...searched].sort((a, b) => toNumber(a.price) - toNumber(b.price));
        return sortOption === 'lowToHigh' ? sorted : sorted.reverse();
    }, [categoryId, searchQuery, sortOption]);

    const toggleFavorite = (id: number) => {
        setFavoriteIds(prev =>
            prev.includes(id) ? prev.filter(itemId => itemId !== id) : [...prev, id]
        );
    };

    const handleSortChange = (value: SortOption) => {
        setSortOption(value);
        setIsFilterModalVisible(false);
    };

    const renderProduct = ({ item }: { item: ProductItem }) => (
        <CategoryCard
            id={item.id}
            title={item.name}
            price={item.price}
            image={item.image}
            actionLabel="Add to Cart"
            isFavorite={favoriteIds.includes(item.id)}
            onFavoritePress={() => toggleFavorite(item.id)}
            onPress={() => navigation.navigate(routes.main.productDetails, { productId: item.id })}
        />
    );

    return (
        <WrapperContainer style={styles.container}>
            <HeaderComp
                title={categoryTitle}
                showBack
                leftIcon="backBlack"
                iconColor={Colors.brandPurple}
                rightIcon="notification"
                onRightIconPress={() => navigation.navigate(routes.main.notification)}
                titleStyle={{ color: Colors.brandPurple }}
            />
            <View style={styles.content}>
                <SearchBar
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                    placeholder={`Search in ${categoryTitle}..`}
                    onFilterPress={() => setIsFilterModalVisible(true)}
                />

                <FlatList
                    data={filteredProducts}
                    keyExtractor={item => String(item.id)}
                    numColumns={2}
                    columnWrapperStyle={styles.row}
                    contentContainerStyle={styles.listContent}
                    showsVerticalScrollIndicator={false}
                    renderItem={renderProduct}
                    ListEmptyComponent={
                        <View style={styles.emptyWrap}>
                            <TextComp text="No products found for this category." style={styles.emptyText} />
                        </View>
                    }
                />
            </View>

            <AppModal
                isVisible={isFilterModalVisible}
                onClose={() => setIsFilterModalVisible(false)}
                type="filter"
                title="Default Sorting"
            >
                {SORT_OPTIONS.map((option, index) => (
                    <View key={option.value}>
                        <TouchableOpacity
                            style={sortStyles.sortRow}
                            activeOpacity={0.8}
                            onPress={() => handleSortChange(option.value)}
                        >
                            <TextComp text={option.label} style={sortStyles.sortLabel} />
                            {sortOption === option.value ? (
                                <View style={sortStyles.sortCheckWrap}>
                                    <TextComp text="✓" style={sortStyles.sortCheckText} />
                                </View>
                            ) : null}
                        </TouchableOpacity>
                        {index < SORT_OPTIONS.length - 1 ? <View style={sortStyles.sortDivider} /> : null}
                    </View>
                ))}
            </AppModal>
        </WrapperContainer>
    );
};

export default CategoryProducts;
