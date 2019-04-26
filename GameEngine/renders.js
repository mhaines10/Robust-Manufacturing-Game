import React from 'react';
import { StyleSheet, Text, View, ImageBackground,Button, Image, TouchableOpacity, Animated, Easing } from 'react-native';
import {PureComponent} from "react";
import images from '../images';


export class Belt_Parts extends PureComponent{
    render(){
        const source = this.props.source;
        const pos = this.props.position;
        const type = this.props.type;
        return(
            <Image source={source} style={{height:40,width:40, left: pos[0],top: pos[1]}}/>
        );
    }

}
export class Item_disp extends PureComponent{
    render(){
        const source = this.props.source;
        const pos = this.props.position;
        return(
            <View style={{height:75,width:75, left:this.props.position[0],top:this.props.position[1],borderWidth: 2, borderColor:'black'}}>
                <Image source={source} style={{height:'95%',width:'95%'}}resizeMode='contain'/>
            </View>
        )
    }
}





