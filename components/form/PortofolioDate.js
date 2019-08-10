import React, { Component } from 'react'
import DatePicker from 'react-datepicker'
import { FormGroup, Label } from 'reactstrap'

import 'react-datepicker/dist/react-datepicker.css'

class PortofolioDate extends Component {

  constructor(props) {
    super(props)
    this.state = {
        dateValue: new Date()
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(date) {
    this.setState({
        dateValue: date
    })
  }

  render() {
    const { label } = this.props

    return (
        <FormGroup>
            <Label>{label}</Label>
            <div className='input-group'>
                <DatePicker
                    selected={this.state.dateValue}
                    onChange={this.handleChange}
                    peekNextMonth
                    showMonthDropdown
                    showYearDropdown
                    maxDate={new Date()}
                    dropdownMode="select"
                />
            </div>
        </FormGroup>
    )
  }
}

export default PortofolioDate 