import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {reducer as FormReducer} from 'redux-form';
import displayReducer from './reducer_display.js';
import categoryReducer from './reducer_category.js';

const rootReducer=combineReducers({
router: routerReducer,
form: FormReducer,
display: displayReducer,
category: categoryReducer,


})
export default rootReducer