import React from "react";

class PaymentReceived extends React.Component {
  state = { dataKey: null };

  componentDidMount() {
    const { drizzle } = this.props;
    const contract = drizzle.contracts.AttributionSplitter;

    const dataKey = contract.events.PaymentReceived().on(
      'data', (event) => console.log("data", event)
    );
    
    this.setState({ dataKey });
  }

  render() {
    // get the contract state from drizzleState
    const { AttributionSplitter } = this.props.drizzleState.contracts;
    // const PaymentReceived = AttributionSplitter.PaymentReceived[this.state.dataKey];

    // console.log(PaymentReceived);
    // if it exists, then we display its value
    return <p>
     PaymentReceived: {PaymentReceived && PaymentReceived.value}
    </p>;
  }
}

export default PaymentReceived;

