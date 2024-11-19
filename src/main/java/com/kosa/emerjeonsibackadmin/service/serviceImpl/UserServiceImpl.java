package com.kosa.emerjeonsibackadmin.service.serviceImpl;

import com.kosa.emerjeonsibackadmin.dto.User;
import com.kosa.emerjeonsibackadmin.mapper.UserMapper;
import com.kosa.emerjeonsibackadmin.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Slf4j
@Service
public class UserServiceImpl implements UserService {
    private final UserMapper userMapper;

    public UserServiceImpl(UserMapper userMapper) {
        this.userMapper = userMapper;
    }

    @Override
    public List<User> selectAllUsers() {
        return userMapper.selectAllUsers();
    }

    @Override
    public List<User> selectUsersWithPagination(int page, int size) {
        int offset = (page - 1) * size;

        Map<String, Object> params = new HashMap<>();
        params.put("offset", offset);
        params.put("size", size);

        return userMapper.selectUsersWithPagination(params);
    }

    @Override
    public int countAllUsers() {
        return userMapper.countAllUsers();
    }

    @Override
    public User selectUserByUserNo(int userNo) {
        return userMapper.selectUserByUserNo(userNo);
    }
}
