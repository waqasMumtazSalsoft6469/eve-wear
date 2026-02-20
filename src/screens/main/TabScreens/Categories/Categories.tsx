import CategoryCard from '@/components/CategoryCard';
import HeaderComp from '@/components/HeaderComp';
import SearchBar from '@/components/SearchBar';
import WrapperContainer from '@/components/WrapperContainer';
import { Colors } from '@/styles/colors';
import { moderateScale } from '@/styles/scaling';
import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import styles from './styles';
import { localImages } from '@/assets/images';

const Categories: React.FC = () => {

    const [searchQuery, setSearchQuery] = useState('');

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
                                image={item.image}
                                color={item.color}
                                onPress={() => { }}
                            />
                        ))}
                    </View>
                </ScrollView>
            </View>
        </WrapperContainer>
    );
};

export default Categories;
