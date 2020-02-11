import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ScreenNavigator from './Navigation/ScreenNavigator'

export default class App extends Component {
  constructor(props) {
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
