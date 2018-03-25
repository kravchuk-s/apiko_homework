import React, { Component } from 'react';
import './App.css';
import data from './data.js';
import PostListItem from './Components/PostListItem';
import PostList from './Components/PostList';
import MoreButton from './Components/MoreButton';

class App extends Component {

  render() {
    return (
        <div className="mainContainer">
      <PostList />
      <MoreButton/>
        </div>
    );
  }
}

export default App;
