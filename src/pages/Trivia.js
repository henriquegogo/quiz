import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { question, clearQuestion } from '../actions/question';

class Trivia extends Component {

  state = {
    selected_answer: null
  }

  selectAnswer = (e) => {
    this.setState({ selected_answer: e.target.value });
  }

  submit = (e) => {
    e.preventDefault();
  }

  componentDidMount() {
    this.props.dispatch(question(this.props.id));
  }

  componentWillUnmount() {
    this.props.dispatch(clearQuestion());
  }

  render() {
    const { selected_answer } = this.state;
    const { question } = this.props;

    return (
      <Fragment>
        <h2>História</h2>
        <section>
          <h3>Questão 1</h3>
          {!question.question && 'Carregando...'}
          <p dangerouslySetInnerHTML={{ __html: question.question }} />
          <form className='answers' onChange={this.selectAnswer} onSubmit={this.submit}>
            {question.answers && question.answers.map((answer, i) =>
              <label key={i}>
                <input type='radio' name='answer' value={answer} />
                <span dangerouslySetInnerHTML={{ __html: answer }} />
              </label>
            )}
            <button type='submit' disabled={!selected_answer}>Responder</button>
          </form>
        </section>
      </Fragment>
    );
  }
}

export default connect(({ question }) => question)(Trivia);
