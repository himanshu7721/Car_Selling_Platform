package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.CarDetails;
import com.example.demo.model.User;
import com.example.demo.repository.CarRepository;
import com.example.demo.repository.UserRepository;
@Service
public class CarService {
	@Autowired
	CarRepository carrepo;
	
	@Autowired
	UserRepository userrepo;
	
	public CarDetails saveCarDetails(long userid, CarDetails cardetails)
	{
		System.out.println("inside final");
		User user=userrepo.getById(userid);
		cardetails.setUser(user);
		return carrepo.save(cardetails);
		
	}

	public List<CarDetails> getCarsByUserId(long userid) {
		List<CarDetails> carlist=carrepo.findByUserId(userid);
		return carlist;
	} 
	
	public List<CarDetails> getAllCars()
	{
		return carrepo.findAll();
	}
	public String approveCar(long id,String price)
	{
		CarDetails car=carrepo.getById(id);
		car.setIsapproved(true);
		car.setCarprice(price);
		carrepo.save(car);
		return "ok";
	}

	public String rejectCar(long carid)
	{
		System.out.println("delete inside");
		carrepo.deletecarById(carid);
		System.out.println("outside delete");
		return "ok";
	}
	
	public String marksold(long id,boolean soldstatus)
	{
		CarDetails car=carrepo.getById(id);
		car.setIssold(soldstatus);
		carrepo.save(car);
		return "Marked as sold";
	}
}
