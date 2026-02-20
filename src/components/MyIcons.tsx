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
import BadgeEarned from '@/assets/icons/badge-earned.svg';
import Billing from '@/assets/icons/billing.svg';
import BloodDrop from '@/assets/icons/blood-drop.svg';
import Cancel from '@/assets/icons/cancel.svg';
import ChallengeLevel from '@/assets/icons/challenge-level.svg';
import ChangePlan from '@/assets/icons/change-plan.svg';
import ClockWhite from '@/assets/icons/clock-white.svg';
import CycleConsistency from '@/assets/icons/cycle-consistency.svg';
import DateTime from '@/assets/icons/date-time.svg';
import DateWhite from '@/assets/icons/date-white.svg';
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
import Help from '@/assets/icons/help.svg';
import LocationWhite from '@/assets/icons/location-white.svg';
import Logo from '@/assets/icons/logo.svg';
import Menu from '@/assets/icons/menu.svg';
import Mic from '@/assets/icons/mic.svg';
import Notification from '@/assets/icons/notification.svg';
import Pause from '@/assets/icons/pause.svg';
import Paypal from '@/assets/icons/paypal.svg';
import Plus from '@/assets/icons/plus.svg';
import Search from '@/assets/icons/search.svg';
import Skip from '@/assets/icons/skip.svg';
import Streak from '@/assets/icons/streak.svg';
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
  | 'badgeEarned'
  | 'billing'
  | 'bloodDrop'
  | 'cancel'
  | 'challengeLevel'
  | 'changePlan'
  | 'clockWhite'
  | 'cycleConsistency'
  | 'dateTime'
  | 'dateWhite'
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
  | 'help'
  | 'locationWhite'
  | 'logo'
  | 'menu'
  | 'mic'
  | 'notification'
  | 'pause'
  | 'paypal'
  | 'plus'
  | 'search'
  | 'skip'
  | 'streak'
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
  badgeEarned: BadgeEarned,
  billing: Billing,
  bloodDrop: BloodDrop,
  cancel: Cancel,
  challengeLevel: ChallengeLevel,
  changePlan: ChangePlan,
  clockWhite: ClockWhite,
  cycleConsistency: CycleConsistency,
  dateTime: DateTime,
  dateWhite: DateWhite,
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
  help: Help,
  locationWhite: LocationWhite,
  logo: Logo,
  menu: Menu,
  mic: Mic,
  notification: Notification,
  pause: Pause,
  paypal: Paypal,
  plus: Plus,
  search: Search,
  skip: Skip,
  streak: Streak,
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
