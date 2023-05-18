import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
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
const initialvalues = {
  aadharNumber: "",
  aadharDocument: null,
  pancardNumber: "",
  pancardDocument: null,
  presentAddress: "",
  permanentAddress: "",
  addressSame:false,
  educationCertificateType:[{
    educationCertificate: '',
    educationImg: null,
  },],
  latestExperienceLetter:null,
  latestRelievingLetter:null,
  salarySlips:null,
  uploadForm16:null 
};
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
const validationSchema = Yup.object().shape({
  
});


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

      formDataAll(values);
      console.log(values);
      handleNext();
      setUploadDocumentsData(values);
   
    },
  });
  console.log(values);
 

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
          <Grid item xs={12}>
            <Item>
              <TextField
                className={classes.textField}
                fullWidth
                name="presentAddress"
                placeholder=""
                label="Present Address"
                type="text"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.presentAddress}
                error={errors.presentAddress && touched.presentAddress}
                helperText={
                  errors.presentAddress && touched.presentAddress
                    ? errors.presentAddress
                    : null
                }
              />
            </Item>
          </Grid>
          <Grid xs={12}>
                <Item>
                 
                    <FormControlLabel
                      control={
                        <Checkbox
                          onChange={handleChange}
                          name="addressSame"
                          value={values.addressSame}
                        />
                      }
                      label="Mark If Present Address Same As Perment Address"
                      style={{ marginTop: "22px",color:"black",display:'flex',justifyContent:'start',marginLeft:'10px' }}
                    />
                  
                </Item>
              </Grid>
          <Grid item xs={12}>
            <Item>
              <TextField
                className={classes.textField}
                fullWidth
                style={
                  values.addressSame
                    ? { display: "none" }
                    : {}
                }
                name="permanentAddress"
                placeholder=""
                label="Permanent Address"
                type="text"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.permanentAddress}
                error={errors.permanentAddress && touched.permanentAddress}
                helperText={
                  errors.permanentAddress && touched.permanentAddress
                    ? errors.permanentAddress
                    : null
                }
              />
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
