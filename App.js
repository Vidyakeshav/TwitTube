import React, { Component } from 'react';
import {KeyboardAvoidingView} from 'react-native';
import { createAppContainer  } from 'react-navigation';
import AppNavigation from './src/components/AppNavigation';

const AppContainer = createAppContainer(AppNavigation);
export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
