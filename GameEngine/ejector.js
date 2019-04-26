import React from 'react';
import { StyleSheet, Text, View, ImageBackground,Button, Image, TouchableOpacity, Animated, Easing } from 'react-native';
import {PureComponent} from "react";
import images from '../images';

class Ejector extends PureComponent{
    render(){
        return (
            <Image source={require('./assets/short_eject.png')} style={{position:'absolute',height:this.props.height,width:this.props.width,left:this.props.left,bottom:this.props.bottom}}resizeMode='contain'/>
        )
    }
}

export default (pos) =>{
    let height_in = 466;
    let width_in = 267;
    return{
        height:height_in,
        width:width_in,
        left: pos[0],
        bottom:pos[1],
        renderer:<Ejector/>
    }
}