import React, { Fragment } from 'react';
import './Modal.scss';

function Modal({ correct, next }) {
  return (
    <Fragment>
      <div className='modal-overlay' />
      <div className={'modal ' + (!correct && 'red')}>
        <i className='modal-icon' />
        <h2>{correct ? 'You got it right!' : 'Wrong answer!'}</h2>
        <button className='modal-button' onClick={next} autoFocus>Next <i>→</i></button>
      </div>
    </Fragment>
  );
}

export default Modal;

