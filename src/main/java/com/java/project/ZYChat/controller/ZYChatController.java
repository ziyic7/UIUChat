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
    @MessageMapping("/free")
    @SendTo("/topic/free")
    public ZYMessage receiveFreeChatMessage(@Payload ZYMessage message) {
        return message;
    }

    @MessageMapping("/outdoor")
    @SendTo("/topic/outdoor")
    public ZYMessage receiveOutdoorMessage(@Payload ZYMessage message) {
        return message;
    }

    @MessageMapping("/second-hand")
    @SendTo("/topic/second-hand")
    public ZYMessage receiveSHMessage(@Payload ZYMessage message) {
        return message;
    }

    @MessageMapping("/leasing")
    @SendTo("/topic/leasing")
    public ZYMessage receiveLeasingMessage(@Payload ZYMessage message) {
        return message;
    }
}
