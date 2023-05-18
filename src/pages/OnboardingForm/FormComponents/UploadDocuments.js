
import { Box, Button, Divider, Grid, InputLabel, MenuItem, Select, TextField, Typography, styled } from '@mui/material'
import React, { Component, useEffect } from 'react'
import * as Yup from 'yup';
import {useFormik} from 'formik';
import { makeStyles } from '@mui/styles';
import { FormControl } from 'react-bootstrap';
import { Dropzone, FileMosaic, FullScreen, ImagePreview, VideoPreview } from '@files-ui/react';
const initialvalues ={
    aadharNumber:'',
    aadharDocument:null,
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


const [aadharDocument, setAadharDocument] = React.useState([]);
const [pancardDocument, setPancardDocument] = React.useState([]);

const aadharDocumentFilesAdd = (incommingFiles) => {
  setAadharDocument(incommingFiles);
 };
const aadharDocumentremove = (id) => {
  setAadharDocument(aadharDocument.filter((x) => x.id !== id));
 };
const pancardDocumentFilesAdd = (incommingFiles) => {
  setPancardDocument(incommingFiles);
 };
const pancardDocumentremove = (id) => {
  setPancardDocument(pancardDocument.filter((x) => x.id !== id));
 };

  useEffect(()=>{
    setFieldValue("aadharDocument", aadharDocument);
    setFieldValue("pancardDocument", pancardDocument);
  },[aadharDocument,pancardDocument])
    const {values,errors,touched,handleBlur,handleChange,handleSubmit,setFieldValue}=useFormik({
        initialValues:initialvalues,
        onSubmit:(values,action)=>{
          // console.log("filesAdd",aadharDocument)
          // setFieldValue("aadharDocument", aadharDocument);
          // if(values.aadharDocument){
            formDataAll(values)
            console.log(values)
            handleNext();
            setUploadDocumentsData(values)
          // }
        }
      })
      console.log(values)


    return ( 
      <>
      <Box
        display="flex"
        justifyContent="space-between"
        sx={{ marginTop: "20px", marginBottom: "20px" }}
      >
        <Typography variant="h4">Educational Details</Typography>
        {/* <Button
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
        </Button> */}
      </Box>
      <form onSubmit={handleSubmit}>

            <Grid container spacing={2}>
            <Grid item xs={6}>
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

            
            <Grid item xs={6}>
                <Item>
                <TextField
                    className={classes.textField}
                    fullWidth
                    name='pancardNumber'
                    placeholder=""
                    label="Pancard Number"
                    type="text"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.pancardNumber}
                    error={
                      errors.pancardNumber &&
                      touched.pancardNumber
                    }
                    helperText={
                      (errors.pancardNumber && touched.pancardNumber)
                        ? errors.pancardNumber
                        : null
                    }
                  />
                </Item>
              </Grid>
              <Grid item xs={6}>
                <Item>
                <Dropzone color="#FF9933"
          style={{ width: '100%' }}
          onChange={aadharDocumentFilesAdd}
          value={aadharDocument}
          label="Upload Aadharcard Document"
          behaviour={"add"}
         >
           {aadharDocument.length > 0 &&
            aadharDocument.map((file) => (
               <FileMosaic
                key={file.id}
                 {...file}
                onDelete={aadharDocumentremove}
                info
                preview
               />
             ))}
         </Dropzone>
         
     </Item>
     </Grid>
              <Grid item xs={6}>
                <Item>
                <Dropzone color="#FF9933"
          style={{ width: '100%' }}
          onChange={pancardDocumentFilesAdd}
          value={pancardDocument}
          label="Upload"
          behaviour={"add"}
          accept={"image/*"}
    maxFileSize={28 * 1024*1024}
    maxFiles={2}
          footerConfig={{ customMessage: "Upload Pancard Document" }}
         >
           {pancardDocument.length > 0 &&
            pancardDocument.map((file) => (
               <FileMosaic
                key={file.id}
                 {...file}
                onDelete={pancardDocumentremove}
                info
                preview
               />
             ))}
         </Dropzone>

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
          type="submit"
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