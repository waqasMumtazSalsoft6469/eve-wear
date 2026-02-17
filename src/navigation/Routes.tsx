import React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';
import AuthStack from './AuthStack';
import { MainStack } from './MainStack';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { useTheme } from '@/context/ThemeContext';

import routes from '@/constants/routes';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Routes = () => {
    const { theme } = useTheme();
    const { isFirstTime } = useSelector((state: RootState) => state.auth);

    // Custom theme to prevent white flicker during navigation
    const MyTheme = {
        ...(theme === 'dark' ? DarkTheme : DefaultTheme),
        colors: {
            ...(theme === 'dark' ? DarkTheme.colors : DefaultTheme.colors),
            background: '#000000', // Set background to black to match WrapperContainer and prevent flicker
        },
    };

    return (
        <NavigationContainer theme={MyTheme}>
            <Stack.Navigator screenOptions={{ headerShown: false, contentStyle: { backgroundColor: '#000' } }} id={undefined}>
                {isFirstTime ? (
                    <Stack.Screen name={routes.navigator.main} component={MainStack} />
                ) : (
                    <Stack.Screen name={routes.navigator.auth} component={AuthStack} />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};


export default Routes;
