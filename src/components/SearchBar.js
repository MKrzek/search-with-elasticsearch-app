import React from 'react'
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import * as Actions from '../actions/index.js';

import Navigation from './Navigation.js';

class SearchBar extends React.Component{

renderSearchBar=(field)=>{
    return <fieldset className='form-group'>
                <label className='col form-label'>{field.label}</label>
                <input {...field.input} type={field.type}/>
                <div>{field.meta.touched ? field.meta.error : ''}</div>
           </fieldset>
}
submitSearchTerm=(values, selected_page)=>{
    console.log('values', values)
    
    this.props.performQuery(values, selected_page, ()=>{
        this.props.history.push('/products')
    }
)
}
    render(){
        const{handleSubmit}=this.props
        return <div>
                  <div>
                      <Navigation/>
                  </div>
               <div className='container'>
              
               <form onSubmit={handleSubmit(this.submitSearchTerm)}>
               <Field
               name='searchBar'
               label='enter your query'
               component={this.renderSearchBar}
               type='text'
              />
              <button type='submit' className='btn btn-primary'>Search</button>
              </form>
              </div>
              </div>
            
    };
};
function validate(values){
    const errors={};
    if (!values.SearchBar){
        errors.SearchBar='Please enter your query'
    }
    console.log ('errors', errors)
    return errors
};

export default connect(null, Actions)(reduxForm ({
 form: 'searchBar', 
 validate
})(SearchBar))