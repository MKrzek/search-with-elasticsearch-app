import React  from 'react';
import{Route} from 'react-router-dom';
import {ConnectedRouter} from 'react-router-redux';
import {history} from '../store.js';

import DisplayData from './DisplayData.js';
import SearchBar from './SearchBar.js';
import Fruit from './Fruit.js';
import Veg from './Veg.js';
import Alcohol from './Alcohol.js';
import Meat from './Meat.js'
 export default class App extends React.Component {

  render() {
    
    return <ConnectedRouter history={history}>
            <div>
              <Route exact path='/' component={SearchBar}/> 
              <Route path='/products' component={DisplayData}/> 
              <Route path='/fruit' component={Fruit}/>
              <Route path='/vegetables' component={Veg}/>
              <Route path='/alcohol' component={Alcohol}/>
              <Route path='/meat' component={Meat}/>
              
            </div>
            </ConnectedRouter>
           
    
    
  }
}



