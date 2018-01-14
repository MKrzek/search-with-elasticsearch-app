import React  from 'react';
import{Route} from 'react-router-dom';
import {ConnectedRouter} from 'react-router-redux';
import {history} from '../store.js';

import DisplayData from './DisplayData.js';
import SearchBar from './SearchBar.js';

 export default class App extends React.Component {

  render() {
    
    return <ConnectedRouter history={history}>
            <div>
              <Route exact path='/' component={SearchBar}/> 
              <Route path='/products' component={DisplayData}/> 
            </div>
            </ConnectedRouter>
           
    
    
  }
}



