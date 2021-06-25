import React from "react";
import { createStackNavigator } from "@react-navigation/stack"
import {NavigationContainer} from "@react-navigation/native";
import HomeScreen from "../../container/screens/home";
import CurrentOrderScreen from "../../container/screens/currentOrder";

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CurrentOrder" component={CurrentOrderScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;