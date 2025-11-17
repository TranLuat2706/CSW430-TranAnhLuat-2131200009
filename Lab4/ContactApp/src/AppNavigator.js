import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Contacts from './Contact';
import ProfileContact from './ProfileContact';
import Favorites from './Favorites';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const ContactsStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="ContactsHome" component={Contacts} options={{ title: 'Contacts' }} />
    <Stack.Screen name="ProfileContact" component={ProfileContact} options={{ title: 'Profile contact' }} />
  </Stack.Navigator>
);

const FavoritesStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="FavoritesHome" component={Favorites} options={{ title: 'Favorites' }} />
    <Stack.Screen name="ProfileContact" component={ProfileContact} options={{ title: 'Profile contact' }} />
  </Stack.Navigator>
);

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: '#1976d2',
    }}
  >
    <Tab.Screen
      name="ContactsTab"
      component={ContactsStack}
      options={{
        tabBarLabel: 'Contacts',
        tabBarIcon: ({ color }) => <Icon name="list" size={30} color={color} />,
      }}
    />
    <Tab.Screen
      name="FavoritesTab"
      component={FavoritesStack}
      options={{
        tabBarLabel: 'Favorites',
        tabBarIcon: ({ color }) => <Icon name="star" size={30} color={color} />,
      }}
    />
  </Tab.Navigator>
);

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}