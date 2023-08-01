package com.example.demo.service;

import com.example.demo.dto.IPenaltyDto;
import com.example.demo.model.CauThu;
import com.example.demo.model.Penalty;
import com.example.demo.repository.IPenaltyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class PenaltyService implements IPenaltyService {
    @Autowired
    private IPenaltyRepository iPenaltyRepository;

    @Override
    public Page<IPenaltyDto> findAllByPenalty(Pageable pageable, String name) {
        return iPenaltyRepository.findAllByPenalty(pageable, name);
    }



    @Override
    @Transactional
    public void deleteByPenalty(Integer id) {
       iPenaltyRepository.deleteByPenalty(id);

    }

    @Override
    public Optional<Penalty> findByIdPenalty(Integer id) {
        return iPenaltyRepository.findById(id);
    }

    @Override
    public List<IPenaltyDto> getAll() {
        return iPenaltyRepository.getAll();
    }


}
