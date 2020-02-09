import React from 'react';
import PropTypes from "prop-types";

export const SayHello = ({ match = {params: {}} }) => {
  console.log('render SayHello');
  const { name='Daniel Chan' } = match.params;
  return (
    <div>
      <h4>Hello {name} !</h4>
    </div>
  );
};

SayHello.prototype = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

export default SayHello;