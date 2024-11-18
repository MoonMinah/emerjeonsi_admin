package com.kosa.emerjeonsibackadmin.controller.admin;

import com.kosa.emerjeonsibackadmin.dto.Exhibition;
import com.kosa.emerjeonsibackadmin.dto.User;
import com.kosa.emerjeonsibackadmin.service.AdminService;
import com.kosa.emerjeonsibackadmin.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import java.io.IOException;
import java.net.URI;
import java.util.List;
import java.util.Map;

@Slf4j
@RestController
@RequestMapping("/api/admin")
public class AdminRestController {
    private final UserService userService;
    private final AdminService adminService;
    private final RestTemplate restTemplate;
    private JSONObject jsonObject;

    public AdminRestController(UserService userService, AdminService adminService, RestTemplate restTemplate) {
        this.userService = userService;
        this.adminService = adminService;
        this.restTemplate = restTemplate;
    }

    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userService.selectAllUsers();
    }

    @GetMapping("/users/{userNo}")
    public ResponseEntity<User> getUserDetails(@PathVariable int userNo) {
        log.info("userNo = {}", userNo);

        User user = userService.selectUserByUserNo(userNo);
        log.info("getUserDetails() : user = {}", user);

        if(user == null) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(user);
    }

    @GetMapping("/exhibitions-origin")
    public ResponseEntity<String> exhibitionsOriginData() {
        String serviceKey = "";
        String url = "http://api.kcisa.kr/openapi/API_CCA_145/request";;

        // URL 생성
        URI uri = UriComponentsBuilder.fromHttpUrl(url)
                .queryParam("serviceKey", serviceKey)
                .queryParam("resultType", "json")
                .queryParam("numOfRows", "100")
                .queryParam("pageNo", "1")
                .build(true)
                .toUri();

//        restTemplate = new RestTemplate();

        String responseString = "";

        try {
            // API 요청
            responseString = restTemplate.getForObject(uri, String.class);

            // 응답 확인(JSON 형태인지 HTML로 시작하는지)
            if(responseString != null && responseString.trim().startsWith("<")) {
                throw new IOException("JSON 대신 HTML 응답을 받았습니다. API URL 또는 매개변수를 확인하세요.");
            }

            try {
                // JSON 파싱 시도
                jsonObject = (JSONObject) new JSONParser().parse(responseString);
            } catch (Exception e) {
                throw new IOException("JSON 응답을 파싱하지 못했습니다. 응답은 JSON 형식이 아닐 수 있습니다.");
            }

            // JSON에서 원하는 데이터 추출
            JSONObject response = (JSONObject) jsonObject.get("response");
            JSONObject body = (JSONObject) response.get("body");
            JSONObject items = (JSONObject) body.get("items");
            JSONArray itemArray = (JSONArray) items.get("item");

            for(Object obj : itemArray) {
                JSONObject item = (JSONObject) obj;
//                System.out.println("전시명: " + item.get("TITLE"));
//                System.out.println("연계기관명: " + item.get("CNTC_INSTT_NM"));
//                System.out.println("수집일: " + item.get("COLLECTED_DATE"));
//                System.out.println("자료생성일자: " + item.get("ISSUED_DATE"));
//                System.out.println("소개(설명): " + item.get("DESCRIPTION"));
//                System.out.println("이미지주소: " + item.get("IMAGE_OBJECT"));
//                System.out.println("전시ID: " + item.get("LOCAL_ID"));
//                System.out.println("홈페이지주소: " + item.get("URL"));
//                System.out.println("조회수: " + item.get("VIEW_COUNT"));
//                System.out.println("좌석정보: " + item.get("SUB_DESCRIPTION"));
//                System.out.println("예매안내: " + item.get("SPATIAL_COVERAGE"));
//                System.out.println("장소: " + item.get("EVENT_SITE"));
//                System.out.println("장르: " + item.get("GENRE"));
//                System.out.println("관람시간: " + item.get("DURATION"));
//                System.out.println("전시품(수)정보: " + item.get("NUMBER_PAGES"));
//                System.out.println("안내 및 유의사항: " + item.get("TABLE_OF_CONTENTS"));
//                System.out.println("작가: " + item.get("AUTHOR"));
//                System.out.println("문의: " + item.get("CONTACT_POINT"));
//                System.out.println("출연진및제작진: " + item.get("ACTOR"));
//                System.out.println("주최/후원: " + item.get("CONTRIBUTOR"));
//                System.out.println("연령: " + item.get("AUDIENCE"));
//                System.out.println("관람료 할인정보: " + item.get("CHARGE"));
//                System.out.println("기간: " + item.get("PERIOD"));
//                System.out.println("시간: " + item.get("EVENT_PERIOD"));
            }

            return ResponseEntity.ok(responseString);
        } catch (IOException e) {
            System.err.println("Error: " + e.getMessage());

            return ResponseEntity.status(500).body("API 응답 형식 오류: JSON 대신 HTML이 수신되었습니다.");
        } catch (Exception e) {
            System.err.println("Error: " + e.getMessage());

            return ResponseEntity.status(500).body("예기치 않은 오류 발생: " + e.getMessage());
        }
    }

    @PostMapping("/exhibitions-origin/save")
    public String saveExhibitions(@RequestBody Map<String, Object> data) {
        List<Exhibition> exhibitions = (List<Exhibition>) data.get("exhibitions"); // "exhibitions" 키에 맞게 조정
        if (exhibitions != null && !exhibitions.isEmpty()) {
            adminService.saveExhibitions(exhibitions);
            return "데이터 저장 완료";
        } else {
            return "저장할 데이터가 없습니다.";
        }
    }
}
