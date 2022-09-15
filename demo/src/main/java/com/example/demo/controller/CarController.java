package com.example.demo.controller;

import java.util.LinkedList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
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
	//Save the car details
	@PostMapping("/savecar/{id}")
	public ResponseEntity<CarDetails> saveNewCar(@PathVariable("id") long id, @RequestBody CarDetails cardetails)
	{
		System.out.println("inside add");
		CarDetails car=carservice.saveCarDetails(id,cardetails);
		return ResponseEntity.ok(car);
	}
	//get all cars related to a particular user
	@GetMapping("/getusercar/{id}")
	public List<CarDetails> getAllCars(@PathVariable("id") long id)
	{
		return carservice.getCarsByUserId(id);
	}
	//get all cars
	@GetMapping("/getall")
	public List<CarDetails> getAll()
	{
		return carservice.getAllCars();
	}
	//edit car detail and make it as approved by admin
	@PutMapping("/admin/approvecar/{id}")
	public String approvecar(@PathVariable("id") long id,@RequestBody String price)
	{
		System.out.println("inside approvecar");
		return (String)carservice.approveCar(id,price);
	}
	//delete car details from database
	@DeleteMapping("/admin/rejectcar/{id}")
	public String rejectcar(@PathVariable("id") long id)
	{
		return carservice.rejectCar(id);
	}
	//edit the car detail and mark it as sold
	@PutMapping("/admin/marksold/{id}")
	public String marksold(@PathVariable("id") long id,@RequestBody boolean soldstatus)
	{
		return (String)carservice.marksold(id,soldstatus);
	}
}
