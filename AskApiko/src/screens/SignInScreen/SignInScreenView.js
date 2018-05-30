import React from 'react';
import {
  View, 
  Text, 
  TouchableHighlight, 
  TextInput,
  ScrollView,
  ToastAndroid
} from 'react-native';
import { onSignIn } from "../../modules/auth/auth";
import styles from './styles';
import globalStyles from '../../styles/styles';
import BackButton from '../../components/BackButton/BackButton';
import PlaceholderApi from '../../modules/PlaceholderApi';
import colors from '../../styles/colors';
import ModalLoad from '../../components/ModalLoad';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: '',
                  password: '',
                  response: [],
                  modalVisible: false,
                };
  }

  static navigationOptions = ({ navigation }) => {
    return{   
        headerStyle: {backgroundColor: 'transparent'},
        headerBackImage: (<BackButton/>),   
    }    
  };



  render() {

    //for login use 'username' & 'id' of user from jsonplaceholder.typicode.com/users

    userSignIn = () => {

      this.setState({modalVisible: true});
      const { username, password } = this.state;      

      PlaceholderApi.signInReal(username, password)
      .then((data) => {
        this.setState({
          response: data,
          modalVisible: false                
        });

        if(this.state.response.username == this.state.username 
          && this.state.response.id == this.state.password ){          
          onSignIn(this.state.password);
          this.props.navigation.navigate('SignedInNavigator');
        } else {
          ToastAndroid.show('There is no such user', ToastAndroid.SHORT); 
        }
      })
      .catch((error) => {
        this.setState({
          modalVisible: false                
        });
        ToastAndroid.show('There is no such user', ToastAndroid.SHORT); 
      })

    }
    
    return (

      <ScrollView> 
            
            <ModalLoad visability={this.state.modalVisible}/>

            <View style={styles.firstChild}>
              
              <Text style={globalStyles.signText}>Sign In</Text>

              <View style={globalStyles.textInputContainer}>
                <TextInput
                  style={globalStyles.textInput}
                  placeholder="username"
                  onChangeText={(text) => this.setState({username: text})} 
                  underlineColorAndroid="transparent"         
                />
              </View>

              <View style={globalStyles.textInputContainer}>
                <TextInput
                  style={globalStyles.textInput}
                  placeholder="password"
                  onChangeText={(text) => this.setState({password: text})}
                  underlineColorAndroid="transparent"
                  secureTextEntry={true}
                  multiline={false}              
                />
              </View>        

              <TouchableHighlight onPress={() => this.props.navigation.navigate('RestorePassword')} 
              underlayColor="transparent">                  
                      <Text style={globalStyles.linkText}>Forgot your password?</Text>                  
              </TouchableHighlight>

            </View>

            <View style={styles.secondChild}>

              <TouchableHighlight 
              onPress={() => userSignIn()}
              underlayColor="transparent">
                        <View style={globalStyles.signButton}>
                          <Text style={globalStyles.buttonText}>Sign In</Text>
                        </View>
              </TouchableHighlight>  

            </View>

      </ScrollView>
    );
  }
}

export default SignIn;


