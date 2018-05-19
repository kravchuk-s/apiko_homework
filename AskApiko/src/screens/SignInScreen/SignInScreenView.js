import React from 'react';
import { View, Text, TouchableHighlight, TextInput, Alert } from 'react-native';
import { Card, Button, FormLabel, FormInput } from "react-native-elements";
import { onSignIn } from "../../modules/auth/auth";
import styles from './styles';

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
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder="username"
          onChangeText={(text) => this.setState({username: text})}          
        />
        <TextInput
          style={styles.textInput}
          placeholder="password"
          onChangeText={(text) => this.setState({password: text})}            
        />
        <TouchableHighlight 
        onPress={() => _checkIsUserCorrect()}
        underlayColor="transparent">
                  <View style={styles.button}>
                    <Text style={styles.buttonText}>Sign In</Text>
                  </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.props.navigation.navigate('RestorePassword')} 
        underlayColor="white">
                  <View style={styles.button}>
                    <Text style={styles.buttonText}>Restore Password</Text>
                  </View>
        </TouchableHighlight>  
      </View>
    );
  }
}

export default SignIn;


