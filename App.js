import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStackScreen from "./src/navigation/homeNavigation";
import OrdersStackScreen from "./src/navigation/orderNavigation";

const Tap = createBottomTabNavigator();

function App() {
  return(
    <NavigationContainer>
      <Tap.Navigator>
        <Tap.Screen name='Home' component={ HomeStackScreen } />
        <Tap.Screen name='Details' component={ OrdersStackScreen } />
      </Tap.Navigator>
    </NavigationContainer>
  )
};

export default App;