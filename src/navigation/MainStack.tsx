import React from 'react';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import routes, { tabRoutes, mainRoutes } from '@/constants/routes';
import BottomTabs from './TabStack';
import { MainStackParamList } from './types';

const Stack = createNativeStackNavigator<MainStackParamList>();

const NavigationOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

export const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={NavigationOptions}
      id={undefined}
    >
      <Stack.Screen
        name={routes.navigator.tab as any}
        component={BottomTabs}
        options={{ animation: 'none' }}
      />

      {/* Tab stack screens mapped to stack for deep link support if needed */}
      <Stack.Screen
        name={routes.main.settings}
        component={tabRoutes[routes.main.settings]}
      />          <Stack.Screen name={routes.main.userProfile} component={mainRoutes[routes.main.userProfile]} /></Stack.Navigator>
  );
};

export default MainStack;