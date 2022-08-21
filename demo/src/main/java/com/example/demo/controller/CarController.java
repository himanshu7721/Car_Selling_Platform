package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.CarDetails;
import com.example.demo.service.CarService;

@RestController
@CrossOrigin(allowedHeaders = "*", origins = "*")
public class CarController {
	
	@Autowired
	CarService carservice;
	
	@PostMapping("/savecar")
	public ResponseEntity<CarDetails> saveNewCar(@RequestBody CarDetails cardetails)
	{
		CarDetails car=carservice.saveCarDetails(cardetails);
		return ResponseEntity.ok(car);
	}

}
