import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ScreenNavigator from './Navigation/ScreenNavigator';
import database from './database/database';
import Modal from './Component/ModalScreen';

export default class App extends Component {
  constructor(props) {
    database.dbinit();
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ScreenNavigator/>
    );
  }
}
