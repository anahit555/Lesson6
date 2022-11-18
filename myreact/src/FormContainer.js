import React, { Component } from 'react';
import FormComponent from './FormComponent';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      firstName: '',
      lastName: '',
      age: '',
      destinations: '',
      isFriendly: false,
      gender: '',
      favColor: 'red',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  // handleChange(event) {
  //   const { name, value, type, checked } = event.target;
  //   type === 'checkbox' ?
  //     this.setState({ [name]: checked }) : this.setState({
  //       [name]: value
  //       // firstName: event.target.value,
  //       // lastName: event.target.value
  //       // [event.target.name]:event.target.value
  //     });
  // }

  handleChange = (key, value) => {
    this.setState({ [key]: value });
  }

  handleTextChange = (event) => {
    const { name, value } = event.target;
    this.handleChange(name, value);
  }

  handleCheckedChange = (event) => {
    const { name, checked } = event.target;
    this.handleChange(name, checked);
  }

  render() {
    return (
      <FormComponent
        // title="Some title example of parentheses"
        handleCheckedChange={this.handleCheckedChange}
        handleChange={this.handleTextChange}
        data={this.state}
      />
    );
  };
}

export default Form;