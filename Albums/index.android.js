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

import Header from './src/components/header';
import AlbumList from './src/components/albumList';

export default class Test extends Component {
  render() {
    return (
        <View style={{flex:1}}>
            <Header headerText={'Albums'}></Header>
            <AlbumList/>
        </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
flex:1,

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
    color: '#000',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Albums', () => Test);
