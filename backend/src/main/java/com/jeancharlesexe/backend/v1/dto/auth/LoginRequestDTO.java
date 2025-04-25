package com.jeancharlesexe.backend.v1.dto.auth;

import lombok.*;

@Data
@AllArgsConstructor @NoArgsConstructor
public class LoginRequestDTO {
    private String email;
    private String password;
}
