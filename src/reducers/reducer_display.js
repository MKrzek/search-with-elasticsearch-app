import {DISPLAY_PRODUCTS} from '../actions/index.js';

export default function (state=[], action){
    console.log ('action.payload', action.payload)
    switch(action.type){
        case DISPLAY_PRODUCTS:
        return action.payload
    
    default:
        return state
    }
 }