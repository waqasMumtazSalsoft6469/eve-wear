/**
 * ⚠️ AUTO-GENERATED FILE
 * DO NOT EDIT MANUALLY By Abdullah Ansari
 */

import React from 'react';
import { View, ViewStyle } from 'react-native';
import { SvgProps } from 'react-native-svg';

import Back from '@/assets/icons/back.svg';
import Menu from '@/assets/icons/menu.svg';
import Notification from '@/assets/icons/notification.svg';
import Search from '@/assets/icons/search.svg';
import Skip from '@/assets/icons/skip.svg';
import TabAi from '@/assets/icons/tab-ai.svg';
import TabBag from '@/assets/icons/tab-bag.svg';
import TabGallery from '@/assets/icons/tab-gallery.svg';
import TabHome from '@/assets/icons/tab-home.svg';
import TabPlus from '@/assets/icons/tab-plus.svg';

export type IconName =
  | 'back'
  | 'menu'
  | 'notification'
  | 'search'
  | 'skip'
  | 'tabAi'
  | 'tabBag'
  | 'tabGallery'
  | 'tabHome'
  | 'tabPlus';

type IconComponent = React.FC<SvgProps>;

const iconMap: Record<IconName, IconComponent> = {
  back: Back,
  menu: Menu,
  notification: Notification,
  search: Search,
  skip: Skip,
  tabAi: TabAi,
  tabBag: TabBag,
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
