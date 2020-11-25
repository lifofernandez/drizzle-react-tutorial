//import React from "react";
//
//class ReadAddress extends React.Component {
//  componentDidMount() {
//    const { drizzle, drizzleState } = this.props;
//    console.log(drizzle);
//    console.log(drizzleState);
//  }
//
//  render() {
//    return <div>ReadAddress Component</div>;
//  }
//}
//
//export default ReadAddress;

import React from "react";

class ReadAddress extends React.Component {
  state = { dataKey: null };

  componentDidMount() {
    const { drizzle } = this.props;
    const contract = drizzle.contracts.AttributionSplitter;

    // let drizzle know we want to watch the `addr` method
    const dataKey = contract.methods["addr"].cacheCall();

    // save the `dataKey` to local component state for later reference
    this.setState({ dataKey });
  }

  render() {
    // get the contract state from drizzleState
    const { AttributionSplitter } = this.props.drizzleState.contracts;

    // using the saved `dataKey`, get the variable we're interested in
    const addr = AttributionSplitter.addr[this.state.dataKey];

    // if it exists, then we display its value
    return <p>Attribution to address: {addr && addr.value}</p>;
  }
}

export default ReadAddress;
