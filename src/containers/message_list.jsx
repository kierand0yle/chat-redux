import React, { Component } from 'react';
import Message from '../components/message';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class MessageList extends Component {

  render() {
    return (
      <div className="message-list">

      </div>
    );
  }

}


function mapStateToProps(state) {
  return {
    messages: state.messages
  };
}

export default connect(mapStateToProps)(MessageList);
