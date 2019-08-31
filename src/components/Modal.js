import React, { Fragment } from 'react';
import './Modal.scss';

function Modal({ correct, next }) {
  return (
    <Fragment>
      <div className='modal-overlay' />
      <div className={'modal ' + (!correct && 'red')}>
        <i className='modal-icon' />
        <h2>{correct ? 'Você acertou!' : 'Você errou!'}</h2>
        <button onClick={next} autoFocus>Avançar <i>→</i></button>
      </div>
    </Fragment>
  );
}

export default Modal;

