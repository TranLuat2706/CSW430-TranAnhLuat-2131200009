import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Title, List } from 'react-native-paper';
import ContactThum from './ContactThum';

const ProfileContact = ({ route }) => {
  const { contact } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <ContactThum
          name={contact.name}
          phone={contact.phone}
          avatar={contact.avatar}
          textColor="white"
        />
      </View>

      <View style={styles.content}>
        <Title style={styles.title}>Email</Title>
        <List.Item title={contact.email} left={() => <List.Icon icon="email" />} />

        <Title style={styles.title}>Work</Title>
        <List.Item title={contact.phone} left={() => <List.Icon icon="phone" />} />

        <Title style={styles.title}>Personal</Title>
        <List.Item title={contact.cell} left={() => <List.Icon icon="work" />} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  header: {
    backgroundColor: '#1976d2',
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: { marginTop: -10, paddingHorizontal: 20 },
  title: { marginTop: 20, marginLeft: 10, fontSize: 18 },
});

export default ProfileContact;