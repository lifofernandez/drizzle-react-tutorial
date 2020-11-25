//import React from "react";
//
//class ReadString extends React.Component {
//  componentDidMount() {
//    const { drizzle, drizzleState } = this.props;
//    console.log(drizzle);
//    console.log(drizzleState);
//  }
//
//  render() {
//    return <div>ReadString Component</div>;
//  }
//}
//
//export default ReadString;

import React from "react";

class ReadString extends React.Component {
  state = { dataKey: null };

  componentDidMount() {
    const { drizzle } = this.props;
    const contract = drizzle.contracts.AttributionSplitter;

    // let drizzle know we want to watch the `attr` method
    const dataKey = contract.methods["attr"].cacheCall();

    // save the `dataKey` to local component state for later reference
    this.setState({ dataKey });
  }

  render() {
    // get the contract state from drizzleState
    const { AttributionSplitter } = this.props.drizzleState.contracts;

    // using the saved `dataKey`, get the variable we're interested in
    const attr = AttributionSplitter.attr[this.state.dataKey];

    // if it exists, then we display its value
    return <p>My stored string: {attr && attr.value}</p>;
  }
}

export default ReadString;
