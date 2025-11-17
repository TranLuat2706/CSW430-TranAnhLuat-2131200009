import React, { useEffect, useState } from 'react';
import { View, FlatList, ActivityIndicator, Text } from 'react-native';
import { Card, Button } from 'react-native-paper';

const Products = () => {
  const [products, setProducts] = useState([]);  
  const [loading, setLoading] = useState(true);
  const filePath = 'https://dummyjson.com/products';

  useEffect(() => {
    fetch(filePath)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((d) => {
        setProducts(d.products);  
        setLoading(false);       
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <ActivityIndicator size="large" style={{ marginTop: 50 }} />;

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <Card style={{ margin: 10 }}>
          <Card.Title title={item.title} subtitle={`$${item.price}`} />
          <Card.Cover source={{ uri: item.thumbnail }} />
          <Card.Content>
            <Text>{item.description}</Text>
          </Card.Content>
          <Card.Actions>
            <Button>Detail</Button>
            <Button>Add</Button>
            <Button>Delete</Button>
          </Card.Actions>
        </Card>
      )}
    />
  );
};

export default Products;
