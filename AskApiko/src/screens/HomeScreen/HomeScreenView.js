import React from 'react';
import { 
  View, 
  Text, 
  TouchableHighlight, 
  FlatList, 
  ActivityIndicator 
} from 'react-native';
import DrawerMenuButton from '../../components/DrawerMenuButton/DrawerMenuButton';
import HeaderImage from '../../components/HeaderImage/HeaderImage';
import globalStyles from '../../styles/styles';
import styles from './styles';
import colors from '../../styles/colors';
import data from '../../data/data';
import ListItem from '../../components/ListItem/ListItem';
import AskApikoApi from '../../modules/AskApikoApi';
import PlaceholderApi from '../../modules/PlaceholderApi';
import Header from './Components/Header';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      isLoading: true
    }
  }

  static navigationOptions = ({ navigation }) => {
    return{      
      header: null           
    }    
  };

  componentDidMount() {
    PlaceholderApi.getPosts()
    .then((data) => {
      this.setState({
        posts: data,
        isLoading: false                
      });
    })
  }

  render() {

    if( this.state.isLoading ) {
      return(
        <View style={styles.flexOne}>
          <Header onPress={() => this.props.navigation.toggleDrawer()}/>
         
            <ActivityIndicator 
            style={styles.container}         
            size="large" 
            color={colors.mainOrange} 
            />
          
        </View>
      )
    } else {
      return (
        <View>
          <Header onPress={() => this.props.navigation.toggleDrawer()}/>          
          <FlatList
            data={this.state.posts}
            renderItem={({ item, i }) => (             
              <TouchableHighlight 
              onPress={() => this.props.navigation.navigate('Question')} 
              underlayColor="white">
                  <ListItem 
                  key={i} 
                  postToShow={item}
                  />
              </TouchableHighlight>       
            )}                    
          />        
        </View>
      );
    }    
  }
}

export default HomeScreen;


