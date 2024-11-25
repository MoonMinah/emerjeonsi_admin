package com.kosa.emerjeonsibackadmin.service.serviceImpl;

import com.kosa.emerjeonsibackadmin.dto.UserHistory;
import com.kosa.emerjeonsibackadmin.mapper.UserHistoryMapper;
import com.kosa.emerjeonsibackadmin.service.UserHistoryService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Slf4j
@Service
public class UserHistoryServiceImpl implements UserHistoryService {
    private final UserHistoryMapper userHistoryMapper;

    public UserHistoryServiceImpl(UserHistoryMapper userHistoryMapper) {
        this.userHistoryMapper = userHistoryMapper;
    }

    @Override
    public List<UserHistory> selectUserHistoryWithPagination(int page, int size) {
        int offset = (page - 1) * size;

        Map<String, Object> params = new HashMap<>();
        params.put("offset", offset);
        params.put("size", size);

        return userHistoryMapper.selectUserHistoryWithPagination(params);
    }

    @Override
    public int countAllUserHistory() {
        return userHistoryMapper.countAllUserHistory();
    }
}
