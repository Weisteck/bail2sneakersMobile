import React from 'react';
import styles from './style';
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../../../container/screens/home";

const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name='Home' component={HomeScreen} />
    </HomeStack.Navigator>
  );
}

export default HomeStackScreen;