// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
//
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Projet Bail2Sneakers 👟</Text>
//       <Text>Partie Mobile ! </Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./src/container/screens/home";
import OrdersStackScreen from "./src/navigation/orderNavigation";

const Tap = createBottomTabNavigator();

function App() {
  return(
    <NavigationContainer>
      <Tap.Navigator>
        <Tap.Screen name='Home' component={ HomeScreen } />
        <Tap.Screen name='Details' component={ OrdersStackScreen } />
      </Tap.Navigator>
    </NavigationContainer>
  )
};

export default App;