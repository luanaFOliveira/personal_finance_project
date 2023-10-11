package com.financial.personalfinance.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.financial.personalfinance.Entities.Ano;

public interface AnoRepository extends JpaRepository<Ano, Long>{
    
    @Query("SELECT a FROM Ano a WHERE a.user.id = ?1")
    List<Ano> findByUserId(Long id);
}
