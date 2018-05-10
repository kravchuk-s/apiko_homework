import { createStackNavigator } from 'react-navigation';
import SignUp from '../screens/SignUpScreen/SignUpScreenView';
import SignIn from '../screens/SignInScreen/SignInScreenView';
import RestorePassword from '../screens/RestorePasswordScreen/RestorePasswordScreenView';

const SignUpNavigator = createStackNavigator({
    SignUp: {
      screen: SignUp
    },
    SignIn: {
        screen: SignIn
    },
    RestorePassword: {
        screen: RestorePassword
    }
  });

  export default SignUpNavigator;