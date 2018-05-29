import React from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  KeyboardAvoidingView, 
  ScrollView, 
  TouchableHighlight,
  ToastAndroid 
} from 'react-native';
import DrawerMenuButton from '../../components/DrawerMenuButton/DrawerMenuButton';
import styles from './styles';
import colors from '../../styles/colors';
import globalStyles from '../../styles/styles';
import HeaderImage from '../../components/HeaderImage/HeaderImage';
import ModalLoad from '../../components/ModalLoad';
import PlaceholderApi from '../../modules/PlaceholderApi';

class CreateQuestion extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      questionTitle: '',
      questionText: '',
      questionTags: '',
      focused: 'questionTitle',
      response: [],
      modalVisible: false,      
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

    createQuestion = () => {
      this.setState({modalVisible: true});
      const { questionTitle, questionText } = this.state;      

      PlaceholderApi.createQuestion(questionTitle, questionText)
      .then((data) => {
        this.setState({
          response: data,
          modalVisible: false                
        });        

        if(this.state.response.title == this.state.questionTitle){          
          ToastAndroid.show('Question created.', ToastAndroid.SHORT);
          this.props.navigation.navigate('Home');
        }
      })
    }
    
    return (    

      <KeyboardAvoidingView 
        style={styles.container} 
        behavior="padding" 
        keyboardVerticalOffset={0}
      >

        <ModalLoad visability={this.state.modalVisible}/>

        <View style = { globalStyles.containerHeaderBar }>
          <View style = { globalStyles.statusHeaderBar }/>                         
          <View style = { globalStyles.headerHeaderBar }>
              <DrawerMenuButton 
                onPress={ () => this.props.navigation.toggleDrawer() }
              /> 
              <HeaderImage/>                  
              <TouchableHighlight
              onPress={() => createQuestion()}
              >
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

          <View style={styles.bottomContainer}>
                <Text style={styles.bottomText}>
                    {possibleChars - charLeft}
                </Text>
          </View>
        </KeyboardAvoidingView>
      
    );
  }
}



export default CreateQuestion;


