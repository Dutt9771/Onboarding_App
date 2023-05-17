
import { Box, Button, TextField } from '@mui/material'
import React, { Component } from 'react'
import * as Yup from 'yup';
import {useFormik} from 'formik';
const initialvalues ={
    name:'',
    email:'',
    password:'',
    confirmpassword:''
  }

export const Registrationschema= Yup.object({
    name:Yup.string().min(2).max(25).required('Name is required'),
    email:Yup.string().email().required('Email is required'),
    password:Yup.string().min(6).required('Password is required'),
    confirmpassword:Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required')
})



function Confirmation() {

    const {values,errors,touched,handleBlur,handleChange,handleSubmit}=useFormik({
        initialValues:initialvalues,
        validationSchema:Registrationschema,
        onSubmit:(values,action)=>{
          console.log(values)
          action.resetForm();
        }
      })


    return ( 
<form action="post" onSubmit={handleSubmit} noValidate
      autoComplete="off" >
        {/* component="form" */}
        Confirmation
        {/* <Box
      sx={{
        '& .MuiTextField-root': { m: 1, width: '40ch' },
      }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '20px',

      }}
      
      noValidate
      autoComplete="off"
    >

      <div>
        <TextField
          id="outlined-multiline-flexible"
          label="Name"
          name='name'
          type='text'
          multiline
          maxRows={4}
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          autoComplete='off'
        />
      </div>
      <div style={{color:'red'}}>
      {errors.name && touched.name ? errors.name : null}
      </div>
      <div>
        <TextField
          id="outlined-email-input"
          label="Email"
          name='email'
          type='email'
          maxRows={4}
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          autoComplete='off'


        />
      </div>
      <div style={{color:'red'}}>
      {errors.email && touched.email ? errors.email : null}
      </div>
      <div>
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          name='password'
          maxRows={4}
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          autoComplete='off'

        />
      </div>
      <div style={{color:'red'}}>
      {errors.password && touched.password ? errors.password : null}
      </div>
      <div>
        <TextField
          id="outlined-password-input"
          label="Confirm Password"
          type="password"
          name='confirmpassword'
          maxRows={4}
          value={values.confirmpassword}
          onChange={handleChange}
          onBlur={handleBlur}
          autoComplete='off'

        />
      </div>
      <div style={{color:'red'}}>
      {errors.confirmpassword && touched.confirmpassword ? errors.confirmpassword : null}
      </div>
      <div>
      <Button variant="outlined" type='submit' style={{marginTop:'10px'}}>Register</Button>

      </div>
    </Box> */}
       </form>
     );
}

export default Confirmation;