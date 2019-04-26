import React from 'react';
import { StyleSheet, Text, View, ImageBackground,Button, Image, TouchableOpacity, Animated, Easing } from 'react-native';
import {PureComponent} from "react";
import images from '../images';

class Timer extends PureComponent{
    render(){
        const sec_remaining = this.props.seconds;
        const delta_tot = this.props.delta;
        var min_disp = "00";
        var sec_disp = "00";
        if (sec_remaining == 60){
            min_disp = "01";
            sec_disp = "00";
        }
        else if (sec_remaining < 10){
            sec_disp = "0"+sec_remaining;
        }
        else{
            sec_disp = sec_remaining;
        }

        return(
            <View style={{height:150,width:300,position:'absolute',left:350,top:5}}>
                <Text style={{flex:1, fontSize:72, color:'gold'}}>{min_disp} : {sec_disp}</Text>
            </View>
        )
    }
}

export default (sec_remaining,delta_in) =>{
    return{
        seconds:sec_remaining,
        delta: delta_in,
        renderer: <Timer/>
    }
}