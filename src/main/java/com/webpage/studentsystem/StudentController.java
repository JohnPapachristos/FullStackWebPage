package com.webpage.studentsystem;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/student")
public class StudentController {

	@Autowired
	private StudentService studentService;
	
	@PostMapping("/add")
	public String addStudent(@RequestBody Student student) {
		studentService.saveStudent(student);
		return "Student: " + student.getName() + " saved!";
	}
	
	@GetMapping("/get")
	public List<Student> getAllStudents() {
		return studentService.getAllStudents();
	}
}
