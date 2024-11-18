package com.kosa.emerjeonsibackadmin.controller.main;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Slf4j
@Controller
@RequestMapping("/admin")
public class MainViewController {
    @GetMapping({"", "/", "/home"})
    public String home() {
        return "index";
    }

    @GetMapping("/login")
    public String loginForm() {
        return  "login";
    }
}
