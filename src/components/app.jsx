import React from 'react';
import MessageList from '../containers/message_list';
import ChannelList from '../containers/channel_list';
import SideBar from '../components/sidebar';


const App = () => {
  return (
    <div className="app">
      <SideBar />
      <ChannelList />
      <MessageList />
    </div>
  );
};

export default App;
