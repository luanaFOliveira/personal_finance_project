package com.financial.personalfinance.Repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.financial.personalfinance.Entities.Mes;

public interface MesRepository extends JpaRepository<Mes, Long>{
    
    @Query("SELECT m FROM Mes m WHERE m.ano.id = ?1")
    List<Mes> findByAnoId(Long id);
}
