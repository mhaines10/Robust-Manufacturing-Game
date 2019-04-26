import React from 'react';
import { StyleSheet, Text, View, ImageBackground,Button, Image, TouchableOpacity, Animated, Easing } from 'react-native';
import {PureComponent} from "react";
import images from '../images';

class Gear extends PureComponent{
    render(){
        const angle = this.props.angle;
        newangle = angle+"deg";
        return(
            <Image source={require('./assets/gear.png')} style={{transform:[{rotate: newangle}], height:50,width:50}} resizeMode='contain' />
        );
    }
}

class Conveyor_belt extends PureComponent{
    render(){
        const new_angle = this.props.angle;
        const width_in = this.props.size[0];
        const height_in = this.props.size[1];
        const x_pos = this.props.position[0];
        const y_pos = this.props.position[1];

        
        return(
            <ImageBackground source={require('./assets/belt.png')} style={{position:'absolute',height:height_in,width:width_in, left:x_pos, bottom: y_pos,flexDirection:'row',justifyContent:'space-evenly',alignItems:'center'}} resizeMode='contain' >
                <Gear angle={new_angle}/>
                <Gear angle={new_angle}/>
                <Gear angle={new_angle}/>
                <Gear angle={new_angle}/>
                <Gear angle={new_angle}/>
            </ImageBackground>
        )
    }
}

export default (size,angle,position) => {
    let size_in = size;
    let angle_in = angle;
    let position_in = position;
    return{
        size: size_in,
        angle: angle_in,
        position: position_in,
        renderer: <Conveyor_belt/>

    }
}