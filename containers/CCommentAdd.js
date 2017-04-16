import {connect} from "react-redux";
import { Actions } from 'react-native-router-flux';
import { Alert } from 'react-native';

import {HOST_ADDR} from "../constants/index";
import {comments_read,select_user} from "../actions/index";
import CommentAdd from "../components/CommentAdd";

const mapStateToProps = (state, ownProps) => {
  return {
    sel_board: state.sel_board,
    users: state.users,
    current_token: state.csrf_token,
    sel_user: state.sel_user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCommentPost: (sel_board, user_id, comment, token) => {
      if (comment == undefined || comment.trim() == ""){
        Alert.alert("コメントを入力してください")
        return
      }
      if (sel_board == -1){
        Alert.alert("先に、掲示板を選択してください。")
        return
      }

      fetch('http://' + HOST_ADDR + '/board/insertComment', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'X-CSRF-Token': token ,
        },
        body: JSON.stringify({
          board_id: sel_board,
          user_id: user_id,
          comment: comment,
        })
      })
      .then((response) => response.json())
      .then((responseJson) => {
        Actions.clist()
        readComments(sel_board, dispatch);
      })
      .catch((error) => {
        console.error(error);
      });

    },
    onUserChange: (sel_user) => {
      dispatch(select_user(sel_user));
    }

  }
}


const readComments = (board_id, dispatch) => {

  fetch('http://' + HOST_ADDR + '/board/readComments/' + board_id)
    .then((response) => response.json())
    .then((responseJson) => {
      dispatch(comments_read(responseJson.rows));
    })
    .catch((error) => {
      console.error(error);
    });

}

const CCommentAdd = connect(mapStateToProps, mapDispatchToProps)(CommentAdd);

export default CCommentAdd;
