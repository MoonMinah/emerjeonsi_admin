package com.kosa.emerjeonsibackadmin.service.serviceImpl;

import com.kosa.emerjeonsibackadmin.dto.Exhibition;
import com.kosa.emerjeonsibackadmin.dto.ExhibitionData;
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
/*    @Override
    public int saveExhibitions(List<Exhibition> exhibitions) {
        return adminMapper.saveExhibitions(exhibitions);
    }*/

    @Override
    public void saveExhibitionData(ExhibitionData exhibitionData) {
        adminMapper.saveExhibitionData(exhibitionData);
    }

    @Override
    public List<ExhibitionData> getAllExhibitionsData() {
        return adminMapper.getAllExhibitionsData();
    }

    @Override
    public void saveExhibition(Exhibition exhibition) {
        adminMapper.saveExhibition(exhibition);
    }

    @Override
    public List<Exhibition> getAllExhibitions() {
        return adminMapper.getAllExhibitions();
    }

    @Override
    public Exhibition getExhibitionByLocalId(String localId) {
        return adminMapper.getExhibitionByLocalId(localId); // mapper 호출 결과를 반환
    }


}
