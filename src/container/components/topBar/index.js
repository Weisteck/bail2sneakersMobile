import React from "react";
import {View, Text} from "react-native";
import styles from "./style";
import {Icon} from "react-native-elements";

const TitleComponent = ({navigation}) => {
  return (
    <View style={styles.main}>
      <Icon
        name='menu'
        onPress={() => navigation.toggleDrawer()}
      />
      <Text>Bienvenue 💫</Text>
    </View>
  )
}

export default TitleComponent;