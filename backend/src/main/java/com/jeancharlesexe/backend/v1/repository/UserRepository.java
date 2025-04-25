package com.jeancharlesexe.backend.v1.repository;

import com.jeancharlesexe.backend.v1.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {}