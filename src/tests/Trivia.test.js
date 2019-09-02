import React from 'react';
import { shallow } from 'enzyme';
import { Trivia } from '../pages/Trivia';

describe('Trivia', () => {
  let component, dispatch, questions, answers;

  beforeEach(() => {
    questions = [
      { "category": "General Knowledge", "type": "multiple", "difficulty": "medium",
        "question": "What's the answer?",
        "correct_answer": "Correct answer", "incorrect_answers":["Incorrect 1","Incorrect 2","Incorrect 3"],
        "options": ["Correct answer","Incorrect 1","Incorrect 2","Incorrect 3"]
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

  it('if has 2 medium hits, upgrade the difficulty', () => {
    expect(component.instance().calcFilter()).toBe('medium');

    component.setProps({ answers: [{difficulty:'medium',correct:true}] })
    expect(component.instance().calcFilter()).toBe('medium');

    component.setProps({ answers: [{difficulty:'medium',correct:true},{difficulty:'medium',correct:true}] })
    expect(component.instance().calcFilter()).toBe('hard');
  });

  it('if has 2 medium mistakes, downgrade the difficulty', () => {
    expect(component.instance().calcFilter()).toBe('medium');

    component.setProps({ answers: [{difficulty:'medium',correct:false}] })
    expect(component.instance().calcFilter()).toBe('medium');

    component.setProps({ answers: [{difficulty:'medium',correct:false},{difficulty:'medium',correct:false}] })
    expect(component.instance().calcFilter()).toBe('easy');
  });

  it('if has 2 easy hits, upgrade the difficulty', () => {
    component.setState({ filter: 'easy' });
    expect(component.instance().calcFilter()).toBe('easy');

    component.setProps({ answers: [{difficulty:'easy',correct:true}] })
    expect(component.instance().calcFilter()).toBe('easy');

    component.setProps({ answers: [{difficulty:'easy',correct:true},{difficulty:'easy',correct:true}] })
    expect(component.instance().calcFilter()).toBe('medium');
  });

  it('if has 2 hard mistakes, downgrade the difficulty', () => {
    component.setState({ filter: 'hard' });
    expect(component.instance().calcFilter()).toBe('hard');

    component.setProps({ answers: [{difficulty:'hard',correct:false}] })
    expect(component.instance().calcFilter()).toBe('hard');

    component.setProps({ answers: [{difficulty:'hard',correct:false},{difficulty:'hard',correct:false}] })
    expect(component.instance().calcFilter()).toBe('medium');
  });
});
