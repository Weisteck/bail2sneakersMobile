import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import {Icon} from "react-native-elements";
import style from "./style";

const ItemOrder = ({ navigation, item }) => {
  return(
    <TouchableOpacity
      OnPress={()=> navigation.navigate('OrderDetail', item)}
    >
      <View>
        <Text>{item._id}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default ItemOrder;