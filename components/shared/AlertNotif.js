import React, { Component } from 'react'
import { Alert } from 'reactstrap'

class AlertNotif extends Component {
  constructor(props) {
    super(props)

    this.state = {
      visible: true
    }

    this.onDismiss = this.onDismiss.bind(this)
  }

  onDismiss() {
    this.setState({
        visible: false
    })
  }

  render() {
    return (
      <Alert color="danger">
      {/* <Alert color="danger" isOpen={this.state.visible} toggle={this.onDismiss}> */}
        {this.props.children}
      </Alert>
    )
  }
}

export default AlertNotif