import React from 'react';
import './App.css';
import Header from './Header';

function App() {
  return (
    // BEM convention - lowercase classNames
    <div className="app">
      <h1>Hello Clever Programmers, let's build the Amazon Store </h1>
      {/* Header */}
      <Header />
      {/* Home */}
    </div>
  );
}

export default App;
