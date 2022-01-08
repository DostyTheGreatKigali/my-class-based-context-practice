import React from 'react';
import './App.css';
import TestContext from '../src/components/TestContext'

class App extends React.Component {
  render() {  
    return (
    <div className="App">
      <TestContext />
    </div>
  );
  }
}

export default App;
