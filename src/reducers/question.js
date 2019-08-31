import { QUESTION } from '../actions/question.js';

const question = (state = { question: {} }, action) => {
  switch(action.type) {
    case QUESTION:
      const answers = (action.question.incorrect_answers && action.question.correct_answer) ?
        [...action.question.incorrect_answers, action.question.correct_answer] : [];
      answers.sort(() => Math.random() - 0.5); // Shuffle
      return { question: {...action.question, answers} };
    default:
      return state;
  }
}

export default question;
