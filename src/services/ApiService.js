import axios from 'axios';

const API_BASE_URL = 'https://opentdb.com';
const CATEGORIES_URL = `${API_BASE_URL}/api_category.php`;
const QUESTION_URL = `${API_BASE_URL}/api.php?amount=1&difficulty=medium&type=multiple&category=`;

export async function getCategories() {
  const resp =  await axios.get(CATEGORIES_URL)
  return resp.data.trivia_categories;
}

export async function getQuestion(category_id) {
  const resp =  await axios.get(QUESTION_URL + category_id)
  return resp.data.results[0];
}
