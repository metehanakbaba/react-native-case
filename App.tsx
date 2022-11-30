import * as React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './app/navigation';
import Splash from './app/screens/Splash';
import initializeStore from './app/store/initializeStore';
import useAppLoad, { IUseAppLoadReturn } from './app/hooks/useAppLoad';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

/**
 * App Launcher
 *
 * This is the main component in our app which is rendered to the VirtualDOM by React Native
 * Here we need to accommodate many main elements at the top of the tree (this file)
 * For instance; redux, providers, context
 *
 * @constructor
 */
export default function App(): JSX.Element {
  // Before resources are loaded
  const { appIsReady, onLayoutRootView }: IUseAppLoadReturn = useAppLoad();
  if (!appIsReady) {
    return <Splash />;
  }

  // After the resources are loaded
  /**
   * IMPORTANT: Don't change the order! When the order is changed,
   * it gets rendered 2 times due to the "app Is Ready" variable.
   */
  const store = initializeStore();

  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <Provider store={store}>
        <Navigation />
      </Provider>
      <StatusBar />
    </SafeAreaProvider>
  );
}
