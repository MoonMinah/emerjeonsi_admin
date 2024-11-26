package com.kosa.emerjeonsibackadmin.dto;

import lombok.Data;

@Data
public class UserAgeGroupChart {
    /**
     * 연령별 회원 수
     */
    private String ageGroup;
    private Long userCount;
}
