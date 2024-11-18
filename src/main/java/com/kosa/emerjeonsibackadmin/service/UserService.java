package com.kosa.emerjeonsibackadmin.service;

import com.kosa.emerjeonsibackadmin.dto.User;

import java.util.List;

public interface UserService {
    public List<User> selectAllUsers();
    public User selectUserByUserNo(int userNo);
}
