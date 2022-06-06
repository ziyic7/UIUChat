package com.java.project.ZYChat.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class ZYMessage {
    private String messageID;
    private String content;
    private String sender;
    private String receiver;
    private ZYStatus status;
}