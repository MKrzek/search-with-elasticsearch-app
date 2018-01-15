import React from 'react'
import Navigation from './Navigation.js';
import {connect} from 'react-redux';
import DisplayProduct from './DisplayProduct.js';
import * as Actions from '../actions/index.js';

import _ from 'lodash';
class Meat extends React.Component {

    componentDidMount() {
        const value = 'meat';
        this.props.fetchCategory(value)
    }
    renderCat = () => {
        return _.map(this.props.meat, meat => {
            return <DisplayProduct product={meat} key={meat._id}/>
        })
    }

    render() {
        return <div>
            <div>
                <Navigation/>
            </div>
            <div>
                {this.renderCat()}
            </div>
        </div>
    }
}

function mapStateToProps(state) {
    return {meat: state.category}
};
export default connect(mapStateToProps, Actions)(Meat);