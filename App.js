import React from 'react';
import { StyleSheet, Text, View, ImageBackground,Button, Image, TouchableOpacity } from 'react-native';
import {Font} from 'expo';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import MainScreen from './MainScreen';
import game_p1 from './game_p1';
import base_screen from './base_screen';
import live_game_screen from './live_game_screen';
import score_screen from './highscores';
import auto_selector from './auto_select';
import info_screen from './infoPage';

const MainNav = createStackNavigator({
  Home: MainScreen,
  gamePlay1: game_p1,
  Base: base_screen,
  gamePlay: live_game_screen,
  highscores: score_screen,
  auto_select: auto_selector,
  info_screen: info_screen
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

