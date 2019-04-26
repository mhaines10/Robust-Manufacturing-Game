import React from 'react';
import { StyleSheet, Text, View, ImageBackground,Button, Image, TouchableOpacity,StatusBar } from 'react-native';
import {Font, AppLoading} from 'expo';
import {AsyncStorage} from 'react-native';

var highscores;

export default class MainScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {highscores: [], fontLoaded: false,};
}
  static navigationOptions = {
    header: null,
  };

  async componentDidMount(){
    StatusBar.setHidden(true);
    await Font.loadAsync({
      'handwrite': require('./node_modules/@expo/vector-icons/fonts/Snickles.ttf'),
    });
    this.setState({fontLoaded: true});
  }

  async set_scores(){
    var i;
    const highscores = [];
    for (i=0;i<10;i++){
      if(i == 0){
        var temp = ['Matt',1000];
      }
      else{
        var temp = ['',''];
      }
      highscores.push(temp); 
    }
    jsonObj = await AsyncStorage.setItem('scores', JSON.stringify(highscores));
  }

  async get_scores(){
    const rawScores = await AsyncStorage.getItem('scores');
    const scoreslist = JSON.parse(rawScores);
    console.log('here');
    this.setState({highscores: scoreslist});
  }

  render() {
    const {navigate} = this.props.navigation;
    if (!this.state.fontLoaded){
      return <AppLoading/>;
    }
    if (this.state.highscores.length == 0){
      this.get_scores();
      return <AppLoading/>;
    }
    const score1 = this.state.highscores[0];
    const score2 = this.state.highscores[1];
    const score3 = this.state.highscores[2];
    return (
        <ImageBackground source={require('./assets/blueprint1.jpg')} style={{flex:1,height: undefined, width:undefined}} resizeMode='cover'>
          <View style={{flex:1,flexDirection:'column'}}>
            <View style={{flex:.25,width:'100%',paddingHorizontal:15}}>
              <Image source={require('./assets/mainLab2.png')} style={{flex:1,height: undefined, width:undefined}} resizeMode='contain'  />
            </View>
            <View style={{flex:.75,flexDirection:'row'}}>
              <View style={{width:'40%',height:'100%',flexDirection:'column',paddingLeft:15}} justifyContent='space-evenly' >
                <TouchableOpacity style={{width:'100%', height:50}} onPress={() => navigate('gamePlay1')}>
                  <Image source={require('./assets/start.png')}  style={{height:'100%',width:164}} resizeMode={'contain'}/>
                </TouchableOpacity>
                <TouchableOpacity style={{width:'100%', height:50}} onPress={() => navigate('highscores')} alignItems='flex-end' >
                  <Image source={require('./assets/highscore.png')}style={{height:'100%',width:311}} resizeMode={'contain'}/>
                </TouchableOpacity>
                <TouchableOpacity style={{width:'100%', height:50}} justifyContent='flex-start' onPress={() => navigate('info_screen')}>
                  <Image source={require('./assets/Info.png')}  style={{height:'100%',width:122}} resizeMode={'contain'}/>
                </TouchableOpacity>
              </View>
              <View style={{width:'60%',height:'100%',justifyContent:'center'}} alignSelf='center'>
                <ImageBackground source={require('./assets/stickyNote.png')} style={{flex:1,height: undefined, width:undefined}} resizeMode={'contain'} >
                  <View style={{flex:1, flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                    <View style={{height:'70%',width:'50%', flexDirection:'column'}}>
                      <Text style={{fontFamily:'handwrite', textDecorationLine:'underline', fontSize:60, color:'red', paddingTop:10,paddingRight:15, transform:[{rotate: '350deg'}], alignSelf:'center'}} >High Scores!</Text>
                      <View style ={{height:'85%', width:'70%',flexDirection:'column',paddingLeft:5, justifyContent:'space-evenly',alignItems:'flex-start', alignSelf:'center'}}>
                        <Text style={{fontFamily:'handwrite', fontSize:40, color:'red',  transform:[{rotate: '350deg'}]}} >1. {score1[0]}  {score1[1]}</Text>
                        <Text style={{fontFamily:'handwrite', fontSize:40, color:'red',transform:[{rotate: '350deg'}]}} >2. {score2[0]}  {score2[1]}</Text>
                        <Text style={{fontFamily:'handwrite', fontSize:40, color:'red', transform:[{rotate: '350deg'}]}} >3. {score3[0]}  {score3[1]}</Text>
                      </View>
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

