import React, { Component } from 'react';

import Creditcard from './work';

//import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Creditcard companyName='Credit Card' 
        cardNumber='7253 3256 7895 1245'
         validThru='11/50'
         CardHolder='Cardholder'
         />
        
      </div>
    );
  }
}

export default App;
