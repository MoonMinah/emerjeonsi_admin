package com.kosa.emerjeonsibackadmin.mapper;

import com.kosa.emerjeonsibackadmin.dto.Admin;
import com.kosa.emerjeonsibackadmin.dto.Exhibition;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface AdminMapper {
    public Admin selectAdminByAdminId(String adminId);
    public int saveExhibitions(List<Exhibition> exhibitions);
}
