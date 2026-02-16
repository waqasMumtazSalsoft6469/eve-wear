export type FontFamily = {
  regular: string;
  bold: string;
  light: string;
};

export const family: FontFamily = {
  regular: 'Lato-Regular',
  bold: 'Lato-Bold',
  light: 'Lato-Light',
} as const;
