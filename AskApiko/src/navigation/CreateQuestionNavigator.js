import { createStackNavigator } from 'react-navigation';
import CreateQuestion from '../screens/CreateQuestionScreen/CreateQuestionScreenView';

const CreateQuestionNavigator = createStackNavigator({    
    CreateQuestion: {
        screen: CreateQuestion,
        navigationOptions: ({ navigation }) => ({
            headerStyle: {                
                elevation: 0
            }                   
        }),       
    }
});

export default CreateQuestionNavigator;