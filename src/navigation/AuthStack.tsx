import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import routes, { authRoutes } from '@/constants/routes';
import { AuthStackParamList } from './types';

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, contentStyle: { backgroundColor: '#fff' } }} id={undefined}>
      <Stack.Screen name={routes.auth.onboarding} component={authRoutes[routes.auth.onboarding]} />
      <Stack.Screen name={routes.auth.login} component={authRoutes[routes.auth.login]} />
      <Stack.Screen name={routes.auth.forgot} component={authRoutes[routes.auth.forgot]} />
      <Stack.Screen name={routes.auth.register} component={authRoutes[routes.auth.register]} />
      <Stack.Screen name={routes.auth.healthConsent} component={authRoutes[routes.auth.healthConsent]} />
      <Stack.Screen name={routes.auth.dateOfBirth} component={authRoutes[routes.auth.dateOfBirth]} />
      <Stack.Screen name={routes.auth.height} component={authRoutes[routes.auth.height]} />
      <Stack.Screen name={routes.auth.weight} component={authRoutes[routes.auth.weight]} />
      <Stack.Screen name={routes.auth.healthPreferences} component={authRoutes[routes.auth.healthPreferences]} />
    </Stack.Navigator>
  );
};

export default AuthStack;