import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen/HomeScreenView';
import QuestionScreen from '../screens/QuestionScreen/QuestionScreenView';

const HomeNavigator = createStackNavigator({
    Home: {
      screen: HomeScreen
    },
    Question: {
        screen: QuestionScreen
    }
  });

  export default HomeNavigator;