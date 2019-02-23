import React from 'react';
import {Button, View, Text, ImageBackground,Image, Animated,StatusBar} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import images from './images';
import TypeWriter from 'react-native-typewriter';

export default class game_p1 extends React.Component{
    constructor(props){
        super(props);
        this.state = {currentState: 2 };
    }
    static navigationOptions = {
        header: null,
    };
    componentDidMount(){
        StatusBar.setHidden(true);
    }
    addVisual(){
        if (this.state.currentState == 1){
            return <TypeWriter typing={1}>William Robertson is a giant bitch</TypeWriter>;
        }
        else{
            return [<Button style={{flex:1}} key='tech' title="Tech" onPress={() => this.props.navigation.navigate('Base',{choice: 'Tech',})}/>,
            <Button style={{flex:1}} key='auto' title="Automotive" onPress={() => this.props.navigation.navigate('Base',{choice: 'Auto',})}/>,
            <Button style={{flex:1}} key='infra' title="Infrastructure" onPress={() => this.props.navigation.navigate('Base',{choice: 'Infra',})}/>];
        }

    }

    render() {
        var currDisp = '';
        const {navigate} = this.props.navigation;
        return(
            <ImageBackground style={{flex:1}} source={require('./assets/officeWall.jpg')}>
                <View style={{flex:1,flexDirection:'column',justifyContent: 'flex-end', alignItems:'center'}}>
                    <View style={{height:'75%',width:'60%'}}>
                        <ImageBackground source={require('./assets/monitor.png')} style={{flex:1,height: undefined, width:undefined}} resizeMode='contain'>
                            <View style={{height:'80%',width:'78%', alignSelf:'center', justifyContent:'space-evenly', paddingTop:12}}>
                                {this.addVisual()}
                            </View>
                        </ImageBackground>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}
