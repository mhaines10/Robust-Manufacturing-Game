import React, { PureComponent } from "react";
import { AppRegistry, StyleSheet, StatusBar } from "react-native";
import { GameEngine, DefaultTimer } from "react-native-game-engine";
import {Gear} from "./renders";
import {Belt_Parts} from "./renders";
import images from '../images';

//import {testing} from "./system";
//import {rotateGear} from "./system";
//import {moveObjects} from "./system";
import System from "./system";
import Ejector from './ejector';
import Belt from './conveyor';
import Disp_Parts from "./game_parts";
import Selected_Part from "./picked_parts";
import Timer_mod from "./timer";

export class Game extends React.Component{
    constructor(props) {
      super(props);
      
  
    }
   
    render() {
      icon1 = this.props.icon_img1;
      icon2 = this.props.icon_img2;
      icon3 = this.props.icon_img3;
      options = this.props.choice_obj;
      
      return (
        <GameEngine
          style={{flex:1}}
          systems={[System]}
          entities={{
            part1: Disp_Parts(position=[775,5],icon3.icon),
            part2: Disp_Parts(position=[775,80],icon2.icon),
            part3: Disp_Parts(position=[775,150],icon1.icon),
            select1: Selected_Part([850,5],images.game_defaults.default1),
            select2: Selected_Part([850,80],images.game_defaults.default2),
            select3: Selected_Part([850,155],images.game_defaults.default3),
            timer: Timer_mod(60,0),
            belt1: Belt(size=[700,103],angle=0,position=[250,15]),
            ejector:Ejector(pos=[0,2])
          }}
          timer={new DefaultTimer(10)}
        >
          <StatusBar hidden={true} />
        </GameEngine>
      );
    }
}