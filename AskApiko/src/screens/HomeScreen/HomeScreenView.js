import React from 'react';
import { View, Text, TouchableHighlight, FlatList } from 'react-native';
import DrawerMenuButton from '../../components/DrawerMenuButton/DrawerMenuButton';
import HeaderImage from '../../components/HeaderImage/HeaderImage';
import globalStyles from '../../styles/styles';
import styles from './styles';
import data from '../../data/data';
import ListItem from '../../components/ListItem/ListItem';
import AskApikoApi from '../../modules/AskApikoApi';
import PlaceholderApi from '../../modules/PlaceholderApi';

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
    console.log(this.state.isLoading);
    // let array = this.state.posts.map(JSON.parse);
    
      console.log("some try", this.state.posts[0]);
    
   
    if( this.state.isLoading ) {
      return(
        <View>
          <View style = { globalStyles.containerHeaderBar }>
            <View style = { globalStyles.statusHeaderBar }/>                         
            <View style = { globalStyles.headerHeaderBar }>
                <DrawerMenuButton 
                  onPress={ () => this.props.navigation.toggleDrawer() }
                /> 
                <HeaderImage/>                  
                <View style={{width: 30}}/>{/* placeholder */}
            </View>
            <Text style={globalStyles.signText}>User questions</Text>                          
          </View>
          <Text>Loading...</Text>
        </View>
      )
    } else {
      return (
        <View>
          <View style = { globalStyles.containerHeaderBar }>
            <View style = { globalStyles.statusHeaderBar }/>                         
            <View style = { globalStyles.headerHeaderBar }>
                <DrawerMenuButton 
                  onPress={ () => this.props.navigation.toggleDrawer() }
                /> 
                <HeaderImage/>                  
                <View style={{width: 30}}/>{/* placeholder */}
            </View>
            <Text style={globalStyles.signText}>User questions</Text>                          
          </View>
          
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
            keyExtractor={item => item.email}         
          />        
        </View>
      );
    }
    
  }
}

export default HomeScreen;


