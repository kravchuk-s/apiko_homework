import React from 'react';
import {
  View, 
  Text, 
  TouchableHighlight, 
  TextInput,
  ScrollView,
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

    userSignIn = () => {

      this.setState({modalVisible: true});
      const { username, password } = this.state;      

      PlaceholderApi.signIn(username, password)
      .then((data) => {
        this.setState({
          response: data,
          modalVisible: false                
        });        

        if(this.state.response.username == this.state.username){          
          onSignIn();
          this.props.navigation.navigate('SignedInNavigator');
        }
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
              underlayColor="white">                  
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


