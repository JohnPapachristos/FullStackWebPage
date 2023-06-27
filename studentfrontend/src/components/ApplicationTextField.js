import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {useEffect, useState} from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';

export default function BasicTextFields() {
	const[name,setName]=useState('')
	const[address,setAddress]=useState('')
	const[students,setStudents]=useState([])
	const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
	 function handleClick(e) {
	    e.preventDefault()
	    
		const student = {name,address};
	    console.log(student);
	    fetch("http://localhost:8080/student/add", {
		method:"POST",
		headers:{"Content-Type":"application/json"},
		body:JSON.stringify(student)
	}).then(()=>{
		console.log("New student added.");
	})
	  }
	  
	  
	 useEffect(()=>{
		  fetch("http://localhost:8080/student/get")
		  .then(res=>res.json())
		  .then((result)=>{
		    setStudents(result);
		  }
		)
},[])
	
  return (	
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="name" label="Student name" variant="outlined" fullWidth
      value={name}
      onChange={(e)=>setName(e.target.value)}
      />
      <TextField id="address" label="Student adress" variant="outlined" fullWidth
      value={address}
      onChange={(e)=>setAddress(e.target.value)}
      />
      <Stack direction="row" spacing={2} style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%"
      }}>
      
    </Stack>
    <Button variant="contained" onClick={handleClick}>
        Send
      </Button>
      
      <Paper elevation={3} style={paperStyle}>
      <h2>STUDENTS</h2>
      	{students.map(student=>(
		<Paper elevation={6} style={{margin:"10px",padding:"15px",textAlign:"left"}} key={student.id}>
			Id:{student.id}<br></br>
			Name:{student.name}<br></br>
			Address:{student.address}<br></br>
			</Paper>
			
))}
      
      </Paper>
    </Box>
    
  );
}



