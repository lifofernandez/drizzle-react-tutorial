import React from "react";

class readShares extends React.Component {
  state = { dataKey: null };

  componentDidMount() {
    const { drizzle } = this.props;
    const contract = drizzle.contracts.AttributionSplitter;

    // let drizzle know we want to watch the `totalShares` method
    const dataKey = contract.methods["totalShares"].cacheCall();

    // save the `dataKey` to local component state for later reference
    this.setState({ dataKey });
  }

  render() {
    // get the contract state from drizzleState
    const { AttributionSplitter } = this.props.drizzleState.contracts;

    // using the saved `dataKey`, get the variable we're interested in
    const totalShares = AttributionSplitter.totalShares[this.state.dataKey];

    // if it exists, then we display its value
    return <p>Total shares: {totalShares && totalShares.value}</p>;
  }
}

export default readShares;
