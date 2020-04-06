import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import trainerReducer from './trainerReducer';

export default combineReducers({
    search: searchReducer,
    trainer: trainerReducer
});