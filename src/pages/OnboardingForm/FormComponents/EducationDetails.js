import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Paper,
  Select,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import React, { Component, useEffect, useState } from "react";
import { useFormik } from "formik";
import { makeStyles } from "@mui/styles";

import New from "./new";
import { EducationDetailsschema } from "../../../validation/EducationDetailsschema";


const Item = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
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
function EducationDetails({
  activeStep,
  handleNext,
  formDataAll,
  handleBack,
  educationDetailsDataAll,
  educationDetailsData,
}) {
  const initialValues = {
    educationDetails: [
      {
        educationType: "",
        instituteName: "",
        course: "",
        cgpa: "",
        passingYear: "",
      },
    ],
    // totalExperience: "",
    // company: "",
    // designation: "",
    // technology: "",
    // fromDate: "",
    // toDate: "",
    // jobChange: "",
    // companyPresent:false
  };

  const classes = useStyles();
  // useEffect(() => {
  //   if (educationDetailsData) {
  //     setValues(educationDetailsData);
  //   }
  // }, []);

  const educationType = ["B.E./B.Tech.", "M.E./M.Tech.", "BSC", "MSC"];
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    isValid,
    dirty,
    setValues,
  } = useFormik({
    initialValues,
    validationSchema: EducationDetailsschema,
    onSubmit: (values, action) => {
      if (values) {
        handleNext();
        educationDetailsDataAll(values);
        formDataAll(values);
        // console.log(values);
      }
      // action.resetForm();
    },
  });
  const handleAddEducation = () => {
    console.log(values);
    setValues({
      ...values,
      educationDetails: [
        ...values.educationDetails,
        {
          educationType: "",
          instituteName: "",
          course: "",
          cgpa: "",
          passingYear: "",
        },
      ],
    });
  };

  const handleRemoveEducationField = (index) => {
    const educationDetails = [...values.educationDetails];
    educationDetails.splice(index, 1);
    setValues({
      ...values,
      educationDetails,
    });
  };

  // Function to handle file upload

  console.log(values);
  return (
    <>
    <New />
      <Box sx={{ marginTop: "20px", marginBottom: "20px" }}>
        <Typography variant="h4">Education Details</Typography>
      </Box>
      <Box
        sx={{
          marginTop: "20px",
          marginBottom: "20px",
          display: "flex",
          justifyContent: "end",
          alignItems: "end",
        }}
      >
        <Button
          style={{
            width: "200px",
            height: "40px",
            backgroundColor: "#FF9933",
            color: "#FFFFFF",
            borderRadius: "5px",
          }}
          onClick={handleAddEducation}
        >
          ADD Education
        </Button>
      </Box>

      <Box sx={{ marginTop: "20px", marginBottom: "20px" }}>
        <form
          action="post"
          onSubmit={handleSubmit}
          noValidate
          autoComplete="off"
        >
          {/* <Box sx={{ flexGrow: 1 }}> */}
            {values.educationDetails.map((education, index) => (
      
              

              <Grid container spacing={2} key={index}>
            <Grid item xs={3}>
                
                  <div>
                    <FormControl fullWidth className={classes.textField}>
                      <InputLabel id="label">
                        Education Type
                      </InputLabel>
                      <Select
                        label="Education Type"
                        id="label"
                        name={`educationDetail[${index}].educationType`}
                        value={values.educationDetail[index].educationType}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        error={errors.educationType && touched.educationType}
                        helperText={
                          errors.educationType && touched.educationType
                            ? errors.educationType
                            : null
                        }
                      >
                       <MenuItem value="">Select</MenuItem>
                        {educationType.map((item,index) => (
                          <MenuItem value={item} key={index}>{item}</MenuItem>
                        ))}
                      </Select>
                      {errors.educationType && touched.educationType && (
                        <FormHelperText style={{ color: "#d32f2f" }}>
                          {errors.educationType}
                        </FormHelperText>
                      )}
                    </FormControl>
                  </div>
                
              </Grid>
            <Grid item xs={3}>
                
                  <div>
                    <FormControl fullWidth className={classes.textField}>
                      <InputLabel id="label">
                        Institute Name
                      </InputLabel>
                      <Select
                        label="Institute Name"
                        id="label"
                      
                        name={`educationDetail[${index}].instituteName`}
                        value={values.educationDetail[index].instituteName}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        error={errors.instituteName && touched.instituteName}
                        helperText={
                          errors.instituteName && touched.instituteName
                            ? errors.instituteName
                            : null
                        }
                      >
                        <MenuItem value="">Select</MenuItem>
                        <MenuItem value="SSEC,Bhavnagar">SSEC,Bhavnagar</MenuItem>
                        <MenuItem value="GEC,Bhavnagar">GEC,Bhavnagar</MenuItem>
                        <MenuItem value="GEC,Modasa">GEC,Modasa</MenuItem>
                      </Select>
                      {errors.instituteName && touched.instituteName && (
                        <FormHelperText style={{ color: "#d32f2f" }}>
                          {errors.instituteName}
                        </FormHelperText>
                      )}
                    </FormControl>
                  </div>
                
              </Grid>
              
              <Grid item xs={3}>
                
                  <div>
                    <FormControl fullWidth className={classes.textField}>
                      <InputLabel id="label">
                        Course
                      </InputLabel>
                      <Select
                        label="Course"
                        id="label"
                        name={`educationDetail[${index}].course`}
                        value={values.educationDetail[index].course}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        error={errors.course && touched.course}
                        helperText={
                          errors.course && touched.course
                            ? errors.course
                            : null
                        }
                      >
                        <MenuItem value="">Select</MenuItem>
                        <MenuItem value="IT">IT</MenuItem>
                        <MenuItem value="CE">CE</MenuItem>
                        <MenuItem value="BSC-IT">BSC-IT</MenuItem>
                        <MenuItem value="MSC-IT">MSC-IT</MenuItem>
                      </Select>
                      {errors.course && touched.course && (
                        <FormHelperText style={{ color: "#d32f2f" }}>
                          {errors.course}
                        </FormHelperText>
                      )}
                    </FormControl>
                  </div>
                
              </Grid>

              <Grid item xs={3}>
                
                  <div>
                    <TextField
                      id="outlined-text-input"
                      label="CGPA/Percentage"
                      type="text"
                      className={classes.textField}
                      name={`educationDetail[${index}].cgpa`}
                        value={values.educationDetail[index].cgpa}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      autoComplete="off"
                      error={errors.cgpa && touched.cgpa}
                      helperText={
                        errors.cgpa && touched.cgpa
                          ? errors.cgpa
                          : null
                      }
                    />
                  </div>
                
              </Grid>
              <Grid item xs={3}>
                
                  <div>
                    <TextField
                      id="outlined-multiline-input"
                      label="Passing Year"
                      type="date"
                      className={classes.textField}
                      name={`educationDetail[${index}].passingYear`}
                      value={values.educationDetail[index].passingYear}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      autoComplete="off"
                      error={errors.passingYear && touched.passingYear}
                      helperText={
                        errors.passingYear && touched.passingYear ? errors.passingYear : null
                      }
                    />
                  </div>
                
              </Grid>
              <Grid item xs={3}>
                
                  <div>
                    <TextField
                      id="outlined-multiline-input"
                      label="Total Experience (Year)"
                      type="text"
                      className={classes.textField}
                      name={`educationDetail[${index}].totalExperience`}
                        value={values.educationDetail[index].totalExperience}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      autoComplete="off"
                      error={errors.totalExperience && touched.totalExperience}
                      helperText={
                        errors.totalExperience && touched.totalExperience
                          ? errors.totalExperience
                          : null
                      }
                    />
                  </div>
              
                
              </Grid>
</Grid>

))} 
             
            <Box
              sx={{
                "& .MuiTextField-root": { m: 1, width: "40ch" },
              }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "20px",
              }}
              noValidate
              autoComplete="off"
            >
            </Box>
            <Box sx={{ marginTop: "20px", marginBottom: "20px" }}>
              <Typography variant="h4">
                Experience (Add all experiences)
              </Typography>
            </Box>
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <Item>
                  <div>
                    <TextField
                      id="outlined-multiline-input"
                      label="Company Name"
                      name="company"
                      type="number"
                      className={classes.textField}
                      value={values.company}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      autoComplete="off"
                      error={errors.company && touched.company}
                      helperText={
                        errors.company && touched.company
                          ? errors.company
                          : null
                      }
                    />
                  </div>
                </Item>
              </Grid>
              <Grid item xs={3}>
                <Item>
                  <div>
                    <TextField
                      id="outlined-multiline-input"
                      label="Designation"
                      name="designation"
                      type="number"
                      className={classes.textField}
                      value={values.designation}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      autoComplete="off"
                      error={errors.designation && touched.designation}
                      helperText={
                        errors.designation && touched.designation
                          ? errors.designation
                          : null
                      }
                    />
                  </div>
                </Item>
              </Grid>
              <Grid item xs={3}>
                <Item>
                  <div>
                    <TextField
                      id="outlined-multiline-input"
                      label="Technology"
                      name="technology"
                      type="number"
                      className={classes.textField}
                      value={values.technology}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      autoComplete="off"
                      error={errors.technology && touched.technology}
                      helperText={
                        errors.technology && touched.technology
                          ? errors.technology
                          : null
                      }
                    />
                  </div>
                </Item>
              </Grid>
              <Grid item xs={3}>
                <Item>
                  <div>
                    <TextField
                      id="outlined-multiline-input"
                      label="Reason For Job Change"
                      name="jobChange"
                      type="text"
                      className={classes.textField}
                      value={values.jobChange}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      autoComplete="off"
                      error={errors.jobChange && touched.jobChange}
                      helperText={
                        errors.jobChange && touched.jobChange
                          ? errors.jobChange
                          : null
                      }
                    />
                  </div>
                </Item>
              </Grid>
              
              <Grid item xs={3}>
                <Item>
                  <div>
                    <TextField
                      id="outlined-multiline-input"
                      label="From Date"
                      name="fromDate"
                      type="date"
                      className={classes.textField}
                      value={values.fromDate}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      autoComplete="off"
                      error={errors.fromDate && touched.fromDate}
                      helperText={
                        errors.fromDate && touched.fromDate
                          ? errors.fromDate
                          : null
                      }
                    />
                  </div>
                </Item>
              </Grid>
              <Grid item xs={3}>
                <Item>
                  <div>
                    <TextField
                      id="outlined-multiline-input"
                      style={values.companyPresent ? { display: "none" } : {}}
                      label="To Date"
                      name="toDate"
                      type="date"
                      className={classes.textField}
                      value={values.toDate}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      autoComplete="off"
                      error={errors.toDate && touched.toDate}
                      helperText={
                        errors.toDate && touched.toDate ? errors.toDate : null
                      }
                    />
                  </div>
                </Item>
              </Grid>
              
            </Grid>
            </form>
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
              disabled={!isValid || !dirty}
            >
              Next
            </Button>
          </Box>
    </>
  );
}

export default EducationDetails;
