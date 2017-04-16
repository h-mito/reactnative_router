import React from "react"
import {createStore} from "redux"
import {Provider} from "react-redux"
import {
  StyleSheet,
  Alert,
  View,
  Text,
  ListView,
  TextInput,
  Button
} from "react-native"
import { Router, Scene, Modal, Actions } from 'react-native-router-flux';
import rootReducer from "../reducers/root"
import Test1 from "./Test1"
import Test2 from "./Test2"
import CBoardList from "../containers/CBoardList"
import CCommentList from "../containers/CCommentList"
import CCommentAdd from "../containers/CCommentAdd"

class App extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.onInit()
  }

  render(){
    return (
      <Provider store={this.props.store}>
        <Router>
          <Scene key="root">
            <Scene key="test1" component={Test1} title="test1" />
            <Scene key="test2" component={Test2} title="test2" />
            <Scene key="blist" initial={true} component={CBoardList} title="掲示板一覧" />
            <Scene key="clist" component={CCommentList} title="コメント一覧" />
            <Scene key="cadd" component={CCommentAdd} title="コメント投稿" />
          </Scene>
        </Router>

      </Provider>
    )
  }

}

export default App
