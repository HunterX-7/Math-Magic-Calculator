import { Route, Routes, Link } from 'react-router-dom';
import React from 'react';
import './App.css';
import Calculator from './components/calculator';
import Home from './components/home';
import Quote from './components/quote';

const App = () => (
  <>
    <nav className="navbar navbar-dark bg-dark navbar-expand">
      <div className="container">
        <Link className="navbar-brand" to="./">Math Magic Calculator</Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="./">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/calculator">Calculator </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/quote">Quote</Link>
          </li>
        </ul>
      </div>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/quote" element={<Quote />} />
    </Routes>
  </>
);

export default App;
