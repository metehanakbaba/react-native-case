import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './stacks/BottomTabNavigator';
import AddBasketModal from '../modals/AddBasketModal';
import { RootStackParamList } from './types';

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

/**
 * It is the top starting function of react-navigation.
 *
 * @constructor
 * @return JSX.Element
 */
export default function Navigation(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Root"
          // the Root path renders the component mentioned below.
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Group screenOptions={{ presentation: 'modal' }}>
          <Stack.Screen name="Modal" component={AddBasketModal} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
