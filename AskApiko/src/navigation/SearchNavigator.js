import { createStackNavigator } from 'react-navigation';
import Search from '../screens/SearchScreen/SearchScreenView';

const SearchNavigator = createStackNavigator({    
    Search: {
        screen: Search,              
    }, 
},
{
    headerMode: 'screen',
});

export default SearchNavigator;