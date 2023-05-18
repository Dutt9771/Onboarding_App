
import { Box, Button, Divider, Grid, InputLabel, MenuItem, Select, TextField, Typography, styled } from '@mui/material'
import React, { Component } from 'react'
import * as Yup from 'yup';
import {useFormik} from 'formik';
import { makeStyles } from '@mui/styles';
import { FormControl } from 'react-bootstrap';
const initialvalues ={
    aadharNumber:'',
    aadharDocument:'',
    pancardNumber:'',
    pancardDocument:'',
    presentAddress:'',
    permanentAddress:'',
  }
  const Item = styled(Box)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  
const useStyles = makeStyles((theme) => ({
  textField: {
    "& .MuiInputLabel-root": {
      color: "black",
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "orange",
      },
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "orange",
    },
    width: "100%",
  },
}));
export const Registrationschema= Yup.object({
    name:Yup.string().min(2).max(25).required('Name is required'),
    email:Yup.string().email().required('Email is required'),
    password:Yup.string().min(6).required('Password is required'),
    confirmpassword:Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required')
})



function UploadDocuments({activeStep,
  handleNext,
  formDataAll,
  handleBack,
  setUploadDocumentsData,
  UploadDocumentsData}) {
const classes=useStyles();
    const {values,errors,touched,handleBlur,handleChange,handleSubmit}=useFormik({
        initialValues:initialvalues,
        validationSchema:Registrationschema,
        onSubmit:(values,action)=>{
          console.log(values)
          handleNext();
          setUploadDocumentsData(values)
        }
      })


    return ( 
      <>
      <Box
        display="flex"
        justifyContent="space-between"
        sx={{ marginTop: "20px", marginBottom: "20px" }}
      >
        <Typography variant="h4">Educational Details</Typography>
        {/* <Button 
            sx={{ width:'245px',height:'52px',margin: "10px", backgroundColor:'#FF9933',color:'#FFFFFF',borderRadius:'5px'   }}
            onClick={handleAddFields}
          >
            Add Education
          </Button> */}
        <Button
          style={{
            width: "245px",
            height: "52px",
            backgroundColor: "#FF9933",
            color: "#FFFFFF",
            borderRadius: "5px",
          }}
          // onClick={handleAddFields}
        >
          Add Education
        </Button>
      </Box>
      <form>

            <Grid container spacing={2}>
              <Grid item xs={3}>
                <Item>
                  
                </Item>
              </Grid>

              <Grid item xs={3}>
                <Item>
                <TextField
                    className={classes.textField}
                    fullWidth
                    name='aadharNumber'
                    placeholder=""
                    label="Aadhar Number"
                    type="text"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.aadharNumber}
                    error={
                      errors.aadharNumber &&
                      touched.aadharNumber
                    }
                    helperText={
                      (errors.aadharNumber && touched.aadharNumber)
                        ? errors.aadharNumber
                        : null
                    }
                  />
                </Item>
              </Grid>
              
            </Grid>
            

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
            Next
          </Button>
        </Box>
      </form>
      </>
     );
}

export default UploadDocuments;