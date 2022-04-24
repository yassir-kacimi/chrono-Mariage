import React from 'react';
import Sidebar from "./Sidebar";
import Chat from "./Chat";


function Messages() {
  return (
    <div className='Messages'>
        <Sidebar />
        <Chat />
    </div>
  )
}

export default Messages