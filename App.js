import React from 'react';
import { StyleSheet, Text, View, ImageBackground,Button, Image, TouchableOpacity } from 'react-native';
import {Font} from 'expo';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import MainScreen from './MainScreen';
import game_p1 from './game_p1';
import base_screen from './base_screen';

const MainNav = createStackNavigator({
  Home: MainScreen,
  gamePlay1: game_p1,
  Base: base_screen
},
{
  initialRouteName:"Home"
});

const AppCont = createAppContainer(MainNav);

export default class App extends React.Component{
  render(){
    return <AppCont />;
  }
}

