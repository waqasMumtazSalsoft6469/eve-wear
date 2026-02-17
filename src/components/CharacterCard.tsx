import React, { useCallback } from 'react';
import { Pressable, View, StyleSheet, Dimensions, Image, I18nManager } from 'react-native';
import Animated, { FadeInDown, FadeOut } from 'react-native-reanimated';
import TextComp from './TextComp';
import { Colors } from '@/styles/colors';
import fontFamily from '@/styles/fontFamily';
import { moderateScale } from '@/styles/scaling';

// Character interface
export interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    image: string;
    origin: {
        name: string;
    };
    location: {
        name: string;
    };
}

interface CharacterCardProps {
    item: Character;
    index: number;
    onPress?: () => void;
}

const { width } = Dimensions.get('window');
const CARD_MARGIN = moderateScale(4);
const CARD_WIDTH = (width - moderateScale(20) - CARD_MARGIN * 2) / 2;

const CharacterCard = ({ item, index, onPress }: CharacterCardProps) => {

    const getStatusColor = useCallback((status: string) => {
        switch (status.toLowerCase()) {
            case 'alive':
                return Colors.success;
            case 'dead':
                return Colors.error;
            default:
                return Colors.warning;
        }
    }, []);

    return (
        <Animated.View
            style={[styles.card, { backgroundColor: Colors.surface }]}
            entering={FadeInDown.delay((index % 20) * 100).springify()}
            exiting={FadeOut}
        >
            <Pressable onPress={onPress} style={styles.cardPressable}>
                <Image
                    source={{ uri: item.image }}
                    style={styles.characterImage}
                />
                <View style={[styles.statusBadge, { backgroundColor: Colors.surface }]}>
                    <View style={[styles.statusIndicator, { backgroundColor: getStatusColor(item.status) }]} />
                    <TextComp isDynamic text={item.status} style={[styles.statusText, { color: Colors.text }]} />
                </View>
                <View style={styles.cardContent}>
                    <View style={[styles.cardHeader, { flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row' }]}>
                        <TextComp isDynamic text={item.name} style={[styles.characterName, {
                            color: Colors.text,
                            textAlign: I18nManager.isRTL ? 'right' : 'left'
                        }]} numberOfLines={1} />
                    </View>

                    <View style={[styles.infoRow, { flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row' }]}>
                        <TextComp isDynamic text={item.species} style={[styles.value, {
                            color: Colors.text,
                            textAlign: I18nManager.isRTL ? 'right' : 'left'
                        }]} numberOfLines={1} />
                    </View>

                    <View style={[styles.infoRow, { flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row' }]}>
                        <TextComp isDynamic text={item.origin.name} style={[styles.value, {
                            color: Colors.text,
                            textAlign: I18nManager.isRTL ? 'right' : 'left'
                        }]} numberOfLines={1} />
                    </View>

                    <View style={[styles.infoRow, { flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row' }]}>
                        <TextComp isDynamic text={item.location.name} style={[styles.value, {
                            color: Colors.text,
                            textAlign: I18nManager.isRTL ? 'right' : 'left'
                        }]} numberOfLines={1} />
                    </View>
                </View>
            </Pressable>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    card: {
        width: CARD_WIDTH,
        backgroundColor: 'transparent', // Will be overridden in runtime
        borderRadius: moderateScale(8),
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
        margin: CARD_MARGIN,
    },
    cardPressable: {
        flex: 1,
        width: '100%',
    },
    characterImage: {
        width: '100%',
        height: CARD_WIDTH * 1.2,
        resizeMode: 'cover',
        borderTopLeftRadius: moderateScale(8),
        borderTopRightRadius: moderateScale(8),
    },
    cardContent: {
        padding: moderateScale(12),
    },
    cardHeader: {
        flexDirection: 'row', // Will be handled by RTL at runtime
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: moderateScale(8),
    },
    characterName: {
        fontSize: moderateScale(16),
        fontFamily: fontFamily.bold,
        color: '#000', // Will be overridden at runtime
        flex: 1,
    },
    statusIndicator: {
        width: moderateScale(8),
        height: moderateScale(8),
        borderRadius: moderateScale(4),
        marginHorizontal: moderateScale(6),
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.3)',
    },
    infoRow: {
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row', // Will be handled by RTL at runtime
        alignItems: 'center',
        marginBottom: moderateScale(4),
    },
    value: {
        fontSize: moderateScale(12),
        fontFamily: fontFamily.regular,
        color: '#000', // Will be overridden at runtime
        flex: 1,
    },
    statusBadge: {
        paddingHorizontal: moderateScale(8),
        paddingVertical: moderateScale(2),
        borderRadius: moderateScale(12),
        backgroundColor: 'transparent', // Will be overridden at runtime
        position: 'absolute',
        top: moderateScale(8),
        ...(I18nManager.isRTL ? { left: moderateScale(8) } : { right: moderateScale(8) }),
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row', // Will be handled by RTL at runtime
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 2,
        elevation: 3,
    },
    statusText: {
        fontSize: moderateScale(10),
        fontFamily: fontFamily.medium,
        color: '#000', // Will be overridden at runtime
        marginStart: moderateScale(4),
    },
});

export default CharacterCard;