// import 'react-native-get-random-values';
// import React from 'react';
// import { Provider } from 'react-redux';
// import { store } from './src/Store';
// import AppNavigator from './src/AppNavigator';

// export default function App() {
//   return (
//     <Provider store={store}>
//       <AppNavigator />
//     </Provider>
//   );
// }

import 'react-native-gesture-handler';
import 'react-native-get-random-values';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Contact from './src/Contact';
import ProfileContact from './src/ProfileContact';
import Favorites from './src/Favorites';
import { ContactProvider } from './src/ContactContext';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const ContactStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="ContactList" component={Contact} options={{ title: 'Contacts' }} />
    <Stack.Screen name="ProfileContact" component={ProfileContact} options={{ title: 'Profile Contact' }} />
  </Stack.Navigator>
);

const FavoritesStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="FavoritesList" component={Favorites} options={{ title: 'Favorites' }} />
    <Stack.Screen name="ProfileContact" component={ProfileContact} options={{ title: 'Profile Contact' }} />
  </Stack.Navigator>
);

export default function App() {
  return (
    <ContactProvider>
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            drawerActiveTintColor: '#1976d2',
            headerStyle: { backgroundColor: '#1976d2' },
            headerTintColor: 'white',
          }}
        >
          <Drawer.Screen
            name="Contacts"
            component={ContactStack}
            options={{
              drawerIcon: ({ color }) => <Icon name="list" size={25} color={color} />,
            }}
          />
          <Drawer.Screen
            name="Favorites"
            component={FavoritesStack}
            options={{
              drawerIcon: ({ color }) => <Icon name="star" size={25} color={color} />,
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </ContactProvider>
  );
}