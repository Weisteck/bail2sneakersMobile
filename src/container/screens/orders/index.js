import React from 'react';
import {View, Text, Button} from 'react-native';
import styles from './style';

const OrdersScreen = ({ navigation }) => {
  return (
    <View style={styles.main}>
      <Text>Page des commandes !!</Text>
      <Button
        title='DETAIL COMMANDE'
        onPress={()=> navigation.navigate('OrderDetail')}
      />
    </View>
  );
}

export default OrdersScreen;