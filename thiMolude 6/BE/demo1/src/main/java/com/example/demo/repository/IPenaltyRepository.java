package com.example.demo.repository;

import com.example.demo.dto.IPenaltyDto;
import com.example.demo.model.CauThu;
import com.example.demo.model.Penalty;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

public interface IPenaltyRepository extends JpaRepository<Penalty, Long> {
    @Query(value = "SELECT p.id,p.ma_penalty AS maPenalty, ct.ten_cau_thu AS tenCauThu,dt.ten_doi_tuyen AS tenDoiTuyen,p.goc_suat AS gocSuat,p.xac_suat AS xacSuat FROM penalty AS p\n" +
            "INNER JOIN cau_thu ct on p.cau_thu_id = ct.id\n" +
            "INNER JOIN doi_tuyen dt on ct.doi_tuyen_id = dt.id " +
            "WHERE ct.ten_cau_thu LIKE concat('%',:name,'%') AND p.xoa_penalty=false", nativeQuery = true)
    Page<IPenaltyDto> findAllByPenalty(Pageable pageable, @Param("name") String name);


    @Query(value = "select *\n" +
            "FROM penalty AS p\n" +
            "WHERE p.id = :id\n" +
            "AND p.xoa_penalty = false", nativeQuery = true)
    Optional<Penalty> findById(@Param("id") Integer id);

    @Transactional
    @Modifying
    @Query(value = "UPDATE penalty AS p\n" +
            "SET p.xoa_penalty = true\n" +
            "WHERE p.id = :id", nativeQuery = true)
    void deleteByPenalty(@Param("id") Integer id);

    @Query(value = "SELECT Count(c.id) AS id ,c.ten_cau_thu AS tenCauThu,p.xac_suat AS xacSuat from cau_thu AS c\n" +
            "INNER join penalty p on c.id = p.cau_thu_id\n" +
            "where P.xac_suat='Có'\n" +
            "group by c.ten_cau_thu\n" +
            "limit 5", nativeQuery = true)
    List<IPenaltyDto> getAll();
}
