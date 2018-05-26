import { createStackNavigator } from 'react-navigation';
import Profile from '../screens/ProfileScreen/ProfileScreenView';

const ProfileNavigator = createStackNavigator({    
    Profile: {
        screen: Profile,
        headerMode: 'screen'       
    }
});

export default ProfileNavigator;