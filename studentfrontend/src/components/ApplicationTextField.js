import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {useState} from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function BasicTextFields() {
	const[name,setName]=useState('')
	const[address,setAddress]=useState('')
	
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
    </Box>
    
  );
}



