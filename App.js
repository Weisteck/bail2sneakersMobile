import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStackDrawerScreen from "./src/navigation/homeNavigation/main";
import OrdersStackScreen from "./src/navigation/orderNavigation";

const Tap = createBottomTabNavigator();

function App() {
  return(
    <NavigationContainer>
      <Tap.Navigator>
        <Tap.Screen name='Home' component={ HomeStackDrawerScreen } />
        <Tap.Screen name='Details' component={ OrdersStackScreen } />
      </Tap.Navigator>
    </NavigationContainer>
  )
};

export default App;