import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
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

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} id={undefined}>
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
