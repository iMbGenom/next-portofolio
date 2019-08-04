import React, { Component } from 'react'

class PortofolioCreateForm extends Component {
    constructor(props) {
      super(props);
      this.state = {title: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({title: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.title);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

export default PortofolioCreateForm