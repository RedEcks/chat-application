import React from "react";
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import { Cookie } from "universal-cookie";

const apiKey = 'scate8uhj85b'

const client = StreamChat.getInstance(apiKey)


const App = () => {

    return (
        <div className="app_wrapper">
            <Chat client={client} theme="team light">
                <ChannelListContainer/>

                <ChannelContainer/>
            </Chat>
        </div>
    )
}

export default App