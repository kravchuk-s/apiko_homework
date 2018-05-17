import { createStackNavigator } from 'react-navigation';
import TermsAndConditions from '../screens/TermsAndConditionsScreen/TermsAndConditionScreenView';

const TermsAndConditionsNavigator = createStackNavigator({    
    TermsAndConditions: {
        screen: TermsAndConditions       
    }
});

export default TermsAndConditionsNavigator;