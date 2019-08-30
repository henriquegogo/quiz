import { CATEGORIES } from '../actions/categories.js';

const categories = (state = { categories: [] }, action) => {
  switch(action.type) {
    case CATEGORIES:
      return { categories: action.list };
    default:
      return state;
  }
}

export default categories;
