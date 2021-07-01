import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';

const OrderDetailScreen = ({ route, navigation }) => {
  const { item } = route.params
  return (
    <View style={styles.main}>
      <Text>{item._id}</Text>
    </View>
  );
}

export default OrderDetailScreen;