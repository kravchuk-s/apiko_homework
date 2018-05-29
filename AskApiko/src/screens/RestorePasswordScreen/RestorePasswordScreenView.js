import React from 'react';
import { View, 
  Text, 
  TouchableHighlight, 
  TextInput, 
  ScrollView,
  ToastAndroid,
  KeyboardAvoidingView 
} from 'react-native';
import BackButton from '../../components/BackButton/BackButton';
import styles from './styles';
import globalStyles from '../../styles/styles';
import ModalLoad from '../../components/ModalLoad';
import PlaceholderApi from '../../modules/PlaceholderApi';

class RestorePassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
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

    userRestorePassword = () => {
      this.setState({modalVisible: true});
      const { email } = this.state;      

      PlaceholderApi.restorePassword(email)
      .then((data) => {
        this.setState({
          response: data,
          modalVisible: false                
        });        

        if(this.state.response.email == this.state.email){          
          ToastAndroid.show('Instruction sended.', ToastAndroid.SHORT);
          this.props.navigation.navigate('Home');
        }
      })
    }


    return (

      <KeyboardAvoidingView 
        style={styles.flexOne} 
        behavior="padding" 
        keyboardVerticalOffset={50}
      >

      <ScrollView contentContainerStyle={styles.contentContainer}>
        
        <ModalLoad visability={this.state.modalVisible}/>

        <View style={styles.firstChild}>
              <Text style={globalStyles.signText}>Restore password</Text>              
              <Text style={styles.instructionText}>We will send you an instruction how to reset your
                 password to your email address</Text>
               <View style={globalStyles.textInputContainer}>
                <TextInput
                  style={globalStyles.textInput}
                  placeholder="email"
                  onChangeText={(text) => this.setState({email: text})}                  
                  underlineColorAndroid="transparent"         
                />
              </View>
        </View>

        <View style={styles.secondChild}>
              <TouchableHighlight               
              underlayColor="transparent"
              onPress={ () => userRestorePassword()}
              >
                  <View style={globalStyles.signButton}>
                    <Text style={globalStyles.buttonText}>Send instruction</Text>
                  </View>
              </TouchableHighlight>
        </View>
            
      </ScrollView>

      </KeyboardAvoidingView>
    );
  }
}

export default RestorePassword;


