import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { question, clearQuestion } from '../actions/question';
import Level from '../components/Level'

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

  close = (e) => {
    e.preventDefault();
    this.props.history.push('/');
  }

  componentDidMount() {
    this.props.dispatch(question(this.props.category));
  }

  componentWillUnmount() {
    this.props.dispatch(clearQuestion());
  }

  render() {
    const { selected_answer } = this.state;
    const { question } = this.props;

    return !question.question ? 'Carregando...' : (
      <Fragment>
        <a href='#close' onClick={this.close}><i>ⓧ</i> Fechar</a>
        <h2>{question.category}</h2>
        <section>
          <Level difficulty={question.difficulty} />
          <h3>Questão 1</h3>
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

export default connect(({ question }) => question)(withRouter(Trivia));
