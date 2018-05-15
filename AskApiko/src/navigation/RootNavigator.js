import { createSwitchNavigator } from 'react-navigation';
import SignedOutNavigator from './SignedOutNavigator';
import DrawerSignedIn from './DrawerSignedIn';

const RootNavigator = (signedIn = false) => {
    return createSwitchNavigator({
      SignedOutNavigator: {
          screen: SignedOutNavigator
        },
        DrawerSignedIn: {
            screen: DrawerSignedIn
        }
      },
      {
        initialRouteName: signedIn ? "DrawerSignedIn" : "SignedOutNavigator"
      }
    );
} 

  export default RootNavigator;