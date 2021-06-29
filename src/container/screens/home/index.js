import React from 'react';
import {View, Text, Button, ImageBackground} from 'react-native';
import styles from './style';
import {Icon} from "react-native-elements";

const image = {uri: ''}

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.main}>
      <ImageBackground source={} >
        <Text>Bienvenue sur la page d'accueil de B2S 👟</Text>
        <Button
          title='Aller au Details'
          onPress={()=> navigation.navigate('Details')}
        />
        <Button
          title='Open Drawer'
          onPress={() => navigation.toggleDrawer()}
        />
        <Icon name='home' />
      </ImageBackground>
    </View>
  );
}

export default HomeScreen;