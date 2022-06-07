package com.java.project.ZYChat.controller;

import com.java.project.ZYChat.model.ZYMessage;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;

@Controller
@CrossOrigin
public class ZYChatController {
    @MessageMapping("/chat.join")
    @SendTo("/topic/public")
    public ZYMessage receiveJoinRequest(@Payload ZYMessage message) {
        return message;
    }

    @MessageMapping("/chat.msg")
    @SendTo("/topic/public")
    public ZYMessage receiveMessage(@Payload ZYMessage message) {
        return message;
    }
}
