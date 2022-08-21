package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.CarDetails;
@Repository
public interface CarRepository extends JpaRepository<CarDetails, Long>{

	List<CarDetails> findByUserId(long userid);

}