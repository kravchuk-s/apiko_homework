import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from './styles';
import colors from '../../styles/colors';
import PlaceholderApi from '../../modules/PlaceholderApi';

export default class ListItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            user: [],
            isLoading: true
        }
    }

    componentDidMount() {
        if( typeof this.props.postToShow.userId !== 'undefined'){
            const {userId, id, title, body} = this.props.postToShow;
            PlaceholderApi.getUser(userId)
            .then((data) => {
            this.setState({
                user: data,
                isLoading: false                
            });
            })
        }
    }

    render(){
       if( typeof this.props.postToShow.userId !== 'undefined'){

        const {userId, id, title, body} = this.props.postToShow;

        return (
            <View style={styles.flexy}>                
                <Text style={styles.bigblue}>{title}</Text>
                <Text>{body}</Text>
                <View style={styles.flexDirection}>                
                    <Text style={styles.textColor}>ID Of Post: {id} || </Text>
                    <Text style={styles.textColor}>By {this.state.user.username}</Text>
                </View>
            </View>
        );
       } else {

        const {postId, id, name, email, body} = this.props.postToShow;

        return (
            <View style={styles.flexyWhite}>                
                <Text style={styles.bigblue}>{name}</Text>
                <Text>{body}</Text>
                <View style={styles.flexDirection}>                
                    <Text style={styles.textColor}>ID Of Comment: {id} || </Text>
                    <Text style={styles.textColor}>By {email}</Text>
                </View>
            </View>
        );
       }

        
    }
}

