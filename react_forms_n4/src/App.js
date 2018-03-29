import React, { Component } from 'react';
import './App.css';
import data from './data.js';
import PostList from './Components/PostList';
import MoreButton from './Components/MoreButton';
import CountOfPosts from './Components/CountOfPosts';
import SearchForm from './Components/SearchForm';

class App extends Component {
    constructor(props) {
        super(props);
        this.handler = this.handler.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {countPosts: 10, btnDisabled: false, search: ''}
    }

    handler(e) {
        e.preventDefault();
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

    handleChange(e){
        e.preventDefault();
        this.setState({search: e.target.value});
    }



  render() {
        const filteredPosts = data.filter(
            (post) => {
                if(post.title.indexOf(this.state.search) > -1)
                return post;
            }
        );
        const postsToShow = filteredPosts.slice(0, this.state.countPosts);
    return (
        <div className="mainContainer">
            <SearchForm value={this.state.search} change={this.handleChange}/>
            <CountOfPosts count={this.state.countPosts}/>
            <PostList postsArr={postsToShow} />
            <MoreButton handler = {this.handler} hidden={this.state.handleChange} />
        </div>
    );
  }
}

export default App;
