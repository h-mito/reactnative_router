import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ListView,
  Button
} from 'react-native';
import CommentLine from "./CommentLine"
import CMenu from "../containers/CMenu"

const CommentList = ({datas}) => {
  let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  ds = ds.cloneWithRows(datas);

  return (
    <View style={{flex:1}}>
      <View style={styles.contents}>
        <ListView
          enableEmptySections={true}
          dataSource={ds}
          renderRow={(rowData) => {
            return (
              <CommentLine rowData={rowData} />
            )
          }}
        />
      </View>
      <CMenu />
    </View>
  );
}

const styles = StyleSheet.create({
  contents: {
    flex: 10,
    marginTop: 60,
  },
});

export default CommentList;
