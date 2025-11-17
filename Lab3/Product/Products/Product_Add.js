import React, { useState } from 'react';
import { View, Alert, ScrollView, StyleSheet, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const Product_Add = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [discountPercentage, setDiscountPercentage] = useState('');
  const [rating, setRating] = useState('');
  const [stock, setStock] = useState('');
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
  const [images, setImages] = useState('');

  const handleSubmit = () => {
    fetch('https://dummyjson.com/products/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title,
        description,
        price,
        discountPercentage,
        rating,
        stock,
        brand,
        category,
        images,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('Response:', data);
        Alert.alert('Add successful!');
      })
      .catch((err) => {
        console.error('Error:', err);
        Alert.alert('Add failed!');
      });
  };

  return (
    <ScrollView style={{ padding: 20 }}>
      <Text style={styles.header}>Add a Product</Text>

      <TextInput label="Title" value={title} onChangeText={setTitle} style={styles.input} />
      <TextInput label="Description" value={description} onChangeText={setDescription} style={styles.input} />
      <TextInput label="Price" value={price} onChangeText={setPrice} keyboardType="numeric" style={styles.input} />
      <TextInput label="Discount (%)" value={discountPercentage} onChangeText={setDiscountPercentage} keyboardType="numeric" style={styles.input} />
      <TextInput label="Rating" value={rating} onChangeText={setRating} keyboardType="numeric" style={styles.input} />
      <TextInput label="Stock" value={stock} onChangeText={setStock} keyboardType="numeric" style={styles.input} />
      <TextInput label="Brand" value={brand} onChangeText={setBrand} style={styles.input} />
      <TextInput label="Category" value={category} onChangeText={setCategory} style={styles.input} />
      <TextInput label="Images (URL)" value={images} onChangeText={setImages} style={styles.input} />

      <Button mode="contained" onPress={handleSubmit}>Submit</Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: 'blue',
  },
  input: {
    marginBottom: 10,
  },
});

export default Product_Add;
