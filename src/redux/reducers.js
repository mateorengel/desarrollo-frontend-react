import { combineReducers } from 'redux';

// aca importamos todos los reducers
import defaultReducer from "./default/defaultReducers.js";
import productsReducer from './products/productsReducers.js';

const rootReducer = combineReducers({
    default: defaultReducer,
    products:productsReducer,

});

export default rootReducer;