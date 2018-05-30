import React from 'react';
import { 
  View, 
  Text, 
  TouchableHighlight, 
  TextInput,
  ScrollView,
  ToastAndroid  
} from 'react-native';
import DrawerMenuButton from '../../components/DrawerMenuButton/DrawerMenuButton';
import styles from './styles';
import colors from '../../styles/colors';
import globalStyles from '../../styles/styles';
import { onSignIn } from "../../modules/auth/auth";
import PlaceholderApi from '../../modules/PlaceholderApi';
import ModalLoad from '../../components/ModalLoad';

class SignUp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {username: '',
                  email: '',
                  password: '',
                  response: [],
                  modalVisible: false,
                };
  }


  static navigationOptions = ({ navigation }) => {
    return{
      headerLeft: (
      <DrawerMenuButton 
      onPress={ () => navigation.toggleDrawer() }
      />),
      headerStyle: {backgroundColor: 'transparent'}    
    }    
  };
  
  render() {

    userSignUp = () => {

      this.setState({modalVisible: true});
      const { username, email, password } = this.state;      

      PlaceholderApi.signUp(username, email, password)
      .then((data) => {
        this.setState({
          response: data,
          modalVisible: false                
        });        

        if(this.state.response.username == this.state.username){          
          ToastAndroid.show('User created', ToastAndroid.SHORT);
          this.props.navigation.navigate('SignIn');
        }
      })

    }

    return (
      <ScrollView>
             
              <ModalLoad visability={this.state.modalVisible}/>

            <View style={styles.firstChild}>
              
              <Text style={globalStyles.signText}>Sign Up</Text>

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
                  placeholder="email"
                  onChangeText={(text) => this.setState({email: text})}                   
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

              <TouchableHighlight onPress={() => this.props.navigation.navigate('SignIn')} 
              underlayColor="transparent">                  
                      <Text style={globalStyles.linkText}>Already has an account?</Text>                  
              </TouchableHighlight>

            </View>

            <View style={styles.secondChild}>

              <TouchableHighlight 
              onPress={() => userSignUp()}
              underlayColor="transparent">
                        <View style={globalStyles.signButton}>
                          <Text style={globalStyles.buttonText}>Sign Up</Text>
                        </View>
              </TouchableHighlight>  

            </View>

      </ScrollView>
    );
  }
}

export default SignUp;


