/**
 * ⚠️ AUTO-GENERATED FILE
 * DO NOT EDIT MANUALLY By Abdullah Ansari
 */

import React from 'react';
import { View, ViewStyle } from 'react-native';
import { SvgProps } from 'react-native-svg';

import Apple from '@/assets/icons/apple.svg';
import BackBlack from '@/assets/icons/back-black.svg';
import Back from '@/assets/icons/back.svg';
import Billing from '@/assets/icons/billing.svg';
import BloodDrop from '@/assets/icons/blood-drop.svg';
import Cancel from '@/assets/icons/cancel.svg';
import ChangePlan from '@/assets/icons/change-plan.svg';
import DrawerCollaboration from '@/assets/icons/drawer-collaboration.svg';
import DrawerContact from '@/assets/icons/drawer-contact.svg';
import DrawerHome from '@/assets/icons/drawer-home.svg';
import DrawerInsurance from '@/assets/icons/drawer-insurance.svg';
import DrawerLogout from '@/assets/icons/drawer-logout.svg';
import DrawerMenu from '@/assets/icons/drawer-menu.svg';
import DrawerNotificationWhite from '@/assets/icons/drawer-notification-white.svg';
import DrawerOrders from '@/assets/icons/drawer-orders.svg';
import DrawerSessions from '@/assets/icons/drawer-sessions.svg';
import DrawerSubscription from '@/assets/icons/drawer-subscription.svg';
import Google from '@/assets/icons/google.svg';
import Logo from '@/assets/icons/logo.svg';
import Menu from '@/assets/icons/menu.svg';
import Notification from '@/assets/icons/notification.svg';
import Pause from '@/assets/icons/pause.svg';
import Paypal from '@/assets/icons/paypal.svg';
import Plus from '@/assets/icons/plus.svg';
import Search from '@/assets/icons/search.svg';
import Skip from '@/assets/icons/skip.svg';
import TabAi from '@/assets/icons/tab-ai.svg';
import TabBag from '@/assets/icons/tab-bag.svg';
import TabCross from '@/assets/icons/tab-cross.svg';
import TabGallery from '@/assets/icons/tab-gallery.svg';
import TabHome from '@/assets/icons/tab-home.svg';
import TabPlus from '@/assets/icons/tab-plus.svg';
import Visa from '@/assets/icons/visa.svg';

export type IconName =
  | 'apple'
  | 'backBlack'
  | 'back'
  | 'billing'
  | 'bloodDrop'
  | 'cancel'
  | 'changePlan'
  | 'drawerCollaboration'
  | 'drawerContact'
  | 'drawerHome'
  | 'drawerInsurance'
  | 'drawerLogout'
  | 'drawerMenu'
  | 'drawerNotificationWhite'
  | 'drawerOrders'
  | 'drawerSessions'
  | 'drawerSubscription'
  | 'google'
  | 'logo'
  | 'menu'
  | 'notification'
  | 'pause'
  | 'paypal'
  | 'plus'
  | 'search'
  | 'skip'
  | 'tabAi'
  | 'tabBag'
  | 'tabCross'
  | 'tabGallery'
  | 'tabHome'
  | 'tabPlus'
  | 'visa';

type IconComponent = React.FC<SvgProps>;

const iconMap: Record<IconName, IconComponent> = {
  apple: Apple,
  backBlack: BackBlack,
  back: Back,
  billing: Billing,
  bloodDrop: BloodDrop,
  cancel: Cancel,
  changePlan: ChangePlan,
  drawerCollaboration: DrawerCollaboration,
  drawerContact: DrawerContact,
  drawerHome: DrawerHome,
  drawerInsurance: DrawerInsurance,
  drawerLogout: DrawerLogout,
  drawerMenu: DrawerMenu,
  drawerNotificationWhite: DrawerNotificationWhite,
  drawerOrders: DrawerOrders,
  drawerSessions: DrawerSessions,
  drawerSubscription: DrawerSubscription,
  google: Google,
  logo: Logo,
  menu: Menu,
  notification: Notification,
  pause: Pause,
  paypal: Paypal,
  plus: Plus,
  search: Search,
  skip: Skip,
  tabAi: TabAi,
  tabBag: TabBag,
  tabCross: TabCross,
  tabGallery: TabGallery,
  tabHome: TabHome,
  tabPlus: TabPlus,
  visa: Visa,
};

export interface MyIconsProps {
  name: IconName;
  size?: number;
  stroke?: string;
  fill?: string;
  style?: ViewStyle;
}

const MyIcons: React.FC<MyIconsProps> = ({
  name,
  size = 20,
  stroke,
  fill = 'none',
  style,
}) => {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    console.warn(`[MyIcons] Icon "${name}" not found`);
    return null;
  }

  return (
    <View style={style}>
      <IconComponent
        width={size}
        height={size}
        stroke={stroke || undefined}
        fill={fill}
      />
    </View>
  );
};

export { iconMap };
export default MyIcons;
