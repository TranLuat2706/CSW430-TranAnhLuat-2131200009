// src/store/asyncStorage.js
import AsyncStorage from '@react-native-async-storage/async-storage';
import { v4 as uuidv4 } from 'uuid';

const STORAGE_KEY = '@contacts_app';

export const loadContacts = async () => {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.log('Load error:', e);
    return [];
  }
};

export const saveContacts = async (contacts) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
  } catch (e) {
    console.log('Save error:', e);
  }
};

export const toggleFavoriteAsync = async (contactId) => {
  const contacts = await loadContacts();
  const index = contacts.findIndex(c => c.id === contactId);
  if (index !== -1) {
    contacts[index].favorite = !contacts[index].favorite;
    await saveContacts(contacts);
  }
  return contacts;
};

// Load dữ liệu từ API lần đầu nếu chưa có
export const fetchAndSaveContactsIfEmpty = async () => {
  let contacts = await loadContacts();
  if (contacts.length === 0) {
    const res = await fetch('https://randomuser.me/api/?results=50&inc=name,picture,phone,cell,email');
    const { results } = await res.json();
    contacts = results.map(user => ({
      id: uuidv4(),
      name: `${user.name.first} ${user.name.last}`,
      avatar: user.picture.large,
      phone: user.phone,
      cell: user.cell,
      email: user.email,
      favorite: Math.random() < 0.3,
    }));
    await saveContacts(contacts);
  }
  return contacts;
};