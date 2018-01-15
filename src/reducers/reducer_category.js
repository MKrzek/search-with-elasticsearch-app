import {FETCH_CATEGORY} from '../actions/index.js';
export  default function (state=[], action){
    switch(action.type){
        case FETCH_CATEGORY:
          return action.payload
        default:
           return state
        }
    }

