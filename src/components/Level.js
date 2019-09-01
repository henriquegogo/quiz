import React, { Component } from 'react';
import './Level.scss';

class Level extends Component {

  levels = {
    easy: { stars: '★☆☆', text: 'Easy' },
    medium: { stars: '★★☆', text: 'Medium' },
    hard: { stars: '★★★', text: 'Hard' },
  }

  render() {
    const { difficulty } = this.props;
    const level = this.levels[difficulty] || {};

    return (
      <div className='level'>
        <span className='level-stars'>{level.stars}</span>
        {level.text}
      </div>
    );
  }
}

export default Level;
