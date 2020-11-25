// import logo from './logo.svg';
// import './App.css';
// 
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

import React, { Component } from 'react';

//import ReadString from "./ReadString";
//import SetString from "./SetString";

import ReadAddress from "./ReadAddress";
import ReadShares from "./ReadShares";

import PayeeAdded from "./PayeeAdded";
import PaymentReceived from "./PaymentReceived";

class App extends Component {
  state = { loading: true, drizzleState: null };

  componentDidMount() {
    const { drizzle } = this.props;
    //const contract = drizzle.contracts.AttributionSplitter;

    //contract.events.PaymentReceived({}, (error, event) => {
    //    console.log(error, event);
    //});

    // subscribe to changes in the store
    this.unsubscribe = drizzle.store.subscribe(() => {

      // every time the store updates, grab the state from drizzle
      const drizzleState = drizzle.store.getState();

      // check to see if it's ready, if so, update local component state
      if (drizzleState.drizzleStatus.initialized) {
        this.setState({ loading: false, drizzleState });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    if (this.state.loading) return "Loading Drizzle...";
    return (
      <div className="App">
        <ReadAddress
          drizzle={this.props.drizzle}
          drizzleState={this.state.drizzleState}
        />
        <ReadShares
          drizzle={this.props.drizzle}
          drizzleState={this.state.drizzleState}
        />
        <PaymentReceived
          drizzle={this.props.drizzle}
          drizzleState={this.state.drizzleState}
        />
      </div>
    );
  }
}

export default App;

