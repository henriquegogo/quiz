import { getQuestions } from '../services/ApiService';

export const QUESTIONS = 'QUESTIONS_ACTION';
export const ANSWER = 'ANSWER_ACTION';
export const CLEAR_QUESTIONS = 'CLEAR_QUESTIONS_ACTION';

export function questions(category_id) {
  return function(dispatch) {
    getQuestions(category_id).then(questions => {
      dispatch({ type: QUESTIONS, questions })
    });
  }
}

export function clearQuestions() {
  return { type: CLEAR_QUESTIONS };
}

export function answerQuestion(answer) {
  return { type: ANSWER, answer };
}

