import React, { Component } from 'react' 
import { connect } from 'react-redux'
import * as actions from '../actions'

class Feature extends Component {
  componentWillMount() {
    this.props.fetchMessage()
  }

  render() {
    return <div>{this.props.secret}</div>
  }
}

function mapStateToProps(state) {
  return { secret: state.auth.secret }
}

export default connect(mapStateToProps, actions)(Feature)