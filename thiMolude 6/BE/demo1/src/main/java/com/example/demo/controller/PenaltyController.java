package com.example.demo.controller;

import com.example.demo.dto.IPenaltyDto;
import com.example.demo.model.Penalty;
import com.example.demo.service.IPenaltyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/penalty")
@CrossOrigin("*")
public class PenaltyController {
    @Autowired
    private IPenaltyService iPenaltyService;

    @GetMapping("/")
    public ResponseEntity<Page<IPenaltyDto>> getAll(@PageableDefault(size = 4) Pageable pageable, @RequestParam("name") String name) {
        Page<IPenaltyDto> penaltyPage = iPenaltyService.findAllByPenalty(pageable, name);
        if (penaltyPage.isEmpty() && penaltyPage == null) {
            return new ResponseEntity<>(penaltyPage, HttpStatus.BAD_REQUEST);

        } else {
            return new ResponseEntity<>(penaltyPage, HttpStatus.OK);

        }
    }

    @GetMapping("/top5")
    public ResponseEntity<List<IPenaltyDto>>getAll(){
        List<IPenaltyDto> findAll=iPenaltyService.getAll();
        return  new ResponseEntity<>(findAll,HttpStatus.OK);
    }
    @GetMapping("/delete/{id}")

    public ResponseEntity<Boolean> deletePenalty(@PathVariable("id") Integer id) {
        Optional<Penalty> optionalPenalty = iPenaltyService.findByIdPenalty(id);
        if (!optionalPenalty.isPresent()) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        } else {
            iPenaltyService.deleteByPenalty(id);
            return new ResponseEntity<>(HttpStatus.OK);
        }
    }

}
