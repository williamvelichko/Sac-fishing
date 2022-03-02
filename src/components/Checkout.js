import React from "react";
import { connect } from "react-redux";

function Checkout(props) {
  const { basket } = props;

  return <div></div>;
}
const mapState = (state) => {
  return {
    basket: state.basket,
  };
};
export default connect(mapState)(Checkout);
