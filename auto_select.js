import React from 'react';
import {Button, View, Text, ImageBackground,Image, Animated, Modal, StatusBar,TouchableOpacity, BackHandler} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import images from './images';
import * as Progress from 'react-native-progress';

let lister = null;
var money = 10000;
var time_color = "";
var rel_color = '';
var appeal_color = '';

export default class auto_selector extends React.Component{
    constructor(props){
        super(props);
        choice = this.props.navigation.getParam('choice');
        this.choice_object = images[choice];
        this.time_taken;
        this.reliability;
        this.appeal;
        this.state = {currChoice: "choice1",choice_index:1, img_index:0,choice1: this.choice_object.choice1.option0,choice2: this.choice_object.choice2.option0,choice3: this.choice_object.choice3.option0 };
    }
    componentDidMount(){
        StatusBar.setHidden(true);
        BackHandler.addEventListener("hardwareBackPress",()=>{this.backButtonPressed()});
    }
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', ()=>{this.backButtonPressed()});
      }
    static navigationOptions = {
        header: null,
    };

    updateCurrChoice(dir){
        if (dir == 0 && this.state.choice_index == 1){
            this.setState({currChoice: 'choice'+3,choice_index:3});
        }
        else if (dir == 0){
            var num_choice = parseInt(this.state.choice_index)-1;
            this.setState({currChoice: 'choice'+ num_choice, choice_index: num_choice});
        }
        else if (dir == 1 && this.state.choice_index == 3){
            this.setState({currChoice: 'choice'+1,choice_index:1});
        }
        else if (dir == 1){
            var num_choice = parseInt(this.state.choice_index)+parseInt(1);
            this.setState({currChoice: 'choice'+ num_choice,choice_index: num_choice});
        }
    }

    updateImage(dir, choice_list){
        let obj = {};
        list = Object.keys(choice_list);
        list = list.filter(item => item !== 'name');
        list_length = list.length;
        if (dir == 0 && (this.state.img_index == 1 || this.state.img_index == 0)){
            new_index = list_length-1;
            obj[this.state.currChoice] = choice_list[list[new_index]];
            obj['img_index'] = new_index;
            this.setState(obj);
        }
        else if (dir == 0){
            new_index = this.state.img_index -1;
            obj[this.state.currChoice] = choice_list[list[new_index]];
            obj['img_index'] = new_index;
            this.setState(obj);
        }
        else if (dir == 1 && (this.state.img_index == list_length-1 || this.state.img_index == 0)){
            new_index = 1;
            obj[this.state.currChoice] = choice_list[list[new_index]];
            obj['img_index'] = new_index;
            this.setState(obj);
        }
        else if(dir == 1){
            new_index = this.state.img_index +1;
            obj[this.state.currChoice] = choice_list[list[new_index]];
            obj['img_index'] = new_index;         
            this.setState(obj);
        }
    }

    render() {
        this.time_taken = this.state.choice1.time + this.state.choice2.time + this.state.choice3.time;
        this.reliability = this.state.choice1.reliability + this.state.choice2.reliability + this.state.choice3.reliability;
        this.appeal = this.state.choice1.appeal + this.state.choice2.appeal + this.state.choice3.appeal;
        if (this.time_taken < .3){
            time_color = 'red';
        }else if(this.time_taken < .7){
            time_color = 'yellow';
        }else{
            time_color = 'green';
        }

        if (this.reliability < .3){
            rel_color = 'red';
        }else if(this.reliability < .7){
            rel_color = 'yellow';
        }else{
            rel_color = 'green';
        }

        if (this.appeal < .3){
            appeal_color = 'red';
        }else if(this.appeal < .7){
            appeal_color = 'yellow';
        }else{
            appeal_color = 'green';
        }
        return(
            <ImageBackground style={{flex:1}} source={images[choice].background}>
                <View style={{flex:1, flexDirection: 'column', justifyContent:'center', alignItems:'center'}}>
                    <View style={{flex:.1,width:'100%',flexDirection:'row', justifyContent:'space-evenly'}} backgroundColor='rgba(56,56,56,.7)'>
                        <View style={{flex:.20,height:'100%', flexDirection:'row', alignItems:'center'}}>
                            <Image style={{flex:.4,height:'80%'}} source={require('./assets/money.png')} resizeMode='contain'/>
                            <Text>${money}</Text>
                        </View>
                        <View style={{flex:.20,height:'100%', flexDirection:'row', alignItems:'center'}}>
                            <Image style={{flex:.4,height:'80%'}} source={require('./assets/clock.png')} resizeMode='contain'/>
                            <Progress.Bar progress={this.time_taken} width={75} color={time_color} borderColor={'rgba(0,122,255,1)'}/>
                        </View>
                        <View style={{flex:.20,height:'100%', flexDirection:'row', alignItems:'center'}}>
                            <Image style={{flex:.4,height:'80%'}} source={require('./assets/reliable.png')} resizeMode='contain'/>
                            <Progress.Bar progress={this.reliability} width={75} color={rel_color} borderColor={'rgba(0,122,255,1)'}/>
                        </View>
                        <View style={{flex:.20,height:'100%', flexDirection:'row', alignItems:'center'}}>
                            <Image style={{flex:.4,height:'80%'}} source={require('./assets/appeal.png')} resizeMode='contain'/>
                            <Progress.Bar progress={this.appeal} width={75} color={appeal_color} borderColor={'rgba(0,122,255,1)'}/>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        )
    }
}