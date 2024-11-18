package com.kosa.emerjeonsibackadmin.mapper;

import com.kosa.emerjeonsibackadmin.dto.User;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface UserMapper {
    public List<User> selectAllUsers();

    public User selectUserByUserNo(int userNo);
}
