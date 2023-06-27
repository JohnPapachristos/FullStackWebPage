package com.webpage.studentsystem;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class StudentServiceImpl implements StudentService{

	@Autowired
	public StudentRepository studentRepository;

	@Override
	public Student saveStudent(Student student) {
		return studentRepository.save(student);
	}
	
	
}
