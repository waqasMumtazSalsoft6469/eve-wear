import React from 'react';
import { createNativeStackNavigator, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import routes, { mainRoutes } from '@/constants/routes';
import BottomTabs from './TabStack';
import { MainStackParamList } from './types';
import { DrawerProvider } from '@/context/DrawerContext';
import AnimatedDrawer from '@/components/AnimatedDrawer';
import { Colors } from '@/styles/colors';

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
            options={{ animation: 'none', contentStyle: { backgroundColor: Colors.background } }}
          />
          <Stack.Screen name={routes.main.userProfile} component={mainRoutes[routes.main.userProfile]} />
          <Stack.Screen name={routes.main.editProfile} component={mainRoutes[routes.main.editProfile]} />
          <Stack.Screen name={routes.main.changePassword} component={mainRoutes[routes.main.changePassword]} />
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
          <Stack.Screen name={routes.main.logPeriod} component={mainRoutes[routes.main.logPeriod]} />
          <Stack.Screen name={routes.main.ovulationFertility} component={mainRoutes[routes.main.ovulationFertility]} />
          <Stack.Screen name={routes.main.notification} component={mainRoutes[routes.main.notification]} />
          <Stack.Screen name={routes.main.logSymptoms} component={mainRoutes[routes.main.logSymptoms]} />
          <Stack.Screen name={routes.main.cycleHistory} component={mainRoutes[routes.main.cycleHistory]} />
          <Stack.Screen name={routes.main.insightsThreads} component={mainRoutes[routes.main.insightsThreads]} />
          <Stack.Screen name={routes.main.reminderAlert} component={mainRoutes[routes.main.reminderAlert]} />
          <Stack.Screen name={routes.main.aiChatScreen} component={mainRoutes[routes.main.aiChatScreen]} />
          <Stack.Screen name={routes.main.categoryProducts} component={mainRoutes[routes.main.categoryProducts]} />
        
          <Stack.Screen name={routes.main.productDetails} component={mainRoutes[routes.main.productDetails]} />
  <Stack.Screen name={routes.main.cart} component={mainRoutes[routes.main.cart]} />
  <Stack.Screen name={routes.main.ratingReview} component={mainRoutes[routes.main.ratingReview]} />
  <Stack.Screen name={routes.main.checkout} component={mainRoutes[routes.main.checkout]} />
  <Stack.Screen name={routes.main.shippingAddress} component={mainRoutes[routes.main.shippingAddress]} />
  <Stack.Screen name={routes.main.addShippingAddress} component={mainRoutes[routes.main.addShippingAddress]} />
  <Stack.Screen name={routes.main.cardDetails} component={mainRoutes[routes.main.cardDetails]} />
  <Stack.Screen name={routes.main.enterPin} component={mainRoutes[routes.main.enterPin]} />
  <Stack.Screen name={routes.main.requestAppointment} component={mainRoutes[routes.main.requestAppointment]} />
  <Stack.Screen name={routes.main.requestAquote} component={mainRoutes[routes.main.requestAquote]} />
  <Stack.Screen name={routes.main.applicationStatus} component={mainRoutes[routes.main.applicationStatus]} />
  <Stack.Screen name={routes.main.orderDetails} component={mainRoutes[routes.main.orderDetails]} />
  <Stack.Screen name={routes.main.writeRatingReview} component={mainRoutes[routes.main.writeRatingReview]} />
  <Stack.Screen name={routes.main.providerProfile} component={mainRoutes[routes.main.providerProfile]} />
</Stack.Navigator>
      </AnimatedDrawer>
    </DrawerProvider>
  );
};

export default MainStack;
