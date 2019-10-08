import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class ChannelList extends Component {

  render() {
    return (
      <div className="channel-list">

      </div>
    );
  }

}


function mapStateToProps(state) {
  return {
    channels: state.channels
  };
}

export default connect(mapStateToProps)(ChannelList);
