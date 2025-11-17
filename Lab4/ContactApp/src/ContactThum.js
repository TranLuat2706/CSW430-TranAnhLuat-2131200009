import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch } from 'react-redux';
import { toggleFavorite } from './Store';

const { width } = Dimensions.get('window');
const itemWidth = (width - 40) / 3;

// const ContactThum = ({ name, phone, avatar, textColor, onPress }) => {
//   const dispatch = useDispatch();
//   const colorStyle = { color: textColor || 'white' };

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity onPress={onPress}>
//         <Image source={{ uri: avatar }} style={styles.avatar} />
//       </TouchableOpacity>

//       <View style={styles.textSection}>
//         <Text style={[styles.name, colorStyle]}>{name}</Text>
//         <Text style={[styles.phone, colorStyle]}>{phone}</Text>
//       </View>

//       <TouchableOpacity onPress={() => dispatch(toggleFavorite(name))}>
//         <Icon
//           name="star"
//           size={30}
//           color={textColor || 'white'}
//           style={{ opacity: 0.8 }}
//         />
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     paddingVertical: 30,
//     marginHorizontal: 30,
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: itemWidth,
//   },
//   avatar: {
//     width: 90,
//     height: 90,
//     borderRadius: 45,
//     borderWidth: 2,
//     borderColor: 'white',
//   },
//   textSection: { marginTop: 15, alignItems: 'center' },
//   name: { fontSize: 20, fontWeight: 'bold' },
//   phone: { marginTop: 4, fontSize: 16 },
// });

const ContactThum = ({ name, phone, avatar, onPress, onFavoritePress, isFavorite }) => {
  return (
    <View style={[styles.container, { width: itemWidth }]}>
      <TouchableOpacity onPress={onPress}>
        <Image source={{ uri: avatar }} style={styles.avatar} />
      </TouchableOpacity>

      <View style={styles.textSection}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.phone}>{phone}</Text>
      </View>

      <TouchableOpacity onPress={onFavoritePress}>
        <Icon
          name={isFavorite ? "star" : "star-border"}
          size={32}
          color="#FFD700"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: 'white',
  },
  textSection: { marginTop: 10, alignItems: 'center' },
  name: { fontSize: 16, fontWeight: '600' },
  phone: { fontSize: 13, color: '#666', marginTop: 4 },
});

export default ContactThum;