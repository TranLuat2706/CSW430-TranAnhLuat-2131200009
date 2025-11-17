import React, { useEffect, useContext } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContactsSuccess } from './Store';
import ContactListItem from './ContactListItem';
import { ContactContext } from './ContactContext';

// const keyExtractor = ({ phone }) => phone;

// const Contacts = ({ navigation }) => {
//   const dispatch = useDispatch();
//   const { contacts } = useSelector(state => state.contacts);

//   const fetchContacts = async () => {
//     const response = await fetch('https://randomuser.me/api/?results=50&inc=name,phone,cell,email,picture');
//     const data = await response.json();
//     dispatch(fetchContactsSuccess(data.results));
//   };

//   useEffect(() => {
//     fetchContacts();
//   }, []);

//   const contactsSorted = contacts
//     .slice()
//     .sort((a, b) => a.name.localeCompare(b.name));

//   const renderItem = ({ item }) => (
//     <ContactListItem
//       name={item.name}
//       avatar={item.avatar}
//       phone={item.phone}
//       onPress={() => navigation.navigate('ProfileContact', { contact: item })}
//     />
//   );

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={contactsSorted}
//         keyExtractor={keyExtractor}
//         renderItem={renderItem}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: 'white' },
// });

const keyExtractor = ({ phone }) => phone;

const Contacts = ({ navigation }) => {
  const { contacts, loading } = useContext(ContactContext);

  const contactsSorted = [...contacts].sort((a, b) => a.name.localeCompare(b.name));

  if (loading) {
    return <View style={styles.container}><Text>Loading...</Text></View>;
  }

  const renderItem = ({ item }) => (
    <ContactListItem
      name={item.name}
      avatar={item.avatar}
      phone={item.phone}
      onPress={() => navigation.navigate('ProfileContact', { contact: item })}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={contactsSorted}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
});


export default Contacts;