import React, { Component } from 'react';
import Header from './components/Header';
import SalesRepTeaser from './components/SalesRepTeaser';
import { salesreps } from './data/data';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      salesReps: salesreps,
    }
  }

  addSale(id) {
    let salesReps = this.state.salesReps;
    const repPosition = salesReps.findIndex(salesRep => salesRep.id === id);
    salesReps[repPosition].currentSales++;
    salesReps.sort((a, b) => {return b.currentSales - a.currentSales});
    this.setState({salesReps: salesReps});
  }

  removeSale(id) {
    let salesReps = this.state.salesReps;
    const repPosition = salesReps.findIndex(salesRep => salesRep.id === id);
    salesReps[repPosition].currentSales--;
    if(salesReps[repPosition].currentSales >= 0) {
      salesReps.sort((a, b) => {return b.currentSales - a.currentSales});
      this.setState({salesReps: salesReps});
    } else {
      return false;
    }
    
  }

  render() {
    return (
      <div>
        <Header title="Dunder Mifflin Paper Sales Tracker" />
        <h2>Sales Rep List</h2>
        <ol>
          {salesreps.map(salesrep => (
            <SalesRepTeaser 
              key={salesrep.id}
              firstName={salesrep.firstName}
              lastName={salesrep.lastName}
              email={salesrep.email}
              currentSales={salesrep.currentSales}
              addSale={() => this.addSale(salesrep.id)}
              removeSale={() => this.removeSale(salesrep.id)}
            />
          ))}
        </ol>
      </div>
    );
  }
}

export default App;
