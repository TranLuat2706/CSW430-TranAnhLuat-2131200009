import React, { useContext } from 'react';
import { View, FlatList, StyleSheet, Dimensions } from 'react-native';
import { useSelector } from 'react-redux';
import ContactThum from './ContactThum';
import { ContactContext } from './ContactContext';

// const keyExtractor = ({ phone }) => phone;

// const Favorites = ({ navigation }) => {
//   const { contacts } = useSelector(state => state.contacts);
//   const favorites = contacts.filter(c => c.favorite);

//   const renderFavoriteThumbnail = ({ item }) => (
//     <ContactThum
//       name={item.name}
//       phone={item.phone}
//       avatar={item.avatar}
//       onPress={() => navigation.navigate('ProfileContact', { contact: item })}
//     />
//   );

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={favorites}
//         numColumns={3}
//         contentContainerStyle={styles.list}
//         keyExtractor={keyExtractor}
//         renderItem={renderFavoriteThumbnail}
//         columnWrapperStyle={styles.columnWrapper}
//         ListEmptyComponent={<View style={{ flex: 1 }} />}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: 'white' },
//   list: { padding: 15 },
//   columnWrapper: {
//     justifyContent: 'space-between', 
//   },
// });

const { width } = Dimensions.get('window');
const itemWidth = (width - 40) / 3;

const keyExtractor = ({ phone }) => phone;

const Favorites = ({ navigation }) => {
  const { contacts, toggleFavorite } = useContext(ContactContext);
  const favorites = contacts.filter(c => c.favorite);

  const renderItem = ({ item }) => (
    <ContactThum
      name={item.name}
      phone={item.phone}
      avatar={item.avatar}
      onPress={() => navigation.navigate('ProfileContact', { contact: item })}
      onFavoritePress={() => toggleFavorite(item.id)}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={favorites}
        numColumns={3}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  list: { paddingHorizontal: 10, paddingTop: 20 },
});

export default Favorites;