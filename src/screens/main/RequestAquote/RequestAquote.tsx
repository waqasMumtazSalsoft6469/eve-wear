import HeaderComp from '@/components/HeaderComp';
import AppModal from '@/components/AppModal';
import ButtonComp from '@/components/ButtonComp';
import MyIcons from '@/components/MyIcons';
import TextComp from '@/components/TextComp';
import TextInputComp from '@/components/TextInputComp';
import WrapperContainer from '@/components/WrapperContainer';
import routes from '@/constants/routes';
import { MainStackParamList } from '@/navigation/types';
import { Colors } from '@/styles/colors';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { ScrollView, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { moderateScale } from '@/styles/scaling';

const RequestAquote: React.FC = () => {
    const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();
    const [firstName, setFirstName] = React.useState('');
    const [dateOfBirth, setDateOfBirth] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [insuranceType, setInsuranceType] = React.useState('');
    const [notes, setNotes] = React.useState('');
    const [isQuoteModalVisible, setIsQuoteModalVisible] = React.useState(false);

    const INSURANCE_TYPES = ['Basic Plan', 'Premium Plan', 'Family Plan', 'Corporate Plan'];
    const [showInsuranceOptions, setShowInsuranceOptions] = React.useState(false);

    return (
        <WrapperContainer style={styles.container}>
            <HeaderComp
                title="Request A Quote"
                leftIcon="backBlack"
                rightIcon="notification"
                iconColor={Colors.brandPurple}
                titleStyle={styles.headerTitle}
            />

            <View style={styles.content}>
                <ScrollView
                    style={styles.scroll}
                    contentContainerStyle={styles.scrollContent}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.formCard}>
                        <TextInputComp
                            label="First Name"
                            value={firstName}
                            onChangeText={setFirstName}
                            placeholder="Enter Full Name"
                            placeholderTextColor={Colors.gray300}
                            labelStyle={styles.fieldLabel}
                            containerStyle={styles.inputWrap}
                            inputContainerStyle={styles.inputContainer}
                            inputStyle={styles.inputText}
                        />

                        <TextInputComp
                            label="Date of Birth"
                            value={dateOfBirth}
                            onChangeText={setDateOfBirth}
                            placeholder="MM/DD/YYYY"
                            placeholderTextColor={Colors.gray300}
                            labelStyle={styles.fieldLabel}
                            containerStyle={styles.inputWrap}
                            inputContainerStyle={styles.inputContainer}
                            inputStyle={styles.inputText}
                        />

                        <TextInputComp
                            label="Contact Email"
                            value={email}
                            onChangeText={setEmail}
                            placeholder="Enter your email"
                            placeholderTextColor={Colors.gray300}
                            labelStyle={styles.fieldLabel}
                            containerStyle={styles.inputWrap}
                            inputContainerStyle={styles.inputContainer}
                            inputStyle={styles.inputText}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />

                        <View style={styles.inputWrap}>
                            <TextComp text="Insurance Type" style={styles.fieldLabel} />
                            <TouchableOpacity
                                activeOpacity={0.85}
                                onPress={() => setShowInsuranceOptions(prev => !prev)}
                                style={styles.inputContainer}
                            >
                                <TextComp
                                    text={insuranceType || 'Select Type'}
                                    style={[styles.inputText, !insuranceType && styles.placeholderText]}
                                />
                                <View style={styles.dropdownIcon}>
                                    <MyIcons name="dropdownArrow" size={moderateScale(16)}/>
                                </View>
                            </TouchableOpacity>
                            {showInsuranceOptions ? (
                                <View style={styles.dropdownCard}>
                                    {INSURANCE_TYPES.map(type => (
                                        <TouchableOpacity
                                            key={type}
                                            activeOpacity={0.85}
                                            onPress={() => {
                                                setInsuranceType(type);
                                                setShowInsuranceOptions(false);
                                            }}
                                            style={styles.dropdownItem}
                                        >
                                            <TextComp text={type} style={styles.dropdownItemText} />
                                        </TouchableOpacity>
                                    ))}
                                </View>
                            ) : null}
                        </View>

                        <View style={styles.notesWrap}>
                            <TextComp text="Notes (Optional)" style={styles.fieldLabel} />
                            <TextInput
                                value={notes}
                                onChangeText={setNotes}
                                placeholder="Write instructions.."
                                placeholderTextColor={Colors.gray300}
                                multiline
                                textAlignVertical="top"
                                style={styles.notesInput}
                            />
                        </View>
                    </View>
                </ScrollView>
            </View>

            <View style={styles.bottomButtonWrap}>
                <ButtonComp
                    title="Submit Request"
                    onPress={() => setIsQuoteModalVisible(true)}
                    height={52}
                    style={styles.bottomButton}
                />
            </View>

            <AppModal
                isVisible={isQuoteModalVisible}
                onClose={() => setIsQuoteModalVisible(false)}
                type="quoteRequest"
                title="Your request has been submitted successfully!"
                primaryButtonText="View  Application Status"
                onPrimaryPress={() => {
                    setIsQuoteModalVisible(false);
                    navigation.navigate(routes.main.applicationStatus);
                }}
            />
        </WrapperContainer>
    );
};

export default RequestAquote;
