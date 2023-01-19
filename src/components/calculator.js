import React from 'react';
import calculate from '../logic/calculate';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
    this.clickEvent = this.clickEvent.bind(this);
  }

  clickEvent(e) {
    this.setState((state) => calculate(state, e.target.innerText));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <section>
        <div className="container mt-4 calc-container">
          <div className="d-flex justify-content-end result">
            <p className="my-auto p-2 display">
              {total}
              {operation}
              {next}
            </p>
          </div>
          <div className="d-flex">
            <button onClick={this.clickEvent} type="button" className="btn btn-secondary btn-custom">AC</button>
            <button onClick={this.clickEvent} type="button" className="btn btn-secondary btn-custom">+/-</button>
            <button onClick={this.clickEvent} type="button" className="btn btn-secondary btn-custom">%</button>
            <button onClick={this.clickEvent} type="button" className="btn btn-warning btn-custom2">÷</button>
          </div>
          <div className="d-flex">
            <button onClick={this.clickEvent} type="button" className="btn btn-secondary btn-custom">7</button>
            <button onClick={this.clickEvent} type="button" className="btn btn-secondary btn-custom">8</button>
            <button onClick={this.clickEvent} type="button" className="btn btn-secondary btn-custom">9</button>
            <button onClick={this.clickEvent} type="button" className="btn btn-warning btn-custom2">x</button>
          </div>
          <div className="d-flex">
            <button onClick={this.clickEvent} type="button" className="btn btn-secondary btn-custom">4</button>
            <button onClick={this.clickEvent} type="button" className="btn btn-secondary btn-custom">5</button>
            <button onClick={this.clickEvent} type="button" className="btn btn-secondary btn-custom">6</button>
            <button onClick={this.clickEvent} type="button" className="btn btn-warning btn-custom2">-</button>
          </div>
          <div className="d-flex">
            <button onClick={this.clickEvent} type="button" className="btn btn-secondary btn-custom">1</button>
            <button onClick={this.clickEvent} type="button" className="btn btn-secondary btn-custom">2</button>
            <button onClick={this.clickEvent} type="button" className="btn btn-secondary btn-custom">3</button>
            <button onClick={this.clickEvent} type="button" className="btn btn-warning btn-custom2">+</button>
          </div>
          <div className="d-flex">
            <button onClick={this.clickEvent} type="button" className="btn btn-secondary btn-custom3">0</button>
            <button onClick={this.clickEvent} type="button" className="btn btn-secondary btn-custom">.</button>
            <button onClick={this.clickEvent} type="button" className="btn btn-warning btn-custom2">=</button>
          </div>
        </div>
      </section>
    );
  }
}
