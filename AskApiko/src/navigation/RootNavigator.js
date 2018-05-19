import { createSwitchNavigator } from 'react-navigation';
import SignedOutNavigator from './SignedOutNavigator';
import SignedInNavigator from './SignedInNavigator';

const RootNavigator = (signedIn = false) => {
  return createSwitchNavigator({
      SignedOutNavigator: {
          screen: SignedOutNavigator
        },
        SignedInNavigator: {
            screen: SignedInNavigator
        }
      },
      {
        initialRouteName: signedIn ? "SignedInNavigator" : "SignedOutNavigator"
      }
    );
  } 


  export default RootNavigator;