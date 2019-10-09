import React, { Component } from 'react';

class Message extends Component {

  componentDidUpdate() {
    this.list.scrollTop = this.list.scrollHeight;
  }

  render() {
    return (
      <div ref={(list) => { this.list = list; }}>
        <p><span className="author">{this.props.message.author}</span> - <span className="time">{this.props.message.created_at}</span></p>
        <p>{this.props.message.content}</p>
      </div>
    );
  }
}

export default Message;
