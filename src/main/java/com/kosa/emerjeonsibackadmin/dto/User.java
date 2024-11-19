package com.kosa.emerjeonsibackadmin.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class User {
    private int userNo;
    private String userId;
    private String password;

    @NotBlank(message = "이메일은 필수 입력 할목입니다.")
    @Email(message = "유효한 이메일 형식이어야 합니다.")
    private String email;

    @NotBlank(message = "이름은 필수 입력 항목입니다.")
    @Size(max = 50, message = "이름은 50자 이하로 입력해주세요.")
    private String userName;

    @NotBlank(message = "성별은 필수 항목입니다.")
    @Pattern(regexp = "^(남|여)$", message = "성별은 '남' 또는 '여' 중에 선택해주세요.")
    private String gender;

    @NotBlank(message = "생년월일은 필수 항목입니다.")
    @Pattern(regexp = "^\\d{4}-\\d{2}-\\d{2}$|^\\d{8}$", message = "생년월일은 'YYYYMMDD' 또는 'YYYY-MM-DD' 형식으로 입력해주세요.")
    private String birthday;

    @NotBlank(message = "전화번호는 필수 항목입니다.")
    @Pattern(regexp = "^01[0-9]-([0-9]{3,4})-([0-9]{4})$", message = "전화번호 형식이 올바르지 않습니다. (예: 010-1234-5678)")
    private String phone;

    private String role;
    private String provider;
}
