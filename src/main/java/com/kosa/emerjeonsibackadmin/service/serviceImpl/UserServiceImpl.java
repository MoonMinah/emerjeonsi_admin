package com.kosa.emerjeonsibackadmin.service.serviceImpl;

import com.kosa.emerjeonsibackadmin.dto.User;
import com.kosa.emerjeonsibackadmin.mapper.UserHistoryMapper;
import com.kosa.emerjeonsibackadmin.mapper.UserMapper;
import com.kosa.emerjeonsibackadmin.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Slf4j
@Service
public class UserServiceImpl implements UserService {
    private final UserMapper userMapper;
    private final UserHistoryMapper userHistoryMapper;

    public UserServiceImpl(UserMapper userMapper, UserHistoryMapper userHistoryMapper) {
        this.userMapper = userMapper;
        this.userHistoryMapper = userHistoryMapper;
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

    @Override
    @Transactional
    public void banUser(int userNo) {
        // '강퇴'로 회원 상태 변경
        int updateRows = userMapper.updateUserStatusToBanned(userNo);

        if(updateRows == 0) {
            throw new RuntimeException("회원 상태 업데이트 실패");
        }

        // retentionUntil 컬럼에 5년 후 일자 추가
        LocalDateTime retentionUntil = LocalDateTime.now().plusYears(5);
        // 회원 이력 테이블에 강퇴 이력과 retentionUntil 추가
        int insertedRows = userHistoryMapper.insertUserHistory(userNo, "강퇴", retentionUntil);

        if(insertedRows == 0) {
            throw new RuntimeException("회원 이력 추가 실패");
        }
    }

    public int updateUserData(User user) {
        return userMapper.updateUserData(user);
    }
}
