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
  Paper,
  Select,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import React, { Component, useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { makeStyles } from "@mui/styles";
const initialvalues = {
  firstname: "",
  middlename: "",
  lastname: "",
  birthdate: "",
  email: "",
  alternateemail: "",
  contactnumber: "",
  gender: "",
  github: "",
  linkdin: "",
  bloodgroup: "",
  maritalstatus: "",
  bankname: "",
  accountnumber: "",
  ifsc: "",
  branch: "",
};

export const PersonalDetailSchemas = Yup.object({
  firstname: Yup.string().min(2).max(25).required("First Name is required"),
  middlename: Yup.string().min(2).max(25).required("Middle Name is required"),
  lastname: Yup.string().min(2).max(25).required("Last Name is required"),
  birthdate: Yup.string().required("Birthdate is required"),
  email: Yup.string().email().required("Email is required"),
  contactnumber: Yup.number()
    .max(10)
    .min(10)
    .required("Contact Number is required")
    .typeError("Contact Number must be a number"),
  gender: Yup.string().required("Gender is required"),
  github: Yup.string().required("Github is required"),
  linkdin: Yup.string().required("Linkdin is required"),
  bloodgroup: Yup.string().required("Blood Group is required"),
  maritalstatus: Yup.string().required("Marital Status is required"),
  bankname: Yup.string().required("Bank Name is required"),
  accountnumber: Yup.number().required("Account Number is required"),
  ifsc: Yup.string().required("IFSC Code is required"),
  branch: Yup.string().required("Branch is required"),
});

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
function PersonalDetails() {
  const classes = useStyles();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialvalues,
      validationSchema: PersonalDetailSchemas,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });
  const [profilePhoto, setProfilePhoto] = useState(null);

  // Function to handle file upload
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setProfilePhoto(URL.createObjectURL(file));
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
                      name="firstname"
                      type="text"
                      multiline
                      className={classes.textField}
                      value={values.firstname}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.firstname && touched.firstname}
                      helperText={
                        errors.firstname && touched.firstname
                          ? errors.firstname
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
                      name="middlename"
                      type="text"
                      multiline
                      className={classes.textField}
                      value={values.middlename}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      autoComplete="off"
                      error={errors.middlename && touched.middlename}
                      helperText={
                        errors.middlename && touched.middlename
                          ? errors.middlename
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
                      name="lastname"
                      type="text"
                      multiline
                      className={classes.textField}
                      value={values.lastname}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      autoComplete="off"
                      error={errors.lastname && touched.lastname}
                      helperText={
                        errors.lastname && touched.lastname
                          ? errors.lastname
                          : null
                      }
                    />
                  </div>
                </Item>
              </Grid>

              <Grid item xs={3}>
                <Item>
                  <FormControl className={classes.textField} variant="outlined">
                    {/* <InputLabel htmlFor="date-input">Birthdate</InputLabel> */}
                    <OutlinedInput
                      id="date-input"
                      type="date"
                      name="birthdate"
                      label="Birthdate"
                      className={classes.textField}
                      value={values.birthdate}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      autoComplete="off"
                      error={errors.birthdate && touched.birthdate}
                      helperText={
                        errors.birthdate && touched.birthdate
                          ? errors.birthdate
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
                      id="outlined-email-input"
                      label="Alternate Email"
                      name="alternateemail"
                      type="email"
                      className={classes.textField}
                      value={values.alternateemail}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      autoComplete="off"
                      error={errors.alternateemail && touched.alternateemail}
                      helperText={
                        errors.alternateemail && touched.alternateemail
                          ? errors.alternateemail
                          : null
                      }
                    />
                  </div>
                  {/* <div style={{color:'red'}}>
      {errors.alternateemail && touched.alternateemail ? errors.alternateemail : null}
      </div> */}
                </Item>
              </Grid>
              <Grid item xs={3}>
                <Item>
                  <div>
                    <TextField
                      id="outlined-email-input"
                      label="Contact Number"
                      name="contactnumber"
                      type="number"
                      className={classes.textField}
                      value={values.contactnumber}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      autoComplete="off"
                      error={errors.contactnumber && touched.contactnumber}
                      helperText={
                        errors.contactnumber && touched.contactnumber
                          ? errors.contactnumber
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
                      id="outlined-text-input"
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
                      name="bloodgroup"
                      className={classes.textField}
                      value={values.bloodgroup}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      autoComplete="off"
                      error={errors.bloodgroup && touched.bloodgroup}
                      helperText={
                        errors.bloodgroup && touched.bloodgroup
                          ? errors.bloodgroup
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
                      <InputLabel id="maritalstatus-label">
                        Marital Status
                      </InputLabel>
                      <Select
                        label="Marital Status"
                        id="maritalstatus"
                        name="maritalstatus"
                        value={values.maritalstatus}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        error={errors.maritalstatus && touched.maritalstatus}
                        helperText={
                          errors.maritalstatus && touched.maritalstatus
                            ? errors.maritalstatus
                            : null
                        }
                      >
                        <MenuItem value="">Select</MenuItem>
                        <MenuItem value="single">Single</MenuItem>
                        <MenuItem value="married">Married</MenuItem>
                        <MenuItem value="divorced">Divorced</MenuItem>
                        <MenuItem value="widowed">Widowed</MenuItem>
                      </Select>
                      {errors.maritalstatus && touched.maritalstatus && (
                        <FormHelperText style={{ color: "#d32f2f" }}>
                          {errors.maritalstatus}
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
            <Grid item xs={3}>
              <Item>
                <div>
                  <TextField
                    id="outlined-text-input"
                    label="Bank Name"
                    type="text"
                    name="bankname"
                    className={classes.textField}
                    value={values.bankname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete="off"
                    error={errors.bankname && touched.bankname}
                    helperText={
                      errors.bankname && touched.bankname
                        ? errors.bankname
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
                    label="Account Number"
                    type="number"
                    name="accountnumber"
                    className={classes.textField}
                    value={values.accountnumber}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete="off"
                    error={errors.accountnumber && touched.accountnumber}
                    helperText={
                      errors.accountnumber && touched.accountnumber
                        ? errors.accountnumber
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
            <Grid item xs={3}>
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
          <div></div>
        </form>
      </Box>
    </>
  );
}

export default PersonalDetails;
