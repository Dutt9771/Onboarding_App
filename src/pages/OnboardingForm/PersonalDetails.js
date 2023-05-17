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

import { PersonalDetailSchemas } from "../../validation/validation";



const initialvalues = {
  profilePhoto:null,
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
function PersonalDetails({activeStep,handleNext,formDataAll,handleBack,pesonalDetailsDataAll,personalDetailsData}) {

  const classes = useStyles();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit,setFieldValue,isValid,dirty,setValues } =
    useFormik({
      initialValues: initialvalues,
      validationSchema: PersonalDetailSchemas,
      onSubmit: (values, action) => {
        // console.log(values);
        // console.log("isValid", isValid);
        // action.resetForm();
        if(values){
          handleNext()
          formDataAll(values)
          pesonalDetailsDataAll(values)
        }
      },
    });
  const [profilePhoto, setProfilePhoto] = useState(null);
useEffect(()=>{
if(personalDetailsData){
  setValues(personalDetailsData)
  if(personalDetailsData.profilePhoto){
    setProfilePhoto(URL.createObjectURL(personalDetailsData.profilePhoto));
  }
}
},[])
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
                  <div>
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
                  </div>
                </Item>
              </Grid>
              <Grid item xs={3}>
                <Item>
                  <div>
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
                  </div>
                </Item>
              </Grid>
              <Grid item xs={3}>
                <Item>
                  <div>
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
                  </div>
                </Item>
              </Grid>

              <Grid item xs={3}>
                <Item>
                  <FormControl className={classes.textField} variant="outlined">
                    {/* <InputLabel htmlFor="date-input">birthDate</InputLabel> */}
                    <OutlinedInput
                      id="date-input"
                      type="date"
                      name="birthDate"
                      label="birthDate"
                      className={classes.textField}
                      value={values.birthDate}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      autoComplete="off"
                      error={errors.birthDate && touched.birthDate}
                      helperText={
                        errors.birthDate && touched.birthDate
                          ? errors.birthDate
                          : null
                      }
                    />
                  </FormControl>
                </Item>
              </Grid>
              <Grid item xs={3}>
                <Item>
                  <div>
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
                  </div>
                </Item>
              </Grid>
              <Grid item xs={3}>
                <Item>
                  <div>
                    <TextField
                      id="outlined-multiline-flexible"
                      label="Contact Number"
                      name="contactNumber"
                      type="number"
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
                  </div>
                  {/* <div style={{color:'red'}}>
      {errors.email && touched.email ? errors.email : null}
      </div> */}
                </Item>
              </Grid>
              <Grid item xs={3}>
                <Item>
                  <div>
                    <TextField
                      id="outlined-multiline-flexible"
                      label="Alternate Contact Number"
                      name="alternatecontactNumber"
                      type="number"
                      className={classes.textField}
                      value={values.alternatecontactNumber}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      autoComplete="off"
                      error={errors.alternatecontactNumber && touched.alternatecontactNumber}
                      helperText={
                        errors.alternatecontactNumber && touched.alternatecontactNumber
                          ? errors.alternatecontactNumber
                          : null
                      }
                    />
                  </div>
                  {/* <div style={{color:'red'}}>
      {errors.alternatecontactNumber && touched.alternateemail ? errors.alternateemail : null}
      </div> */}
                </Item>
              </Grid>
              <Grid item xs={3}>
                <Item>
                  <div>
                    <FormControl fullWidth className={classes.textField}>
                      <InputLabel id="demo-simple-select-label">
                        Gender
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Gender"
                        name="gender"
                        value={values.gender}
                        onChange={handleChange}
                        onBlue={handleBlur}
                        error={errors.gender && touched.gender}
                        helperText={
                          errors.gender && touched.gender ? errors.gender : null
                        }
                      >
                        <MenuItem value="">Select Gender</MenuItem>
                        <MenuItem value="men">Men</MenuItem>
                        <MenuItem value="women">Women</MenuItem>
                      </Select>
                      {errors.gender && touched.gender && (
                        <FormHelperText style={{ color: "#d32f2f" }}>
                          {errors.gender}
                        </FormHelperText>
                      )}
                    </FormControl>
                  </div>
                </Item>
              </Grid>
              <Grid item xs={3}>
                <Item>
                  <div>
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
                  </div>
                </Item>
              </Grid>
              <Grid item xs={3}>
                <Item>
                  <div>
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
                        errors.linkdin && touched.linkdin
                          ? errors.linkdin
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
                      id="outlined-text-input"
                      label="Blood Group"
                      type="text"
                      name="bloodGroup"
                      className={classes.textField}
                      value={values.bloodGroup}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      autoComplete="off"
                      error={errors.bloodGroup && touched.bloodGroup}
                      helperText={
                        errors.bloodGroup && touched.bloodGroup
                          ? errors.bloodGroup
                          : null
                      }
                    />
                  </div>
                </Item>
              </Grid>
              <Grid item xs={3}>
                <Item>
                  <div>
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
                  </div>
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
            {/* <div>
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
                <div>
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
                      errors.bankName && touched.bankName
                        ? errors.bankName
                        : null
                    }
                  />
                </div>
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <div>
                  <TextField
                    id="outlined-text-input"
                    label="Account Number"
                    type="number"
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
                </div>
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <div>
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
                    helperText={
                      errors.ifsc && touched.ifsc ? errors.ifsc : null
                    }
                  />
                </div>
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <div>
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
                </div>
              </Item>
            </Grid>
          </Grid>
          
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />

<Button style={{width:'245px',height:'52px',backgroundColor:'#FF9933',color:'#FFFFFF',borderRadius:'5px'}} onClick={handleSubmit} disabled={!isValid|| !dirty}>
              Next
            </Button>
          </Box>
        </form>
      </Box>
    </>
  );
}

export default PersonalDetails;
