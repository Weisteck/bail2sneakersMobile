import React, { useEffect, useState } from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './style';
import ItemOrder from "../../components/ItemOrder";
import getAllOrdersFilteredByOrdered from "../../../api/bail2sneakersDbApi";

const OrdersScreen = ({ navigation }) => {

  const [data, setData] = useState()

  useEffect( () => {
    async function fetchData() {
      const response = await getAllOrdersFilteredByOrdered
      console.log("await : ", response.data)

      setData(response.data)
    }
    fetchData()
  }, [])

  return (
    <View style={styles.main}>
      <Text>Page des commandes !!</Text>
      <FlatList
        data={data}
        renderItem={({item}) => <ItemOrder item={item} navigation={navigation}/> }
        keyExtractor={ item => item._id}
      />
    </View>
  );
}

export default OrdersScreen;
