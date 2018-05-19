import React from 'react';
import { View, Text, TouchableHighlight, TextInput, Alert, ScrollView, KeyboardAvoidingView  } from 'react-native';
import DrawerMenuButton from '../../components/DrawerMenuButton/DrawerMenuButton';
import styles from './styles';
import globalStyles from '../../styles/styles';

class SignUp extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return{
      title: 'Sign Up',
      headerLeft: (
        <DrawerMenuButton onPress={ () => navigation.toggleDrawer() }/>           
        )     
    }    
  };
  
  render() {
    return (
      <ScrollView> 

            <View style={styles.firstChild}>
              
              <Text style={globalStyles.signText}>Sign Up</Text>

              <View style={globalStyles.textInputContainer}>
                <TextInput
                  style={globalStyles.textInput}
                  placeholder="username"                  
                  underlineColorAndroid="transparent"         
                />
              </View>

              <View style={globalStyles.textInputContainer}>
                <TextInput
                  style={globalStyles.textInput}
                  placeholder="email"                  
                  underlineColorAndroid="transparent"            
                />
              </View>

              <View style={globalStyles.textInputContainer}>
                <TextInput
                  style={globalStyles.textInput}
                  placeholder="password"                  
                  underlineColorAndroid="transparent"
                  secureTextEntry={true}
                  multiline={false}            
                />
              </View>         

              <TouchableHighlight onPress={() => this.props.navigation.navigate('SignIn')} 
              underlayColor="white">                  
                      <Text style={globalStyles.linkText}>Already has an account?</Text>                  
              </TouchableHighlight>

            </View>

            <View style={styles.secondChild}>

              <TouchableHighlight 
              onPress={() => console.log("Sign up")}
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


