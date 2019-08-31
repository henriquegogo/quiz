import React, { Component, Fragment, createRef } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { questions, clearQuestions, answerQuestion } from '../actions/questions';
import Level from '../components/Level'
import Modal from '../components/Modal'

const MAX_QUESTIONS = 10;

class Trivia extends Component {

  state = {
    selected_answer: null,
    question_index: 0,
    correct: null
  }

  selectAnswer = (e) => {
    this.setState({ selected_answer: e.target.value });
  }

  submit = (e, question) => {
    e.preventDefault();
    const correct = this.state.selected_answer === question.correct_answer;
    this.setState({ correct });

    const answer = {
      ...question,
      selected_answer: this.state.selected_answer,
      correct,
      date_time: new Date()
    };
    this.props.dispatch(answerQuestion(answer));
  }

  close = (e) => {
    e.preventDefault();
    this.props.history.push('/');
  }

  next = (e) => {
    e.preventDefault();
    const { question_index } = this.state;
    const { answers } = this.props;

    if (answers.length < MAX_QUESTIONS) {
      this.form.current.reset();
      this.setState({
        selected_answer: null,
        question_index: question_index + 1,
        correct: null
      });
    }
    else {
      console.log('The end');
    }
  }

  componentDidMount() {
    this.props.dispatch(questions(this.props.category));
  }

  componentWillUnmount() {
    this.props.dispatch(clearQuestions());
  }

  render() {
    const { selected_answer, question_index, correct } = this.state;
    const question = this.props.questions[question_index] || {};

    return !question.question ? 'Carregando...' : (
      <Fragment>
        <a href='#close' onClick={this.close}><i>ⓧ</i> Fechar</a>
        <h2>{question.category}</h2>
        <section>
          <Level difficulty={question.difficulty} />
          <h3>Questão {question_index + 1}</h3>
          {/* Needs to use dangerouslySetInnerHTML because api returns some HTML encoded text */}
          <p dangerouslySetInnerHTML={{ __html: question.question }} />
          <form className='answers' ref={this.form = createRef()}
            onChange={this.selectAnswer}
            onSubmit={e => this.submit(e, question)}>
            {question.options && question.options.map(option =>
              <label key={btoa(option)}>
                <input type='radio' name='option' value={option} />
                <span dangerouslySetInnerHTML={{ __html: option }} />
              </label>
            )}
            <button type='submit' disabled={!selected_answer}>Responder</button>
            {correct !== null && <Modal correct={correct} next={this.next} />}
          </form>
        </section>
      </Fragment>
    );
  }
}

export default connect(({ questions }) => questions)(withRouter(Trivia));
