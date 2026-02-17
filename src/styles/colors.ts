// Common colors that don't change with theme
export const commonColors = {
    // Brand Colors
    primary: '#00A13A',
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

    // Opacity
    blackOpacity60: 'rgba(0, 0, 0, 0.6)',
    whiteOpacity60: 'rgba(255, 255, 255, 0.6)',

    // Transparent
    transparent: 'transparent',
} as const;

const appColors = {
    // Base
    background: commonColors.white,
    surface: commonColors.white,
    text: commonColors.black,
    textSecondary: commonColors.gray500,

    // Components
    inputBackground: commonColors.white,
    inputBorder: commonColors.gray100,
    inputPlaceholder: commonColors.whiteOpacity60,
    inputText: commonColors.black,
    statusBar: 'dark-content',

    // Buttons
    buttonPrimary: commonColors.primary,
    buttonSecondary: commonColors.secondary,
    buttonDisabled: commonColors.gray200,

    // Icons
    iconPrimary: commonColors.gray500,
    iconSecondary: commonColors.gray300,

    //Tabs
    tabPrimary: commonColors.tabPrimary,
    tabSecondary: commonColors.tabSecondary,
    tabActive: commonColors.tabActive
} as const;

export const Colors = {
    // Base
    background: commonColors.white,
    surface: commonColors.white,
    text: commonColors.black,
    textSecondary: commonColors.gray500,

    // Components
    inputBackground: commonColors.white,
    inputBorder: commonColors.gray100,
    inputPlaceholder: commonColors.whiteOpacity60,
    inputText: commonColors.black,
    statusBar: 'dark-content' as const,

    // Buttons
    buttonPrimary: commonColors.primary,
    buttonSecondary: commonColors.secondary,
    buttonDisabled: commonColors.gray200,

    // Icons
    iconPrimary: commonColors.gray500,
    iconSecondary: commonColors.gray300,

    //Tabs
    tabPrimary: commonColors.tabPrimary,
    tabSecondary: commonColors.tabSecondary,
    tabActive: commonColors.tabActive
} as const;

// Type for colors
export type AppColors = typeof Colors & typeof commonColors;
