import React from 'react';
import { StyleSheet, Text, View, ImageBackground,Button, Image, TouchableOpacity,StatusBar } from 'react-native';
import {Game} from '../GameEngine/game_engine';
import images from '../images';

export default class live_game_screen extends React.Component {
    constructor(props){
        super(props);
        this.choice1 = this.props.navigation.getParam('choice1');
        this.choice2 = this.props.navigation.getParam('choice2');
        this.choice3 = this.props.navigation.getParam('choice3');
        this.choice = this.props.navigation.getParam('choice');
    }
    static navigationOptions = {
        header: null,
    };
    render(){
        return(
            <ImageBackground source={require('./assets/game_background.png')} style={{flex:1}} resizeMode='cover'>
                
                <Game icon_img1={this.choice1} icon_img2={this.choice2} icon_img3={this.choice3} choice_obj={this.choice}>
                </Game>
            </ImageBackground>
        );
    }
}

