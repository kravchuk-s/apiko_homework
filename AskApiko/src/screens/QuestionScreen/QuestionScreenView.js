import React from 'react';
import { 
  View, 
  Text,
  Image, 
  TouchableHighlight, 
  FlatList,
  ActivityIndicator,  
} from 'react-native';
import styles from './styles';
import colors from '../../styles/colors';
import globalStyles from '../../styles/styles';
import PlaceholderApi from '../../modules/PlaceholderApi';
import ListItem from '../../components/ListItem/ListItem';
import BackButton from '../../components/BackButton/BackButton';
import HeaderImage from '../../components/HeaderImage/HeaderImage';

class QuestionScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: [],
      comments: [],
      isLoading: true
    }
  }
  
  static navigationOptions = ({ navigation }) => {
    return{
      headerBackImage: (<BackButton/>),
      headerTitle: (        
        <HeaderImage/>       
      ),
      headerRight: <View />, 
      headerStyle: {
        elevation: 0,
        shadowOpacity: 0
      }     
    }    
  };


  componentDidMount() {      
      PlaceholderApi.getPost(this.props.navigation.getParam('idOfPost', 1))
      .then((data) => {
        this.setState({
          post: data,                      
        });
      })
      .then(
        PlaceholderApi.getComments(this.props.navigation.getParam('idOfPost', 1))
        .then((data) => {
          this.setState({
            comments: data,
            isLoading: false               
          });
        })
      )
  }
  
  render() {
    
    if(this.state.isLoading){
      return(
        <View style={styles.flexOne}>
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
          
          <FlatList
            ListHeaderComponent={
              <View>
                <View style={{backgroundColor: colors.white}}>
                  <Text style={globalStyles.signText}>{this.state.post.title}</Text>
                </View>
                <View 
                style={{
                  backgroundColor: colors.lightGrey,
                  elevation: 10            
                }}>
                  <Text 
                  style={{
                    marginLeft: 20,
                    marginTop: 10,
                    marginBottom: 10,
                    fontSize: 14,
                  }}>
                  {this.state.post.body}
                  </Text>
                </View>
                <View style={{backgroundColor: colors.white,}}>
                <Text style={{
                  fontSize: 16, 
                  fontWeight: 'bold',
                  marginLeft: 20,
                  marginTop: 5,
                  marginBottom: 5,
                    }}>Answers</Text>
                </View>
              </View>
            }
            data={this.state.comments}
            renderItem={({ item, i }) => (     
                  <ListItem 
                  key={i} 
                  postToShow={item}
                  />                 
            )}
            keyExtractor={(item, index) => index}                    
          />        
        </View>
      );
    }
  }
}


export default QuestionScreen;


