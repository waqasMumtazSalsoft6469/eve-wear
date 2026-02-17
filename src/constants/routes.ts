import * as Screens from '@/screens';
const routes = {
  auth: {
    login: 'Login',
    signup: 'Signup',
    forgot: 'Forgot',
    onboarding: 'Onboarding',
    register: 'Register',
  },
  main: {
    profile: 'Profile',
    settings: 'Settings',
    userProfile: 'UserProfile',
    chatAi: 'ChatAi',
    shop: 'Shop',
    categories: 'Categories',
  },
  tab: {
    home: 'Home',
    cycleOverview: 'CycleOverview',
    chatAi: 'ChatAi',
    shop: 'Shop',
    categories: 'Categories',
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
  [routes.auth.forgot]: Screens.Forgot,
  [routes.auth.onboarding]: Screens.Onboard,
  [routes.auth.register]: Screens.Register,
};
export const tabRoutes = {
  [routes.tab.cycleOverview]: Screens.CycleOverview,
  [routes.tab.chatAi]: Screens.ChatAi,
  [routes.tab.shop]: Screens.Shop,
  [routes.tab.categories]: Screens.Categories,
  [routes.tab.home]: Screens.Home,
};
export const mainRoutes = {
  // Add other main stack screens here that are not in tabs,
  [routes.main.chatAi]: Screens.ChatAi,
  [routes.main.shop]: Screens.Shop,
  [routes.main.categories]: Screens.Categories,
};
export default routes;
