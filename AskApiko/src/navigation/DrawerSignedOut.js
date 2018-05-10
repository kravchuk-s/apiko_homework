import { createDrawerNavigator } from 'react-navigation';
import HomeNavigator from './HomeNavigator';
import HomeScreen from '../screens/HomeScreen/HomeScreenView';
import AboutUs from '../screens/AboutUsScreen/AboutUsScreenView';
import TermsAndConditions from '../screens/TermsAndConditionsScreen/TermsAndConditionScreenView';
import SignUp from '../screens/SignUpScreen/SignUpScreenView';
import SignUpNavigator from './SignUpNavigator';


const DrawerSignedOut = createDrawerNavigator({
    Home: {
      screen: HomeNavigator
    },
    AboutUs: {
        screen: AboutUs
    },
    TermsAndConditions: {
        screen: TermsAndConditions
    },
    SignUp: {
        screen: SignUpNavigator
    }
  });

  export default DrawerSignedOut;