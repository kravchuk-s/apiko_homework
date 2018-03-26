import React, { Component } from 'react';
import './App.css';
import data from './data.js';
import PostListItem from './Components/PostListItem';
import PostList from './Components/PostList';
import MoreButton from './Components/MoreButton';

class App extends Component {
    constructor(props) {
        super(props)
        this.handler = this.handler.bind(this)
        this.state = {countPosts: 10, displayBtn: 'inline-block'}
    }

    handler(e) {
        e.preventDefault()
        if(this.state.countPosts < 100) {
            this.setState({
                countPosts: this.state.countPosts += 10
            })
        }
    }



  render() {

    return (
        <div className="mainContainer">
            <PostList index={this.state.countPosts} />
            <MoreButton handler = {this.handler} />
        </div>
    );
  }
}

export default App;
