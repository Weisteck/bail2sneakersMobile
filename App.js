import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStackDrawerScreen from "./src/navigation/homeNavigation/main";
import OrdersStackScreen from "./src/navigation/orderNavigation";
import {Icon} from "react-native-elements";

const Tap = createBottomTabNavigator();

const test = () => {
  return (
    <Icon name='home' />
  )
}

function App() {
  return(
    <NavigationContainer>
      <Tap.Navigator
        screenOptions={({route}) => ({
            tabBarIcon: () => {
              let nameIcon;
              if(route.name === 'Home') nameIcon='home'
              else if (route.name === 'Commande') nameIcon='shopping-bag'
              return <Icon name={ nameIcon } />
            }
          }
        )
        }
      >
        <Tap.Screen name='Home' component={ HomeStackDrawerScreen } />
        <Tap.Screen name='Commande' component={ OrdersStackScreen } />
      </Tap.Navigator>
    </NavigationContainer>
  )
};

export default App;