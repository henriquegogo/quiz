import { getQuestion } from '../services/ApiService';

export const QUESTION = 'QUESTION_ACTION';

export function question(category_id) {
  return function(dispatch) {
    getQuestion(category_id).then(item => {
      dispatch({ type: QUESTION, question: item })
    });
  }
}

export function clearQuestion() {
  return { type: QUESTION, question: {} };
}
