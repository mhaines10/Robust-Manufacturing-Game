import React from 'react';
import { StyleSheet, Text, View, ImageBackground,Button, Image, TouchableOpacity, Animated, Easing } from 'react-native';
import {PureComponent} from "react";
import images from '../images';

class Move_part extends PureComponent{
    render(){
        const source = this.props.source;
        const pos = this.props.position;
        return(
            <Image source={source} style={{position:'absolute',height:90,width:90,left:this.props.position[0],bottom:this.props.position[1]}}resizeMode='contain'/>
            
        )
    }
}

export default (position,source) => {
    let position_in = position;
    let source_in = source;
    return{
        position: position_in,
        source: source_in,
        renderer: <Move_part/>
    }

}