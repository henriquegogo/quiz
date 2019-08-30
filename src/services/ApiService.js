import axios from 'axios';

const API_BASE_URL = 'http://opentdb.com';
const CATEGORIES_URL = `${API_BASE_URL}/api_category.php`;

export async function getCategories() {
  const resp =  await axios.get(CATEGORIES_URL)
  return resp.data.trivia_categories;
}
