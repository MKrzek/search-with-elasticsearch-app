import React, { Component } from 'react';

import DisplayData from './DisplayData.js';
import SearchBar from './SearchBar.js';
class App extends Component {
  render() {
    return <div>
           <SearchBar/>
           <DisplayData/>
           </div>
      
    
  }
}

export default App;
