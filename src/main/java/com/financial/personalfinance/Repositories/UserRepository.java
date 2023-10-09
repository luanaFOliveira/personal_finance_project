package com.financial.personalfinance.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.financial.personalfinance.Entities.User;

public interface UserRepository extends JpaRepository<User, Long>{
    
}
