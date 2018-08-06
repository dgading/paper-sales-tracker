import React, { Component } from 'react';
import Header from './components/Header';
import { salesreps } from './data/data';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      salesReps: salesreps,
    }
  }

  render() {
    return (
      <div>
        <Header title="Dunder Mifflin Paper Sales Tracker" />
        <h2>Sales Rep List</h2>
        <ol>
          {salesreps.map(salesrep => (
            <li key={salesrep.id}>
              <h3>{salesrep.firstName} {salesrep.lastName}</h3>
              <b>Email: </b> {salesrep.email} <br />
              <b>Current Sales: </b> {salesrep.currentSales}
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default App;
