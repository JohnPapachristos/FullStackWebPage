package com.webpage.studentsystem;

import java.util.List;

public interface StudentService {
	public Student saveStudent(Student student);
	
	public List<Student> getAllStudents();
}
