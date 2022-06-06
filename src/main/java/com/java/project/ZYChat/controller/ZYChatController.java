package com.java.project.ZYChat.controller;

import com.java.project.ZYChat.model.ZYMessage;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class ZYChatController {
    @MessageMapping("/msg")
    @SendTo("/topic/public")
    public ZYMessage receivePublicMessage(@Payload ZYMessage message) {
        return message;
    }
}
