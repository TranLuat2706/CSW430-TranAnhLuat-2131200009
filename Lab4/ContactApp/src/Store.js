import { createSlice, configureStore } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
  },
  reducers: {
    fetchContactsSuccess(state, action) {
      state.contacts = action.payload.map(contact => ({
        id: uuidv4(),
        name: `${contact.name.first} ${contact.name.last}`,
        avatar: contact.picture.large,
        phone: contact.phone,
        cell: contact.cell,
        email: contact.email,
        favorite: Math.random() < 0.1, 
      }));
    },
    toggleFavorite(state, action) {
      const contact = state.contacts.find(c => c.id === action.payload);
      if (contact) contact.favorite = !contact.favorite;
    },
  },
});

export const { fetchContactsSuccess, toggleFavorite } = contactsSlice.actions;

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
  },
});