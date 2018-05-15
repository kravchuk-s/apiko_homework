import { createDrawerNavigator } from 'react-navigation';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreenView';
import HomeScreen from '../screens/HomeScreen/HomeScreenView';
import AboutUs from '../screens/AboutUsScreen/AboutUsScreenView';
import TermsAndConditions from '../screens/TermsAndConditionsScreen/TermsAndConditionScreenView';
import CreateQuestion from '../screens/CreateQuestionScreen/CreateQuestionScreenView';
import Search from '../screens/SearchScreen/SearchScreenView';
import SignedOutNavigator from './SignedOutNavigator';

const DrawerSignedIn = createDrawerNavigator({
    Home: {
        screen: HomeScreen
      },
      Profile: {
        screen: ProfileScreen
      },
      CreateQuestion: {
          screen: CreateQuestion
      },
      Search: {
          screen: Search
      },
      AboutUs: {
          screen: AboutUs
      },
      TermsAndConditions: {
          screen: TermsAndConditions
      },
      SignOut: {
          screen: SignedOutNavigator
      }    
  });

  export default DrawerSignedIn;