package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.CarDetails;
import com.example.demo.repository.CarRepository;
@Service
public class CarService {
	@Autowired
	CarRepository carrepo;
	
	public CarDetails saveCarDetails(CarDetails cardetails)
	{
		return carrepo.save(cardetails);
	}

}
