import { LottieViewProps } from 'lottie-react-native';

export type LocalLottie = {
    success: LottieViewProps['source'];
};

export const localLottie: LocalLottie = {
    success: require('./success.json'),
};