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
          <Stack.Screen name={routes.main.ourCollaboration} component={mainRoutes[routes.main.ourCollaboration]} />
          <Stack.Screen name={routes.main.insurance} component={mainRoutes[routes.main.insurance]} />
          <Stack.Screen name={routes.main.manageSubscriptions} component={mainRoutes[routes.main.manageSubscriptions]} />
          <Stack.Screen name={routes.main.billingHistory} component={mainRoutes[routes.main.billingHistory]} />
          <Stack.Screen name={routes.main.paymentMethod} component={mainRoutes[routes.main.paymentMethod]} />
          <Stack.Screen name={routes.main.help} component={mainRoutes[routes.main.help]} />
          <Stack.Screen name={routes.main.support} component={mainRoutes[routes.main.support]} />
        </Stack.Navigator>
      </AnimatedDrawer>
    </DrawerProvider>
  );
};

export default MainStack;
