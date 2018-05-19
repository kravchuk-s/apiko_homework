import React from 'react';
import { View, Text, TouchableHighlight, TextInput, Alert, ScrollView, KeyboardAvoidingView  } from 'react-native';
import { onSignIn } from "../../modules/auth/auth";
import styles from './styles';
import globalStyles from '../../styles/styles';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: '',
                  password: ''};
  }

  render() {

     //TODO: тимчасовий костиль
    _checkIsUserCorrect = () => {
      const { username, password } = this.state;
      if (this.state.username == 'Test' && this.state.username == 'Test'){
        onSignIn(username, password).then(() => this.props.navigation.navigate('SignedInNavigator'))
      } else {
        Alert.alert(
          'Error',
          'Inccorect username or password',
          [{text: 'OK', },],
          { cancelable: false }
        )
      }
    }
    
    return (

      <ScrollView> 

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
              onPress={() => _checkIsUserCorrect()}
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


