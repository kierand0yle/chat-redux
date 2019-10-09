import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createMessage } from '../actions';


class MessageForm extends Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  handleChange = () => {
    this.setState({value: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createMessage(this.props.selectedChannel, this.props.currentUser, this.state.value);
    this.setState({value: ''});
  }

  render() {
    return (
      <div className="message-form">
        <form className="simple_form search" onSubmit={this.handleSubmit}>
          <label>
            <input className="form-control string required" type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <button type="submit" value="Send" class="btn btn-flat">Send</button>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { createMessage: createMessage },
    dispatch
  );
}


function mapStateToProps(state) {
  return {
    selectedChannel: state.selectedChannel,
    currentUser: state.currentUser
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
