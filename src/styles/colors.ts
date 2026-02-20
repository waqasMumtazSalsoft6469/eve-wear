export const Colors = {
    // Brand Colors
    primary: '#5C2B7E',
    secondary: '#CD0105',
    brandPurple: '#5C2B7E',
    brandSalmon: '#FF8C69',
    glassSurface: 'rgba(255, 255, 255, 0.2)',
    glassBorder: 'rgba(255, 255, 255, 0.3)',

    // Tabs Gradient
    tabPrimary: '#331847',
    tabSecondary: '#6b3297',
    tabActive: "#674680",

    // Status Colors
    success: '#00A13A',
    error: '#FF0000',
    warning: '#FFA500',
    info: '#0077FF',

    // Grayscale
    black: '#000000',
    white: '#FFFFFF',
    gray50: '#F9FAFB',
    gray100: '#EFF0F6',
    gray200: '#CCCCCC',
    gray300: '#9E9E9E',
    gray400: '#666666',
    gray500: '#454545',
    gray600: '#2C2C2C',
    gray700: '#1A1A1A',

    // Base
    background: '#FFFFFF',
    surface: '#FFFFFF',
    text: '#000000',
    textSecondary: '#454545',

    // Components
    inputBackground: '#FFFFFF',
    inputBorder: '#EFF0F6',
    inputPlaceholder: 'rgba(255, 255, 255, 0.6)',
    inputText: '#000000',
    statusBar: 'dark-content' as const,
    inputBackgroundApp: '#f7f7f7',

    // Buttons
    buttonPrimary: '#00A13A',
    buttonSecondary: '#CD0105',
    buttonDisabled: '#CCCCCC',
    gradientPrimary: ['#E07A7F', '#FF8C69'] as readonly [string, string],
    gradientSecondary: ['#36194b', "#6b3296", '#36194b'] as readonly [string, string, string],

    // Icons
    iconPrimary: '#454545',
    iconSecondary: '#9E9E9E',

    // Opacity
    blackOpacity60: 'rgba(0, 0, 0, 0.6)',
    whiteOpacity60: 'rgba(255, 255, 255, 0.6)',

    // Transparent
    transparent: 'transparent',

    // Text
    orange: '#bf6457',

    // Support / Contact
    supportEmail: '#D9534F',

    // Action item icons (Manage Subscriptions)
    actionIconBlue: '#2196F3',
    actionIconOrange: '#FF9800',
    actionIconRed: '#F44336',
    actionIconGrey: '#616161',

    // Sessions
    sessionBannerBg: '#FFEBEE',
    sessionBannerText: '#C62828',
    sessionDetailIconBg: '#8D6E63',

    // Insurance plan card gradients
    insuranceBronze: ['#5D4037', '#8D6E63'] as readonly [string, string],
    insuranceSilver: ['#455A64', '#90A4AE'] as readonly [string, string],
    insuranceGold: ['#F9A825', '#FFD54F'] as readonly [string, string],
    insurancePlatinum: ['#37474F', '#78909C'] as readonly [string, string],
} as const;

export type AppColors = typeof Colors;
export const commonColors = Colors;
