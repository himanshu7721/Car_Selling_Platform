package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.CarDetails;

public interface CarRepository extends JpaRepository<CarDetails, Long>{

}
