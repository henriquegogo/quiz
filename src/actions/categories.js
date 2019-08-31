import { getCategories } from '../services/ApiService';

export const CATEGORIES = 'CATEGORIES_ACTION';

export function categories(list) {
  return function(dispatch) {
    getCategories().then(categories => {
      dispatch({ type: CATEGORIES, list: categories })
    });
  }
}
