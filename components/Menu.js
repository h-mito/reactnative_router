import React from "react"
import {
  StyleSheet,
  Alert,
  View,
  Text,
  ListView,
  TextInput,
  Button
} from "react-native"


const Menu = ({onMove}) => {
  return (
    <View style={styles.menu}>
      <Button
        onPress = {(e) => onMove("blist")}
        title= "掲示板"
      />
      <Button
        onPress = {(e) => onMove("cadd")}
        title= "書き込む"
      />
      <Button
        onPress = {(e) => onMove("test1")}
        title= "設定"
      />
      <Button
        onPress = {(e) => onMove("test2")}
        title= "About"
      />

    </View>
  )
}

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    flexDirection: "row",
    bottom: 0,
  },
});


export default Menu
