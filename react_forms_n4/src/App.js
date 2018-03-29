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
        this.state = {countPosts: data.length,  //quantity of posts in array
            countPostsToShow: 10,               //quantity of posts to show on page
            btnHidden: false,                   //show or hide button
            search: '',                         //string in search field
            postsShowed: data.slice(0, 10),     //displayed posts on page
            filteredPosts: data}                //all posts or posts that was filtered
    }

    handler(e) {
        e.preventDefault();
        if(this.state.countPostsToShow < this.state.countPosts) {
            this.setState({
                countPostsToShow: this.state.countPostsToShow + 10, btnHidden: false,
                postsShowed: this.state.filteredPosts.slice(0, this.state.countPostsToShow + 10)
            });

        } else if(this.state.countPostsToShow >= this.state.countPosts){
            this.setState({
                btnHidden: true
            })
        }
    }

    handleChange(e){
        e.preventDefault();
        const filteredPosts = data.filter(
            (post) => {
                if(post.title.indexOf(e.target.value) > -1)
                    return post;
            }
        );
        const countPostsToShow = filteredPosts.length > 10 ? 10 : filteredPosts.length;
        const postsToShow = filteredPosts.slice(0, countPostsToShow);

        this.setState({search: e.target.value, postsShowed: postsToShow,
            countPosts: filteredPosts.length, btnHidden: false,
            countPostsToShow: countPostsToShow, filteredPosts: filteredPosts});
    }


  render() {
    return (
        <div className="mainContainer">
            <SearchForm value={this.state.search} change={this.handleChange}/>
            <CountOfPosts count={this.state.countPostsToShow}/>
            <PostList postsArr={this.state.postsShowed} />
            <MoreButton handler = {this.handler} hidden={this.state.btnHidden} />
        </div>
    );
  }
}

export default App;
