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
import CMenu from "../containers/CMenu"

const Test1 = () => {

  return (
    <View style={{flex:1}}>
      <View style={styles.contents}>
        <Text>
          設定画面。。。。
        </Text>
      </View>
      <CMenu />
    </View>
  )
}

const styles = StyleSheet.create({
  contents: {
    flex: 10,
    marginTop: 60,
  },
});


export default Test1
