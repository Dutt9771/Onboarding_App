import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import React, { Component, useEffect, useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { makeStyles } from "@mui/styles";
import {
  Dropzone,
  FileMosaic,
  FullScreen,
  ImagePreview,
  VideoPreview,
} from "@files-ui/react";
import { UploadDocumentSchemas } from "../../../validation/UploadDocumentSchemas";
import { Item } from "../../../globleComponents/Item";
import { useStyles } from "../../../globleComponents/useStyles";
const initialvalues = {
  aadharNumber: "",
  aadharDocument: null,
  pancardNumber: "",
  pancardDocument: null,
  presentAddress: "",
  permanentAddress: "",
  educationCertificateType:[{
    educationCertificate: '',
    educationImg: null,
  },],
  latestExperienceLetter:null,
  latestRelievingLetter:null,
  salarySlips:null,
  uploadForm16:null,
  addressSame:false,
  streetLine1:'',
  streetLine2:'',
  country:'',
  state:'',
  city:'',
  Area:'',
  postalCode:'',
  perStreetLine1:'',
  perStreetLine2:'',
  perCountry:'',
  perState:'',
  perCity:'',
  perArea:'',
  perPostalCode:'',

};




function UploadDocuments({
  activeStep,
  handleNext,
  formDataAll,
  handleBack,
  setUploadDocumentsData,
  UploadDocumentsData,
}) {
  const classes = useStyles();

  const [aadharDocument, setAadharDocument] = React.useState([]);
  const [pancardDocument, setPancardDocument] = React.useState([]);
  const [experienceLetter, setExperienceLetter] = React.useState([]);
  const [relievingLetter, setRelievingLetter] = React.useState([]);
  const [salarySlips, setSalarySlips] = React.useState([]);
  const [uploadForm16, setUploadForm16] = React.useState([]);
  // const [educationImg, seteducationImg] = React.useState([]);

  const experienceLetterAdd = (incommingFiles) => {
    setExperienceLetter(incommingFiles);
  };
  const experienceLetterRemove = (id) => {
    setAadharDocument(experienceLetter.filter((x) => x.id !== id));
  };
  const relievingLetterAdd = (incommingFiles) => {
    console.log("incoming Aadharcard",incommingFiles)
    setRelievingLetter(incommingFiles);
  };
  const relievingLetterRemove = (id) => {
    setRelievingLetter(relievingLetter.filter((x) => x.id !== id));
  };
  const salarySlipsAdd = (incommingFiles) => {
    console.log("incoming Aadharcard",incommingFiles)
    setSalarySlips(incommingFiles);
  };
  const salarySlipsRemove = (id) => {
    setSalarySlips(aadharDocument.filter((x) => x.id !== id));
  };
  const uploadForm16Add = (incommingFiles) => {
    console.log("incoming Aadharcard",incommingFiles)
    setUploadForm16(incommingFiles);
  };
  const uploadForm16AddRemove = (id) => {
    setUploadForm16(aadharDocument.filter((x) => x.id !== id));
  };
  const aadharDocumentFilesAdd = (incommingFiles) => {
    console.log("incoming Aadharcard",incommingFiles)
    setAadharDocument(incommingFiles);
  };
  const aadharDocumentRemove = (id) => {
    setAadharDocument(aadharDocument.filter((x) => x.id !== id));
  };
  const pancardDocumentFilesAdd = (incommingFiles) => {
    setPancardDocument(incommingFiles);
  };
  const pancardDocumentRemove = (id) => {
    setPancardDocument(pancardDocument.filter((x) => x.id !== id));
  };

  useEffect(() => {
    // console.log("Values education Details", values);
    // if (UploadDocumentsData != null) {
    //   setValues(UploadDocumentsData);
    // }
    if(aadharDocument.length && aadharDocument[0].valid){
      setFieldValue("aadharDocument", aadharDocument);
    }
    if(pancardDocument.length && pancardDocument[0].valid){
      setFieldValue("pancardDocument", pancardDocument);
    }
    if(experienceLetter.length && experienceLetter[0].valid){
      setFieldValue("experienceLetter", experienceLetter);
    }
    if(relievingLetter.length && relievingLetter[0].valid){
      setFieldValue("relievingLetter", relievingLetter);
    }
    if(salarySlips.length && salarySlips[0].valid){
      setFieldValue("salarySlips", salarySlips);
    }
    if(uploadForm16.length && uploadForm16[0].valid){
      setFieldValue("uploadForm16", uploadForm16);
    }
    
  
  }, [aadharDocument, pancardDocument,experienceLetter,relievingLetter,salarySlips,uploadForm16]);

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
    setValues
  } = useFormik({
    initialValues: initialvalues,
    validationSchema: UploadDocumentSchemas,
    onSubmit: (values, action) => {
      console.log(imageFields);

      console.log("Submitted Values",values);
      setUploadDocumentsData(values);
      formDataAll(values);
      handleNext();
   
    },
  });
  console.log(values);
  const countryAddress = {
    country: {
      name: "Example Country",
      states: [
        {
          name: "State A",
          cities: [
            {
              name: "City A",
              areas: [
                {
                  name: "Area 1",
                  postalCodes: ["12345", "67890"],
                },
                {
                  name: "Area 2",
                  postalCodes: ["11111", "22222"],
                },
              ],
            },
            {
              name: "City B",
              areas: [
                {
                  name: "Area 3",
                  postalCodes: ["33333", "44444"],
                },
                {
                  name: "Area 4",
                  postalCodes: ["55555", "66666"],
                },
              ],
            },
          ],
        },
        {
          name: "State B",
          cities: [
            {
              name: "City C",
              areas: [
                {
                  name: "Area 5",
                  postalCodes: ["77777", "88888"],
                },
                {
                  name: "Area 6",
                  postalCodes: ["99999", "00000"],
                },
              ],
            },
            {
              name: "City D",
              areas: [
                {
                  name: "Area 7",
                  postalCodes: ["11111", "22222"],
                },
                {
                  name: "Area 8",
                  postalCodes: ["33333", "44444"],
                },
              ],
            },
          ],
        },
      ],
    },
  };

  const handleChangeCheckbox=()=>{
    console.log("asdfghjkwiudhwjncdschhsdjcvzd")


      if(values.addressSame===true){
        setFieldValue("perStreetLine1",values.streetLine1)
        setFieldValue("perStreetLine2",values.streetLine2)
        setFieldValue("perCountry",values.country)
        setFieldValue("perState",values.state)
        setFieldValue("perCity",values.city)
        setFieldValue("perArea",values.area)
        setFieldValue("perPostalCode",values.postalCode)
    }else{
      setFieldValue("perStreetLine1",'')
        setFieldValue("perStreetLine2",'')
        setFieldValue("perCountry",'')
        setFieldValue("perState",'')
        setFieldValue("perCity",'')
        setFieldValue("perArea",'')
        setFieldValue("perPostalCode",'')
    
  }
  }
  // useEffect(() => {

  //   console.log("Values education Details", values);
  //   if (UploadDocumentsData != null) {
  //     setValues(UploadDocumentsData);
  //   }
    
  // },[]);

    const [imageFields, setImageFields] = useState([{ id: Date.now(), files: [] }]);
  
  
  
    const addImageField = () => {
      setImageFields([...imageFields, { id: Date.now(), files: [] }]);
      setFieldValue('educationCertificateType', [
        ...values.educationCertificateType,
        {
          educationCertificate: '',
          educationImg: null,
        },
      ]);
    }














const educationCertificates=["10th","12th","Diploma","Degree","Master's degree"]
  return (
    <>
     <Box
        display="flex"
        justifyContent="space-between"
        sx={{ marginTop: "20px", marginBottom: "20px" }}
      >
        <Typography variant="h4">Documents</Typography>
      </Box>
 

      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Item>
              <TextField
                className={classes.textField}
                fullWidth
                name="aadharNumber"
                placeholder=""
                label="Aadhar Number"
                type="text"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.aadharNumber}
                error={errors.aadharNumber && touched.aadharNumber}
                helperText={
                  errors.aadharNumber && touched.aadharNumber
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
                name="pancardNumber"
                placeholder=""
                label="Pancard Number"
                type="text"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.pancardNumber}
                error={errors.pancardNumber && touched.pancardNumber}
                helperText={
                  errors.pancardNumber && touched.pancardNumber
                    ? errors.pancardNumber
                    : null
                }
              />
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              {/* <FormControl> */}
              <Dropzone
                color="#FF9933"
                style={{ width: "100%" }}
                onChange={aadharDocumentFilesAdd}
                value={aadharDocument}
                label="Upload"
                name="aadharDocument"
                onBlur={handleBlur}
                behaviour={"add"}
                accept={"image/*"}
                maxFileSize={2 * 1024 * 1024}
                maxFiles={1}
                footerConfig={{ customMessage: "Upload Aadharcard Document" }}
                helperText={errors && <span style={{ color: 'red' }}>{errors}</span>}
              
              >
                {aadharDocument.length > 0 &&
                  aadharDocument.map((file) => (
                    <FileMosaic
                      key={file.id}
                      {...file}
                      onDelete={aadharDocumentRemove}
                      info
                      preview
                    />
                  ))}
              </Dropzone>
              {/* <div style={{color:'#d32f2f'}}>
      {(values.aadharDocument && !values.aadharDocument.length ? "Aadhar Document is required" : null) }
      </div> */}
                          {/* {errors.aadharDocument &&
                          touched.aadharDocument
                            ? 
                            <div style={{color:'#d32f2f'}}> errors.aadharDocument</div> 
                            : null} */}
                        
                        {/* </FormControl> */}
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              {/* <FormControl> */}
              <Dropzone
                color="#FF9933"
                style={{ width: "100%" }}
                onChange={pancardDocumentFilesAdd}
                value={pancardDocument}
                label="Upload"
                onBlur={handleBlur}
                name="pancardDocument"
                behaviour={"add"}
                accept={"image/*"}
                maxFileSize={2 * 1024 * 1024}
                maxFiles={1}
                footerConfig={{ customMessage: "Upload Pancard Document" }}
                helperText={errors && <span style={{ color: 'red' }}>{errors}</span>}
              >
                {pancardDocument.length > 0 &&
                  pancardDocument.map((file) => (
                    <FileMosaic
                      key={file.id}
                      {...file}
                      onDelete={pancardDocumentRemove}
                      info
                      preview
                    />
                  ))}
              </Dropzone>
              {/* <div style={{color:'#d32f2f'}}>
      {(values.pancardDocument &&!values.pancardDocument.length ? "Aadhar Document is required" : null) }
      </div> */}
              {/* <FormHelperText style={{ color: "#d32f2f" }}>
                          {errors.pancardDocument &&
                          touched.pancardDocument
                            ? errors.pancardDocument 
                            : null}
                        </FormHelperText> */}
                        {/* </FormControl> */}
            </Item>
          </Grid>
        
          {/* <Box style={{marginTop:'20px'}} /> */}
            <Grid item xs={4}>
            <Item>
              <TextField
                className={classes.textField}
                // id="Aa"
                type="text"
                name="streetLine1"
                label="Street Line 1"
                variant="outlined"
                
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.streetLine1}
                helperText={
                  errors.streetLine1 &&
                  touched.streetLine1 && (
                    <Typography variant="caption" color="orange">
                      {errors.streetLine1}
                    </Typography>
                  )
                }
              />
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
              <TextField
                className={classes.textField}
                type="text"
                name="streetLine2"
                label="Street Line 2"
                variant="outlined"
                
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.streetLine2}
                helperText={
                  errors.streetLine2 &&
                  touched.streetLine2 && (
                    <Typography variant="caption" color="orange">
                      {errors.streetLine2}
                    </Typography>
                  )
                }
              />
              </Item>
            </Grid>
            <Grid item xs={4}>
            <Item>
              
                <FormControl fullWidth className={classes.textField}>
                  <InputLabel id="country" >
                    Country
                  </InputLabel>
                  <Select
                    labelId="country"
                    name="country"
                    // onBlur={handleBlur}
                    label="Country"
                    value={values.country}
                    onChange={(event) =>
                      setFieldValue("country", event.target.value)
                    }
                    sx={{ width:"100%" }}
                  >
                    <MenuItem value={countryAddress.country.name}>
                      {countryAddress.country.name}
                    </MenuItem>
                  </Select>
                </FormControl>
                {errors.country && touched.education && (
                  <Typography variant="caption" color="orange">
                    {errors.country}
                  </Typography>
                )}
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <FormControl fullWidth className={classes.textField}>
                  <InputLabel id="state" >
                    State
                  </InputLabel>
                  <Select
                    labelId="state"
                    name="state"
                    // onBlur={handleBlur}
                    label="State"
                    value={values.state}
                    onChange={(event) =>
                      setFieldValue("state", event.target.value)
                    }
                    sx={{ width:"100%" }}
                  >
                    {countryAddress.country.states &&
                      countryAddress.country.states.map(
                        (stateAddress, index) => (
                          <MenuItem key={index} value={stateAddress.name}>
                            {stateAddress.name}
                          </MenuItem>
                        )
                      )}
                  </Select>
                </FormControl>
                {errors.state && touched.state && (
                  <Typography variant="caption" color="orange">
                    {errors.state}
                  </Typography>
                )}
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <FormControl fullWidth className={classes.textField}>
                  <InputLabel id="city" >
                    City
                  </InputLabel>
                  <Select
                    labelId="city"
                    name="city"
                    // onBlur={handleBlur}
                    label="City"
                    value={values.city}
                    onChange={(event) =>
                      setFieldValue("city", event.target.value)
                    }
                    sx={{ width:"100%" }}
                  >
                    {countryAddress.country.states
                      .find(
                        (stateAddress) =>
                          stateAddress.name === values.state
                      )
                      ?.cities.map((city, index) => (
                        <MenuItem key={index} value={city.name}>
                          {city.name}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
                {errors.city && touched.city && (
                  <Typography variant="caption" color="orange">
                    {errors.city}
                  </Typography>
                )}
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <FormControl fullWidth className={classes.textField}>
                  <InputLabel id="area" >
                    Area
                  </InputLabel>
                  <Select
                    labelId="area"
                    name="area"
                    // onBlur={handleBlur}
                    label="Area"
                    value={values.area}
                    onChange={(event) =>
                      setFieldValue("area", event.target.value)
                    }
                    sx={{ width:"100%" }}
                  >
                    {countryAddress.country.states
                      .find(
                        (stateAddress) =>
                          stateAddress.name === values.state
                      )
                      ?.cities.find((city) => city.name === values.city)
                      ?.areas.map((area, index) => (
                        <MenuItem key={index} value={area.name}>
                          {area.name}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
                {errors.area && touched.area && (
                  <Typography variant="caption" color="orange">
                    {errors.area}
                  </Typography>
                )}
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <FormControl fullWidth className={classes.textField}>
                  <InputLabel id="postalCode" >
                    Postal Code
                  </InputLabel>
                  <Select
                    labelId="postalCode"
                    name="postalCode"
                    // onBlur={handleBlur}
                    label="postalCode"
                    value={values.postalCode}
                    onChange={(event) =>
                      setFieldValue("postalCode", event.target.value)
                    }
                    sx={{ width:"100%" }}
                  >
                    {countryAddress.country.states
                      .find(
                        (stateAddress) =>
                          stateAddress.name === values.state
                      )
                      ?.cities.find((city) => city.name === values.city)
                      ?.areas.find((area) => area.name === values.area)
                      ?.postalCodes.map((postalCode, index) => (
                        <MenuItem key={index} value={postalCode}>
                          {postalCode}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
                {errors.postalCode && touched.postalCode && (
                  <Typography variant="caption" color="orange">
                    {errors.postalCode}
                  </Typography>
                )}
              </Item>
            </Grid>
          </Grid>
          <Box>
            <Stack
              direction={"row"}
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              spacing={2}
              marginTop={"20px"}
            >
              <Typography variant="h6" fontWeight={"bold"} component="div">
                Permanent Address
              </Typography>
              <Grid item xs={4}>
                <FormControl component="fieldset">
                  <FormGroup aria-label="position" row>
                    <FormControlLabel
                      value={values.addressSame}
                      control={<Checkbox />}
                      label="same as current"
                      name="addressSame"
                      sx={{ marginTop: "10px", width: "100%" }}
                      onChange={handleChange}
                      onClick={handleChangeCheckbox}
                    />
                  </FormGroup>
                </FormControl>
              </Grid>
            </Stack>
            <hr />
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Item>
              <TextField
                className={classes.textField}
                // id="Aa"
                type="text"
                name="perStreetLine1"
                label="Street Line 1"
                variant="outlined"
                
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.perStreetLine1}
                helperText={
                  errors.perStreetLine1 &&
                  touched.perStreetLine1 && (
                    <Typography variant="caption" color="orange">
                      {errors.perStreetLine1}
                    </Typography>
                  )
                }
              />
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
              <TextField
                className={classes.textField}
                type="text"
                name="perStreetLine2"
                label="Street Line 2"
                variant="outlined"
                
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.perStreetLine2}
                helperText={
                  errors.perStreetLine2 &&
                  touched.perStreetLine2 && (
                    <Typography variant="caption" color="orange">
                      {errors.perStreetLine2}
                    </Typography>
                  )
                }
              />
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <FormControl fullWidth>
                  <InputLabel id="perCountry" >
                    Country
                  </InputLabel>
                  <Select
                    labelId="perCountry"
                    name="perCountry"
                    // onBlur={handleBlur}
                    label="perCountry"
                    value={values.perCountry}
                    onChange={(event) =>
                      setFieldValue("perCountry", event.target.value)
                    }
                    sx={{ width:"100%" }}
                  >
                    <MenuItem value={countryAddress.country.name}>
                      {countryAddress.country.name}
                    </MenuItem>
                  </Select>
                </FormControl>
                {errors.perCountry && touched.perCountry && (
                  <Typography variant="caption" color="orange">
                    {errors.perCountry}
                  </Typography>
                )}
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <FormControl fullWidth>
                  <InputLabel id="perState" >
                    State
                  </InputLabel>
                  <Select
                    labelId="perState"
                    name="perState"
                    // onBlur={handleBlur}
                    label="State"
                    value={values.perState}
                    onChange={(event) =>
                      setFieldValue("perState", event.target.value)
                    }
                    sx={{ width:"100%" }}
                  >
                    {countryAddress.country.states &&
                      countryAddress.country.states.map(
                        (stateAddress, index) => (
                          <MenuItem key={index} value={stateAddress.name}>
                            {stateAddress.name}
                          </MenuItem>
                        )
                      )}
                  </Select>
                </FormControl>
                {errors.perState && touched.perState && (
                  <Typography variant="caption" color="orange">
                    {errors.perState}
                  </Typography>
                )}
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <FormControl fullWidth>
                  <InputLabel id="perCity" >
                    City
                  </InputLabel>
                  <Select
                    labelId="perCity"
                    name="perCity"
                    // onBlur={handleBlur}
                    label="City"
                    value={values.perCity}
                    onChange={(event) =>
                      setFieldValue("perCity", event.target.value)
                    }
                    sx={{ width:"100%" }}
                  >
                    {countryAddress.country.states
                      .find(
                        (stateAddress) =>
                          stateAddress.name === values.state
                      )
                      ?.cities.map((city, index) => (
                        <MenuItem key={index} value={city.name}>
                          {city.name}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
                {errors.perCity && touched.perCity && (
                  <Typography variant="caption" color="orange">
                    {errors.perCity}
                  </Typography>
                )}
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <FormControl fullWidth>
                  <InputLabel id="perArea" >
                    Area
                  </InputLabel>
                  <Select
                    labelId="perArea"
                    name="perArea"
                    // onBlur={handleBlur}
                    label="Area"
                    value={values.perArea}
                    onChange={(event) =>
                      setFieldValue("perArea", event.target.value)
                    }
                    sx={{ width:"100%" }}
                  >
                    {countryAddress.country.states
                      .find(
                        (stateAddress) =>
                          stateAddress.name === values.state
                      )
                      ?.cities.find((city) => city.name === values.city)
                      ?.areas.map((area, index) => (
                        <MenuItem key={index} value={area.name}>
                          {area.name}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
                {errors.perArea && touched.perArea && (
                  <Typography variant="caption" color="orange">
                    {errors.perArea}
                  </Typography>
                )}
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <FormControl fullWidth>
                  <InputLabel id="perPostalCode" >
                    Postal Code
                  </InputLabel>
                  <Select
                    labelId="perPostalCode"
                    name="perPostalCode"
                    // onBlur={handleBlur}
                    label="perPostalCode"
                    value={values.perPostalCode}
                    onChange={(event) =>
                      setFieldValue("perPostalCode", event.target.value)
                    }
                    sx={{ width:"100%" }}
                  >
                    {countryAddress.country.states
                      .find(
                        (stateAddress) =>
                          stateAddress.name === values.state
                      )
                      ?.cities.find((city) => city.name === values.city)
                      ?.areas.find((area) => area.name === values.area)
                      ?.postalCodes.map((postalCode, index) => (
                        <MenuItem key={index} value={postalCode}>
                          {postalCode}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
                {errors.perPostalCode && touched.perPostalCode && (
                  <Typography variant="caption" color="orange">
                    {errors.perPostalCode}
                  </Typography>
                )}
              </Item>
            </Grid>
          </Grid>
          

          <Grid container spacing={2}>
          <Grid item xs={12}>
            <Item>
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
          onClick={addImageField}
        >
          ADD Education
        </Button>
      </Box>
      </Item>
      </Grid>
      </Grid>
      {imageFields.map((field, index) => (
 
        <Grid item xs={3} key={field.id}>
          <FormControl fullWidth error={touched.educationCertificateType?.[index]?.educationCertificate && Boolean(errors.educationCertificateType?.[index]?.educationCertificate)}>
            <InputLabel id={`label-${field.id}`}>Education Certificates</InputLabel>
            <Select
              label="Education Certificates"
              id={`select-${field.id}`}
              name={`educationCertificateType[${index}].educationCertificate`}
              value={values.educationCertificateType[index].educationCertificate}
              onBlur={handleBlur}
              onChange={handleChange}
            >
              {educationCertificates.map((item, idx) => (
                <MenuItem key={idx} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
            {touched.educationCertificateType?.[index]?.educationCertificate && errors.educationCertificateType?.[index]?.educationCertificate && (
              <FormHelperText>
                {errors.educationCertificateType?.[index]?.educationCertificate}
              </FormHelperText>
            )}
          </FormControl>
          <Dropzone
            color="#FF9933"
            style={{ width: '100%',marginTop:'30px' }}
            onChange={(files) => {
              const updatedFields = imageFields.map((f) => {
                if (f.id === field.id) {
                  return { ...f, files };
                }
                return f;
              });
              setImageFields(updatedFields);
              setFieldValue(`educationCertificateType[${index}].educationImg`, files[0]);
            }}
            value={field.files}
            label="Upload"
            onBlur={handleBlur}
            name={`imageField_${field.id}`}
            behaviour="add"
            accept="image/*"
            maxFileSize={2 * 1024 * 1024}
            maxFiles={1}
            footerConfig={{ customMessage: 'Upload Image' }}
            helperText={touched.educationCertificateType?.[index]?.educationImg && errors.educationCertificateType?.[index]?.educationImg && (
              <span style={{ color: 'red' }}>{errors.educationCertificateType?.[index]?.educationImg}</span>
            )}
          >
            {field.files.length > 0 &&
              field.files.map((file) => (
                <FileMosaic
                  key={file.id}
                  {...file}
                  onDelete={() => {
                    const updatedFields = imageFields.map((f) => {
                      if (f.id === field.id) {
                        return {
                          ...f,
                          files: f.files.filter((x) => x.id !== file.id),
                        };
                      }
                      return f;
                    });
                    setImageFields(updatedFields);
                    setFieldValue(`educationCertificateType[${index}].educationImg`, null);
                  }}
                  info
                  preview
                />
              ))}
          </Dropzone>
          <Box sx={{height:'30px'}}/>
          <Divider sx={{ marginBottom: "30px" }} />
        </Grid>
      ))}

<Grid container spacing={2}>
          
          <Grid item xs={6}>
            <Item>
              {/* <FormControl> */}
              <Dropzone
                color="#FF9933"
                style={{ width: "100%" }}
                onChange={experienceLetterAdd}
                value={experienceLetter}
                label="Upload"
                name="latestExperienceLetter"
                onBlur={handleBlur}
                behaviour={"add"}
                accept={"image/*"}
                maxFileSize={2 * 1024 * 1024}
                maxFiles={1}
                footerConfig={{ customMessage: "Upload Latest Experience Letter" }}
                helperText={errors && <span style={{ color: 'red' }}>{errors}</span>}
              
              >
                {experienceLetter.length > 0 &&
                  experienceLetter.map((file) => (
                    <FileMosaic
                      key={file.id}
                      {...file}
                      onDelete={experienceLetterRemove}
                      info
                      preview
                    />
                  ))}
              </Dropzone>
              {/* <div style={{color:'#d32f2f'}}>
      {(values.aadharDocument && !values.aadharDocument.length ? "Aadhar Document is required" : null) }
      </div> */}
                          {/* {errors.aadharDocument &&
                          touched.aadharDocument
                            ? 
                            <div style={{color:'#d32f2f'}}> errors.aadharDocument</div> 
                            : null} */}
                        
                        {/* </FormControl> */}
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              {/* <FormControl> */}
              <Dropzone
                color="#FF9933"
                style={{ width: "100%" }}
                onChange={relievingLetterAdd}
                value={relievingLetter}
                label="Upload"
                onBlur={handleBlur}
                name="latestRelievingLetter"
                behaviour={"add"}
                accept={"image/*"}
                maxFileSize={2 * 1024 * 1024}
                maxFiles={1}
                footerConfig={{ customMessage: "Upload Latest Relieving Letter" }}
                helperText={errors && <span style={{ color: 'red' }}>{errors}</span>}
              >
                {relievingLetter.length > 0 &&
                  relievingLetter.map((file) => (
                    <FileMosaic
                      key={file.id}
                      {...file}
                      onDelete={relievingLetterRemove}
                      info
                      preview
                    />
                  ))}
              </Dropzone>
              {/* <div style={{color:'#d32f2f'}}>
      {(values.pancardDocument &&!values.pancardDocument.length ? "Aadhar Document is required" : null) }
      </div> */}
              {/* <FormHelperText style={{ color: "#d32f2f" }}>
                          {errors.pancardDocument &&
                          touched.pancardDocument
                            ? errors.pancardDocument 
                            : null}
                        </FormHelperText> */}
                        {/* </FormControl> */}
            </Item>
          </Grid>
          
          <Grid item xs={6}>
            <Item>
              {/* <FormControl> */}
              <Dropzone
                color="#FF9933"
                style={{ width: "100%" }}
                onChange={salarySlipsAdd}
                value={salarySlips}
                label="Upload"
                name="salarySlips"
                onBlur={handleBlur}
                behaviour={"add"}
                accept={"image/*"}
                maxFileSize={2 * 1024 * 1024}
                maxFiles={1}
                footerConfig={{ customMessage: "Upload Salary Slips (3 Months)" }}
                helperText={errors && <span style={{ color: 'red' }}>{errors}</span>}
              
              >
                {salarySlips.length > 0 &&
                  salarySlips.map((file) => (
                    <FileMosaic
                      key={file.id}
                      {...file}
                      onDelete={salarySlipsRemove}
                      info
                      preview
                    />
                  ))}
              </Dropzone>
              {/* <div style={{color:'#d32f2f'}}>
      {(values.aadharDocument && !values.aadharDocument.length ? "Aadhar Document is required" : null) }
      </div> */}
                          {/* {errors.aadharDocument &&
                          touched.aadharDocument
                            ? 
                            <div style={{color:'#d32f2f'}}> errors.aadharDocument</div> 
                            : null} */}
                        
                        {/* </FormControl> */}
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              {/* <FormControl> */}
              <Dropzone
                color="#FF9933"
                style={{ width: "100%" }}
                onChange={uploadForm16Add}
                value={uploadForm16}
                label="Upload"
                onBlur={handleBlur}
                name="uploadForm16"
                behaviour={"add"}
                accept={"image/*"}
                maxFileSize={2 * 1024 * 1024}
                maxFiles={1}
                footerConfig={{ customMessage: "Upload Form 16 of Previous Employer" }}
                helperText={errors && <span style={{ color: 'red' }}>{errors}</span>}
              >
                {uploadForm16.length > 0 &&
                  uploadForm16.map((file) => (
                    <FileMosaic
                      key={file.id}
                      {...file}
                      onDelete={uploadForm16AddRemove}
                      info
                      preview
                    />
                  ))}
              </Dropzone>
              {/* <div style={{color:'#d32f2f'}}>
      {(values.pancardDocument &&!values.pancardDocument.length ? "Aadhar Document is required" : null) }
      </div> */}
              {/* <FormHelperText style={{ color: "#d32f2f" }}>
                          {errors.pancardDocument &&
                          touched.pancardDocument
                            ? errors.pancardDocument 
                            : null}
                        </FormHelperText> */}
                        {/* </FormControl> */}
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
