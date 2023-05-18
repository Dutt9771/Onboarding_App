import React, { useEffect } from "react";

import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import {
  Box,
  Button,
  Checkbox,
  Divider,
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
import { makeStyles } from "@mui/styles";
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
export default function New({
  activeStep,
  handleNext,
  formDataAll,
  handleBack,
  setEducationDetailsData,
  educationDetailsData,
}) {
  const classes = useStyles();

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
    experienceDetails: [
      {
        totalExperience: "",
        company: "",
        designation: "",
        technology: "",
        fromDate: "",
        toDate: "",
        jobChange: "",
        companyPresent: false,
      },
    ],
  };

  // const onSubmit = (values) => {
  //   if (values) {
  //     handleNext();
  //     educationDetailsDataAll(values);
  //     formDataAll(values);
  //     // console.log(values);
  //   }
  // };

  const educationType = ["B.E./B.Tech.", "M.E./M.Tech.", "BSC", "MSC"];
  const instituteName = ["SSEC,Bhavnagar", "GEC,Bhavnagar", "GEC,Modasa"];
  const designations = [
    "Manager",
    "Developer",
    "Designer",
    "Marketing Specialist",
    "Sales Representative",
    "HR Manager",
  ];
  const companies = [
    "Microsoft",
    "Apple",
    "Amazon",
    "Google",
    "Facebook",
    "Twitter",
    "LinkedIn",
    "Netflix",
    "Tesla",
    "Uber",
    "Salesforce",
    "Adobe",
    "Intel",
    "Oracle",
    "IBM",
    "HP",
  ];
  const technologies = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Angular",
    "Vue.js",
    "jQuery",
    "Ember.js",
    "Backbone.js",
    "Node.js",
    "Express.js",
    "Koa.js",
    "Django",
    "Flask",
    "Ruby on Rails",
    "ASP.NET",
    "Laravel",
    "Symfony",
  ];

  const course = ["IT", "CE", "BSC-IT", "MSC-IT"];
  const {
    values,
    handleChange,
    handleSubmit,
    handleBlur,
    setValues,
    errors,
    touched,
    isValid,
    dirty,
  } = useFormik({
    initialValues,
    onSubmit: (values) => {
      // if(isValid){
      //   console.log("Values",values)

      //   if (values) {

      handleNext();
      setEducationDetailsData(values);
      formDataAll(values);
      // console.log(values);
      //   }
      // }
    },
    validationSchema: EducationDetailsschema,
  });
  console.log("Values", values);
  useEffect(() => {
    console.log("Values education Details", values.educationDetails);
    if (educationDetailsData != null) {
      setValues(educationDetailsData);
    }
  }, []);
  const handleAddFields = () => {
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

  const handleAddExperienceFields = () => {
    setValues({
      ...values,
      experienceDetails: [
        ...values.experienceDetails,
        {
          totalExperience: "",
          company: "",
          designation: "",
          technology: "",
          fromDate: "",
          toDate: "",
          jobChange: "",
          companyPresent: false,
        },
      ],
    });
  };
  const handleRemoveFields = (index) => {
    if (index > 0) {
      const educationDetails = [...values.educationDetails];
      educationDetails.splice(index, 1);
      setValues({
        ...values,
        educationDetails,
      });
    }
  };

  const handleRemoveExperienceFields = (index) => {
    if (index > 0) {
      const experienceDetails = [...values.experienceDetails];
      experienceDetails.splice(index, 1);
      setValues({
        ...values,
        experienceDetails,
      });
    }
  };

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
          onClick={handleAddFields}
        >
          Add Education
        </Button>
      </Box>
      <form>
        {values.educationDetails.map((education, index) => (
          <>
            <Grid container spacing={2} key={index}>
              <Grid item xs={3}>
                <Item>
                  <FormControl fullWidth className={classes.textField}>
                    <InputLabel id="label">Education Type</InputLabel>
                    <Select
                      label="Education Type"
                      id="label"
                      name={`educationDetails[${index}].educationType`}
                      value={values.educationDetails[index].educationType}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      error={
                        errors.educationDetails &&
                        errors.educationDetails[index] &&
                        errors.educationDetails[index].educationType &&
                        touched.educationDetails &&
                        touched.educationDetails[index] &&
                        touched.educationDetails[index].educationType
                      }
                      helperText={
                        errors.educationDetails &&
                        errors.educationDetails[index] &&
                        errors.educationDetails[index].educationType &&
                        touched.educationDetails &&
                        touched.educationDetails[index] &&
                        touched.educationDetails[index].educationType
                          ? errors.educationDetails[index].educationType
                          : null
                      }
                    >
                      {educationType.map((item, index) => (
                        <MenuItem value={item} key={index}>
                          {item}
                        </MenuItem>
                      ))}
                    </Select>
                    {errors.educationDetails &&
                      errors.educationDetails[index] &&
                      errors.educationDetails[index].educationType &&
                      touched.educationDetails &&
                      touched.educationDetails[index] &&
                      touched.educationDetails[index].educationType && (
                        <FormHelperText style={{ color: "#d32f2f" }}>
                          {errors.educationDetails &&
                          errors.educationDetails[index] &&
                          errors.educationDetails[index].educationType &&
                          touched.educationDetails &&
                          touched.educationDetails[index] &&
                          touched.educationDetails[index].educationType
                            ? errors.educationDetails[index].educationType
                            : null}
                        </FormHelperText>
                      )}
                  </FormControl>
                </Item>
              </Grid>

              <Grid item xs={3}>
                <Item>
                  <FormControl fullWidth className={classes.textField}>
                    <InputLabel id="label">Institute Name</InputLabel>
                    <Select
                      label="Institute Name"
                      id="label"
                      name={`educationDetails[${index}].instituteName`}
                      value={values.educationDetails[index].instituteName}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      error={
                        errors.educationDetails &&
                        errors.educationDetails[index] &&
                        errors.educationDetails[index].instituteName &&
                        touched.educationDetails &&
                        touched.educationDetails[index] &&
                        touched.educationDetails[index].instituteName
                      }
                      helperText={
                        errors.educationDetails &&
                        errors.educationDetails[index] &&
                        errors.educationDetails[index].instituteName &&
                        touched.educationDetails &&
                        touched.educationDetails[index] &&
                        touched.educationDetails[index].instituteName
                          ? errors.educationDetails[index].instituteName
                          : null
                      }
                    >
                      {instituteName.map((item, index) => (
                        <MenuItem value={item} key={index}>
                          {item}
                        </MenuItem>
                      ))}
                    </Select>
                    {errors.educationDetails &&
                      errors.educationDetails[index] &&
                      errors.educationDetails[index].instituteName &&
                      touched.educationDetails &&
                      touched.educationDetails[index] &&
                      touched.educationDetails[index].instituteName && (
                        <FormHelperText style={{ color: "#d32f2f" }}>
                          {errors.educationDetails &&
                          errors.educationDetails[index] &&
                          errors.educationDetails[index].instituteName &&
                          touched.educationDetails &&
                          touched.educationDetails[index] &&
                          touched.educationDetails[index].instituteName
                            ? errors.educationDetails[index].instituteName
                            : null}
                        </FormHelperText>
                      )}
                  </FormControl>
                </Item>
              </Grid>
              <Grid item xs={3}>
                <Item>
                  <FormControl fullWidth className={classes.textField}>
                    <InputLabel id="label">Course</InputLabel>
                    <Select
                      label="Course"
                      id="label"
                      name={`educationDetails[${index}].course`}
                      value={values.educationDetails[index].course}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      error={
                        errors.educationDetails &&
                        errors.educationDetails[index] &&
                        errors.educationDetails[index].course &&
                        touched.educationDetails &&
                        touched.educationDetails[index] &&
                        touched.educationDetails[index].course
                      }
                      helperText={
                        errors.educationDetails &&
                        errors.educationDetails[index] &&
                        errors.educationDetails[index].course &&
                        touched.educationDetails &&
                        touched.educationDetails[index] &&
                        touched.educationDetails[index].course
                          ? errors.educationDetails[index].course
                          : null
                      }
                    >
                      {course.map((item, index) => (
                        <MenuItem value={item} key={index}>
                          {item}
                        </MenuItem>
                      ))}
                    </Select>
                    {errors.educationDetails &&
                      errors.educationDetails[index] &&
                      errors.educationDetails[index].course &&
                      touched.educationDetails &&
                      touched.educationDetails[index] &&
                      touched.educationDetails[index].course && (
                        <FormHelperText style={{ color: "#d32f2f" }}>
                          {errors.educationDetails &&
                          errors.educationDetails[index] &&
                          errors.educationDetails[index].course &&
                          touched.educationDetails &&
                          touched.educationDetails[index] &&
                          touched.educationDetails[index].course
                            ? errors.educationDetails[index].course
                            : null}
                        </FormHelperText>
                      )}
                  </FormControl>
                </Item>
              </Grid>
              <Grid item xs={3}>
                <Item>
                  <TextField
                    className={classes.textField}
                    fullWidth
                    name={`educationDetails[${index}].cgpa`}
                    placeholder=""
                    label="CGPA/Percentage"
                    type="text"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.educationDetails[index].cgpa}
                    error={
                      errors.educationDetails &&
                      errors.educationDetails[index] &&
                      errors.educationDetails[index].cgpa &&
                      touched.educationDetails &&
                      touched.educationDetails[index] &&
                      touched.educationDetails[index].cgpa
                    }
                    helperText={
                      errors.educationDetails &&
                      errors.educationDetails[index] &&
                      errors.educationDetails[index].cgpa &&
                      touched.educationDetails &&
                      touched.educationDetails[index] &&
                      touched.educationDetails[index].cgpa
                        ? errors.educationDetails[index].cgpa
                        : null
                    }
                  />
                </Item>
              </Grid>
              <Grid item xs={3}>
                <Item>
                  <TextField
                    className={classes.textField}
                    fullWidth
                    name={`educationDetails[${index}].passingYear`}
                    placeholder=""
                    label="Passing Year"
                    type="text"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.educationDetails[index].passingYear}
                    error={
                      errors.educationDetails &&
                      errors.educationDetails[index] &&
                      errors.educationDetails[index].passingYear &&
                      touched.educationDetails &&
                      touched.educationDetails[index] &&
                      touched.educationDetails[index].passingYear
                    }
                    helperText={
                      errors.educationDetails &&
                      errors.educationDetails[index] &&
                      errors.educationDetails[index].passingYear &&
                      touched.educationDetails &&
                      touched.educationDetails[index] &&
                      touched.educationDetails[index].passingYear
                        ? errors.educationDetails[index].passingYear
                        : null
                    }
                  />
                </Item>
              </Grid>
              <Grid item xs={9}>
                <Item>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "end",
                      marginTop: "20px",
                      marginBottom: "20px",
                    }}
                  >
                    <Button

                    style={ index > '0' ? {marginRight:'10px'} : {display:'none'} }
                      size="small"
                      type="button"
                      onClick={() => handleRemoveFields(index)}
                    >
                      <img
                        src={require("../../../assets/delete60.png")}
                        alt=""
                        width={30}
                        height={30}
                      />
                    </Button>
                  </Box>
                </Item>
              </Grid>
            </Grid>
            {values.educationDetails.length > 0 ? (
              <Divider sx={{ marginBottom: "15px", color: "dark" }} />
            ) : null}
          </>
        ))}
        <Box
          display="flex"
          justifyContent="space-between"
          sx={{ marginTop: "20px", marginBottom: "20px" }}
        >
          <Typography variant="h4">Experience (Add all experiences)</Typography>

          <Button
            style={{
              width: "245px",
              height: "52px",
              backgroundColor: "#FF9933",
              color: "#FFFFFF",
              borderRadius: "5px",
            }}
            onClick={handleAddExperienceFields}
          >
            Add Experience
          </Button>
        </Box>
        {/* <Box
              sx={{
                "& .MuiTextField-root": { m: 1, width: "40ch" },marginBottom:'20px'
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
            </Box> */}

        {values.experienceDetails.map((education, index) => (
          <>
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <Item>
                  <FormControl fullWidth className={classes.textField}>
                    <InputLabel id="label">Company</InputLabel>
                    <Select
                      label="Company"
                      id="label"
                      name={`experienceDetails[${index}].company`}
                      value={values.experienceDetails[index].company}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      error={
                        errors.experienceDetails &&
                        errors.experienceDetails[index] &&
                        errors.experienceDetails[index].company &&
                        touched.experienceDetails &&
                        touched.experienceDetails[index] &&
                        touched.experienceDetails[index].company
                      }
                      helperText={
                        errors.experienceDetails &&
                        errors.experienceDetails[index] &&
                        errors.experienceDetails[index].company &&
                        touched.experienceDetails &&
                        touched.experienceDetails[index] &&
                        touched.experienceDetails[index].company
                          ? errors.experienceDetails[index].company
                          : null
                      }
                    >
                      {companies.map((item, index) => (
                        <MenuItem value={item} key={index}>
                          {item}
                        </MenuItem>
                      ))}
                    </Select>
                    {errors.experienceDetails &&
                      errors.experienceDetails[index] &&
                      errors.experienceDetails[index].company &&
                      touched.experienceDetails &&
                      touched.experienceDetails[index] &&
                      touched.experienceDetails[index].company && (
                        <FormHelperText style={{ color: "#d32f2f" }}>
                          {errors.experienceDetails &&
                          errors.experienceDetails[index] &&
                          errors.experienceDetails[index].company &&
                          touched.experienceDetails &&
                          touched.experienceDetails[index] &&
                          touched.experienceDetails[index].company
                            ? errors.experienceDetails[index].company
                            : null}
                        </FormHelperText>
                      )}
                  </FormControl>
                </Item>
              </Grid>
              <Grid item xs={3}>
                <Item>
                  <FormControl fullWidth className={classes.textField}>
                    <InputLabel id="label">Designation</InputLabel>
                    <Select
                      label="Designation"
                      id="label"
                      name={`experienceDetails[${index}].designation`}
                      value={values.experienceDetails[index].designation}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      error={
                        errors.experienceDetails &&
                        errors.experienceDetails[index] &&
                        errors.experienceDetails[index].designation &&
                        touched.experienceDetails &&
                        touched.experienceDetails[index] &&
                        touched.experienceDetails[index].designation
                      }
                      helperText={
                        errors.experienceDetails &&
                        errors.experienceDetails[index] &&
                        errors.experienceDetails[index].designation &&
                        touched.experienceDetails &&
                        touched.experienceDetails[index] &&
                        touched.experienceDetails[index].designation
                          ? errors.experienceDetails[index].designation
                          : null
                      }
                    >
                      {designations.map((item, index) => (
                        <MenuItem value={item} key={index}>
                          {item}
                        </MenuItem>
                      ))}
                    </Select>
                    {errors.experienceDetails &&
                      errors.experienceDetails[index] &&
                      errors.experienceDetails[index].designation &&
                      touched.experienceDetails &&
                      touched.experienceDetails[index] &&
                      touched.experienceDetails[index].designation && (
                        <FormHelperText style={{ color: "#d32f2f" }}>
                          {errors.experienceDetails &&
                          errors.experienceDetails[index] &&
                          errors.experienceDetails[index].designation &&
                          touched.experienceDetails &&
                          touched.experienceDetails[index] &&
                          touched.experienceDetails[index].designation
                            ? errors.experienceDetails[index].designation
                            : null}
                        </FormHelperText>
                      )}
                  </FormControl>
                </Item>
              </Grid>
              <Grid item xs={3}>
                <Item>
                  <FormControl fullWidth className={classes.textField}>
                    <InputLabel id="label">Technology</InputLabel>
                    <Select
                      label="Technology"
                      id="label"
                      name={`experienceDetails[${index}].technology`}
                      value={values.experienceDetails[index].technology}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      error={
                        errors.experienceDetails &&
                        errors.experienceDetails[index] &&
                        errors.experienceDetails[index].technology &&
                        touched.experienceDetails &&
                        touched.experienceDetails[index] &&
                        touched.experienceDetails[index].technology
                      }
                      helperText={
                        errors.experienceDetails &&
                        errors.experienceDetails[index] &&
                        errors.experienceDetails[index].technology &&
                        touched.experienceDetails &&
                        touched.experienceDetails[index] &&
                        touched.experienceDetails[index].technology
                          ? errors.experienceDetails[index].technology
                          : null
                      }
                    >
                      {technologies.map((item, index) => (
                        <MenuItem value={item} key={index}>
                          {item}
                        </MenuItem>
                      ))}
                    </Select>
                    {errors.experienceDetails &&
                      errors.experienceDetails[index] &&
                      errors.experienceDetails[index].technology &&
                      touched.experienceDetails &&
                      touched.experienceDetails[index] &&
                      touched.experienceDetails[index].technology && (
                        <FormHelperText style={{ color: "#d32f2f" }}>
                          {errors.experienceDetails &&
                          errors.experienceDetails[index] &&
                          errors.experienceDetails[index].technology &&
                          touched.experienceDetails &&
                          touched.experienceDetails[index] &&
                          touched.experienceDetails[index].technology
                            ? errors.experienceDetails[index].technology
                            : null}
                        </FormHelperText>
                      )}
                  </FormControl>
                </Item>
              </Grid>
              <Grid item xs={3}>
                <Item>
                  <div>
                    <TextField
                      id="outlined-multiline-input"
                      label="Reason For Job Change"
                      name={`experienceDetails[${index}].jobChange`}
                      value={values.experienceDetails[index].jobChange}
                      type="text"
                      style={values.companyPresent ? { display: "none" } : {}}
                      className={classes.textField}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      autoComplete="off"
                      error={
                        errors.experienceDetails &&
                        errors.experienceDetails[index] &&
                        errors.experienceDetails[index].jobChange &&
                        touched.experienceDetails &&
                        touched.experienceDetails[index] &&
                        touched.experienceDetails[index].jobChange
                      }
                      helperText={
                        errors.experienceDetails &&
                        errors.experienceDetails[index] &&
                        errors.experienceDetails[index].jobChange &&
                        touched.experienceDetails &&
                        touched.experienceDetails[index] &&
                        touched.experienceDetails[index].jobChange
                          ? errors.experienceDetails[index].jobChange
                          : null
                      }
                    />
                  </div>
                </Item>
              </Grid>
              <Grid xs={4}>
                <Item>
                  <div>
                    <FormControlLabel
                      control={
                        <Checkbox
                          onChange={handleChange}
                          name={`experienceDetails[${index}].companyPresent`}
                          value={values.experienceDetails[index].companyPresent}
                        />
                      }
                      label="Mark If the Company is Present"
                      style={{ marginTop: "22px" }}
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
                      name={`experienceDetails[${index}].fromDate`}
                      value={values.experienceDetails[index].fromDate}
                      type="date"
                      className={classes.textField}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      autoComplete="off"
                      error={
                        errors.experienceDetails &&
                        errors.experienceDetails[index] &&
                        errors.experienceDetails[index].fromDate &&
                        touched.experienceDetails &&
                        touched.experienceDetails[index] &&
                        touched.experienceDetails[index].fromDate
                      }
                      helperText={
                        errors.experienceDetails &&
                        errors.experienceDetails[index] &&
                        errors.experienceDetails[index].fromDate &&
                        touched.experienceDetails &&
                        touched.experienceDetails[index] &&
                        touched.experienceDetails[index].fromDate
                          ? errors.experienceDetails[index].fromDate
                          : null
                      }
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                    
                  </div>
                </Item>
              </Grid>
              <Grid item xs={3}>
                <Item>
                  <div>
                    <TextField
                      id="outlined-multiline-input"
                      style={
                        values.experienceDetails[index].companyPresent
                          ? { display: "none" }
                          : {}
                      }
                      label="To Date"
                      name={`experienceDetails[${index}].toDate`}
                      value={values.experienceDetails[index].toDate}
                      type="date"
                      className={classes.textField}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      autoComplete="off"
                      error={
                        errors.experienceDetails &&
                        errors.experienceDetails[index] &&
                        errors.experienceDetails[index].toDate &&
                        touched.experienceDetails &&
                        touched.experienceDetails[index] &&
                        touched.experienceDetails[index].toDate
                      }
                      helperText={
                        errors.experienceDetails &&
                        errors.experienceDetails[index] &&
                        errors.experienceDetails[index].toDate &&
                        touched.experienceDetails &&
                        touched.experienceDetails[index] &&
                        touched.experienceDetails[index].toDate
                          ? errors.experienceDetails[index].toDate
                          : null
                      }
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                    {errors.experienceDetails &&
                      errors.experienceDetails[index] &&
                      errors.experienceDetails[index].toDate &&
                      touched.experienceDetails &&
                      touched.experienceDetails[index] &&
                      touched.experienceDetails[index].toDate && (
                        <FormHelperText style={{ color: "#d32f2f" }}>
                          {errors.experienceDetails &&
                          errors.experienceDetails[index] &&
                          errors.experienceDetails[index].toDate &&
                          touched.experienceDetails &&
                          touched.experienceDetails[index] &&
                          touched.experienceDetails[index].toDate
                            ? errors.experienceDetails[index].toDate
                            : null}
                        </FormHelperText>
                      )}
                  </div>
                </Item>
              </Grid>

              <Grid item xs={2}>
                <Item>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "end",
                      marginTop: "20px",
                      marginBottom: "20px",
                    }}
                  >
                    <Button
                      style={ index > '0' ? {marginRight:'10px'} : {display:'none'} }
                      size="small"
                      type="button"
                      onClick={() => handleRemoveExperienceFields(index)}
                    >
                      <img
                        src={require("../../../assets/delete60.png")}
                        alt=""
                        width={30}
                        height={30}
                      />
                    </Button>
                  </Box>
                </Item>
              </Grid>
            </Grid>
            {values.experienceDetails.length > 0 ? (
              <Divider sx={{ marginBottom: "15px", color: "dark" }} />
            ) : null}
          </>
        ))}

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
