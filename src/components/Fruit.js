import React from 'react'
import Navigation from './Navigation.js';
import {connect} from 'react-redux';
import DisplayProduct from './DisplayProduct.js';
import * as Actions from '../actions/index.js';

import _ from 'lodash';
class Fruit extends React.Component{

componentDidMount(){
    const value='fruit';
    this.props.fetchCategory(value)
}
renderFruit=()=>{
    return _.map(this.props.fruit, fruit=>{
        return <DisplayProduct product={fruit} key={fruit._id}/>})  
}

    render(){
        return<div>
                 <div>
                     <Navigation/>
                </div>
                <div>
                    {this.renderFruit()}
                </div>
        </div>
    }
}

function mapStateToProps(state){
    return {fruit: state.category}
};
export default connect(mapStateToProps, Actions)(Fruit);