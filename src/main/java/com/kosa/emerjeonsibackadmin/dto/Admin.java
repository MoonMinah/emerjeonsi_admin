package com.kosa.emerjeonsibackadmin.dto;

import lombok.Data;

@Data
public class Admin {
    private String adminId;
    private String adminPassword;
    private String role;
//    private String otpSecret;
}
