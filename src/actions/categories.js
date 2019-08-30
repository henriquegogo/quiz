export const CATEGORIES = 'CATEGORIES_ACTION';

export function setCategories(list) {
  return { type: CATEGORIES, list };
}
