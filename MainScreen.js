import React from 'react';
import { StyleSheet, Text, View, ImageBackground,Button, Image, TouchableOpacity,StatusBar } from 'react-native';
import {mergeHighScores, fetchHighScores, saveHighScores} from './highscores';
import {Font, AppLoading} from 'expo';

const highscores = fetchHighScores();
console.log(highscores);

export default class MainScreen extends React.Component {
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

  render() {
    const {navigate} = this.props.navigation;
    if (!this.state.fontLoaded){
      return <AppLoading/>;
    }
    return (
        <ImageBackground source={require('./assets/blueprint1.jpg')} style={{flex:1,height: undefined, width:undefined}} resizeMode='contain'>
          <View style={{flex:1,flexDirection:'column'}}>
            <View style={{flex:.25,width:'100%',paddingHorizontal:15}}>
              <Image source={require('./assets/mainLab2.png')} style={{flex:1,height: undefined, width:undefined}} resizeMode='contain'  />
            </View>
            <View style={{flex:.75,flexDirection:'row'}}>
              <View style={{width:'40%',height:'100%',flexDirection:'column',paddingLeft:15}} justifyContent='space-evenly' >
                <TouchableOpacity style={{width:'100%', height:50}} onPress={() => navigate('gamePlay1')}>
                  <Image source={require('./assets/start.png')}  style={{height:'100%',width:164}} resizeMode={'contain'}/>
                </TouchableOpacity>
                <TouchableOpacity style={{width:'100%', height:50}} alignItems='flex-end' >
                  <Image source={require('./assets/highscore.png')}style={{height:'100%',width:311}} resizeMode={'contain'}/>
                </TouchableOpacity>
                <TouchableOpacity style={{width:'100%', height:50}} justifyContent='flex-start'>
                  <Image source={require('./assets/Info.png')}  style={{height:'100%',width:122}} resizeMode={'contain'}/>
                </TouchableOpacity>
              </View>
              <View style={{width:'60%',height:'100%',justifyContent:'center'}} alignSelf='center'>
                <ImageBackground source={require('./assets/stickyNote.png')} style={{flex:1,height: undefined, width:undefined}} resizeMode={'contain'} >
                  <View style={{flex:1, flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                    <View style={{height:'70%',width:'50%', flexDirection:'column'}}>
                      <Text style={{fontFamily:'handwrite', textDecorationLine:'underline', fontSize:40, color:'red', paddingTop:10,paddingRight:12, transform:[{rotate: '350deg'}], alignSelf:'center'}} >High Scores!</Text>
                    </View>
                  </View>
                </ImageBackground>
              </View>
            </View>
          </View>
        </ImageBackground>
    );
  }
}

