import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Customer from './Customer.js'

class CustomersCollection  extends Component {

  constructor(props){
    super(props);

    this.state = {
      customerList: [],
    }
  }

  displayCustomers = () => {
  return this.state.customerList.map( (customer) => {
    console.log("printing customer",customer.name);
    return <Customer name={customer.name} key={customer.id}/>
  });
}

  componentDidMount() {
    console.log("The component did in fact mount");
    const GET_ALL_CUSTOMERS = "http://localhost:3000/customers";

    axios.get(GET_ALL_CUSTOMERS)
    .then((response) => {
      this.setState({
        customerList: response.data,
      });
    })
    .catch((error) => {
      this.setState({
        error: error.message
      });
    });
  }

  render() {
    return (
      <div>
      <section>
      <h1>Testing That the Customers Pg shows up! </h1>
      </section>
      <section>
      {this.displayCustomers()}
      </section>
      </div>

    )
  }
}

// Customers.propTypes = {
//
// };

export default CustomersCollection ;