import React from 'react';
import Navigation from './Navigation.js'
import Categories from './Categories.js'
export default class Fruit extends React.Component{
    render(){
        return <div>
                 <Navigation/>
                 <Categories category='fruit' url='/fruit' history={this.props.history}/>
               </div>
    }
}