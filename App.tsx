/**
 * @file App.tsx
 * @description Root application component that initializes core app functionality
 * including Redux store, navigation, and animated boot splash.
 */

import ErrorBoundary from '@/components/ErrorBoundary';
import { requestUserPermission } from '@/helper/notifciationService';
import Routes from '@/navigation/Routes';
import store from '@/redux/store';
import { getLocalItem } from '@/utils/checkStorage';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { I18nManager, Platform, StatusBar, StyleSheet, View } from 'react-native';
import BootSplash from 'react-native-bootsplash';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { AnimatedBootSplash } from '@/screens/auth/AnimatedSplash/AnimatedSplash';

/**
 * Main application component that serves as the entry point for the app.
 *
 * @returns {JSX.Element} The rendered app
 */
const App = () => {
  const [splashVisible, setSplashVisible] = useState(true);

  useLayoutEffect(() => {
    I18nManager.allowRTL(false);
    I18nManager.forceRTL(false);
  }, []);

  useEffect(() => {
    StatusBar.setBarStyle('dark-content');
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('transparent');
      StatusBar.setTranslucent(true);
    }
  }, []);

  useEffect(() => {
    const init = async () => {
      await getLocalItem();
      await requestUserPermission();
    };

    init().finally(() => {
      BootSplash.hide();
    });
  }, []);

  return (
    <View style={styles.container}>
      <ErrorBoundary
        onError={() => setSplashVisible(false)}
      >
        <SafeAreaProvider>
          <Provider store={store}>
            <Routes />
          </Provider>
        </SafeAreaProvider>
      </ErrorBoundary>
      {splashVisible && (
        <AnimatedBootSplash
          onAnimationEnd={() => {
            setSplashVisible(false);
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;