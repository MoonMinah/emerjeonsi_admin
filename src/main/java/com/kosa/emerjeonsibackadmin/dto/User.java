package com.kosa.emerjeonsibackadmin.dto;

import lombok.Data;

@Data
public class User {
    private int userNo;
    private String userId;
    private String password;
    private String email;
    private String userName;
    private String gender;
    private String birthday;
    private String phone;
    private String role;
    private String provider;
}
