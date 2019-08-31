import { combineReducers } from 'redux';
import categories from './categories';
import question from './question';

export default combineReducers({
  categories,
  question
});
