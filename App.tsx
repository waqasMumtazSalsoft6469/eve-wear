/**
 * @file App.tsx
 * @description Root application component that initializes core app functionality
 * including Redux store, and navigation.
 */

import Routes from '@/navigation/Routes';
import store from "@/redux/store";
import React, { useLayoutEffect } from 'react';
import { I18nManager } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from "react-redux";
import { getLocalItem } from "@/utils/checkStorage";
import BootSplash from "react-native-bootsplash";
import { requestUserPermission } from "@/helper/notifciationService";

/**
 * Main application component that serves as the entry point for the app.
 * 
 * @returns {JSX.Element} The rendered app
 */
const App = () => {

  useLayoutEffect(() => {
    // Disable automatic RTL handling
    I18nManager.allowRTL(false);
    I18nManager.forceRTL(false);

    const init = async () => {
      await getLocalItem();
      await requestUserPermission();
    };

    init().finally(async () => {
      setTimeout(async () => {
        BootSplash.hide({ fade: true });
      }, 1500);
    });

  }, []);

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <Routes />
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;