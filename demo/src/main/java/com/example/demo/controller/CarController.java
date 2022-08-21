package com.example.demo.controller;

import java.util.LinkedList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.CarDetails;
import com.example.demo.service.CarService;

@RestController
@CrossOrigin(allowedHeaders = "*", origins = "*")
public class CarController {
	
	@Autowired
	CarService carservice;
	
	@PostMapping("/savecar/{id}")
	public ResponseEntity<CarDetails> saveNewCar(@PathVariable("id") long id, @RequestBody CarDetails cardetails)
	{
		System.out.println("inside add");
		CarDetails car=carservice.saveCarDetails(id,cardetails);
		return ResponseEntity.ok(car);
	}
	@GetMapping("/getallcar/{id}")
	public List<CarDetails> getAllCars(@PathVariable("id") long id)
	{
		return carservice.getCarsByUserId(id);
	}

}
