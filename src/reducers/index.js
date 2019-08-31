import { combineReducers } from 'redux';
import categories from './categories';
import questions from './questions';

export default combineReducers({
  categories,
  questions
});
