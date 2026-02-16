import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import routes, { tabRoutes } from '@/constants/routes';
import MyTabBar from './MyTabBar';
import { HomeIcon, HomeInactiveIcon, ProfileInactiveIcon } from '@/assets/icons';

const Tab = createBottomTabNavigator();

export const BottomTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
            }}
            tabBar={(props) => <MyTabBar {...props} />}
            initialRouteName={routes.main.home}
        >
            <Tab.Screen
                name={routes.main.home}
                component={tabRoutes[routes.main.home]}
                options={{
                    tabBarIcon: ({ focused }) => (
                        focused ? <HomeIcon /> : <HomeInactiveIcon />
                    ),
                }}
            />
            <Tab.Screen
                name={routes.main.profile}
                component={tabRoutes[routes.main.profile]}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <ProfileInactiveIcon />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default BottomTabs;
