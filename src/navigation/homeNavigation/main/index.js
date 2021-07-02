import React from 'react';
import styles from './style';
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeStackScreen from "../stack";


const HomeDrawer = createDrawerNavigator();

const HomeStackDrawerScreen = () => {
  return (
    <HomeDrawer.Navigator initialRouteName='Home'>
      <HomeDrawer.Screen name='Home' component={HomeStackScreen} />
    </HomeDrawer.Navigator>
  );
}

export default HomeStackDrawerScreen;