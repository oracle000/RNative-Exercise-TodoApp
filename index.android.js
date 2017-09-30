/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {Card, Navigation} from 'react-router-navigation';
import {NativeRouter, Link} from 'react-router-native';

// components
import Login from './app/login';
import Accounts from './app/accounts';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    fontSize: 15
  },
});


export default class ProjectSept9A extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name : 'EQUINOX'
    };
  }

  render() {
    return (
      <NativeRouter>
        <Navigation hideNavBar>
          <Card
              exact 
              path="/" 
              component={Login} 
              />
          <Card
              path="/accounts/:id"
              component={Accounts} 
              />
          
        </Navigation>
      </NativeRouter>
    );
  }
}


AppRegistry.registerComponent('ProjectSept9A', () => ProjectSept9A);
