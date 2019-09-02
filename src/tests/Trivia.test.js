import React from 'react';
import { shallow } from 'enzyme';
import { Trivia } from '../pages/Trivia';

describe('Trivia', () => {
  let component, dispatch, questions, answers;

  beforeEach(() => {
    questions = [
      { "category": "General Knowledge", "type": "multiple", "difficulty": "medium",
        "question": "Which language is NOT Indo-European?",
        "correct_answer": "Hungarian", "incorrect_answers": ["Russian","Greek","Latvian"],
        "options": ["Hungarian","Russian","Greek","Latvian"]
      },
      { "category": "General Knowledge", "type": "multiple", "difficulty": "medium",
        "question": "What character was once considered to be the 27th letter of the alphabet?",
        "correct_answer": "Ampersand", "incorrect_answers":["Interrobang","Tilde","Pilcrow"],
        "options": ["Ampersand","Interrobang","Tilde","Pilcrow"]
      }
    ];
    answers = [];
    dispatch = jest.fn();
    component = shallow(
      <Trivia questions={questions} answers={answers} dispatch={dispatch} />
    );
  });

  it('renderize properly', () => {
    expect(component).toMatchSnapshot();
  });

  it('requests questions from api', () => {
    expect(dispatch).toHaveBeenCalled();
  });

  it('shows a question with medium difficulty', () => {
    expect(component.find('Level').html().includes('Medium')).toBeTruthy();
  });

  it('shows multiple choices', () => {
    expect(component.find('.answers input[name="option"]').length).toBe(4);
  });

  it('has a "Send answer" button', () => {
    expect(component.find('button[type="submit"]').text()).toBe('Send answer');
  });
});
