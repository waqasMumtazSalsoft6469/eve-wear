import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import routes, { authRoutes } from '@/constants/routes';
import { AuthStackParamList } from './types';

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} id={undefined}>
      <Stack.Screen name={routes.auth.login} component={authRoutes[routes.auth.login]} />
      <Stack.Screen name={routes.auth.signup} component={authRoutes[routes.auth.signup]} />
      <Stack.Screen name={routes.auth.otp} component={authRoutes[routes.auth.otp]} />
      <Stack.Screen name={routes.auth.onboarding} component={authRoutes[routes.auth.onboarding]} />
      <Stack.Screen name={routes.auth.register} component={authRoutes[routes.auth.register]} />
    </Stack.Navigator>
  );
};

export default AuthStack;