import axios from 'axios';

const API_BASE_URL = 'https://opentdb.com';
export const CATEGORIES_URL = `${API_BASE_URL}/api_category.php`;
export const QUESTION_URL = `${API_BASE_URL}/api.php?amount=10&difficulty={difficulty}&type=multiple&category={category}`;

export async function getCategories() {
  const resp =  await axios.get(CATEGORIES_URL);
  return resp.data.trivia_categories;
}

export async function getQuestions(category_id, difficulty) {
  const resp =  await axios.get(QUESTION_URL
    .replace('{difficulty}', difficulty)
    .replace('{category}', category_id));
  return resp.data.results;
}
