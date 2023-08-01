package com.example.demo.service;

import com.example.demo.dto.IPenaltyDto;
import com.example.demo.model.CauThu;
import com.example.demo.model.Penalty;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;


import java.util.List;
import java.util.Optional;

public interface IPenaltyService {
    Page<IPenaltyDto> findAllByPenalty(Pageable pageable ,String name);
    void deleteByPenalty( Integer id);
    Optional<Penalty> findByIdPenalty(Integer id);
    List<IPenaltyDto> getAll();
}
