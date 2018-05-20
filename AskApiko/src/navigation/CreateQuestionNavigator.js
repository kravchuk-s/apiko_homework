import { createStackNavigator } from 'react-navigation';
import CreateQuestion from '../screens/CreateQuestionScreen/CreateQuestionScreenView';

const CreateQuestionNavigator = createStackNavigator({    
    CreateQuestion: {
        screen: CreateQuestion       
    }
});

export default CreateQuestionNavigator;