import React from 'react';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section>
        <div className="container mt-4 calc-container">
          <div className="d-flex justify-content-end result">
            <p className="my-auto p-2 display">0</p>
          </div>
          <div className="d-flex">
            <button type="button" className="btn btn-secondary btn-custom">AC</button>
            <button type="button" className="btn btn-secondary btn-custom">+/-</button>
            <button type="button" className="btn btn-secondary btn-custom">%</button>
            <button type="button" className="btn btn-warning btn-custom2">/</button>
          </div>
          <div className="d-flex">
            <button type="button" className="btn btn-secondary btn-custom">7</button>
            <button type="button" className="btn btn-secondary btn-custom">8</button>
            <button type="button" className="btn btn-secondary btn-custom">9</button>
            <button type="button" className="btn btn-warning btn-custom2">X</button>
          </div>
          <div className="d-flex">
            <button type="button" className="btn btn-secondary btn-custom">4</button>
            <button type="button" className="btn btn-secondary btn-custom">5</button>
            <button type="button" className="btn btn-secondary btn-custom">6</button>
            <button type="button" className="btn btn-warning btn-custom2">-</button>
          </div>
          <div className="d-flex">
            <button type="button" className="btn btn-secondary btn-custom">1</button>
            <button type="button" className="btn btn-secondary btn-custom">2</button>
            <button type="button" className="btn btn-secondary btn-custom">3</button>
            <button type="button" className="btn btn-warning btn-custom2">+</button>
          </div>
          <div className="d-flex">
            <button type="button" className="btn btn-secondary btn-custom3">0</button>
            <button type="button" className="btn btn-secondary btn-custom">.</button>
            <button type="button" className="btn btn-warning btn-custom2">=</button>
          </div>
        </div>
      </section>
    );
  }
}
