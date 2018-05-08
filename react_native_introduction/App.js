import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Home from './src/components/home';
import Counter from './src/reducers/index';

const store = createStore(Counter);
class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <Home/>
      </Provider>)
  }
}

export default App;
