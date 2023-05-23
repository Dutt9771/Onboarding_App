import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Formik, useFormik } from "formik";
import { makeStyles } from "@mui/styles";
import { PersonalDetailSchemas } from "../../../validation/PersonalDetailSchemas";
import { Item } from "../../../globleComponents/Item";
import { useStyles } from "../../../globleComponents/useStyles";

const initialvalues = {
  profilePhoto: null,
  firstName: "",
  middleName: "",
  lastName: "",
  birthDate: "",
  email: "",
  alternatecontactNumber: "",
  contactNumber: "",
  gender: "",
  github: "",
  linkdin: "",
  bloodGroup: "",
  maritalStatus: "",
  bankName: "",
  accountNumber: "",
  ifsc: "",
  branch: "",
};

const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];


function PersonalDetails({
  activeStep,
  handleNext,
  formDataAll,
  handleBack,
  setPersonalDetailsData,
  personalDetailsData,
}) {
  const classes = useStyles();
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
    isValid,
    dirty,
    setValues,
  } = useFormik({
    initialValues: initialvalues,
    validationSchema: PersonalDetailSchemas,
    onSubmit: (values, action) => {
      // console.log(values);
      // console.log("isValid", isValid);
      // action.resetForm();
      if (values) {
        handleNext();
        formDataAll(values);
        setPersonalDetailsData(values);
      }
    },
  });




  const [profilePhoto, setProfilePhoto] = useState(null);
  useEffect(() => {
    if (personalDetailsData) {
      setValues(personalDetailsData);
      if (personalDetailsData.profilePhoto) {
        setProfilePhoto(URL.createObjectURL(personalDetailsData.profilePhoto));
      }
    }
  }, []);
  // Function to handle file upload
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setProfilePhoto(URL.createObjectURL(file));
    setFieldValue("profilePhoto", file);
  };



  return (
    <>
      <Box sx={{ marginTop: "20px", marginBottom: "20px" }}>
        <Typography variant="h4">Personal Details</Typography>
      </Box>
      <Box sx={{ marginTop: "20px", marginBottom: "20px" }}>
        <div
          style={{
            position: "relative",
            display: "inline-block",
            marginLeft: "45%",
          }}
        >
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            style={{ position: "absolute", top: 0, left: 0, opacity: 0 }}
          />
          <IconButton component="label" htmlFor="file-upload">
            <img
              src={
                profilePhoto ||
                "https://img.icons8.com/cotton/64/gender-neutral-user--v2.png"
              }
              alt="Profile"
              style={{
                width: "100px",
                height: "100px",
                marginLeft: "auto",
                marginRight: "auto",
                border: "2px solid #ccc",
                borderRadius: "50%",
              }}
            />
            <PhotoCameraIcon
              style={{ position: "absolute", bottom: 0, right: 0 }}
            />
          </IconButton>
        </div>
      </Box>
      <Box sx={{ marginTop: "20px", marginBottom: "20px" }}>
        <form
          action="post"
          onSubmit={handleSubmit}
          noValidate
          autoComplete="off"
        >
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <Item>
                  <TextField
                    id="outlined-multiline-flexible"
                    label="First Name"
                    name="firstName"
                    type="text"
                    multiline
                    className={classes.textField}
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.firstName && touched.firstName}
                    helperText={
                      errors.firstName && touched.firstName
                        ? errors.firstName
                        : null
                    }
                  />
                </Item>
              </Grid>
              <Grid item xs={3}>
                <Item>
                  <TextField
                    id="outlined-multiline-flexible"
                    label="Middle Name"
                    name="middleName"
                    type="text"
                    multiline
                    className={classes.textField}
                    value={values.middleName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete="off"
                    error={errors.middleName && touched.middleName}
                    helperText={
                      errors.middleName && touched.middleName
                        ? errors.middleName
                        : null
                    }
                  />
                </Item>
              </Grid>
              <Grid item xs={3}>
                <Item>
                  <TextField
                    id="outlined-multiline-flexible"
                    label="Last Name"
                    name="lastName"
                    type="text"
                    multiline
                    className={classes.textField}
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete="off"
                    error={errors.lastName && touched.lastName}
                    helperText={
                      errors.lastName && touched.lastName
                        ? errors.lastName
                        : null
                    }
                  />
                </Item>
              </Grid>

              <Grid item xs={3}>
                <Item>
                  <TextField
                    id="outline-multiline-input"
                    type="date"
                    name="birthDate"
                    label="BirthDate"
                    className={classes.textField}
                    value={values.birthDate}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete="off"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    error={errors.birthDate && touched.birthDate}
                    helperText={
                      errors.birthDate && touched.birthDate
                        ? errors.birthDate
                        : null
                    }
                  />
                </Item>
              </Grid>
              <Grid item xs={3}>
                <Item>
                  <TextField
                    id="outlined-email-input"
                    label="Email"
                    name="email"
                    type="email"
                    className={classes.textField}
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete="off"
                    error={errors.email && touched.email}
                    helperText={
                      errors.email && touched.email ? errors.email : null
                    }
                  />
                </Item>
              </Grid>
              <Grid item xs={3}>
                <Item>
                  <TextField
                    id="outlined-multiline-flexible"
                    label="Contact Number"
                    name="contactNumber"
                    type="text"
                    className={classes.textField}
                    value={values.contactNumber}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete="off"
                    error={errors.contactNumber && touched.contactNumber}
                    helperText={
                      errors.contactNumber && touched.contactNumber
                        ? errors.contactNumber
                        : null
                    }
                  />

                  {/* <div style={{color:'red'}}>
      {errors.email && touched.email ? errors.email : null}
       */}
                </Item>
              </Grid>
              <Grid item xs={3}>
                <Item>
                  <TextField
                    id="outlined-multiline-flexible"
                    label="Alternate Contact Number"
                    name="alternatecontactNumber"
                    type="text"
                    className={classes.textField}
                    value={values.alternatecontactNumber}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete="off"
                    error={
                      errors.alternatecontactNumber &&
                      touched.alternatecontactNumber
                    }
                    helperText={
                      errors.alternatecontactNumber &&
                      touched.alternatecontactNumber
                        ? errors.alternatecontactNumber
                        : null
                    }
                  />

                  {/* <div style={{color:'red'}}>
      {errors.alternatecontactNumber && touched.alternateemail ? errors.alternateemail : null}
       */}
                </Item>
              </Grid>
              <Grid item xs={3}>
                <Item>
                  <FormControl fullWidth className={classes.textField}>
                    <InputLabel id="Gender-label">Gender</InputLabel>
                    <Select
                      label="Gender"
                      id="Gender-label"
                      name="gender"
                      value={values.gender}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      error={errors.gender && touched.gender}
                      helperText={
                        errors.gender && touched.gender ? errors.gender : null
                      }
                    >
                      {/* <MenuItem value="">Select</MenuItem> */}
                      <MenuItem value="men">Men</MenuItem>
                      <MenuItem value="women">Women</MenuItem>
                    </Select>
                    {errors.gender && touched.gender && (
                      <FormHelperText style={{ color: "#d32f2f" }}>
                        {errors.gender}
                      </FormHelperText>
                    )}
                  </FormControl>
                </Item>
              </Grid>
              <Grid item xs={3}>
                <Item>
                  <TextField
                    id="outlined-multiline-flexible"
                    label="Github"
                    name="github"
                    type="text"
                    className={classes.textField}
                    value={values.github}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete="off"
                    error={errors.github && touched.github}
                    helperText={
                      errors.github && touched.github ? errors.github : null
                    }
                  />
                </Item>
              </Grid>
              <Grid item xs={3}>
                <Item>
                  <TextField
                    id="outlined-text-input"
                    label="Linkdin"
                    type="text"
                    name="linkdin"
                    className={classes.textField}
                    value={values.linkdin}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete="off"
                    error={errors.linkdin && touched.linkdin}
                    helperText={
                      errors.linkdin && touched.linkdin ? errors.linkdin : null
                    }
                  />
                </Item>
              </Grid>
              <Grid item xs={3}>
                <Item>
                  <FormControl fullWidth className={classes.textField}>
                    <InputLabel id="bloodgroup-label">Blood Group</InputLabel>
                    <Select
                      label="Blood Group"
                      id="bloodgroup--label"
                      name="bloodGroup"
                      value={values.bloodGroup}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      error={errors.bloodGroup && touched.bloodGroup}
                      helperText={
                        errors.bloodGroup && touched.bloodGroup
                          ? errors.bloodGroup
                          : null
                      }
                    >
                      {bloodGroups.map((bloodgroup, index) => {
                        return (
                          <MenuItem key={index} value={bloodgroup}>
                            {bloodgroup}
                          </MenuItem>
                        );
                      })}
                    </Select>
                    {errors.bloodGroup && touched.bloodGroup && (
                      <FormHelperText style={{ color: "#d32f2f" }}>
                        {errors.bloodGroup}
                      </FormHelperText>
                    )}
                  </FormControl>
                </Item>
              </Grid>
              <Grid item xs={3}>
                <Item>
                  <FormControl fullWidth className={classes.textField}>
                    <InputLabel id="maritalStatus-label">
                      Marital Status
                    </InputLabel>
                    <Select
                      label="Marital Status"
                      id="maritalStatus"
                      name="maritalStatus"
                      value={values.maritalStatus}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      error={errors.maritalStatus && touched.maritalStatus}
                      helperText={
                        errors.maritalStatus && touched.maritalStatus
                          ? errors.maritalStatus
                          : null
                      }
                    >
                      {/* <MenuItem value="">Select</MenuItem> */}
                      <MenuItem value="single">Single</MenuItem>
                      <MenuItem value="married">Married</MenuItem>
                      <MenuItem value="divorced">Divorced</MenuItem>
                      <MenuItem value="widowed">Widowed</MenuItem>
                    </Select>
                    {errors.maritalStatus && touched.maritalStatus && (
                      <FormHelperText style={{ color: "#d32f2f" }}>
                        {errors.maritalStatus}
                      </FormHelperText>
                    )}
                  </FormControl>
                </Item>
              </Grid>
            </Grid>
          </Box>
          {/* component="form" */}
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
            {/* 
       <label htmlFor="name">Name</label>
       <input type="text" id='name' name='name' placeholder='Enter name'/>
      </div> */}
          </Box>
          <Box sx={{ marginTop: "20px", marginBottom: "20px" }}>
            <Typography variant="h4">Bank Details</Typography>
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Item>
                <TextField
                  id="outlined-text-input"
                  label="Bank Name"
                  type="text"
                  name="bankName"
                  className={classes.textField}
                  value={values.bankName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete="off"
                  error={errors.bankName && touched.bankName}
                  helperText={
                    errors.bankName && touched.bankName ? errors.bankName : null
                  }
                />
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <TextField
                  id="outlined-text-input"
                  label="Account Number"
                  type="text"
                  name="accountNumber"
                  className={classes.textField}
                  value={values.accountNumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete="off"
                  error={errors.accountNumber && touched.accountNumber}
                  helperText={
                    errors.accountNumber && touched.accountNumber
                      ? errors.accountNumber
                      : null
                  }
                />
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <TextField
                  id="outlined-text-input"
                  label="IFSC Code"
                  type="text"
                  name="ifsc"
                  className={classes.textField}
                  value={values.ifsc}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete="off"
                  error={errors.ifsc && touched.ifsc}
                  helperText={errors.ifsc && touched.ifsc ? errors.ifsc : null}
                />
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <TextField
                  id="outlined-text-input"
                  label="Branch"
                  type="text"
                  name="branch"
                  className={classes.textField}
                  value={values.branch}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete="off"
                  error={errors.branch && touched.branch}
                  helperText={
                    errors.branch && touched.branch ? errors.branch : null
                  }
                />
              </Item>
            </Grid>
          </Grid>

          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            {/* <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button> */}
            <Box sx={{ flex: "1 1 auto" }} />

            <Button
              type="submit"
              style={(!isValid || !dirty) ? { width: "245px",
              height: "52px",
              color: "#FFFFFF",
              borderRadius: "5px",backgroundColor: "#fcbf81" } :{
                width: "245px",
                height: "52px",
                backgroundColor: "#FF9933",
                color: "#FFFFFF",
                borderRadius: "5px",
                
              }}
              disabled={!isValid || !dirty}
            >
              Next
            </Button>
          </Box>
        </form>
      </Box>
    </>
  );
}

export default PersonalDetails;
