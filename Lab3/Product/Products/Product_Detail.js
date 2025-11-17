import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import { Card, Button } from 'react-native-paper';

const Product_Detail = () => {
  const [data, setData] = useState(null);
  const filePath = 'https://dummyjson.com/products/2'; 

  useEffect(() => {
    fetch(filePath)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((d) => {
        setData(d);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  if (!data) return <ActivityIndicator size="large" style={{ marginTop: 50 }} />;

  return (
    <Card style={{ margin: 20 }}>
      <Card.Title title={data.title} subtitle={`$${data.price}`} />
      <Card.Cover source={{ uri: data.thumbnail }} />
      <Card.Content>
        <Text>{data.description}</Text>
        <Text>Brand: {data.brand}</Text>
        <Text>Category: {data.category}</Text>
        <Text>Rating: {data.rating}</Text>
        <Text>Stock: {data.stock}</Text>
      </Card.Content>
      <Card.Actions>
        <Button>Delete</Button>
        <Button>Cancel</Button>
      </Card.Actions>
    </Card>
  );
};

export default Product_Detail;
