import React from 'react';
import {View, Text, Button, Image} from 'react-native';
import styles from './style';
import {Icon} from "react-native-elements";

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.main}>
      <Image
        source={{
          uri: 'https://github.com/Weisteck/bail2sneakersMobile/blob/works/fetchApiToDataStore/src/image/logoB2S.png?raw=true'
        }}
        style={styles.logo}
      />
      <Text>Bienvenue sur la page d'accueil de B2S 👟</Text>
      <Button
        title='Aller au Details'
        onPress={() => navigation.navigate('Details')}
      />
      <Button
        title='Open Drawer'
        onPress={() => navigation.toggleDrawer()}
      />
      <Icon name='home'/>
    </View>
  );
}

export default HomeScreen;