import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Report.scss';

class Report extends Component {
  render() {
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
              <div>7</div>
              <span>hits</span>
            </div>
            <div className='report-resume-points'>
              <div>3</div>
              <span>mistakes</span>
            </div>
          </div>
          <div className='report-detail'>
            <div>
              <b>Easy</b><br />
              Hits: 2<br />
              Mistakes: 1
            </div>
            <div>
              <b>Medium</b><br />
              Hits: 2<br />
              Mistakes: 1
            </div>
            <div>
              <b>Hard</b><br />
              Hits: 2<br />
              Mistakes: 1
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

export default Report;
