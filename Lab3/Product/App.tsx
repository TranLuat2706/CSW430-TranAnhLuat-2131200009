import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { BottomNavigation } from 'react-native-paper';

import Products from './Products/Products';
import Product_Add from './Products/Product_Add';
import Product_Detail from './Products/Product_Detail';
import Product_Search from './Products/Product_Search';

export default function App() {
  const [index, setIndex] = useState(0);

  const [routes] = useState([
    { key: 'Products', title: 'Products', focusedIcon: 'shopping' },
    { key: 'Product_Add', title: 'Add', focusedIcon: 'plus' },
    { key: 'Product_Search', title: 'Search', focusedIcon: 'magnify' },
    { key: 'Product_Detail', title: 'Detail', focusedIcon: 'information' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    Products: Products,
    Product_Add: Product_Add,
    Product_Search: Product_Search,
    Product_Detail: Product_Detail,
  });

  return (
      <SafeAreaProvider>
        <BottomNavigation
          navigationState={{ index, routes }}
          onIndexChange={setIndex}
          renderScene={renderScene}
        />
      </SafeAreaProvider>
  ); 
}


