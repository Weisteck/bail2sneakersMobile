import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import {Icon} from "react-native-elements";
import style from "./style";

const ItemOrder = ({ navigation, item }) => {
  return(
    <TouchableOpacity
      onPress={() => {
        console.log('click ok')
        navigation.navigate('OrderDetail', { item })
      }}

    >
      <View>
        <Text>{item._id}</Text>
        <Text>{item.order.history.orderedAt}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default ItemOrder;