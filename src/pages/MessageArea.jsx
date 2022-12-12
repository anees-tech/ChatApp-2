import React from 'react'
import Chatbox from './messageAreaComponents/Chatbox'
import Message from './messageAreaComponents/Message'
import Sidebar from './messageAreaComponents/Sidebar'

function MessageArea() {
  return (
        <>
            <Chatbox></Chatbox>
            <Message></Message>
            <Sidebar></Sidebar>

        </>
    )
}

export default MessageArea