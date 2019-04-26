import React from 'react';
import {Button, View, Text, ImageBackground,Image,Animated, Easing, Modal, StatusBar,TouchableOpacity, BackHandler} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import images from '../images';
import * as Progress from 'react-native-progress';

let lister = null;
var money = 10000;
var time_color = "";
var rel_color = '';
var appeal_color = '';


export default class base_screen extends React.Component{
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
    button_check(){
        if(this.state.choice1 != this.choice_object.choice1.option0 && this.state.choice2 != this.choice_object.choice2.option0 && this.state.choice3 != this.choice_object.choice3.option0){
            return(
                <View style={{flex:.5,height:'30%', alignSelf:'flex-start'}}>
                    <Pulse_next handler = {this.handler_next} />
                </View>
            )
        }
        else{
            return(
                <View style={{flex:.5}}></View>
            )
        }
    }
    handler_next =()=>{
        this.props.navigation.navigate('gamePlay',{choice1:this.state.choice1, choice2:this.state.choice2,choice3:this.state.choice3,choice:this.choice_object});
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

        if (this.state.currChoice == 'choice1'){
            arrowView = <View style={{flex:1}}>
                            <View style={{flex:.3,flexDirection:'row'}}>
                            </View>
                            <View style={{flex:.3,flexDirection:'row'}}>
                            </View>
                            <View style={{flex:.3,flexDirection:'row',justifyContent:'flex-end',alignContent:'flex-end'}}>
                                <Image style={{height:'60%',width:'60%',alignSelf:'flex-end',transform:[{rotate:'180deg'}]}} source={require('./assets/pointArrow.png')} resizeMode='contain'/>
                            </View>
                        </View>;
        }
        else if (this.state.currChoice == 'choice2'){
            arrowView = <View style={{flex:1}}>
                            <View style={{flex:.3,flexDirection:'row'}}>
                            </View>
                            <View style={{flex:.3,flexDirection:'row',justifyContent:'flex-end',alignContent:'flex-end'}}>
                                <Image style={{height:'60%',width:'60%',alignSelf:'flex-end',transform:[{rotate:'180deg'}]}} source={require('./assets/pointArrow.png')} resizeMode='contain'/>
                            </View>
                            <View style={{flex:.3,flexDirection:'row'}}>
                            </View>
                        </View>;
        }
        else {
            arrowView = <View style={{flex:1}}>
                            <View style={{flex:.3,flexDirection:'row',justifyContent:'flex-end',alignContent:'flex-end'}}>
                                <Image style={{height:'60%',width:'60%',alignSelf:'flex-end',transform:[{rotate:'180deg'}]}} source={require('./assets/pointArrow.png')} resizeMode='contain'/>
                            </View>
                            <View style={{flex:.3,flexDirection:'row'}}>
                            </View>
                            <View style={{flex:.3,flexDirection:'row'}}>
                            </View>
                        </View>;
        }

        if (this.state.currChoice == 'choice1'){
            arrowView1 = <View style={{flex:1,justifyContent:'flex-end',flexDirection:'column'}}>

                            <View style={{flex:.3,flexDirection:'row'}}>
                            </View>
                            <View style={{flex:.3,flexDirection:'row'}}>
                            </View>
                            <View style={{flex:.3,flexDirection:'row',alignContent:'flex-end',paddingLeft:90}}>
                                <Image style={{height:'60%',width:'60%',alignSelf:'flex-start'}} source={require('./assets/pointArrow1.png')} resizeMode='contain'/>
                            </View>
                        </View>;
        }
        else if (this.state.currChoice == 'choice2'){
            arrowView1 = <View style={{flex:1,justifyContent:'flex-end',flexDirection:'column'}}>
  
                            <View style={{flex:.3,flexDirection:'row'}}>
                            </View>
                            <View style={{flex:.3,flexDirection:'row',alignContent:'flex-end',paddingLeft:90}}>
                                <Image style={{height:'60%',width:'60%',alignSelf:'flex-end'}} source={require('./assets/pointArrow1.png')} resizeMode='contain'/>
                            </View>
                            <View style={{flex:.3,flexDirection:'row'}}>
                            </View>
                        </View>;
        }
        else {
            arrowView1 = <View style={{flex:1,justifyContent:'flex-end',flexDirection:'column'}}>
                            <View style={{flex:.3,flexDirection:'row',alignContent:'flex-end',paddingLeft:90}}>
                                <Image style={{height:'60%',width:'60%',alignSelf:'flex-end'}} source={require('./assets/pointArrow1.png')} resizeMode='contain'/>
                            </View>
                            <View style={{flex:.3,flexDirection:'row'}}>
                            </View>
                            <View style={{flex:.3,flexDirection:'row'}}>
                            </View>
                        </View>;
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
                    <View style={{flex:.75, flexDirection:'row'}}>
                        <View style={{flex:.45, flexDirection:'column',justifyContent:'space-evenly'}}>
                            {arrowView}
                        </View>
                        <View style={{flex:.1,flexDirection:'column',alignItems:'center'}}>
                            <View style={{width:'100%',flex:.33, flexDirection:'column', justifyContent:'center'}}>
                                <Image style={{flex:1, alignSelf:'center'}} source={this.state.choice3.icon} resizeMode="contain"/>
                            </View>
                            <View style={{width:'100%',flex:.33, flexDirection:'column', justifyContent:'center'}}>
                                <Image style={{flex:1, alignSelf:'center'}} source={this.state.choice2.icon} resizeMode="contain"/>
                            </View>
                            <View style={{width:'100%',flex:.33, flexDirection:'column', justifyContent:'center'}}>
                                <Image style={{flex:1, alignSelf:'center'}} source={this.state.choice1.icon} resizeMode="contain"/>
                            </View>
                        </View>
                        <View style={{flex:.45,flexDirection:'row'}}>
                            <View style={{flex:.5,flexDirection:'column'}}>
                                {arrowView1}
                            </View> 
                            <View style={{flex:.5,justifyContent:'flex-start',flexDirection:'row'}}>
                                {this.button_check()}
                            </View>
                            
                        </View>
                        
                    </View>
                    <View style={{flex:.15,width:'40%',flexDirection:'row',justifyContent:'space-evenly',alignSelf:'center',paddingBottom:10,borderRadius:10}}backgroundColor='rgba(56,56,56,.7)'>
                        <TouchableOpacity style={{width:100,height:'100%',alignContent:'center'}} onPress={()=> this.updateImage(0,this.choice_object[this.state.currChoice])}>
                            <Image style={{alignSelf:'center',flex:1}} source={require('./assets/pointerRev.png')} resizeMode='contain'/>
                        </TouchableOpacity>
                        <View style={{width:100,height:'100%',justifyContent:'center',flexDirection:'column'}} backgroundColor='rgba(56,56,56,0)'>
                            <TouchableOpacity style={{width:'100%',height:'50%',justifyContent:'center'}} onPress={()=> this.updateCurrChoice(1)}>
                                <Image style={{alignSelf:'center',flex:.5,width:'100%'}} source={require('./assets/roundArrow1.png')} resizeMode='contain'/>
                            </TouchableOpacity>
                            <TouchableOpacity style={{width:'100%',height:'50%',justifyContent:'center'}} onPress={()=> this.updateCurrChoice(0)}>
                                <Image style={{alignSelf:'center',flex:.5,width:'100%'}} source={require('./assets/roundArrow2.png')} resizeMode='contain'/>
                            </TouchableOpacity>
                            
                        </View>
                        <TouchableOpacity style={{width:100,height:'100%',justifyContent:'center'}} onPress={()=> this.updateImage(1,this.choice_object[this.state.currChoice])}>
                            <Image style={{alignSelf:'center',flex:1}} source={require('./assets/pointer.png')} resizeMode='contain'/>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        );
    }

}

class Pulse_next extends React.Component{
    constructor(props){
        super(props);
        this.animateValue = new Animated.Value(0)
    }
    componentWillMount(){
        Animated.loop(
            Animated.sequence([
                Animated.timing(this.animateValue, {toValue: 1.2, duration: 400, easing: Easing.linear, useNativeDriver: true}),
                Animated.timing(this.animateValue, {toValue: 0.8, duration: 800, easing: Easing.linear, useNativeDriver: true}),
                Animated.timing(this.animateValue, {toValue: 1.0, duration: 400, easing: Easing.linear, useNativeDriver: true})
            ])
        ).start();

    }
    render(){
        return(
            <View style={{flex:1,height:'100%', justifyContent: 'center',alignItems:'center'}}>
                <TouchableOpacity style={{flex:1,height:'100%'}} onPress={this.props.handler}>
                    <Animated.Image source={require('./assets/next_button.png')} resizeMode='contain' style={{flex:1,height:'50%', transform:[{scale: this.animateValue}], alignItems:'center',justifyContent:'center'}}>
                    </Animated.Image>
                </TouchableOpacity>
            </View>
        )
    }
}



