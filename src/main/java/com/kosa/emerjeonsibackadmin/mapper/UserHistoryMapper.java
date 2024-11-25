package com.kosa.emerjeonsibackadmin.mapper;

import com.kosa.emerjeonsibackadmin.dto.UserHistory;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

@Mapper
public interface UserHistoryMapper {
    public List<UserHistory> selectUserHistoryWithPagination(Map<String, Object> params);

    public int countAllUserHistory();

    public int insertUserHistory(@Param("userNo") int userNo, @Param("userStatus") String userStatus, @Param("retentionUntil") LocalDateTime retentionUntil);
}
