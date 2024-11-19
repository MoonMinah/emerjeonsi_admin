package com.kosa.emerjeonsibackadmin.service;

import com.kosa.emerjeonsibackadmin.dto.User;

import java.util.List;

public interface UserService {
    public List<User> selectAllUsers();

    public List<User> selectUsersWithPagination(int page, int size);

    public int countAllUsers();

    public User selectUserByUserNo(int userNo);
}
