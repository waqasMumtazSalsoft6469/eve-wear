/**
 * ⚠️ AUTO-GENERATED FILE
 * DO NOT EDIT MANUALLY By Abdullah Ansari
 */

import React from 'react';
import { View, ViewStyle } from 'react-native';
import { SvgProps } from 'react-native-svg';

import Back from '@/assets/icons/back.svg';
import BloodDrop from '@/assets/icons/blood-drop.svg';
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
import Menu from '@/assets/icons/menu.svg';
import Notification from '@/assets/icons/notification.svg';
import Search from '@/assets/icons/search.svg';
import Skip from '@/assets/icons/skip.svg';
import TabAi from '@/assets/icons/tab-ai.svg';
import TabBag from '@/assets/icons/tab-bag.svg';
import TabCross from '@/assets/icons/tab-cross.svg';
import TabGallery from '@/assets/icons/tab-gallery.svg';
import TabHome from '@/assets/icons/tab-home.svg';
import TabPlus from '@/assets/icons/tab-plus.svg';

export type IconName =
  | 'back'
  | 'bloodDrop'
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
  | 'menu'
  | 'notification'
  | 'search'
  | 'skip'
  | 'tabAi'
  | 'tabBag'
  | 'tabCross'
  | 'tabGallery'
  | 'tabHome'
  | 'tabPlus';

type IconComponent = React.FC<SvgProps>;

const iconMap: Record<IconName, IconComponent> = {
  back: Back,
  bloodDrop: BloodDrop,
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
  menu: Menu,
  notification: Notification,
  search: Search,
  skip: Skip,
  tabAi: TabAi,
  tabBag: TabBag,
  tabCross: TabCross,
  tabGallery: TabGallery,
  tabHome: TabHome,
  tabPlus: TabPlus,
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
