import React from 'react';
import { Text, View } from 'react-native';
import RootNavigator from './navigation/RootNavigator';
import { isSignedIn } from "./modules/auth/auth";

export default class App extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          signedIn: false,
          checkedSignIn: false
        };
      }

      componentDidMount() {
        isSignedIn()
          .then(res => this.setState({ signedIn: res, checkedSignIn: true }))
          .catch(err => alert("An error occurred"));
      }
      
  
    render() {

        const { checkedSignIn, signedIn } = this.state;

        if (!checkedSignIn) {
        return null;
        }
        const Layout = RootNavigator(signedIn);

        return <Layout/>;
  }
}