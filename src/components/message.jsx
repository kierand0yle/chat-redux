import React, { Component } from 'react';

class Message extends Component {

  render() {
    return (
      <div className="message channel-content">
        <p><span className="author">{this.props.message.author}</span> - <span className="time">{this.props.message.created_at}</span></p>
        <p>{this.props.message.content}</p>
      </div>
    );
  }

}

export default Message;
