import React from 'react';
import { StyleSheet, Text, View, ImageBackground,Button, Image, TouchableOpacity } from 'react-native';
import {Font} from 'expo';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import MainScreen from './Screens/MainScreen';
import game_p1 from './Screens/game_begin';
import base_screen from './Screens/base_screen';
import live_game_screen from './Screens/live_game_screen';
import score_screen from './Screens/highscores';
import auto_selector from './Screens/auto_select';
import info_screen from './Screens/infoPage';

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

