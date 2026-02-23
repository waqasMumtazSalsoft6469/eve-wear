import HeaderComp from '@/components/HeaderComp';
import ButtonComp from '@/components/ButtonComp';
import MyIcons from '@/components/MyIcons';
import TextComp from '@/components/TextComp';
import TextInputComp from '@/components/TextInputComp';
import WrapperContainer from '@/components/WrapperContainer';
import routes from '@/constants/routes';
import { MainStackParamList } from '@/navigation/types';
import { Colors } from '@/styles/colors';
import { moderateScale } from '@/styles/scaling';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { ScrollView, Switch, TouchableOpacity, View } from 'react-native';
import styles from './styles';

const AddShippingAddress: React.FC = () => {
    const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();
    const [country, setCountry] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [stateProvince, setStateProvince] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [phone, setPhone] = useState('');
    const [label, setLabel] = useState<'Office' | 'Home'>('Home');
    const [isDefault, setIsDefault] = useState(true);

    return (
        <WrapperContainer style={styles.container}>
            <HeaderComp
                showBack
                leftIcon="backBlack"
                title="Add Shipping Address"
                iconColor={Colors.brandPurple}
                rightIcon="notification"
                onRightIconPress={() => navigation.navigate(routes.main.notification)}
                titleStyle={{ color: Colors.brandPurple }}
            />

            <View style={styles.content}>
                <ScrollView
                    style={styles.scroll}
                    contentContainerStyle={styles.scrollContent}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.formCard}>
                        <TextInputComp
                            label="Country or Region"
                            labelStyle={styles.fieldLabel}
                            value={country}
                            onChangeText={setCountry}
                            placeholder="Select"
                            placeholderTextColor={Colors.gray400}
                            containerStyle={styles.inputWrap}
                            inputContainerStyle={styles.inputContainer}
                            inputStyle={styles.inputText}
                        />

                        <TextInputComp
                            label="First Name"
                            labelStyle={styles.fieldLabel}
                            value={firstName}
                            onChangeText={setFirstName}
                            placeholder="Enter Full Name"
                            placeholderTextColor={Colors.gray400}
                            containerStyle={styles.inputWrap}
                            inputContainerStyle={styles.inputContainer}
                            inputStyle={styles.inputText}
                        />

                        <TextInputComp
                            label="Last Name"
                            labelStyle={styles.fieldLabel}
                            value={lastName}
                            onChangeText={setLastName}
                            placeholder="Enter Last Name"
                            placeholderTextColor={Colors.gray400}
                            containerStyle={styles.inputWrap}
                            inputContainerStyle={styles.inputContainer}
                            inputStyle={styles.inputText}
                        />

                        <TextInputComp
                            label="Address"
                            labelStyle={styles.fieldLabel}
                            value={address}
                            onChangeText={setAddress}
                            placeholder="Enter Street Address"
                            placeholderTextColor={Colors.gray400}
                            containerStyle={styles.inputWrap}
                            inputContainerStyle={styles.inputContainer}
                            inputStyle={styles.inputText}
                        />

                        <TextInputComp
                            label="City"
                            labelStyle={styles.fieldLabel}
                            value={city}
                            onChangeText={setCity}
                            placeholder="Enter City"
                            placeholderTextColor={Colors.gray400}
                            containerStyle={styles.inputWrap}
                            inputContainerStyle={styles.inputContainer}
                            inputStyle={styles.inputText}
                        />

                        <TextInputComp
                            label="State/Province"
                            labelStyle={styles.fieldLabel}
                            value={stateProvince}
                            onChangeText={setStateProvince}
                            placeholder="Select"
                            placeholderTextColor={Colors.gray400}
                            containerStyle={styles.inputWrap}
                            inputContainerStyle={styles.inputContainer}
                            inputStyle={styles.inputText}
                        />

                        <TextInputComp
                            label="Zip Code"
                            labelStyle={styles.fieldLabel}
                            value={zipCode}
                            onChangeText={setZipCode}
                            placeholder="Enter Zip code"
                            placeholderTextColor={Colors.gray400}
                            containerStyle={styles.inputWrap}
                            inputContainerStyle={styles.inputContainer}
                            inputStyle={styles.inputText}
                            keyboardType="number-pad"
                        />

                        <TextInputComp
                            label="Phone Number"
                            labelStyle={styles.fieldLabel}
                            value={phone}
                            onChangeText={setPhone}
                            placeholder="Enter Phone Number"
                            placeholderTextColor={Colors.gray400}
                            containerStyle={styles.inputWrapLast}
                            inputContainerStyle={styles.inputContainer}
                            inputStyle={styles.inputText}
                            keyboardType="phone-pad"
                        />
                    </View>

                    <View style={styles.optionsCard}>
                        <TextComp text="Select a label for effective delivery" style={styles.optionsTitle} />

                        <View style={styles.labelRow}>
                            <TouchableOpacity
                                activeOpacity={0.85}
                                onPress={() => setLabel('Office')}
                                style={[styles.labelChip, label === 'Office' && styles.labelChipActive]}
                            >
                                <TextComp text="Office" style={[styles.labelText, label === 'Office' && styles.labelTextActive]} />
                            </TouchableOpacity>
                            <TouchableOpacity
                                activeOpacity={0.85}
                                onPress={() => setLabel('Home')}
                                style={[styles.labelChip, label === 'Home' && styles.labelChipActive]}
                            >
                                <TextComp text="Home" style={[styles.labelText, label === 'Home' && styles.labelTextActive]} />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.defaultRow}>
                            <TextComp text="Make default shipping address" style={styles.defaultText} />
                            <Switch
                                value={isDefault}
                                onValueChange={setIsDefault}
                                trackColor={{ false: Colors.gray200, true: Colors.brandSalmon }}
                                thumbColor={Colors.white}
                            />
                        </View>
                    </View>
                </ScrollView>
            </View>

            <View style={styles.bottomButtonWrap}>
                <ButtonComp
                    title="Add Now"
                    onPress={() => { }}
                    variant="premium"
                    height={52}
                    style={styles.bottomButton}
                />
            </View>
        </WrapperContainer>
    );
};

export default AddShippingAddress;
