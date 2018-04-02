import React, { Component } from 'react';
import './App.css';
import PostList from './Components/PostList';
import MoreButton from './Components/MoreButton';
import CountOfPosts from './Components/CountOfPosts';
import SearchForm from './Components/SearchForm';
import ErrorBoundary from './Components/ErrorBoundary';

const URL = "https://jsonplaceholder.typicode.com/posts";
const fetchedData = () => fetch(URL).then(response => response.json());

class App extends Component {
    constructor(props) {
        super(props);
        this.handlerClick = this.handlerClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {countPosts: 0,            //quantity of posts in array
            countPostsToShow: 0,               //quantity of posts to show on page
            btnHidden: false,                   //show or hide button
            search: '',                         //string in search field
            postsShowed: [],                    //displayed posts on page
            filteredPosts: [],                  //all posts or posts that was filtered
            fetchedPosts: [],
            isLoading: true
        }
    }

    componentDidMount() {
        setTimeout(() => {
            fetchedData().then(
                (posts) => {
                    this.setState({
                        fetchedPosts: posts,
                        filteredPosts: posts,
                        postsShowed: posts.slice(0, 10),
                        countPosts: posts.length,
                        countPostsToShow: 10,
                        isLoading: false
                    });
                }
            );
        }, 2000);

        setInterval(() => {
            fetchedData().then(
                (posts) => {
                    this.setState({
                        fetchedPosts: posts
                    });
                }
            );
        }, 5000);
    }



    handlerClick(e) {
        e.preventDefault();
        if(this.state.countPostsToShow < this.state.countPosts) {
            const postShowed = this.state.filteredPosts.slice(0, this.state.countPostsToShow + 10);
            this.setState({
                countPostsToShow: postShowed.length, btnHidden: false,
                postsShowed: postShowed
            });
        } else {
            this.setState({
                btnHidden: true
            })
        }
    }

    handleChange(e){
        e.preventDefault();
        const filteredPosts = this.state.fetchedPosts.filter(
            (post) => {
                if(post.title.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1)
                    return post;
            }
        );
        const countPostsToShow = filteredPosts.length > 10 ? 10 : filteredPosts.length;
        const postsToShow = filteredPosts.slice(0, countPostsToShow);

        this.setState({search: e.target.value, postsShowed: postsToShow,
            countPosts: filteredPosts.length, btnHidden: countPostsToShow === filteredPosts.length,
            countPostsToShow: countPostsToShow, filteredPosts: filteredPosts});
    }




  render() {
      return (
          <div className="mainContainer">
              <SearchForm value={this.state.search} change={this.handleChange}/>
              <CountOfPosts count={this.state.countPostsToShow}/>
              <ErrorBoundary>
              <PostList postsArr={this.state.postsShowed} isLoading={this.state.isLoading}/>
              </ErrorBoundary>
              <MoreButton handler = {this.handlerClick} hidden={this.state.btnHidden} />
          </div>
      );
  }
}

export default App;
