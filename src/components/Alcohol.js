import React from 'react'
import Navigation from './Navigation.js';
import Categories from './Categories.js';

export default class Alcohol extends React.Component {

    render() {
        return <div>
                <Navigation/>
                <Categories category='alcohol' history={this.props.history}/>
              </div>
    }}