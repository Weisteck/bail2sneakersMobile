import React from 'react';
import { View, Text } from 'react-native';
import styles from './style';
import { createStackNavigator } from "@react-navigation/stack";
import OrdersScreen from "../../container/screens/orders";
import OrderDetailScreen from "../../container/screens/orderDetail";

const OrderStack = createStackNavigator();

const OrdersStackScreen = () => {
  return (
    <OrderStack.Navigator>
      <OrderStack.Screen name='Orders' component={OrdersScreen} />
      <OrderStack.Screen name='OrderDetail' component={OrderDetailScreen} />
    </OrderStack.Navigator>
  );
}

export default OrdersStackScreen;