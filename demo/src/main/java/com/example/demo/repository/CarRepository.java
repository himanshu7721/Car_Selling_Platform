package com.example.demo.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.model.CarDetails;
@Repository
@Transactional
public interface CarRepository extends JpaRepository<CarDetails, Long>{

	List<CarDetails> findByUserId(long userid);
	@Modifying
	@Query(value = "DELETE FROM Car_Details c WHERE c.id=?1", nativeQuery = true)
	  int deletecarById(long id);

}
