import React, { Component } from 'react';
import './App.css';
import data from './data.js';
import PostList from './Components/PostList';
import MoreButton from './Components/MoreButton';
import CountOfPosts from './Components/CountOfPosts';

class App extends Component {
    constructor(props) {
        super(props)
        this.handler = this.handler.bind(this)
        this.state = {countPosts: 10, btnDisabled: false}
    }

    handler(e) {
        e.preventDefault()
        if(this.state.countPosts < 100) {
            this.setState({
                countPosts: this.state.countPosts + 10
            })
        }
        if(this.state.countPosts >= 100){
            this.setState({
                btnHidden: true
            })
        }
    }

  render() {
        const postsToShow = data.slice(0, this.state.countPosts);
    return (
        <div className="mainContainer">
            <CountOfPosts count={this.state.countPosts}/>
            <PostList postsArr={postsToShow} />
            <MoreButton handler = {this.handler} hidden={this.state.btnHidden} />
        </div>
    );
  }
}

export default App;
