import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { RootTabParamList } from '../types';
import Home from '../../screens/Home';

const BottomTab = createBottomTabNavigator<RootTabParamList>();

export default function BottomTabNavigator(): JSX.Element {
  return (
    <BottomTab.Navigator
      initialRouteName="Home" // first visible screen
      screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: '#000',
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={() => ({
          title: 'Home',
          headerShown: true,
          // render icons if any
          tabBarIcon: ({ color, size }) => {
            return <FontAwesome name="home" color={color} size={size} />;
          },
          tabBarLabelPosition: 'beside-icon',
        })}
      />
    </BottomTab.Navigator>
  );
}
