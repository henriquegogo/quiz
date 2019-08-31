import { QUESTIONS, ANSWER, CLEAR_QUESTIONS } from '../actions/questions.js';

const questions = (state = { questions: [], answers: [] }, action) => {
  switch(action.type) {
    case QUESTIONS:
      const questions = action.questions.map(question => {
        const options = (question.incorrect_answers && question.correct_answer) ?
          [...question.incorrect_answers, question.correct_answer] : [];
        options.sort(() => Math.random() - 0.5); // Shuffle
        return {...question, options };
      });
      return { ...state, questions };
    case ANSWER:
      const answers = [...state.answers, action.answer];
      return { ...state, answers };
    case CLEAR_QUESTIONS:
      return { questions: [], answers: [] };
    default:
      return state;
  }
}

export default questions;
