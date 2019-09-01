import { getQuestions } from '../services/ApiService';

export const QUESTIONS = 'QUESTIONS_ACTION';
export const ANSWER = 'ANSWER_ACTION';
export const CLEAR_QUESTIONS = 'CLEAR_QUESTIONS_ACTION';

export function questions(category_id, difficulty) {
  return function(dispatch) {
    Promise.all([
      getQuestions(category_id, 'easy'),
      getQuestions(category_id, 'medium'),
      getQuestions(category_id, 'hard')
    ]).then(([ easy, medium, hard ]) => {
      dispatch({ type: QUESTIONS, questions: [ ...easy, ...medium, ...hard ] })
    });
  }
}

export function clearQuestions() {
  return { type: CLEAR_QUESTIONS };
}

export function answerQuestion(answer) {
  return { type: ANSWER, answer };
}

