import { localImages } from '@/assets/images';
import CategoryCard from '@/components/CategoryCard';
import HeaderComp from '@/components/HeaderComp';
import SearchBar from '@/components/SearchBar';
import WrapperContainer from '@/components/WrapperContainer';
import routes from '@/constants/routes';
import { Colors } from '@/styles/colors';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import styles from './styles';

const Categories: React.FC = () => {

    const [searchQuery, setSearchQuery] = useState('');
    const navigation = useNavigation<any>();
    const categories = [
        {
            id: 1,
            title: "Supplements",
            image: localImages.product1,
            color: Colors.brandSalmon,
        },
        {
            id: 2,
            title: "Wellness & PH Balance",
            image: localImages.product2,
            color: Colors.brandSalmon,
        },
        {
            id: 3,
            title: "Vitamins",
            image: localImages.product3,
            color: Colors.brandSalmon,
        },
        {
            id: 4,
            title: "Fitness Wear",
            image: localImages.product4,
            color: Colors.brandSalmon,
        },

    ];

    return (
        <WrapperContainer style={styles.container}>
            <HeaderComp
                title="Shop Categories"
                iconColor={Colors.brandPurple}
                showBack={true}
                leftIcon="menu"
                rightIcon="notification"
                titleStyle={{ color: Colors.brandPurple }}
            />

            <View style={styles.content}>
                <SearchBar
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                    placeholder="Search categories.."
                    onFilterPress={() => { }}
                />

                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.gridContainer}>
                        {categories.map((item) => (
                            <CategoryCard
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                image={item.image as any}
                                color={item.color}
                                actionLabel={item.title}
                                showFavorite={false}
                                showDetails={false}
                                onPress={() =>
                                    navigation.navigate(routes.main.categoryProducts, {
                                        categoryId: item.id,
                                        categoryTitle: item.title,
                                    })
                                }
                            />
                        ))}
                    </View>
                </ScrollView>
            </View>
        </WrapperContainer>
    );
};

export default Categories;
