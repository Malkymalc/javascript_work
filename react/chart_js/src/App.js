import React, { Component } from 'react';
import './App.css';

import Chart from './Components/Chart';

class App extends Component {
  render() {
    return (
      <div className="App">
         <header>
            <h1 >Chart.js Demo</h1>
         </header>

         <main id="main">
            <Chart />
         </main>

         <footer id="footer">
            <p>This is the footer</p>
         </footer>

      </div>
    );
  }
}

export default App;
