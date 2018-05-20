import React from 'react';
import { View, Text, TouchableHighlight, TextInput, Alert, ScrollView } from 'react-native';
import { onSignIn } from "../../modules/auth/auth";
import BackButton from '../../components/BackButton/BackButton';
import styles from './styles';
import globalStyles from '../../styles/styles';

class RestorePassword extends React.Component {
  
  static navigationOptions = ({ navigation }) => {
    return{   
        headerStyle: {backgroundColor: 'transparent'},
        headerBackImage: (<BackButton/>),     
    }    
  };
  
  render() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        
        <View style={styles.firstChild}>
              <Text style={globalStyles.signText}>Restore password</Text>              
              <Text style={styles.instructionText}>We will send you an instruction how to reset your
                 password to your email address</Text>
               <View style={globalStyles.textInputContainer}>
                <TextInput
                  style={globalStyles.textInput}
                  placeholder="username"                  
                  underlineColorAndroid="transparent"         
                />
              </View>
        </View>

        <View style={styles.secondChild}>
              <TouchableHighlight               
              underlayColor="transparent">
                        <View style={globalStyles.signButton}>
                          <Text style={globalStyles.buttonText}>Send instruction</Text>
                        </View>
              </TouchableHighlight>
        </View>
            
      </ScrollView>
    );
  }
}

export default RestorePassword;


