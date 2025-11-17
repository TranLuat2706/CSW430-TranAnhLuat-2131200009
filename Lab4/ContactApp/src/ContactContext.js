import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { v4 as uuidv4 } from 'uuid';

const ContactContext = createContext();

const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadContacts = async () => {
    try {
      const data = await AsyncStorage.getItem('@contacts');
      if (data) setContacts(JSON.parse(data));
      else await fetchAndSave();
    } catch (e) {
      await fetchAndSave();
    } finally {
      setLoading(false);
    }
  };

  const fetchAndSave = async () => {
    const res = await fetch('https://randomuser.me/api/?results=50&inc=name,picture,phone,cell,email');
    const { results } = await res.json();
    const newContacts = results.map(user => ({
      id: uuidv4(),
      name: `${user.name.first} ${user.name.last}`,
      avatar: user.picture.large,
      phone: user.phone,
      cell: user.cell,
      email: user.email,
      favorite: Math.random() < 0.3,
    }));
    await AsyncStorage.setItem('@contacts', JSON.stringify(newContacts));
    setContacts(newContacts);
  };

  const toggleFavorite = async (id) => {
    const updated = contacts.map(c => c.id === id ? { ...c, favorite: !c.favorite } : c);
    setContacts(updated);
    await AsyncStorage.setItem('@contacts', JSON.stringify(updated));
  };

  useEffect(() => { loadContacts(); }, []);

  return (
    <ContactContext.Provider value={{ contacts, loading, toggleFavorite }}>
      {children}
    </ContactContext.Provider>
  );
};

export { ContactContext, ContactProvider };