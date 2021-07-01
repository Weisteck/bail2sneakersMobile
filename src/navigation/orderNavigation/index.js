import React from 'react';
import styles from './style';
import { createStackNavigator } from "@react-navigation/stack";
import OrdersScreen from "../../container/screens/orders";
import OrderDetailScreen from "../../container/screens/orderDetail";
import ItemOrder from "../../container/components/ItemOrder";

const OrderStack = createStackNavigator();

const OrdersStackScreen = () => {
  return (
    <OrderStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#4B3838'
        },
        headerTintColor: '#E2E4E9',
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 20
        },
      }}
    >
      <OrderStack.Screen
        name='Orders'
        component={OrdersScreen}
        options={{ title: 'Commandes' }}
      />
      <OrderStack.Screen
        name='OrderDetail'
        component={OrderDetailScreen}
        options={{ title: 'Detail de la commande'}}
      />
    </OrderStack.Navigator>
  );
}

export default OrdersStackScreen;