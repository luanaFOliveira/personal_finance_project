package com.financial.personalfinance.Services;
import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;

import com.financial.personalfinance.Entities.Mes;
import com.financial.personalfinance.Entities.User;
import com.financial.personalfinance.Repositories.MesRepository;
import com.financial.personalfinance.Repositories.UserRepository;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    private MesRepository mesRepository;
//@Query("SELECT t FROM Tutorial t WHERE t.published=true")


    public User getUserById(Long id) {
        return userRepository.findById(id).orElse(null);
    }

    public List<Mes> findMesesByUser(Long userId) {
        User user = userRepository.findById(userId).orElse(null); // Encontre o usuário pelo ID

        if (user != null) {
            return mesRepository.findByUserId(userId); // Busque os meses associados ao usuário
        }
        return Collections.emptyList(); // Trate o caso em que o usuário não é encontrado
    }
}
