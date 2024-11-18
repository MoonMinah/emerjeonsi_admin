package com.kosa.emerjeonsibackadmin.service.serviceImpl;

import com.kosa.emerjeonsibackadmin.dto.Exhibition;
import com.kosa.emerjeonsibackadmin.mapper.AdminMapper;
import com.kosa.emerjeonsibackadmin.service.AdminService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminServiceImpl implements AdminService {
    private final AdminMapper adminMapper;

    public AdminServiceImpl(AdminMapper adminMapper) {
        this.adminMapper = adminMapper;
    }
    @Override
    public int saveExhibitions(List<Exhibition> exhibitions) {
        return adminMapper.saveExhibitions(exhibitions);
    }
}
