import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const clickEvent = (e) => {
    setState((state) => calculate(state, e.target.innerText));
  };

  const { total, next, operation } = state;

  return (
    <section>
      <div className="container d-md-flex p-5">
        <div className="container calc-text">
          <h2>Let&apos;s do some math!</h2>
        </div>
        <div className="container calc-container">
          <div className="d-flex justify-content-end result">
            <p className="my-auto p-2 display">
              {total}
              {operation}
              {next}
            </p>
          </div>
          <div className="d-flex">
            <button onClick={clickEvent} type="button" className="btn btn-secondary btn-custom">AC</button>
            <button onClick={clickEvent} type="button" className="btn btn-secondary btn-custom">+/-</button>
            <button onClick={clickEvent} type="button" className="btn btn-secondary btn-custom">%</button>
            <button onClick={clickEvent} type="button" className="btn btn-warning btn-custom2">÷</button>
          </div>
          <div className="d-flex">
            <button onClick={clickEvent} type="button" className="btn btn-secondary btn-custom">7</button>
            <button onClick={clickEvent} type="button" className="btn btn-secondary btn-custom">8</button>
            <button onClick={clickEvent} type="button" className="btn btn-secondary btn-custom">9</button>
            <button onClick={clickEvent} type="button" className="btn btn-warning btn-custom2">x</button>
          </div>
          <div className="d-flex">
            <button onClick={clickEvent} type="button" className="btn btn-secondary btn-custom">4</button>
            <button onClick={clickEvent} type="button" className="btn btn-secondary btn-custom">5</button>
            <button onClick={clickEvent} type="button" className="btn btn-secondary btn-custom">6</button>
            <button onClick={clickEvent} type="button" className="btn btn-warning btn-custom2">-</button>
          </div>
          <div className="d-flex">
            <button onClick={clickEvent} type="button" className="btn btn-secondary btn-custom">1</button>
            <button onClick={clickEvent} type="button" className="btn btn-secondary btn-custom">2</button>
            <button onClick={clickEvent} type="button" className="btn btn-secondary btn-custom">3</button>
            <button onClick={clickEvent} type="button" className="btn btn-warning btn-custom2">+</button>
          </div>
          <div className="d-flex">
            <button onClick={clickEvent} type="button" className="btn btn-secondary btn-custom3">0</button>
            <button onClick={clickEvent} type="button" className="btn btn-secondary btn-custom">.</button>
            <button onClick={clickEvent} type="button" className="btn btn-warning btn-custom2">=</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
