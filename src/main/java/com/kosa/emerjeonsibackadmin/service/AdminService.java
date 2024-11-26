package com.kosa.emerjeonsibackadmin.service;

import com.kosa.emerjeonsibackadmin.dto.Exhibition;
import com.kosa.emerjeonsibackadmin.dto.ExhibitionData;

import java.util.List;

public interface AdminService {


    void saveExhibitionData(ExhibitionData exhibitionData);

    List<ExhibitionData> getAllExhibitionsData();

    void saveExhibition(Exhibition exhibition);

    List<Exhibition> getAllExhibitions();

    Exhibition getExhibitionByLocalId(String localId);
}