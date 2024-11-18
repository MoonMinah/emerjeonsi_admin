package com.kosa.emerjeonsibackadmin.mapper;

import com.kosa.emerjeonsibackadmin.dto.Admin;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface AdminMapper {
    public Admin selectAdminByAdminId(String adminId);
}
