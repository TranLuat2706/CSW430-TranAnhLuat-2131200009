import React, { useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import { TextInput, Button, Card } from 'react-native-paper';

const Product_Search = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState('');

  let filePath = 'https://dummyjson.com/products';

  const searchProduct = () => {
    if (value !== '') {
      filePath = 'https://dummyjson.com/products/search?q=' + value;
    }

    fetch(filePath)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((d) => {
        setData(d.products);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  return (
    <View style={{ padding: 10 }}>
      <TextInput
        label="Search Products"
        value={value}
        onChangeText={setValue}
        style={{ marginBottom: 10 }}
      />
      <Button mode="contained" onPress={searchProduct}>
        Search
      </Button>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card style={{ margin: 10 }}>
            <Card.Title title={item.title} subtitle={`$${item.price}`} />
            <Card.Cover source={{ uri: item.thumbnail }} />
            <Card.Content>
              <Text numberOfLines={2}>{item.description}</Text>
            </Card.Content>
          </Card>
        )}
      />
    </View>
  );
};

export default Product_Search;
