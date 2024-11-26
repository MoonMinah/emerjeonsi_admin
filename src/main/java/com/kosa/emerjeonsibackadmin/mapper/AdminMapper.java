package com.kosa.emerjeonsibackadmin.mapper;

import com.kosa.emerjeonsibackadmin.dto.Admin;
import com.kosa.emerjeonsibackadmin.dto.Exhibition;
import com.kosa.emerjeonsibackadmin.dto.ExhibitionData;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface AdminMapper {
    public Admin selectAdminByAdminId(String adminId);

    void saveExhibitionData(ExhibitionData exhibitionData);

    List<ExhibitionData> getAllExhibitionsData();

    void saveExhibition(Exhibition exhibition);

    List<Exhibition> getAllExhibitions();

    Exhibition getExhibitionByLocalId(String localId);
}
