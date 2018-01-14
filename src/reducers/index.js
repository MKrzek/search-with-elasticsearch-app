import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {reducer as FormReducer} from 'redux-form';
import displayReducer from './reducer_display.js';

const rootReducer=combineReducers({
router: routerReducer,
form: FormReducer,
display: displayReducer

})
export default rootReducer