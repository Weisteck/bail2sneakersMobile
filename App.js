import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeStackDrawerScreen from "./src/navigation/homeNavigation/main";
import OrdersStackScreen from "./src/navigation/orderNavigation";
import {Icon} from "react-native-elements";
import store from "./src/app/store";
import {Provider} from "react-redux";

const Tap = createBottomTabNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tap.Navigator
          screenOptions={({route}) => ({
              tabBarIcon: () => {
                let nameIcon;
                if (route.name === 'Home') nameIcon = 'home'
                else if (route.name === 'Commande') nameIcon = 'shopping-bag'
                return <Icon name={nameIcon}/>
              }
            }
          )
          }
        >
          <Tap.Screen name='Home' component={HomeStackDrawerScreen}/>
          <Tap.Screen name='Commande' component={OrdersStackScreen}/>
        </Tap.Navigator>
      </NavigationContainer>
    </Provider>
  )
};

export default App;