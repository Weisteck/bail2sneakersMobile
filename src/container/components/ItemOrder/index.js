import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import {Icon} from "react-native-elements";
import styles from "./style";

const ItemOrder = ({ navigation, item }) => {

  return(
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('OrderDetail', { item })
      }}
    >
      <View style={styles.view}>
        <Text>Id : {item._id}</Text>
        <Text>Date de passage de la commande : {item.order.history.orderedAt}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default ItemOrder;
