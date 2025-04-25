package com.jeancharlesexe.backend.v1.controller.auth;

import com.jeancharlesexe.backend.v1.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/v1/auth")
public class AuthController {
    @Autowired
    private UserService userService;

    @GetMapping("/login")
    public String testing(){
        return "testing";
    }
}
