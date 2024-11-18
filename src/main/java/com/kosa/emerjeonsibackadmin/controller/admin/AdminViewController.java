package com.kosa.emerjeonsibackadmin.controller.admin;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Slf4j
@Controller
@RequestMapping("/admin")
public class AdminViewController {
    @GetMapping("/users")
    public String usersData() {
        return "usersTable";
    }

    @GetMapping("/users/history")
    public String usersHistoryData() {
        return "usersHistory";
    }

    @GetMapping("/users/{userNo}")
    public ModelAndView userDetail(@PathVariable int userNo) {
        ModelAndView modelAndView = new ModelAndView("userDetails");
        modelAndView.addObject("userNo", userNo);

        return modelAndView;
    }
}
