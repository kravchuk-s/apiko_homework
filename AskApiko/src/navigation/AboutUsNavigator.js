import { createStackNavigator } from 'react-navigation';
import AboutUs from '../screens/AboutUsScreen/AboutUsScreenView';

const AboutUsNavigator = createStackNavigator({
    AboutUs: {
        screen: AboutUs
    }
});

export default AboutUsNavigator;