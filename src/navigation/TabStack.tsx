import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import routes, { tabRoutes } from '@/constants/routes';
import MyTabBar from './MyTabBar';
import MyIcons from '@/components/MyIcons';
import { moderateScale } from '@/styles/scaling';
import { useTheme } from '@/context/ThemeContext';
import { Colors, commonColors } from '@/styles/colors';

const Tab = createBottomTabNavigator();

const TabIcon = ({ name, focused }: { name: any, focused: boolean }) => {
    const { theme } = useTheme();
    const colors = Colors[theme ?? 'light'];
    return <MyIcons name={name} size={moderateScale(14)} stroke={focused ? commonColors.brandPurple : colors.text} />;
}

export const BottomTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
            }}
            tabBar={(props) => <MyTabBar {...props} />}
            initialRouteName={routes.main.home}
        >
            <Tab.Screen name={routes.tab.home} component={tabRoutes[routes.tab.home]} />
            <Tab.Screen name={routes.main.cycleOverview} component={tabRoutes[routes.main.cycleOverview]} />
            <Tab.Screen name={routes.tab.chatAi} component={tabRoutes[routes.tab.chatAi]} />
            <Tab.Screen name={routes.tab.shop} component={tabRoutes[routes.tab.shop]} />
            <Tab.Screen name={routes.tab.categories} component={tabRoutes[routes.tab.categories]} />
        </Tab.Navigator>
    );
};

export default BottomTabs;
