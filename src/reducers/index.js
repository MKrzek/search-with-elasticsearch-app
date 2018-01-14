import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {reducer as FormReducer} from 'redux-form';

const rootReducer=combineReducers({
router: routerReducer,
form: FormReducer

})
export default rootReducer