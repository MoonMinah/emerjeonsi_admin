package com.kosa.emerjeonsibackadmin.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ExhibitionData {

    private String title;               // 전시회 제목
    private String cntcInsttNm;        // 연계기관명
    private String collectedDate;      // 수집일 (DATETIME 형식)
    private String issuedDate;            // 자료 생성 일자 (DATETIME 형식)
    private String imageUrl;            // 이미지 주소
    private String localId;             // 전시 ID
    private String url;                 // 홈페이지 주소
    private Integer viewCount = 0;              // 조회수 (기본값 0)
    private String subDescription;      // 좌석 정보
    private String spatialCoverage;     // 예매 안내
    private String eventSite;           // 장소
    private String genre;               // 장르
    private String duration;            // 관람시간
    private String numberPages;         // 전시품(수) 정보
    private String tableOfContents;     // 안내 및 유의사항
    private String author;              // 작가
    private String contactPoint;        // 문의
    private String actor;               // 출연진 및 제작진
    private String contributor;         // 주최/후원
    private Integer audience;               // 연령
    private String charge;              // 관람료 할인정보
    private Integer period;                 // 기간
    private Integer eventPeriod;            // 시간
    private String description;         // 전시회 소개
}