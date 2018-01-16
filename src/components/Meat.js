import React from 'react'
import Navigation from './Navigation.js';
import Categories from './Categories.js';

export default class Meat extends React.Component {

    render() {
        return <div>
                <Navigation />
                <Categories  category='meat' history={this.props.history}/>
                </div>
    }}