package com.kosa.emerjeonsibackadmin.service;

import com.kosa.emerjeonsibackadmin.dto.User;

import java.util.List;
import java.util.Map;

public interface UserService {
    public List<User> selectAllUsers();

    public List<User> selectUsersWithPagination(int page, int size);

    public int countAllUsers();

    public User selectUserByUserNo(int userNo);

    public boolean updateUser(int userNo, User user);
}
