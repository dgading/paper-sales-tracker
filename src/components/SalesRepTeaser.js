import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';


const SalesRepTeaser = ({
  firstName,
  lastName,
  email,
  currentSales,
  addSale,
  removeSale
}) => (
  <li>
    <h3>{firstName} {lastName}</h3>
    <b>Email: </b> {email} <br />
    <b>Current Sales: </b> {currentSales}
    <Button 
      label="Click Me"
      onclick={addSale}
    />
    <Button 
      label="Or Click Me"
      onclick={removeSale}
    />
  </li>
);

SalesRepTeaser.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  currentSales: PropTypes.number.isRequired,
  addSale: PropTypes.func,
  removeSale: PropTypes.func,
}

export default SalesRepTeaser;
