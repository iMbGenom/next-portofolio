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
    const { setFieldValue, setFieldTouched } = this.props.form
    const { name } = this.props.field

    this.setState({
        dateValue: date
    })

    setFieldValue(name, date, true)
    setFieldTouched(name, true, true)
  }

  render() {
    const { label, field, form: { touched, errors } } = this.props
    // get desctructurizing at above code for touched and errors
    // const { touched, errors } = this.props.form

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
            {touched[field.name] && errors[field.name] && <div className="error">{errors[field.name]}</div>}
        </FormGroup>
    )
  }
}

export default PortofolioDate 