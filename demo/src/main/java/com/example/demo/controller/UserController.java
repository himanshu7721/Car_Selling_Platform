package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.LoginModel;
import com.example.demo.model.User;
import com.example.demo.service.AuthenticationService;

@RestController
@CrossOrigin(allowedHeaders = "*",origins = "*")
public class UserController {
	@Autowired
	AuthenticationService authservice;
	
	@PostMapping("/signup")
	public ResponseEntity<User> usersignup(@RequestBody User user)
	{
		User getuser=authservice.addnewuser(user);
		return ResponseEntity.ok(getuser);
	}
	@PostMapping("/login")
	public ResponseEntity<User> userlogin(@RequestBody LoginModel loginmodel)
	{
		User user=authservice.loginUser(loginmodel);
		return ResponseEntity.ok(user);
	}
	
	
}
