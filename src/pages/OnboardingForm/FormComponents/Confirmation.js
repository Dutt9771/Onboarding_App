
import { Box, Button, TextField,Typography } from '@mui/material'
import React, { Component, useEffect } from 'react'
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
  formData,
  handleBack,
  setConfirmationData,
  confirmationData,
  handleEditForm}) {
    
    useEffect(()=>{
    console.log("formData====> ",formData)
    },[])
    const {values,errors,touched,handleBlur,handleChange,handleSubmit}=useFormik({
        initialValues:initialvalues,
        validationSchema:Registrationschema,
        onSubmit:(values,action)=>{
          handleNext();
          console.log(values)
          setConfirmationData(values)
        }
      })
      const edit=(value)=>{
        console.log("value from Confirmation==>",value)
        handleEditForm(value);
      }

    return ( 
      <>
      <Box>
      <Typography  variant='h4' style={{textAlign:'left'}}>Personal Details <Button onClick={()=>edit("PersonalDetails")}>Edit</Button></Typography>
      <Box sx={{marginLeft:'10px'}}>
      <Typography  variant='h6' style={{textAlign:'left'}}>First Name :- {formData.firstName ? formData.firstName : "-----"}</Typography>
      <Typography  variant='h6' style={{textAlign:'left'}}>Middle Name :- {formData.middleName ? formData.middleName : "-----"}</Typography>
      <Typography  variant='h6' style={{textAlign:'left'}}>Last Name :- {formData.lastName ? formData.lastName : "-----"}</Typography>
      <Typography  variant='h6' style={{textAlign:'left'}}>Birthdate  :- {formData.birthDate ? formData.birthDate : "-----"}</Typography>
      <Typography  variant='h6' style={{textAlign:'left'}}>Email :- {formData.email ? formData.email : "-----"}</Typography>
      <Typography  variant='h6' style={{textAlign:'left'}}>Contact Number :- {formData.contactNumber ? formData.contactNumber : "-----"}</Typography>
      <Typography  variant='h6' style={{textAlign:'left'}}>Alternate Contact Number :- {formData.alternateContactNumber ? formData.alternateContactNumber : "-----"}</Typography>
      <Typography  variant='h6' style={{textAlign:'left'}}>Gender :- {formData.gender ? formData.gender : "-----"}</Typography>
      <Typography  variant='h6' style={{textAlign:'left'}}>Github :- {formData.github ? formData.github : "-----"}</Typography>
      <Typography  variant='h6' style={{textAlign:'left'}}>Linkdin :- {formData.linkdin ? formData.linkdin : "-----"}</Typography>
      <Typography  variant='h6' style={{textAlign:'left'}}>BloodGroup :- {formData.bloodGroup ? formData.bloodGroup : "-----"}</Typography>
      <Typography  variant='h6' style={{textAlign:'left'}}>Marital Status :- {formData.maritalStatus ? formData.maritalStatus : "-----"}</Typography>
      </Box>
      <Typography  variant='h4' style={{textAlign:'left',marginTop:'10px'}}>Bank Details</Typography>
      <Box sx={{marginLeft:'10px'}}>
      <Typography  variant='h6' style={{textAlign:'left'}}>Bank Name :- {formData.bankName ? formData.bankName : "-----"}</Typography>
      <Typography  variant='h6' style={{textAlign:'left'}}>Account Number :- {formData.accountNumber ? formData.accountNumber : "-----"}</Typography>
      <Typography  variant='h6' style={{textAlign:'left'}}>IFSC Code :- {formData.ifsc ? formData.ifsc : "-----"}</Typography>
      <Typography  variant='h6' style={{textAlign:'left'}}>Branch  :- {formData.branch ? formData.branch : "-----"}</Typography>
      </Box>
      </Box>
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
            </>
     );
}

export default Confirmation;