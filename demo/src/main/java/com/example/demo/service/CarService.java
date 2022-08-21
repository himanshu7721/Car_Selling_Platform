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

}