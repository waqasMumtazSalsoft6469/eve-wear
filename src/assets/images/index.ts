import { ImageSourcePropType } from 'react-native';

export type LocalImages = {
    logo: ImageSourcePropType;
    loginBg: ImageSourcePropType;
    signupBg: ImageSourcePropType;
};

export const localImages: LocalImages = {
    logo: require('./logo.png'),
    loginBg: require('./login-bg.png'),
    signupBg: require('./signup-bg.png'),
} as const;