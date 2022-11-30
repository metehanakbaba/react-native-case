import * as React from 'react';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import Navigation from './app/navigation';
import Splash from './app/screens/Splash';
import useAppLoad, { IUseAppLoadReturn } from './app/hooks/useAppLoad';
import store from './app/store';
import ApiService from './app/store/apiService';

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

  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <ApiProvider api={ApiService}>
        <Provider store={store}>
          <Navigation />
        </Provider>
      </ApiProvider>
      <StatusBar />
    </SafeAreaProvider>
  );
}
