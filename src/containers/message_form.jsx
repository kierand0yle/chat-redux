import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


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
    this.createMessage(channel, author, content);
    this.setState({value: ''});
  }

  render() {
    return (
      <div className="message-form">
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }

}


function mapStateToProps(state) {
  return {
    channels: state.channels
  };
}

export default connect(mapStateToProps)(MessageForm);
