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
import React, { Component, useEffect } from "react";
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
const initialvalues = {
  aadharNumber: "",
  aadharDocument: null,
  pancardNumber: "",
  pancardDocument: null,
  presentAddress: "",
  permanentAddress: "",
  addressSame:false,
  educationCertificateType:[{
    educationCertificate: "",
    educationCertificateImg:null
  },],
 
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

export const UploadDocumentSchemas = Yup.object({
  aadharNumber: Yup.number().required("Aadharcard Number is required").typeError("Aadharcard Number must be Number"),
  aadharDocument: Yup.array().required("Aadhar Document is required"),
  pancardNumber: Yup.number().required("Pancard Number is required").typeError("Aadharcard Number must be Number"),
  pancardDocument: Yup.array().required("Pancard Document is required"),
  presentAddress: Yup.string().required("Present Address is required"),
  permanentAddress: Yup.string().required("Permanent Address is required"),
  educationCertificateType:Yup.array().of(
        Yup.object().shape({
      educationCertificate: Yup.string().required("Education Certificate is required"),
        })
  )
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
  const [educationImg, seteducationImg] = React.useState([]);

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
  const educationImgAdd = (incommingFiles,index,value) => {
    console.log("incomming File",incommingFiles);
    console.log("incomming File",index);
    console.log("incomming File",value);
    seteducationImg(incommingFiles);
  };
  const educationImgremove = (id) => {
    setPancardDocument(pancardDocument.filter((x) => x.id !== id));
  };

  useEffect(() => {
    if(aadharDocument.length && aadharDocument[0].valid){
      setFieldValue("aadharDocument", aadharDocument);
    }
    if(pancardDocument.length && !pancardDocument[0].errors.length){
      setFieldValue("pancardDocument", pancardDocument);
    }
  }, [aadharDocument, pancardDocument]);
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

      formDataAll(values);
      console.log(values);
      handleNext();
      setUploadDocumentsData(values);
   
    },
  });
  console.log(values);
  const handleAddEducationCertificate = () => {
    console.log(values);
    setValues({
      ...values,
      educationCertificateType: [
        ...values.educationCertificateType,
        {
          educationCertificate: "",
        },
      ],
    });
  };

  const handleRemoveEducationCertificate = (index) => {
    const educationCertificateType = [...values.educationCertificateType];
    educationCertificateType.splice(index, 1);
    setValues({
      ...values,
      educationCertificateType,
    });
  };

const educationCertificates=["10th","12th","Diploma","Degree","Master's degree"]
  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        sx={{ marginTop: "20px", marginBottom: "20px" }}
      >
        <Typography variant="h4">Documents</Typography>
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
                      onDelete={aadharDocumentremove}
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
                      onDelete={pancardDocumentremove}
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
          onClick={handleAddEducationCertificate}
        >
          ADD Education
        </Button>
      </Box>
      <Grid container spacing={2}>
      {values.educationCertificateType.map((education, index) => (
      <React.Fragment key={index}>

              

    
    <Grid item xs={3}>
        
    <FormControl fullWidth className={classes.textField}>
                    <InputLabel id="label">Education Certificates</InputLabel>
                    <Select
                      label="Education Certificates"
                      id="label"
                      name={`educationCertificateType[${index}].educationCertificate`}
                      value={values.educationCertificateType[index].educationCertificate}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      error={
                        errors.educationCertificateType &&
                        errors.educationCertificateType[index] &&
                        errors.educationCertificateType[index].educationCertificate &&
                        touched.educationCertificateType &&
                        touched.educationCertificateType[index] &&
                        touched.educationCertificateType[index].educationCertificate
                      }
                      helperText={
                        errors.educationCertificateType &&
                        errors.educationCertificateType[index] &&
                        errors.educationCertificateType[index].educationCertificate &&
                        touched.educationCertificateType &&
                        touched.educationCertificateType[index] &&
                        touched.educationCertificateType[index].educationCertificate
                          ? errors.educationCertificateType[index].educationCertificate
                          : null
                      }
                    >
                      {educationCertificates.map((item, index) => (
                        <MenuItem value={item} key={index}>
                          {item}
                        </MenuItem>
                      ))}
                    </Select>
                    {errors.educationCertificateType &&
                      errors.educationCertificateType[index] &&
                      errors.educationCertificateType[index].educationCertificate &&
                      touched.educationCertificateType &&
                      touched.educationCertificateType[index] &&
                      touched.educationCertificateType[index].educationCertificate && (
                        <FormHelperText style={{ color: "#d32f2f" }}>
                          {errors.educationCertificateType &&
                          errors.educationCertificateType[index] &&
                          errors.educationCertificateType[index].educationCertificate &&
                          touched.educationCertificateType &&
                          touched.educationCertificateType[index] &&
                          touched.educationCertificateType[index].educationCertificate
                            ? errors.educationCertificateType[index].educationCertificate
                            : null}
                        </FormHelperText>
                      )}
                  </FormControl>
        
      </Grid>
      <Grid item xs={6}>
            <Item>
              
              <Dropzone
                color="#FF9933"
                style={{ width: "100%",height:"40%" }}
                onChange={()=>educationImgAdd(index,values.educationCertificateType[index].educationCertificate)}
                value={educationImg[index]}
                label="Upload"
                id="aadharDocument"
                name="aadharDocument"
                onBlur={handleBlur}
                behaviour={"add"}
                accept={"image/*"}
                maxFileSize={2 * 1024 * 1024}
                maxFiles={1}
                footerConfig={{ customMessage: "Upload Pancard Document" }}
                helperText={errors && <span style={{ color: 'red' }}>{errors}</span>}
              
              >
                {educationImg[index].length > 0 &&
                  educationImg[index].map((file) => (
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
               </React.Fragment>
))}
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
