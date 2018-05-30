import React from 'react';
import { 
  View, 
  Text,
  Image, 
  TouchableHighlight, 
  AsyncStorage,  
  FlatList,
  ActivityIndicator,  
} from 'react-native';
import styles from './styles';
import colors from '../../styles/colors';
import globalStyles from '../../styles/styles';
import PlaceholderApi from '../../modules/PlaceholderApi';
import ListItem from '../../components/ListItem/ListItem';
import { USER_ID } from '../../modules/auth/auth';
import Header from './Components/Header';

class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      user: [],
      photo: '',
      isLoading: true
    }
  }

  static navigationOptions = ({ navigation }) => {
    return{
      header: null         
    }    
  };

  componentDidMount() {
    AsyncStorage.getItem(USER_ID)
    .then((res) => {
      PlaceholderApi.getUserPosts(res)
      .then((data) => {
        this.setState({
          posts: data,             
        });
      })
      .then(
        PlaceholderApi.getUser(res)
        .then((data) => {
          this.setState({
            user: data,              
          });
        })
      ).then(
        PlaceholderApi.getUserPhoto(res)
        .then((data) => {
          this.setState({
            photo: data,
            isLoading: false                
          });
        })
      )
    })
  }

  render() {
    
    if(this.state.isLoading){
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
            ListHeaderComponent={
                <View>
                  <View 
                  style={styles.profileWrapper}>
                    <Image
                      style={styles.imageStyle}
                      source={{uri: this.state.photo.thumbnailUrl}}
                    />
                    <View>
                      <Text style={styles.usernameText}>{this.state.user.username}</Text>
                      <Text style={styles.userEmail}>{this.state.user.email}</Text>
                    </View>
                  </View>

                  <View style={styles.postedTextWrapper}>
                    <Text style={styles.postedText}>Posted questions</Text>
                  </View>
                </View>
            }
            data={this.state.posts}
            renderItem={({ item, i }) => (             
              <TouchableHighlight 
              onPress={() => this.props.navigation.navigate('Question', {idOfPost: item.id})}
              underlayColor="transparent">
                  <ListItem 
                  key={i} 
                  postToShow={item}
                  />
              </TouchableHighlight>       
            )}
            keyExtractor={(item, index) => index}                    
          /> 

        </View>
      );
    }

    
  }
}

export default ProfileScreen;


