package com.kosa.emerjeonsibackadmin.service;

import com.kosa.emerjeonsibackadmin.dto.UserHistory;

import java.util.List;

public interface UserHistoryService {
    public List<UserHistory> selectUserHistoryWithPagination(int page, int size);

    public int countAllUserHistory();
}
