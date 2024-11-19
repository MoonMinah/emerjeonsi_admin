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

    @Override
    public boolean updateUser(int userNo, User user) {
        try {
            log.info("updateUser() : userNo = {} / user = {}", userNo, user);

            User resultUser = selectUserByUserNo(userNo);

            if(resultUser == null) {
                log.warn("userNo {}로 조회한 결과 User 데이터가 존재하지 않습니다.", userNo);

                return false;
            }

            // 받은 데이터를 User 객체에 set
            if(user.getEmail() != null) {
                resultUser.setEmail(user.getEmail());
            }

            if(user.getUserName() != null) {
                resultUser.setUserName(user.getUserName());
            }

            if(user.getGender() != null) {
                resultUser.setGender(user.getGender());
            }

            if(user.getBirthday() != null) {
                resultUser.setBirthday(user.getBirthday());
            }

            if(user.getPhone() != null) {
                resultUser.setPhone(user.getPhone());
            }

            // 수정된 회원 정보 저장
            int updateResult = updateUserData(resultUser);

            return updateResult > 0;
        } catch (Exception e) {
            log.error("userNo {}의 회원 정보 수정 중 오류 발생 : {}", userNo, e.getMessage(), e);

            return false;
        }
    }

    public int updateUserData(User user) {
        return userMapper.updateUserData(user);
    }
}
