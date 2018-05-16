import { createSwitchNavigator } from 'react-navigation';
import SignedOutNavigator from './SignedOutNavigator';
import DrawerSignedIn from './DrawerSignedIn';

const RootNavigator = createSwitchNavigator({
      SignedOutNavigator: {
          screen: SignedOutNavigator
        },
        DrawerSignedIn: {
            screen: DrawerSignedIn
        }
      },
      {
        initialRouteName: "SignedOutNavigator"
      }
    ); 

  export default RootNavigator;