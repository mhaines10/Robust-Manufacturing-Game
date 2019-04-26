import React from 'react';
import { StyleSheet, Text, View, ImageBackground,Button, Image, TouchableOpacity, Animated, Easing } from 'react-native';
import {PureComponent} from "react";
import images from '../images';

class Item_selected extends PureComponent{
    render(){
        const source = this.props.source;
        const pos = this.props.position;

        return(
            <View style={{position:'absolute',height:70,width:70,left:this.props.position[0],top:this.props.position[1],borderColor:'black',borderWidth:2}}>
                <Image source={source} style={{height:'95%',width:'95%'}}resizeMode='contain'/>
            </View>
        )
    }
}

export default (position,source) => {
    let position_in = position;
    let source_in = source;
    return{
        position: position_in,
        source: source_in,
        renderer: <Item_selected/>
    }

}