import React from 'react';
import { View, Text, Image, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native';

const ContactListItem = ({ name, avatar, phone, onPress }) => {
  return (
    <TouchableHighlight underlayColor="#ddd" onPress={onPress}>
      <View style={styles.container}>
        <Image source={{ uri: avatar }} style={styles.avatar} />
        <View style={styles.details}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subtitle}>{phone}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  details: { flex: 1 },
  title: { fontSize: 16, fontWeight: '600' },
  subtitle: { color: '#666', marginTop: 4 },
});

export default ContactListItem;