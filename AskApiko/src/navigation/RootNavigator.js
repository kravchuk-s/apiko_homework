import { createSwitchNavigator } from 'react-navigation';
import DrawerSignedOut from './DrawerSignedOut';
import DrawerSignedIn from './DrawerSignedIn';

const RootNavigator = (signedIn = false) => {
    return createSwitchNavigator({
        DrawerSignedOut: {
          screen: DrawerSignedOut
        },
        DrawerSignedIn: {
            screen: DrawerSignedIn
        }
      },
      {
        initialRouteName: signedIn ? "DrawerSignedIn" : "DrawerSignedOut"
      }
    );
} 

  export default RootNavigator;