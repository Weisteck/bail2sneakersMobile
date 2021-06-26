import React from 'react';
import {View, Text, Button} from 'react-native';
import styles from './style';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.main}>
      <Text>Bienvenue sur la page d'accueil de B2S 👟</Text>
      <Button
        title='Aller au Details'
        onPress={()=> navigation.navigate('Details')}
      />
      <Button
        title='Open Drawer'
        onPress={() => navigation.openDrawer()}
      />
    </View>
  );
}

export default HomeScreen;