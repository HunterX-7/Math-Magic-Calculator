import React from 'react';
import './App.css';
import Calculator from './components/calculator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App mt-5 text-center">
        <h1>Magic Math Calculator</h1>
        <Calculator />
      </div>
    );
  }
}

export default App;
