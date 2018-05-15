import { createDrawerNavigator } from 'react-navigation';
import HomeNavigator from './HomeNavigator';
import HomeScreen from '../screens/HomeScreen/HomeScreenView';
import AboutUs from './AboutUsNavigator';
import TermsAndConditions from '../screens/TermsAndConditionsScreen/TermsAndConditionScreenView';
import SignUp from '../screens/SignUpScreen/SignUpScreenView';
import SignUpNavigator from './SignUpNavigator';
import SignedOutDrawer from './Drawers/SignedOutDrawer';


const SignedOutNavigator = createDrawerNavigator({
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
  },{
    contentComponent: SignedOutDrawer
});

  export default SignedOutNavigator;