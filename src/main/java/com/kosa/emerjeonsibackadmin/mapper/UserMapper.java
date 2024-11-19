package com.kosa.emerjeonsibackadmin.mapper;

import com.kosa.emerjeonsibackadmin.dto.User;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface UserMapper {
    public List<User> selectAllUsers();

    public List<User> selectUsersWithPagination(Map<String, Object> params);

    public int countAllUsers();

    public User selectUserByUserNo(int userNo);
}
