import React from 'react';
import {View, Text, Button, FlatList} from 'react-native';
import styles from './style';
import { useSelector } from "react-redux";
import ItemOrder from "../../components/ItemOrder";

const OrdersScreen = ({ navigation }) => {
  const carts = useSelector(state => state)
  console.log(carts)
  return (
    <View style={styles.main}>
      <Text>Page des commandes !!</Text>
      <FlatList
        data={carts}
        renderItem={({item}) => <ItemOrder item={item} navigation={navigation}/> }
        keyExtractor={ item => item._id}
      />
    </View>
  );
}

export default OrdersScreen;