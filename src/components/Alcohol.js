import React from 'react'
import Navigation from './Navigation.js';
import {connect} from 'react-redux';
import DisplayProduct from './DisplayProduct.js';
import * as Actions from '../actions/index.js';

import _ from 'lodash';
class Alcohol extends React.Component {

    componentDidMount() {
        const value = 'alcohol';
        this.props.fetchCategory(value)
    }
    renderCat = () => {
        return _.map(this.props.alcohol, alcohol => {
            return <DisplayProduct product={alcohol} key={alcohol._id}/>
        })
    }

    render() {
        return <div>
            <div>
                <Navigation/>
            </div>
            <h2>Alcohol</h2>
            <div>
                {this.renderCat()}
            </div>
        </div>
    }
}

function mapStateToProps(state) {
    return {alcohol: state.category}
};
export default connect(mapStateToProps, Actions)(Alcohol);