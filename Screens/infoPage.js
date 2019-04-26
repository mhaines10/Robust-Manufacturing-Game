import React from 'react';
import {Button, View, Text, ImageBackground,Image, ScrollView, StatusBar,TouchableOpacity, BackHandler, AsyncStorage} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import {Font, AppLoading} from 'expo';
import images from '../images';

export default class info_screen extends React.Component{
  constructor(props){
      super(props);
  }
  static navigationOptions = {
    header: null,
  };
  state = {
    fontLoaded: false
  };
  async componentDidMount(){
    StatusBar.setHidden(true);
    await Font.loadAsync({
      'handwrite': require('./node_modules/@expo/vector-icons/fonts/Snickles.ttf'),
    });
    this.setState({fontLoaded: true});
  }
  render(){
    if (!this.state.fontLoaded){
        return <AppLoading/>;
    }
    return(
    <ImageBackground source={require('./assets/info_background.jpg')} style={{flex:1,flexDirection:'column',alignContent:'center',justifyContent:'center'}} resizeMode='cover'>
 
        <View style={{width:'80%',height:'80%',alignContent:'center',alignSelf:'center',justifyContent:'space-evenly'}} backgroundColor='rgba(56,56,56,.7)'>
            <Text style={{fontFamily:'handwrite',fontSize:72, color:'white',alignSelf:'center'}}>What is Robust Manufacturing?</Text>
            <Text style={{width:'95%',fontFamily:'normal',fontSize:24, color:'white',alignSelf:'center',paddingTop:20}}>    Robust Manufacturing is all about making products as efficient as possible! Companies want to be able to make a product fast, but they dont want their product to break when people use it. To do this, people involved in robust manufacturing try to design the product to be easy to make and reliable! This saves the company time and money, and allows you to enjoy a quality product! </Text>
            
        </View>
        
    </ImageBackground>
    )
  }
}