import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Report.scss';

class Report extends Component {

  state = {
    total_hits: 0,
    total_mistakes: 0,
    easy_hits: 0,
    easy_mistakes: 0,
    medium_hits: 0,
    medium_mistakes: 0,
    hard_hits: 0,
    hard_mistakes: 0
  }
  
  componentDidMount() {
    let answers = [{"category":"General Knowledge","type":"multiple","difficulty":"medium","question":"When was the Declaration of Independence approved by the Second Continental Congress?","correct_answer":"July 2, 1776","incorrect_answers":["May 4, 1776","June 4, 1776","July 4, 1776"],"options":["July 4, 1776","June 4, 1776","July 2, 1776","May 4, 1776"],"selected_answer":"May 4, 1776","correct":true,"date_time":"2019-09-01T19:54:06.749Z"},{"category":"General Knowledge","type":"multiple","difficulty":"medium","question":"What name represents the letter &quot;M&quot; in the NATO phonetic alphabet?","correct_answer":"Mike","incorrect_answers":["Matthew","Mark","Max"],"options":["Mike","Max","Mark","Matthew"],"selected_answer":"Matthew","correct":false,"date_time":"2019-09-01T19:54:08.721Z"},{"category":"General Knowledge","type":"multiple","difficulty":"easy","question":"What is &quot;dabbing&quot;?","correct_answer":"A dance","incorrect_answers":["A medical procedure","A sport","A language"],"options":["A dance","A language","A sport","A medical procedure"],"selected_answer":"A medical procedure","correct":false,"date_time":"2019-09-01T19:54:09.873Z"},{"category":"General Knowledge","type":"multiple","difficulty":"easy","question":"What is the name of the Jewish New Year?","correct_answer":"Rosh Hashanah","incorrect_answers":["Elul","New Year","Succoss"],"options":["Succoss","New Year","Rosh Hashanah","Elul"],"selected_answer":"Elul","correct":false,"date_time":"2019-09-01T19:54:10.775Z"},{"category":"General Knowledge","type":"multiple","difficulty":"easy","question":"What was the nickname given to the Hughes H-4 Hercules, a heavy transport flying boat which achieved flight in 1947?","correct_answer":"Spruce Goose","incorrect_answers":["Noah&#039;s Ark","Fat Man","Trojan Horse"],"options":["Spruce Goose","Fat Man","Noah&#039;s Ark","Trojan Horse"],"selected_answer":"Trojan Horse","correct":false,"date_time":"2019-09-01T19:54:11.633Z"},{"category":"General Knowledge","type":"multiple","difficulty":"easy","question":"The New York Times slogan is, &ldquo;All the News That&rsquo;s Fit to&hellip;&rdquo;","correct_answer":"Print","incorrect_answers":["Digest","Look","Read"],"options":["Look","Print","Read","Digest"],"selected_answer":"Digest","correct":false,"date_time":"2019-09-01T19:54:12.601Z"},{"category":"General Knowledge","type":"multiple","difficulty":"easy","question":"What do the letters of the fast food chain KFC stand for?","correct_answer":"Kentucky Fried Chicken","incorrect_answers":["Kentucky Fresh Cheese","Kibbled Freaky Cow","Kiwi Food Cut"],"options":["Kentucky Fried Chicken","Kiwi Food Cut","Kibbled Freaky Cow","Kentucky Fresh Cheese"],"selected_answer":"Kentucky Fresh Cheese","correct":false,"date_time":"2019-09-01T19:54:13.465Z"},{"category":"General Knowledge","type":"multiple","difficulty":"easy","question":"Which candy is NOT made by Mars?","correct_answer":"Almond Joy","incorrect_answers":["M&amp;M&#039;s","Twix","Snickers"],"options":["Almond Joy","Snickers","Twix","M&amp;M&#039;s"],"selected_answer":"M&amp;M&#039;s","correct":false,"date_time":"2019-09-01T19:54:14.473Z"},{"category":"General Knowledge","type":"multiple","difficulty":"easy","question":"Which of the following is the IATA code for Manchester Airport?","correct_answer":"MAN","incorrect_answers":["EGLL","LHR","EGCC"],"options":["EGCC","LHR","MAN","EGLL"],"selected_answer":"EGLL","correct":false,"date_time":"2019-09-01T19:54:15.697Z"},{"category":"General Knowledge","type":"multiple","difficulty":"easy","question":"According to the nursery rhyme, what fruit did Little Jack Horner pull out of his Christmas pie?","correct_answer":"Plum","incorrect_answers":["Apple","Peach","Pear"],"options":["Apple","Plum","Pear","Peach"],"selected_answer":"Peach","correct":true,"date_time":"2019-09-01T19:54:16.801Z"}];

    const new_state = answers.reduce((result, answer) => {
      answer.correct ? result.total_hits++ : result.total_mistakes++;
      return result;
    }, { ...this.state });

    this.setState(new_state);
  }


  render() {
    const {
      total_hits,  total_mistakes,
      easy_hits,   easy_mistakes,
      medium_hits, medium_mistakes,
      hard_hits,   hard_mistakes
    } = this.state;

    return (
      <div className='report'>
        <div className='report-head'>
          <img src='./mascot.png' alt='Mascot' />
          <div className='report-congrats'>
            <h1>Congrats!</h1>
            <h2>You finished the test</h2>
          </div>
        </div>
        <div className='report-body'>
          <h3>See your performance</h3>
          <div className='report-resume'>
            <div className='report-resume-points'>
              <div>{total_hits}</div>
              <span>hits</span>
            </div>
            <div className='report-resume-points'>
              <div>{total_mistakes}</div>
              <span>mistakes</span>
            </div>
          </div>
          <div className='report-detail'>
            <div>
              <b>Easy</b><br />
              Hits: {easy_hits}<br />
              Mistakes: {easy_mistakes}
            </div>
            <div>
              <b>Medium</b><br />
              Hits: {medium_hits}<br />
              Mistakes: {medium_mistakes}
            </div>
            <div>
              <b>Hard</b><br />
              Hits: {hard_hits}<br />
              Mistakes: {hard_mistakes}
            </div>
          </div>
          <Link to='/'>
            <button>Back to start</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default connect(({ questions }) => questions)(Report);
