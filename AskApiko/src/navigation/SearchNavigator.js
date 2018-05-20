import { createStackNavigator } from 'react-navigation';
import Search from '../screens/SearchScreen/SearchScreenView';

const SearchNavigator = createStackNavigator({    
    Search: {
        screen: Search       
    }
});

export default SearchNavigator;