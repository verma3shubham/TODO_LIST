import { createStore,combineReducers} from 'redux';

import todoReducer from './Reducers/todoReducer';


const reducers = combineReducers({todo : todoReducer});


const store=createStore(reducers);



export default store;