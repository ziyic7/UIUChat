import React, { useEffect } from "react";

let messageCount = 0;

export default function ChatBox(props) {

    messageCount = props.msg.length;
    
    useEffect(() => {
        let height = document.querySelector(".message-box").scrollHeight;
        document.querySelector(".message-box").scrollTo(0, height);
    }, [messageCount]);

    return (
        <div className="chat-box">
            <ul className="message-box">
                {props.msg.map((message, index) => (
                    message.status === "CHAT"?
                        <li className="chat-item" key={index}>
                            <div>
                                <p className="chat-item-name">{message.sender}</p>
                                <p className="chat-item-text">{message.content}</p>
                            </div>
                        </li>
                    :
                        <li className="join-notify" key={index}>
                            <p className="join-notify-text">
                                <i>{message.sender} {message.status.toLowerCase()} this room</i>
                            </p>
                        </li>
                ))}
            </ul>
        </div>
    );
}