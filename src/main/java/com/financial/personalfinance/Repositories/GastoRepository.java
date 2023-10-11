package com.financial.personalfinance.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.financial.personalfinance.Entities.Gasto;

public interface GastoRepository extends JpaRepository<Gasto, Long>{
    
}