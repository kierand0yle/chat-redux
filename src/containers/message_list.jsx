import React, { Component } from 'react';
import Message from '../components/message';
import MessageForm from './message_form';


import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMessages } from '../actions';


class MessageList extends Component {

  componentWillMount() {
    // this.props.fetchMessages(this.props.selectedChannel);
    this.fetchMessages();
  }

  componentDidMount() {
    this.refresher = setInterval(this.fetchMessages, 5000);
  }

  componentDidUpdate() {
    this.list.scrollTop = this.list.scrollHeight;
  }

  componentWillUnmount() {
    clearInterval(this.refresher);
  }

  fetchMessages = () => {
    this.props.fetchMessages(this.props.selectedChannel);
  }

  render() {
    return (
      <div className="message-container">
        <div className="channel-title">
          <h3><strong>Channel #{this.props.selectedChannel}</strong></h3>
        </div>
        <div className="channel-content" ref={(list) => { this.list = list; }}>
          {
            this.props.messages.map((message) => {
              return <Message message={message} key={message.id} />;
            })
          }
        </div>
        <MessageForm />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchMessages: fetchMessages },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    selectedChannel: state.selectedChannel
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
