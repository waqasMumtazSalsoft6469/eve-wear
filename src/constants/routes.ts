import * as Screens from '@/screens';
const routes = {
  auth: {
    login: 'Login',
    signup: 'Signup',
    otp: 'OTPVerification',
    onboarding: 'Onboarding',
    register: 'Register',
  },
  main: {
    home: 'Home',
    profile: 'Profile',
    settings: 'Settings',
    userProfile: 'UserProfile',
  },
  navigator: {
    auth: 'Auth',
    main: 'Main',
    tab: 'Tabs',
  },
} as const;
export const authRoutes = {
  [routes.auth.login]: Screens.Login,
  [routes.auth.signup]: Screens.Signup,
  [routes.auth.otp]: Screens.OTPVerification,
  [routes.auth.onboarding]: Screens.Onboard,
  [routes.auth.register]: Screens.Register,
};
export const tabRoutes = {
  [routes.main.home]: Screens.Home,
  [routes.main.profile]: Screens.Profile,
  [routes.main.settings]: Screens.Settings,
};
export const mainRoutes = {
  // Add other main stack screens here that are not in tabs,
}
export default routes;
