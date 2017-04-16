import React from "react";
import {
  StyleSheet,
  Alert,
  Text,
  View,
  ListView,
  Button
} from 'react-native';
import BoardLine from "./BoardLine"
import CMenu from "../containers/CMenu"

const BoardList = ({boards, sel_board, onBoardSelect}) => {
  let dsBoard = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  dsBoard = dsBoard.cloneWithRows(boards)

  return (
    <View style={{flex:1}}>
      <View style={styles.contents}>
        <ListView
          enableEmptySections={true}
          dataSource={dsBoard}
          renderRow={(rowData) => {
            let act = rowData.id == sel_board ? true : false;
            return (
              <BoardLine
                active= {act}
                rowData={rowData}
                onPress={(id) => onBoardSelect(id)}
              />
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

export default BoardList;
