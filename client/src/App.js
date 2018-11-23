import React, { Component,Fragment } from 'react';
import Layout from './components/Layout/'
import {Provider} from 'react-redux';
import {store} from './store';

class App extends Component {
  render() {
    return (
     <Provider store={store}>
       <Layout />
     </Provider>
    );
  }
}

export default App;
