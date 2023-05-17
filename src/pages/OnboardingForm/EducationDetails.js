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
  education_type: "",
  institute_name: "",
  course: "",
  cgpa: "",
  passing_year: "",
  totalexperience: "",
  company: "",
  designation: "",
  technology: "",
  fromdate: "",
  todate: "",
  jobchange: "",

};

export const EducationDetailsschema = Yup.object({
  education_type: Yup.string().required("Education Type is required"),
  institute_name: Yup.string().required("Institute Name is required"),
  course: Yup.string().required("Course is required"),
  cgpa: Yup.number().required("CGPA/Percentage is required").typeError("CGPA/Percentage must be a number"),
  passing_year: Yup.string().required("Passing Year is required"),
  totalexperience: Yup.number()
    .required("Total Experience is required"),
  company: Yup.string().required("Company is required"),
  designation: Yup.string().required("Designation is required"),
  technology: Yup.string().required("Technology is required"),
  fromdate: Yup.string().required("From Date is required"),
  todate: Yup.string().required("To Date is required"),
  jobchange: Yup.string().required("Reason for Job Change is required"),
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
function EducationDetails() {
  const classes = useStyles();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialvalues,
      validationSchema: EducationDetailsschema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });
  const [profilePhoto, setProfilePhoto] = useState(null);

  // Function to handle file upload
 

  return (
    <>
      <Box sx={{ marginTop: "20px", marginBottom: "20px" }}>
        <Typography variant="h4">Highest Degree</Typography>
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
                    <FormControl fullWidth className={classes.textField}>
                      <InputLabel id="maritalstatus-label">
                        Education Type
                      </InputLabel>
                      <Select
                        label="Education Type"
                        id="maritalstatus"
                        name="education_type"
                        value={values.education_type}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        error={errors.education_type && touched.education_type}
                        helperText={
                          errors.education_type && touched.education_type
                            ? errors.education_type
                            : null
                        }
                      >
                       <MenuItem value="">Select</MenuItem>
                        <MenuItem value="B.E./B.Tech.">B.E./B.Tech.</MenuItem>
                        <MenuItem value="M.E./M.Tech.">M.E./M.Tech.</MenuItem>
                        <MenuItem value="BSC">BSC</MenuItem>
                        <MenuItem value="MSC">MSC</MenuItem>
                      </Select>
                      {errors.education_type && touched.education_type && (
                        <FormHelperText style={{ color: "#d32f2f" }}>
                          {errors.education_type}
                        </FormHelperText>
                      )}
                    </FormControl>
                  </div>
                </Item>
              </Grid>
            <Grid item xs={3}>
                <Item>
                  <div>
                    <FormControl fullWidth className={classes.textField}>
                      <InputLabel id="maritalstatus-label">
                        Institute Name
                      </InputLabel>
                      <Select
                        label="Institute Name"
                        id="maritalstatus"
                        name="institute_name"
                        value={values.institute_name}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        error={errors.institute_name && touched.institute_name}
                        helperText={
                          errors.institute_name && touched.institute_name
                            ? errors.institute_name
                            : null
                        }
                      >
                        <MenuItem value="">Select</MenuItem>
                        <MenuItem value="SSEC,Bhavnagar">SSEC,Bhavnagar</MenuItem>
                        <MenuItem value="GEC,Bhavnagar">GEC,Bhavnagar</MenuItem>
                        <MenuItem value="GEC,Modasa">GEC,Modasa</MenuItem>
                      </Select>
                      {errors.institute_name && touched.institute_name && (
                        <FormHelperText style={{ color: "#d32f2f" }}>
                          {errors.institute_name}
                        </FormHelperText>
                      )}
                    </FormControl>
                  </div>
                </Item>
              </Grid>
              
              <Grid item xs={3}>
                <Item>
                  <div>
                    <FormControl fullWidth className={classes.textField}>
                      <InputLabel id="maritalstatus-label">
                        Course
                      </InputLabel>
                      <Select
                        label="Course"
                        id="maritalstatus"
                        name="course"
                        value={values.course}
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
                </Item>
              </Grid>

              <Grid item xs={3}>
                <Item>
                  <div>
                    <TextField
                      id="outlined-text-input"
                      label="CGPA/Percentage"
                      name="cgpa"
                      type="text"
                      className={classes.textField}
                      value={values.cgpa}
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
                  {/* <div style={{color:'red'}}>
      {errors.email && touched.email ? errors.email : null}
      </div> */}
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
            <Typography variant="h4">Experience (Add all experiences)
</Typography>
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

export default EducationDetails;
