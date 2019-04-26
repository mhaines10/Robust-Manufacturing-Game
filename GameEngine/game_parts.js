import React from 'react';
import { StyleSheet, Text, View, ImageBackground,Button, Image, TouchableOpacity, Animated, Easing } from 'react-native';
import {PureComponent} from "react";
import images from '../images';

class Item_disp extends PureComponent{
    render(){
        const source = this.props.source;
        const pos = this.props.position;
        return(
            <Image source={source} style={{position:'absolute',height:60,width:60,left:this.props.position[0],top:this.props.position[1]}}resizeMode='contain'/>
            
        )
    }
}

export default (position,source) => {
    let position_in = position;
    let source_in = source;
    return{
        position: position_in,
        source: source_in,
        renderer: <Item_disp/>
    }

}