import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from './styles';

export default class ListItem extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
       const {userId, id, title, body} = this.props.postToShow;
        return (
            <View style={styles.flexy}>
                <Text>User ID: {userId}</Text>
                <Text>ID Of Post: {id}</Text>
                <Text style={styles.bigblue}>Title: {title}</Text>
                <Text>Body: {body}</Text>
            </View>
        );
    }
}

