import {AsyncStorage} from 'react-native';

const STORE_KEY = 'HIGH_SCORES';

export const fetchHighScores = async () => {
    try {
      let highScores = await AsyncStorage.getItem(STORE_KEY);
  
      if (highScores === null) { return []; }
  
      return parseHighScores(highScores);
    } catch (error) {
      console.log('Error fetching High Scores', error);
    }
  }

  const parseHighScores = (highScores) =>
  JSON.parse(highScores).map((highScore) => {
    return highScore;
  });

  export const mergeHighScores = (highScores, new_score, name) => {
    const score = {
      score: new_score,
      user_name: name
    };
    return [...highScores, score];
  }

  export const saveHighScores = (highScores) => {
    AsyncStorage.setItem(STORE_KEY, JSON.stringify(highScores));
  }