import { ImageSourcePropType } from 'react-native';

export type LocalImages = {
    logo: ImageSourcePropType;
    loginBg: ImageSourcePropType;
    signupBg: ImageSourcePropType;
    onboardBg: ImageSourcePropType;
    doctor1: ImageSourcePropType;
    doctor2: ImageSourcePropType;
    doctor3: ImageSourcePropType;
    doctor4: ImageSourcePropType;
};

export const localImages: LocalImages = {
    logo: require('./logo.png'),
    loginBg: require('./login-bg.png'),
    signupBg: require('./signup-bg.png'),
    onboardBg: require('./onboard-bg.png'),
    doctor1: require('./doctor-1.png'),
    doctor2: require('./doctor-2.png'),
    doctor3: require('./doctor-3.png'),
    doctor4: require('./doctor-4.png'),
} as const;