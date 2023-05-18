
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



function Confirmation({activeStep,
  handleNext,
  formDataAll,
  handleBack,
  setConfirmationData,
  confirmationData}) {

    const {values,errors,touched,handleBlur,handleChange,handleSubmit}=useFormik({
        initialValues:initialvalues,
        validationSchema:Registrationschema,
        onSubmit:(values,action)=>{
          handleNext();
          console.log(values)
          setConfirmationData(values)
        }
      })


    return ( 
<Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
          <Button
            color="inherit"
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{ mr: 1 }}
          >
            Back
          </Button>
          <Box sx={{ flex: "1 1 auto" }} />

          <Button
            style={{
              width: "245px",
              height: "52px",
              backgroundColor: "#FF9933",
              color: "#FFFFFF",
              borderRadius: "5px",
            }}
            onClick={handleSubmit}
          >
            Finish
          </Button>
        </Box>
     );
}

export default Confirmation;