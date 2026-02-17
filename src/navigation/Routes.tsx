import React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';
import AuthStack from './AuthStack';
import { MainStack } from './MainStack';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

import routes from '@/constants/routes';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Routes = () => {
    const { isFirstTime } = useSelector((state: RootState) => state.auth);

    // Static theme since dark mode is removed
    const MyTheme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            background: '#FFFFFF', // Set background to white to match our main background color
        },
    };

    return (
        <NavigationContainer theme={MyTheme}>
            <Stack.Navigator screenOptions={{ headerShown: false, contentStyle: { backgroundColor: "#FFFFFF" } }} id={undefined}>
                {false ? (
                    <Stack.Screen name={routes.navigator.main} component={MainStack} />
                ) : (
                    <Stack.Screen name={routes.navigator.auth} component={AuthStack} />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};


export default Routes;
