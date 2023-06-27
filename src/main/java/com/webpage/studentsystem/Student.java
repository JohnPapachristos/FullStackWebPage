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
	
	public void setId(final int id) {
		this.id = id;
	}
	
	public int getId() {
		return this.id;
	}
	
	public void setName(final String name) {
		this.name = name;
	}
	
	public String getName() {
		return this.name;
	}
	
	public void setAddress(final String address) {
		this.address = address;
	}
	
	public String getAddress() {
		return this.address;
	}
}
