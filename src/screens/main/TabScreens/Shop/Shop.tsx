import React, { useState } from 'react';
import { View, FlatList, Image, Pressable } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import TextComp from '@/components/TextComp';
import WrapperContainer from '@/components/WrapperContainer';
import SearchBar from '@/components/SearchBar';
import HeaderComp from '@/components/HeaderComp';
import { Colors } from '@/styles/colors';
import styles from './styles';
import { localImages } from '@/assets/images';
import routes from '@/constants/routes';
import { MainStackParamList } from '@/navigation/types';
import { NavigationProp, useNavigation } from '@react-navigation/native';

interface Provider {
    id: string;
    name: string;
    specialty: string;
    rating: number;
    distance: string;
    image: any;
}

const PROVIDERS: Provider[] = [
    { id: '1', name: 'Dr. Emily Carter', specialty: 'Gynecologist', rating: 4.8, distance: '1.2 mi', image: localImages?.doctor1 },
    { id: '2', name: 'Dr. Emily Carter', specialty: 'Gynecologist', rating: 4.8, distance: '1.2 mi', image: localImages?.doctor2},
    { id: '3', name: 'Dr. Sophie Victor', specialty: 'Gynecologist', rating: 4.8, distance: '1.2 mi', image: localImages?.doctor3 },
    { id: '4', name: 'Dr. Eva James', specialty: 'Gynecologist', rating: 4.8, distance: '1.2 mi', image: localImages?.doctor4 },
];

const Shop: React.FC = () => {
    const navigation = useNavigation<NavigationProp<MainStackParamList>>();
    const [searchText, setSearchText] = useState('');

    const renderProvider = ({ item }: { item: Provider }) => (
        <Pressable
            style={styles.providerCard}
            onPress={() => navigation.navigate(routes.main.providerProfile)}
        >
            <View style={styles.providerImageContainer}>
                {item.image ? (
                    <Image source={item.image} style={styles.providerImage} resizeMode="cover" />
                ) : (
                    <View style={[styles.providerImage, styles.imagePlaceholder]} />
                )}
            </View>
            <View style={styles.cardContent}>
                <TextComp text={item.name} style={styles.providerName} />
                <View style={styles.infoRow}>
                    <TextComp text={item.specialty} style={styles.specialty} />
                    <TextComp
                        text={`  \u2192 ${item.rating} \u00B7 ${item.distance}`}
                        style={styles.ratingText}
                    />
                </View>
                <Pressable
                    style={styles.bookButton}
                    onPress={() => navigation.navigate(routes.main.providerProfile)}
                >
                    <LinearGradient
                        colors={['#6B2D45', '#E07A5F']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={styles.bookButtonGradient}
                    >
                        <TextComp text="Book Appointment" style={styles.bookButtonText} />
                    </LinearGradient>
                </Pressable>
            </View>
        </Pressable>
    );

    return (
        <WrapperContainer style={styles.container}>
            <HeaderComp
                title="Find a Provider"
                showBack={false}
                leftIcon="menu"
                iconColor={Colors.brandPurple}
                rightIcon="notification"
                titleStyle={styles.headerTitle}
            />

            <View style={styles.content}>
                <SearchBar
                    value={searchText}
                    onChangeText={setSearchText}
                    placeholder="Search for a provider.."
                    onFilterPress={() => { }}
                />

                <FlatList
                    data={PROVIDERS}
                    renderItem={renderProvider}
                    keyExtractor={(item) => item.id}
                    numColumns={2}
                    columnWrapperStyle={styles.row}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.listContent}
                />
            </View>
        </WrapperContainer>
    );
};

export default Shop;
