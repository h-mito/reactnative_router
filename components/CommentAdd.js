import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ListView,
  Button,
  Picker
} from 'react-native';
import CMenu from "../containers/CMenu"


const CommentAdd = ({sel_board, users, current_token, sel_user, onCommentPost,onUserChange}) => {
  let inpText;
  let items = [];
  const Item = Picker.Item;

  users.map((u) => {
    items.push(<Item key={u.id} label={u.name} value={u.id} />);
  })

  return (
    <View style={{flex:1}}>
      <View style={styles.contents}>
        <TextInput
          placeholder="Let's comment..."
          multiline= {true}
          numberOfLines= {5}
          onChangeText={(text) => inpText = text}
        />
        <Picker
          selectedValue={sel_user}
          onValueChange={(val) => {
            onUserChange(val);
          }}>
          {items}
        </Picker>

        <Button
          onPress={() => {
            onCommentPost(sel_board, sel_user , inpText, current_token);
          }}
          title="投稿" />
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


export default CommentAdd;
