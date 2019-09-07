import React, { Component, Fragment } from 'react'
import DatePicker from 'react-datepicker'
import { FormGroup, Label, Button } from 'reactstrap'

import 'react-datepicker/dist/react-datepicker.css'

class PortofolioDate extends Component {

  constructor(props) {
    super(props)
    this.state = {
        dateValue: new Date(),
        isHidden: false
    }
    this.handleChange = this.handleChange.bind(this)
  }

  setFieldValueAndTouched(date, touched) {
    const { setFieldValue, setFieldTouched } = this.props.form
    const { name } = this.props.field

    setFieldValue(name, date, true)
    setFieldTouched(name, touched, true)
  }

  handleChange(date) {
    this.setState({
        dateValue: date
    })
    
    this.setFieldValueAndTouched(date, true)
  }

  toggleDate(date) {
    this.setState({
        isHidden: !this.state.isHidden
    })

    this.setFieldValueAndTouched(date, true)
  }

  render() {
    const { canBeDisabled, label, field, form: { touched, errors } } = this.props
    // get desctructurizing at above code for touched and errors
    // const { touched, errors } = this.props.form
    const { isHidden, dateValue } = this.state

    return (
        <FormGroup>
            <Label>{label}</Label>
            <div className='input-group'>
                { !isHidden &&
                    <DatePicker
                        selected={dateValue}
                        onChange={this.handleChange}
                        peekNextMonth
                        showMonthDropdown
                        showYearDropdown
                        maxDate={new Date()}
                        dropdownMode="select"
                    />
                }
            </div>
            { canBeDisabled && !this.state.isHidden && <Button onClick={() => this.toggleDate(null)}> Still Working Here.. </Button> }
            { canBeDisabled && isHidden &&
                <Fragment>
                    <span> Still Working Here </span>
                    <Button onClick={() => this.toggleDate()}> Set Update At </Button>
                </Fragment>
            }
            {touched[field.name] && errors[field.name] && <div className="error">{errors[field.name]}</div>}
        </FormGroup>
    )
  }
}

export default PortofolioDate