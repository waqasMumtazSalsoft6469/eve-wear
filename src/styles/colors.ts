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

    // Buttons
    buttonPrimary: '#00A13A',
    buttonSecondary: '#CD0105',
    buttonDisabled: '#CCCCCC',

    // Icons
    iconPrimary: '#454545',
    iconSecondary: '#9E9E9E',

    // Opacity
    blackOpacity60: 'rgba(0, 0, 0, 0.6)',
    whiteOpacity60: 'rgba(255, 255, 255, 0.6)',

    // Transparent
    transparent: 'transparent',
} as const;

export type AppColors = typeof Colors;
export const commonColors = Colors;
