import React from "react";
import { connect } from "react-redux";
import { removeFeature } from "../actions/actions.js";

const AddedFeature = props => {
  const removeFeature = e => {
    console.log(props.additionalPrice);
    props.removeFeature(props.feature);
  };

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={removeFeature}>
        X
      </button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = state => {
  return {
    additionalPrice: state.additionalPrice
  };
};

export default connect(mapStateToProps, { removeFeature })(AddedFeature);
