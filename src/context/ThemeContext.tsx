import React, { createContext, ReactNode, useContext } from 'react';

/**
 * Theme type definition
 */
type ThemeType = 'light' | 'dark';

/**
 * Theme context properties interface
 */
interface ThemeContextProps {
  theme: ThemeType;
  toggleTheme: () => void;
}

/**
 * Context for theme management with default values
 */
const ThemeContext = createContext<ThemeContextProps>({
  theme: 'light',
  toggleTheme: () => { },
});

/**
 * Theme provider component that providing a static theme
 */
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // Always use light theme
  const theme: ThemeType = 'light';

  const toggleTheme = () => {
    // Switching is disabled as requested
    console.log('Theme switching is disabled');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

/**
 * Custom hook for consuming the theme context
 */
export const useTheme = () => useContext(ThemeContext);
