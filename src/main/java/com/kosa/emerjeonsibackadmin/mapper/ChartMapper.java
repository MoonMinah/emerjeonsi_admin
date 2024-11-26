package com.kosa.emerjeonsibackadmin.mapper;


import com.kosa.emerjeonsibackadmin.dto.MonthTotalAmountChart;
import com.kosa.emerjeonsibackadmin.dto.UserAgeGroupChart;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface ChartMapper {
    public List<MonthTotalAmountChart> getMonthlySales();

    public List<UserAgeGroupChart> getUserAgeGroups();

    // 전시별 예약 비율
    List<Map<String, Object>> getExhibitionReservationCount();

    // 시간대별 총 매출
    List<Map<String, Object>> getHourlySales(String date);
}
