export type RootStackParamList = {
  Auth: undefined;
  Main: undefined;
};

export type AuthStackParamList = {
  Login: undefined;
  Signup: undefined;
  Onboarding: undefined;
  OTPVerification: {
    phoneNumber: string;
  };
  Abdullah: undefined;
  Register: undefined;
};

export type MainStackParamList = {
  Tabs: undefined;
  Home: undefined;
  Profile: undefined;
  Settings: undefined;
  UserProfile: undefined;

};

