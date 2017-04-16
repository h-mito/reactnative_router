/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Alert,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {createStore} from "redux"
import CApp from "./containers/CApp"
import rootReducer from "./reducers/root"

export default class ccc extends Component {
  render() {

    let store = createStore(rootReducer)

    return (
      <CApp store={store} />
    );
  }
}

AppRegistry.registerComponent('ccc', () => ccc);
