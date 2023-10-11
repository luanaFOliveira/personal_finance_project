package com.financial.personalfinance.Services;
import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.financial.personalfinance.Entities.Ano;
import com.financial.personalfinance.Entities.Mes;
import com.financial.personalfinance.Entities.User;
import com.financial.personalfinance.Repositories.AnoRepository;
import com.financial.personalfinance.Repositories.UserRepository;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    private AnoRepository anoRepository;

    public User getUserById(Long id) {
        return userRepository.findById(id).orElse(null);
    }

    
    public List<Ano> findAnosByUser(Long userId) {
        User user = userRepository.findById(userId).orElse(null); // Encontre o usuário pelo ID

        if (user != null) {
            return anoRepository.findByUserId(userId); // Busque os anos associados ao usuário
        }
        return Collections.emptyList(); // Trate o caso em que o usuário não é encontrado
    }

}
