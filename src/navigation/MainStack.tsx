import React from 'react';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import routes, { mainRoutes } from '@/constants/routes';
import BottomTabs from './TabStack';
import { MainStackParamList } from './types';
import { DrawerProvider } from '@/context/DrawerContext';
import AnimatedDrawer from '@/components/AnimatedDrawer';

const Stack = createNativeStackNavigator<MainStackParamList>();

const NavigationOptions: NativeStackNavigationOptions = {
  headerShown: false,
  contentStyle: { backgroundColor: '#000' },
};

export const MainStack = () => {
  return (
    <DrawerProvider>
      <AnimatedDrawer>
        <Stack.Navigator
          screenOptions={NavigationOptions}
          id={undefined}
        >
          <Stack.Screen
            name={routes.navigator.tab as any}
            component={BottomTabs}
            options={{ animation: 'none' }}
          />
          <Stack.Screen name={routes.main.myOrders} component={mainRoutes[routes.main.myOrders]} />
          <Stack.Screen name={routes.main.subscription} component={mainRoutes[routes.main.subscription]} />
          <Stack.Screen name={routes.main.mySessions} component={mainRoutes[routes.main.mySessions]} />
          <Stack.Screen name={routes.main.contactUs} component={mainRoutes[routes.main.contactUs]} />
          <Stack.Screen name={routes.main.ourCollaboration} component={mainRoutes[routes.main.ourCollaboration]} />
          <Stack.Screen name={routes.main.insurance} component={mainRoutes[routes.main.insurance]} />
        </Stack.Navigator>
      </AnimatedDrawer>
    </DrawerProvider>
  );
};

export default MainStack;
