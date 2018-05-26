import { createStackNavigator } from 'react-navigation';
import Home from '../screens/HomeScreen/HomeScreenView';
import Question from '../screens/QuestionScreen/QuestionScreenView';

const HomeNavigator = createStackNavigator({
    Home: {
      screen: Home,
      headerMode: 'screen'
    },
    Question: {
        screen: Question
    }
  });

  export default HomeNavigator;