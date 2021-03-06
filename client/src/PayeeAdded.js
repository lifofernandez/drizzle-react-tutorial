import React from "react";

class PayeeAdded extends React.Component {
  state = { dataKey: null };

  componentDidMount() {
    const { drizzle } = this.props;
    const contract = drizzle.contracts.AttributionSplitter;

    contract.events.PayeeAdded({}, (error, event) => {
        console.log(error, event);
    });
    //.on('data', (event) => console.log(event))
    //.on('changed', (event) => console.log(event))
    //.on('error', (error) => console.log(error));
    
    //.PayeeAdded({/* eventOptions */}, (error, event) => {
    // let drizzle know we want to watch the `totalShares` method
    //const dataKey = contract.methods["totalShares"].cacheCall();

    // save the `dataKey` to local component state for later reference
    //this.setState({ dataKey });
  }

  //render() {
  //  // get the contract state from drizzleState
  //  const { AttributionSplitter } = this.props.drizzleState.contracts;

  //  // using the saved `dataKey`, get the variable we're interested in
  //  const PayeeAdded = AttributionSplitter.PayeeAdded[this.state.dataKey];

  //  // if it exists, then we display its value
  //  return <p> PayeeAdded: {PayeeAdded && PayeeAdded.value}</p>;
  //}
}

export default PayeeAdded;

