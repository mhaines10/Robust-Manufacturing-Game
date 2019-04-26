import React from 'react';
import {Button, View, Text, ImageBackground,Image, Animated, Modal, StatusBar,TouchableOpacity, BackHandler, AsyncStorage} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import {Font, AppLoading} from 'expo';
import images from '../images';

export default class score_screen extends React.Component{
  constructor(props){
      super(props);
      this.state = {highscores:[], fontLoaded: false};
  }
  static navigationOptions = {
    header: null,
  };
  async componentDidMount(){
    StatusBar.setHidden(true);
    await Font.loadAsync({
      'boardMarker': require('./node_modules/@expo/vector-icons/fonts/BoardMarker.ttf'),
    });
    this.setState({fontLoaded: true});
  }
  async get_scores(){
    const rawScores = await AsyncStorage.getItem('scores');
    const scoreslist = JSON.parse(rawScores);
    this.setState({highscores: scoreslist});
  }
  render(){
    if (this.state.highscores.length == 0){
      this.get_scores();
      return <AppLoading/>
    }
    if (this.state.fontLoaded== false){
      return <AppLoading/>
    }
    return (
      <View style={{flex:1, backgroundColor:'black'}}>
        <ImageBackground source={require('./assets/whiteboard.png')} style={{flex:1, flexDirection:'column'}} resizeMode='contain'>
          <View style={{flex: .2,width:'100%', flexDirection:'row', alignContent:'center',paddingTop:20, justifyContent:'center',alignSelf:'center'}}>
            <Text style={{fontFamily:'handwrite', fontSize:90, color:'black'}} >Leader Board</Text>
          </View>
          <View style={{flex:.8,width:'100%',flexDirection:'row',justifyContent:'center'}}>
            <View style={{flex:.33,flexDirection:'column',alignContent:'center',justifyContent:'space-evenly'}}>
              <View style={{flex:.2,flexDirection:'row', alignContent:'center',justifyContent:'center', paddingBottom:5}}>
                <Text style={{fontFamily:'handwrite',textDecorationLine:'underline', fontSize:60, color:'black'}} >Rank</Text>
              </View>
              <View style={{flex:.8,flexDirection:'column', alignContent:'center',justifyContent:'space-evenly',paddingBottom:25}}>
                <Text style={{flex:.1,fontFamily:'handwrite', fontSize:32, color:'gold',alignSelf:'center',justifyContent:'center'}} >1.</Text>
                <Text style={{flex:.1,fontFamily:'handwrite', fontSize:32, color:'silver',alignSelf:'center'}} >2.</Text>
                <Text style={{flex:.1,fontFamily:'handwrite', fontSize:32, color:'brown',alignSelf:'center'}} >3.</Text>
                <Text style={{flex:.1,fontFamily:'handwrite', fontSize:32, color:'black',alignSelf:'center'}} >4.</Text>
                <Text style={{flex:.1,fontFamily:'handwrite', fontSize:32, color:'black',alignSelf:'center'}} >5.</Text>
                <Text style={{flex:.1,fontFamily:'handwrite', fontSize:32, color:'black',alignSelf:'center'}} >6.</Text>
                <Text style={{flex:.1,fontFamily:'handwrite', fontSize:32, color:'black',alignSelf:'center'}} >7.</Text>
                <Text style={{flex:.1,fontFamily:'handwrite', fontSize:32, color:'black',alignSelf:'center'}} >8.</Text>
                <Text style={{flex:.1,fontFamily:'handwrite', fontSize:32, color:'black',alignSelf:'center'}} >9.</Text>
                <Text style={{flex:.1,fontFamily:'handwrite', fontSize:32, color:'black',alignSelf:'center'}} >10.</Text>
              </View>
            </View>
            <View style={{flex:.33,flexDirection:'column',alignContent:'center',justifyContent:'space-evenly'}}>
              <View style={{flex:.2,flexDirection:'row', alignContent:'center',justifyContent:'center', paddingBottom:5}}>
                <Text style={{fontFamily:'handwrite',textDecorationLine:'underline', fontSize:60, color:'black'}} >Name</Text>
              </View>
              <View style={{flex:.8,flexDirection:'column', alignContent:'center',justifyContent:'space-evenly',paddingBottom:25}}>
                <Text style={{fontFamily:'handwrite', fontSize:32, color:'gold',alignSelf:'center',justifyContent:'center'}} >{this.state.highscores[0][0]}</Text>
                <Text style={{fontFamily:'handwrite', fontSize:32, color:'silver',alignSelf:'center'}} >{this.state.highscores[1][0] != "" ? this.state.highscores[1][0] : " "}</Text>
                <Text style={{fontFamily:'handwrite', fontSize:32, color:'brown',alignSelf:'center'}} >{this.state.highscores[2][0]!= "" ? this.state.highscores[2][0] : " "}</Text>
                <Text style={{fontFamily:'handwrite', fontSize:32, color:'black',alignSelf:'center'}} >{this.state.highscores[3][0]!= "" ? this.state.highscores[3][0] : " "}</Text>
                <Text style={{fontFamily:'handwrite', fontSize:32, color:'black',alignSelf:'center'}} >{this.state.highscores[4][0]!= "" ? this.state.highscores[4][0] : " "}</Text>
                <Text style={{fontFamily:'handwrite', fontSize:32, color:'black',alignSelf:'center'}} >{this.state.highscores[5][0]!= "" ? this.state.highscores[5][0] : " "}</Text>
                <Text style={{fontFamily:'handwrite', fontSize:32, color:'black',alignSelf:'center'}} >{this.state.highscores[6][0]!= "" ? this.state.highscores[6][0] : " "}</Text>
                <Text style={{fontFamily:'handwrite', fontSize:32, color:'black',alignSelf:'center'}} >{this.state.highscores[7][0]!= "" ? this.state.highscores[7][0] : " "}</Text>
                <Text style={{fontFamily:'handwrite', fontSize:32, color:'black',alignSelf:'center'}} >{this.state.highscores[8][0]!= "" ? this.state.highscores[8][0] : " "}</Text>
                <Text style={{fontFamily:'handwrite', fontSize:32, color:'black',alignSelf:'center'}} >{this.state.highscores[9][0]!= "" ? this.state.highscores[9][0] : " "}</Text>
              </View>
            </View>
            <View style={{flex:.33,flexDirection:'column',alignContent:'center',justifyContent:'space-evenly'}}>
              <View style={{flex:.2,flexDirection:'row', alignContent:'center',justifyContent:'center', paddingBottom:5}}>
                <Text style={{fontFamily:'handwrite',textDecorationLine:'underline', fontSize:60, color:'black'}} >Score</Text>
              </View>
              <View style={{flex:.8,flexDirection:'column', alignContent:'center',justifyContent:'space-evenly',paddingBottom:25}}>
                <Text style={{fontFamily:'handwrite', fontSize:32, color:'gold',alignSelf:'center'}} >{this.state.highscores[0][1] != "" ? this.state.highscores[0][1] : " "}</Text>
                <Text style={{fontFamily:'handwrite', fontSize:32, color:'silver',alignSelf:'center'}} >{this.state.highscores[1][1] != "" ? this.state.highscores[1][1] : " "}</Text>
                <Text style={{fontFamily:'handwrite', fontSize:32, color:'brown',alignSelf:'center'}} >{this.state.highscores[2][1] != "" ? this.state.highscores[2][1] : " "}</Text>
                <Text style={{fontFamily:'handwrite', fontSize:32, color:'black',alignSelf:'center'}} >{this.state.highscores[3][1] != "" ? this.state.highscores[3][1] : " "}</Text>
                <Text style={{fontFamily:'handwrite', fontSize:32, color:'black',alignSelf:'center'}} >{this.state.highscores[4][1] != "" ? this.state.highscores[4][1] : " "}</Text>
                <Text style={{fontFamily:'handwrite', fontSize:32, color:'black',alignSelf:'center'}} >{this.state.highscores[5][1] != "" ? this.state.highscores[5][1] : " "}</Text>
                <Text style={{fontFamily:'handwrite', fontSize:32, color:'black',alignSelf:'center'}} >{this.state.highscores[6][1] != "" ? this.state.highscores[6][1] : " "}</Text>
                <Text style={{fontFamily:'handwrite', fontSize:32, color:'black',alignSelf:'center'}} >{this.state.highscores[7][1] != "" ? this.state.highscores[7][1] : " "}</Text>
                <Text style={{fontFamily:'handwrite', fontSize:32, color:'black',alignSelf:'center'}} >{this.state.highscores[8][1] != "" ? this.state.highscores[8][1] : " "}</Text>
                <Text style={{fontFamily:'handwrite', fontSize:32, color:'black',alignSelf:'center'}} >{this.state.highscores[9][1] != "" ? this.state.highscores[9][1] : " "}</Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}