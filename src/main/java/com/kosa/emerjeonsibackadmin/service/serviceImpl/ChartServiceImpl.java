package com.kosa.emerjeonsibackadmin.service.serviceImpl;

import com.kosa.emerjeonsibackadmin.dto.MonthTotalAmountChart;
import com.kosa.emerjeonsibackadmin.dto.UserAgeGroupChart;
import com.kosa.emerjeonsibackadmin.mapper.ChartMapper;
import com.kosa.emerjeonsibackadmin.service.ChartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class ChartServiceImpl implements ChartService {

    @Autowired
    private ChartMapper chartMapper;

    @Override
    public List<MonthTotalAmountChart> getMonthlySales() {
        return chartMapper.getMonthlySales();
    }


    @Override
    public List<UserAgeGroupChart> getUserAgeGroups() {
        return chartMapper.getUserAgeGroups();
    }

    @Override
    public List<Map<String, Object>> getExhibitionReservationCount() {
        return chartMapper.getExhibitionReservationCount();
    }

    @Override
    public List<Map<String, Object>> getHourlySales(String date) {
        return chartMapper.getHourlySales(date);
    }
}
