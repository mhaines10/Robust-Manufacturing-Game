import React from 'react';
import {Button, View, Text, ImageBackground,Image, Animated, Easing, StatusBar, TouchableOpacity,TouchableWithoutFeedback, Alert} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import images from '../images';
import TypeWriter from 'react-native-typewriter';
import Modal from 'react-native-modal';

var screenImages = ["./assets/circuit","./assets/carScreen","./assets/buildingScreen"]
export default class game_p1 extends React.Component{
    constructor(props){
        super(props);
        this.handler = this.handler.bind(this);
        this.state = {currentState: 1, fieldDisp: 0 };
    }
    static navigationOptions = {
        header: null,
    };
    handler(){
        this.dispAlert();
        this.setState({currentState: 2});
    }
    handler_tech = () =>{
        this.props.navigation.navigate('Base',{choice:'Tech'});
    }
    handler_auto = () =>{
        this.props.navigation.navigate('auto_select');
    }
    handler_building = () =>{
        this.props.navigation.navigate('Base',{choice:'Infra'});
    }

    componentDidMount(){
        StatusBar.setHidden(true);
    }
    closeMessage(){
        this.setState({boxVis: false, currentState: 2});
    }
    addVisual(){
        if (this.state.currentState == 1){
                return ( <View style={{height:'99%',width:'87%',alignSelf:'center',alignItems:'center',justifyContent:'center', paddingBottom:8, flexDirection:'row'}}>
                            <ImageBackground source={require('./assets/desktop_background.png')} resizeMode={'cover'} style={{height:'100%',width:'100%',alignSelf:'center',alignItems:'center',justifyContent:'center', paddingTop:0, flexDirection:'row'}}>
                                <Pulse_button handler = {this.handler} />
                            </ImageBackground>
                        </View>)
                    
        }
        else{
            return (<View style={{height:'99%',width:'87%',alignSelf:'center',alignItems:'center',justifyContent:'center', paddingBottom:8, flexDirection:'row'}}>
                        <ImageBackground source={require('./assets/desktop_background.png')} resizeMode={'cover'} style={{height:'100%',width:'100%',alignSelf:'center',alignItems:'center',justifyContent:'center', paddingTop:0, flexDirection:'row'}}>
                            <TouchableOpacity style={{flex:.1, alignItems:'center',justifyContent:'center', flexDirection:'row'}} onPress={() => this.updateField(0)}>
                                <Image source={require('./assets/arrowRev.png')}  style={{flex:1}} resizeMode={'contain'}/>
                            </TouchableOpacity>
                            {this.setImage()}
                            <TouchableOpacity style={{flex:.1,alignItems:'center',justifyContent:'center', flexDirection:'row'}} onPress={() => this.updateField(1)}>
                                <Image source={require('./assets/arrow.png')}  style={{flex:1}} resizeMode={'contain'}/>
                            </TouchableOpacity>
                        </ImageBackground>
                    </View>)
        }

    }
    dispAlert(){
        Alert.alert('hola')
    }
    updateField(dir){
        if (dir == 0 && this.state.fieldDisp == 0){
            this.setState({fieldDisp:2})
        }
        else if (dir == 0){
            this.setState({fieldDisp:this.state.fieldDisp-1})
        }
        else if (dir == 1 && this.state.fieldDisp == 2){
            this.setState({fieldDisp:0})
        }
        else if (dir == 1){
            this.setState({fieldDisp:this.state.fieldDisp+1})
        }
    }
    setImage(){
        if (this.state.fieldDisp == 0){
            return <Pulse_tech style={{flex:.8}} handler={this.handler_tech}/>
        }
        else if (this.state.fieldDisp== 1){
            return <Pulse_auto style={{flex:.8}} handler={this.handler_auto}/>
        }
        else if (this.state.fieldDisp== 2){
            return <Pulse_building style={{flex:.8}}  handler={this.handler_building}/>
        }
    }

    render() {
        var currDisp = '';
        const {navigate} = this.props.navigation;
        return(
            <ImageBackground style={{flex:1}} source={require('./assets/officeWall.jpg')}>
                <View style={{flex:1,flexDirection:'column', justifyContent:'flex-end', alignItems:'center'}}>
                    <View style={{height:'75%',width:'60%'}}>
                        <ImageBackground source={require('./assets/monitor.png')} style={{flex:1,height: undefined, width:undefined}} resizeMode='contain'>
                            <View style={{height:'75%',width:'95%', alignSelf:'center',alignItems:'center',justifyContent:'space-evenly', paddingTop:12, flexDirection:'row'}}>
                                {this.addVisual()}
                            </View>
                        </ImageBackground>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

class Pulse_button extends React.Component{
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
            <View style={{flex:1, justifyContent: 'center',alignItems:'center'}}>
                <TouchableOpacity onPress={this.props.handler}>
                    <Animated.Image source={require('./assets/email.png')} resizeMode='contain' style={{width:200, height:100, transform:[{scale: this.animateValue}], alignItems:'center',justifyContent:'center'}}>
                    </Animated.Image>
                </TouchableOpacity>
            </View>
        )
    }   
}
class Pulse_auto extends React.Component{
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
            <View style={{flex:1, justifyContent: 'center',alignItems:'center'}}>
                <TouchableOpacity onPress={this.props.handler}>
                    <Animated.Image source={require('./assets/icon_auto.png')} resizeMode='contain' style={{flex:1, transform:[{scale: this.animateValue}], alignItems:'center',justifyContent:'center'}}>
                    </Animated.Image>
                </TouchableOpacity>
            </View>
        )
    }
}
class Pulse_building extends React.Component{
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
            <View style={{flex:1, justifyContent: 'center',alignItems:'center'}}>
                <TouchableOpacity onPress={this.props.handler}>
                    <Animated.Image source={require('./assets/icon_infrastructure.png')} resizeMode='contain' style={{flex:1, transform:[{scale: this.animateValue}], alignItems:'center',justifyContent:'center'}}>
                    </Animated.Image>
                </TouchableOpacity>
            </View>
        )
    }
}
class Pulse_tech extends React.Component{
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
            <View style={{flex:1, justifyContent: 'center',alignItems:'center'}}>
                <TouchableOpacity onPress={this.props.handler}>
                    <Animated.Image source={require('./assets/icon_tech.png')} resizeMode='contain' style={{flex:1, transform:[{scale: this.animateValue}], alignItems:'center',justifyContent:'center'}}>
                    </Animated.Image>
                </TouchableOpacity>
            </View>
        )
    }
}