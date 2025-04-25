package com.jeancharlesexe.backend.v1.dto.auth;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.*;
@Data
@AllArgsConstructor @NoArgsConstructor
public class RegisterRequestDTO {
    @NotBlank(message = "Full name cannot be empty")
    @Size(max = 100, message = "Full name must be less than 100 characters")
    @Pattern(regexp = "^[a-zA-Z\\s]+$", message = "Only letters and spaces are allowed")
    private String fullName;

    @NotBlank(message = "Email cannot be empty")
    @Email(message = "Email is not valid")
    @Size(max = 100, message = "Email must be less than 100 characters")
    @Pattern(regexp = ".*@.*\\..*", message = "Email must contain @ and domain")
    private String email;

    @NotBlank(message = "Password cannot be empty")
    @Size(min = 8, max = 100, message = "Password has to be between 8-100 characters")
    @Pattern(regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*()_+={}:;\"'<>,.?~`-])[A-Za-z\\d!@#$%^&*()_+={}:;\"'<>,.?~`-]{8,}$", message = "Password must contain at least one uppercase letter, one lowercase letter, one digit, one special character, and be at least 8 characters long.")
    private String password;

}