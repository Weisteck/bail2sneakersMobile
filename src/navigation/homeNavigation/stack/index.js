import React from 'react';
import styles from './style';
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../../../container/screens/home";
import OrdersScreen from "../../../container/screens/orders";
import TitleComponent from "../../../container/components/topBar";

const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
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
      <HomeStack.Screen
        name='Home'
        component={HomeScreen}
        options={{
          headerTitle: props => <TitleComponent {...props} />
        }}
      />
    </HomeStack.Navigator>
  );
}

export default HomeStackScreen;