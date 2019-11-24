import React from "react";
import { connect } from "react-redux";

const Header = props => {
  return (
    <>
      <figure className="image is-128x128">
        <img src={props.car.image} alt={props.car.name} />
      </figure>
      <h2>{props.car.name}</h2>
      <p>Base Amount: {props.car.price}</p>
      <p>Extras: {props.additionalPrice}</p>
      <p>Total: {props.additionalPrice + props.car.price}</p>
    </>
  );
};

const mapStateToProps = state => {
  return {
    car: state.car,
    additionalPrice: state.additionalPrice
  };
};

export default connect(mapStateToProps, {})(Header);
