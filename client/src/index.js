import React from 'react';
// import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';


// import drizzle functions and contract artifact
//import { Drizzle, generateStore } from "@drizzle/store";
import { Drizzle } from "@drizzle/store";
import AttributionSplitter from "./contracts/AttributionSplitter.json";

// let drizzle know what contracts we want and how to access our test blockchain
const options = {
  contracts: [AttributionSplitter],
  web3: {
    fallback: {
      type: "ws",
      url: "ws://127.0.0.1:7545",
    },
    events: {
      AttributionSplitter: [
        'PayeeAdded',
        'PaymentReceived',
      ],
    },
  },
};

// setup the drizzle store and drizzle
const drizzle = new Drizzle(options);

ReactDOM.render(
  <App drizzle={drizzle} />,
  document.getElementById('root')
);
//AttributionSplitter: ['PaymentReleased'],
//AttributionSplitter: ['PaymentReceived'],
//
// PayeeAdded(account, shares)
// PaymentReleased(to, amount)
// PaymentReceived(from, amount)
