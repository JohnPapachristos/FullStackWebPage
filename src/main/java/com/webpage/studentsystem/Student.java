package com.webpage.studentsystem;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Student {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String name;
	private String address;

	
	private Student() {
		
	}
	
	private void setId(final int id) {
		this.id = id;
	}
	
	private int getId() {
		return this.id;
	}
	
	private void setName(final String name) {
		this.name = name;
	}
	
	private String getName() {
		return this.name;
	}
	
	private void setAddress(final String address) {
		this.address = address;
	}
	
	private String getAddress() {
		return this.address;
	}
}
