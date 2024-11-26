package com.kosa.emerjeonsibackadmin.service;

import com.kosa.emerjeonsibackadmin.dto.MonthTotalAmountChart;
import com.kosa.emerjeonsibackadmin.dto.UserAgeGroupChart;

import java.util.List;
import java.util.Map;

public interface ChartService {

    public List<MonthTotalAmountChart> getMonthlySales();
//    public List<ExhibitionReservationCountStatistic> getExhibitionReservationCount();
    public List<UserAgeGroupChart> getUserAgeGroups();

    // 전시별 예약 비율
    List<Map<String, Object>> getExhibitionReservationCount();

    // 시간대별 총 매출
    List<Map<String, Object>> getHourlySales(String date);

}
