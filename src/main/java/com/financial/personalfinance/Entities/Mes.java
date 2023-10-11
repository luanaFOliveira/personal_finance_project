package com.financial.personalfinance.Entities;

import java.math.BigDecimal;
import java.util.List;

import jakarta.annotation.Generated;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Mes {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(nullable = false)
    private String nome;
   
    @Column(nullable = false)
    private BigDecimal totalGasto;
    @Column(nullable = false)
    private BigDecimal metaGasto;

    @ManyToOne
    @JoinColumn(name = "ano_id")
    private Ano ano;

    @OneToMany(mappedBy = "mes", cascade = CascadeType.ALL)
    private List<Gasto> gastos;


}
