import React from "react";
import { connect } from "react-redux";
import { buyItem } from "../actions/actions";

const AdditionalFeature = props => {
  const addItem = e => {
    e.preventDefault();
    // check to see if item is already in features, if so, don't add a new object
    if (props.features.find(el => el === props.feature)) {
    } else {
      props.buyItem(props.feature);
      console.log("Props from Additional Feature: ", props.feature);
    }
  };

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={addItem}>
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
  return {
    features: state.car.features,
    additionalPrice: state.additionalPrice
  };
};

export default connect(mapStateToProps, { buyItem })(AdditionalFeature);
