import React from 'react';
import { View, Text, TextInput, KeyboardAvoidingView, ScrollView, TouchableHighlight } from 'react-native';
import DrawerMenuButton from '../../components/DrawerMenuButton/DrawerMenuButton';
import styles from './styles';
import colors from '../../styles/colors';
import globalStyles from '../../styles/styles';
import HeaderImage from '../../components/HeaderImage/HeaderImage';

class CreateQuestion extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      questionTitle: '',
      questionText: '',
      questionTags: '',
      focused: 'questionTitle',      
    };
  }

  static navigationOptions = ({ navigation }) => {
    return{      
      header: null,     
    }    
  };

  

  render() {
    
    let charLeft = 0;
    let possibleChars = 0;
      switch (this.state.focused) {
        case 'questionTitle':
        charLeft = this.state.questionTitle.length;
        possibleChars = 130;
        break;
        case 'questionText':
        charLeft = this.state.questionText.length;
        possibleChars = 300;
        break;
        case 'questionTags':
        charLeft = this.state.questionTags.length;
        possibleChars = 130;
        break;
        default:
        break;
      }
    
    return (
      
            

      <KeyboardAvoidingView 
        style={styles.container} 
        behavior="padding" 
        keyboardVerticalOffset={80}
      >

        <View style = { globalStyles.containerHeaderBar }>
          <View style = { globalStyles.statusHeaderBar }/>                         
          <View style = { globalStyles.headerHeaderBar }>
              <DrawerMenuButton 
                onPress={ () => this.props.navigation.toggleDrawer() }
              /> 
              <HeaderImage/>                  
              <TouchableHighlight>
                <Text style={styles.sendButton}>
                  Send
                </Text>
              </TouchableHighlight>
          </View>
          <Text style={globalStyles.signText}>Create question</Text>                          
        </View> 

        
          
        

        <ScrollView contentContainerStyle={styles.scrollView}>
            <View>                   
              <TextInput
              style={styles.inputFieldBold}
              multiline = {true}        
              placeholder="Question title…"
              onChangeText={(text) => this.setState({questionTitle: text})}
              underlineColorAndroid="transparent"
              maxLength = {130}
              onFocus = {() => this.setState({focused: 'questionTitle'})}
              />

              <TextInput
              style={styles.inputField}
              multiline = {true}          
              placeholder="Type your question here…"
              onChangeText={(text) => this.setState({questionText: text})}
              underlineColorAndroid="transparent"
              maxLength = {300}
              onFocus = {() => this.setState({focused: 'questionText'})}
              />

              <TextInput
              style={styles.inputField}
              multiline = {true}          
              placeholder="Tags separated by whitespace…"
              onChangeText={(text) => this.setState({questionTags: text})}
              underlineColorAndroid="transparent"
              maxLength = {130}
              onFocus = {() => this.setState({focused: 'questionTags'})}
              />
            </View>     
        
        </ScrollView>

          <View
            style={styles.bottomContainer}
          >
                <Text style={styles.bottomText}>
                    {possibleChars - charLeft}
                </Text>
          </View>
        </KeyboardAvoidingView>
      
    );
  }
}



export default CreateQuestion;


