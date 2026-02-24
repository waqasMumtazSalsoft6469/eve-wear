import HeaderComp from '@/components/HeaderComp';
import AppModal from '@/components/AppModal';
import ButtonComp from '@/components/ButtonComp';
import MyIcons from '@/components/MyIcons';
import TextComp from '@/components/TextComp';
import WrapperContainer from '@/components/WrapperContainer';
import routes from '@/constants/routes';
import { MainStackParamList } from '@/navigation/types';
import { clearDataAction } from '@/redux/actions/auth';
import { Colors } from '@/styles/colors';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Image, Linking, ScrollView, TouchableOpacity, View } from 'react-native';
import styles from './styles';

const UserProfile: React.FC = () => {
    const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();
    const [isLogoutModalVisible, setIsLogoutModalVisible] = React.useState(false);
    const [isDeactivateModalVisible, setIsDeactivateModalVisible] = React.useState(false);

    const handleDeactivateAccount = React.useCallback(() => {
        setIsDeactivateModalVisible(false);
        Linking.openURL('https://evewear.com/deactivate-account');
    }, []);

    const settings = [
        { key: 'editProfile', title: 'Edit Profile', icon: 'profileUser' as const, iconBg: '#5B2A86' },
        { key: 'changePassword', title: 'Change Password', icon: 'profileLock' as const, iconBg: '#0077D5' },
        { key: 'manageNotifications', title: 'Manage Notifications', icon: 'profileNotification' as const, iconBg: '#464646' },
        { key: 'helpCentre', title: 'Help Centre', icon: 'profileHelp' as const, iconBg: '#EC6200' },
        { key: 'logout', title: 'Logout', icon: 'profileLogout' as const, iconBg: '#F12C2C' },
        { key: 'deactivateAccount', title: 'Deactivate Account', icon: 'profileLogout' as const, iconBg: '#C71E1E' },
    ];

    return (
        <WrapperContainer style={styles.container}>
            <View style={styles.topBackground} />

            <HeaderComp
                title=""
                leftIcon="backBlack"
                rightIcon="notification"
                iconColor={Colors.brandPurple}
            />

            <ScrollView
                style={styles.scroll}
                contentContainerStyle={styles.contentContainer}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.avatarWrap}>
                    <Image
                        source={{ uri: 'https://i.pravatar.cc/240?u=alexa-william' }}
                        resizeMode="cover"
                        style={styles.avatar}
                    />
                </View>

                <View style={styles.mainCard}>
                    <TextComp text="Alexa William" style={styles.nameText} />
                    <TextComp text="alexa@email.com" style={styles.emailText} />
                    <TextComp text="Born on 1990-05-15" style={styles.birthText} />

                    <TextComp text="Health Preferences" style={styles.sectionTitle} />
                    <View style={styles.metricsRow}>
                        <View style={styles.metricCard}>
                            <TextComp text="165 cm" style={styles.metricValue} />
                            <TextComp text="Height" style={styles.metricLabel} />
                        </View>
                        <View style={styles.metricCard}>
                            <TextComp text="45kg" style={styles.metricValue} />
                            <TextComp text="Weight" style={styles.metricLabel} />
                        </View>
                        <View style={styles.metricCard}>
                            <TextComp text="Moderate" style={styles.metricValue} />
                            <TextComp text="Activity Level" style={styles.metricLabel} />
                        </View>
                    </View>

                    <View style={styles.planCard}>
                        <View style={styles.planTopRow}>
                            <View>
                                <TextComp text="Premium Plan" style={styles.planTitle} />
                                <TextComp text="Active until 2026-12-31" style={styles.planSubText} />
                            </View>
                            <TextComp text="$99.99/month" style={styles.planPrice} />
                        </View>
                        <ButtonComp
                            title="View Details"
                            onPress={() => {}}
                            variant="secondary"
                            gradientColors={Colors.gradientPrimary}
                            height={36}
                            style={styles.planButton}
                            textStyle={styles.planButtonText}
                        />
                    </View>

                    <TextComp text="Account Settings" style={styles.sectionTitle} />
                    <View style={styles.settingsList}>
                        {settings.map(item => (
                            <TouchableOpacity
                                key={item.key}
                                activeOpacity={0.85}
                                style={styles.settingItem}
                                onPress={() => {
                                    if (item.key === 'logout') {
                                        setIsLogoutModalVisible(true);
                                        return;
                                    }
                                    if (item.key === 'editProfile') {
                                        navigation.navigate(routes.main.editProfile);
                                        return;
                                    }
                                    if (item.key === 'changePassword') {
                                        navigation.navigate(routes.main.changePassword);
                                        return;
                                    }
                                    if (item.key === 'manageNotifications') {
                                        navigation.navigate(routes.main.notification);
                                        return;
                                    }
                                    if (item.key === 'helpCentre') {
                                        navigation.navigate(routes.main.support);
                                        return;
                                    }
                                    if (item.key === 'deactivateAccount') {
                                        setIsDeactivateModalVisible(true);
                                    }
                                }}
                            >
                                <View style={[styles.settingIconWrap, { backgroundColor: item.iconBg }]}>
                                    <MyIcons name={item.icon} size={18} stroke={Colors.white} />
                                </View>
                                <TextComp text={item.title} style={styles.settingTitle} />
                                <MyIcons name="rightArrow" size={16} stroke={Colors.gray300} />
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            </ScrollView>

            <AppModal
                isVisible={isLogoutModalVisible}
                onClose={() => setIsLogoutModalVisible(false)}
                type="filter"
                title=""
            >
                <View style={styles.logoutIconWrap}>
                    <View style={styles.logoutIconCircle}>
                        <MyIcons name="profileLogout" size={36} stroke={Colors.white} />
                    </View>
                </View>

                <TextComp text="Are you sure you want to logout?" style={styles.logoutTitle} />

                <View style={styles.logoutActionsRow}>
                    <ButtonComp
                        title="No"
                        onPress={() => setIsLogoutModalVisible(false)}
                        variant="outline"
                        height={46}
                        style={styles.logoutActionButton}
                        textStyle={styles.logoutNoText}
                    />
                    <ButtonComp
                        title="Yes"
                        onPress={() => {
                            setIsLogoutModalVisible(false);
                            clearDataAction();
                        }}
                        variant="primary"
                        // gradientColors={Colors.gradientPrimary}
                        height={46}
                        style={styles.logoutActionButton}
                    />
                </View>
            </AppModal>

            <AppModal
                isVisible={isDeactivateModalVisible}
                onClose={() => setIsDeactivateModalVisible(false)}
                type="filter"
                title=""
            >
                <TextComp text="Do you want to deactivate your account?" style={styles.deactivateTitle} />
                <TextComp
                    text="Deactivating your account will permanently remove all your data, including your profile, preferences, and activity history. This action cannot be undone."
                    style={styles.deactivateMessage}
                />
                <ButtonComp
                    title="Deactivate Account"
                    onPress={handleDeactivateAccount}
                    variant="secondary"
                    gradientColors={['#D8181F', '#BF101A']}
                    height={50}
                    style={styles.deactivateButton}
                />
            </AppModal>
        </WrapperContainer>
    );
};

export default UserProfile;
