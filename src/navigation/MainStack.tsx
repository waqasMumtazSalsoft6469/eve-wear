import React from 'react';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import routes, { tabRoutes, mainRoutes } from '@/constants/routes';
import BottomTabs from './TabStack';
import { MainStackParamList } from './types';

const Stack = createNativeStackNavigator<MainStackParamList>();

const NavigationOptions: NativeStackNavigationOptions = {
  headerShown: false,
  contentStyle: { backgroundColor: '#000' },
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

      <Stack.Screen
        name={routes.main.settings}
        component={mainRoutes[routes.main.settings]}
      />
      <Stack.Screen name={routes.main.cycleOverview} component={mainRoutes[routes.main.cycleOverview]} />
    </Stack.Navigator>
  );
};

export default MainStack;