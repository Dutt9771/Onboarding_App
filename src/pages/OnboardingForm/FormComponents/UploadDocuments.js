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
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import {
  Dropzone,
  FileMosaic
} from "@files-ui/react";
import { v4 as uuidv4 } from "uuid";
import { UploadDocumentSchemas } from "../../../validation/UploadDocumentSchemas";
import { Item } from "../../../globleComponents/Item";
import { useStyles } from "../../../globleComponents/useStyles";
import { confirmAlert } from "react-confirm-alert";
const initialvalues = {
  aadharNumber: "",
  aadharDocument: null,
  pancardNumber: "",
  pancardDocument: null,
  presentAddress: "",
  permanentAddress: "",
  educationCertificateType: [
    {
      id: uuidv4(),
      educationCertificate: "",
      educationImg: null,
    },
  ],
  latestExperienceLetter: null,
  latestRelievingLetter: null,
  salarySlips: null,
  uploadForm16: null,
  addressSame: null,
  streetLine1: "",
  streetLine2: "",
  country: "",
  state: "",
  city: "",
  area: "",
  postalCode: "",
  perStreetLine1: "",
  perStreetLine2: "",
  perCountry: "",
  perState: "",
  perCity: "",
  perArea: "",
  perPostalCode: "",
};

function UploadDocuments({
  activeStep,
  handleNext,
  formDataAll,
  handleBack,
  setUploadDocumentsData,
  uploadDocumentsData,
}) {
  const classes = useStyles();

  const [aadharDocument, setAadharDocument] = React.useState([]);
  const [pancardDocument, setPancardDocument] = React.useState([]);
  const [experienceLetter, setExperienceLetter] = React.useState([]);
  const [relievingLetter, setRelievingLetter] = React.useState([]);
  const [salarySlips, setSalarySlips] = React.useState([]);
  const [uploadForm16, setUploadForm16] = React.useState([]);

  //   const addFiles = (setFunc,keyValue) => {
  //     return (incommingFiles) => {
  //       if(incommingFiles && incommingFiles.valid)
  //       setFunc(incommingFiles);
  //       setFieldValue(keyValue, incommingFiles);
  //     };
  //   };

  // const experienceLetterAdd = addFiles(setExperienceLetter,"experienceLetter");
  // const relievingLetterAdd = addFiles(setRelievingLetter,"relievingLetter");
  // const salarySlipsAdd = addFiles(setSalarySlips,"salarySlips");
  // const uploadForm16Add = addFiles(setUploadForm16,"uploadForm16");
  // const aadharDocumentFilesAdd = addFiles(setAadharDocument,"aadharDocument");
  // const pancardDocumentFilesAdd = addFiles(setPancardDocument,"pancardDocument");

  // const removeFile = (setFunc,keyValue,array) => {
  //   return (id) => {
  //     setFunc(prevFiles => prevFiles.filter(file => file.id !== id));
  //     setFieldValue(keyValue, prevFiles => prevFiles.filter(file => file.id !== id));
  //   };
  // };

  // const experienceLetterRemove = removeFile(setExperienceLetter,"experienceLetter");
  // const relievingLetterRemove = removeFile(setRelievingLetter,"relievingLetter");
  // const salarySlipsRemove = removeFile(setSalarySlips,"salarySlips");
  // const uploadForm16Remove = removeFile(setUploadForm16,"uploadForm16");
  // const aadharDocumentRemove = removeFile(setAadharDocument,"aadharDocument");
  // const pancardDocumentRemove = removeFile(setPancardDocument,"pancardDocument");

  const experienceLetterAdd = (incommingFiles) => {
    setExperienceLetter(incommingFiles);
    setFieldValue("experienceLetter", incommingFiles);
  };
  const relievingLetterAdd = (incommingFiles) => {
    setRelievingLetter(incommingFiles);
    setFieldValue("relievingLetter", incommingFiles);
  };
  const salarySlipsAdd = (incommingFiles) => {
    setFieldValue("salarySlips", incommingFiles);
  };
  const uploadForm16Add = (incommingFiles) => {
    setUploadForm16(incommingFiles);
    setFieldValue("uploadForm16", incommingFiles);
  };
  const aadharDocumentFilesAdd = (incommingFiles) => {
    setAadharDocument(incommingFiles);
    setFieldValue("aadharDocument", incommingFiles);
  };
  const pancardDocumentFilesAdd = (incommingFiles) => {
    setPancardDocument(incommingFiles);
    setFieldValue("pancardDocument", incommingFiles);
  };

  const experienceLetterRemove = (id) => {
    setAadharDocument(experienceLetter.filter((x) => x.id !== id));
    setFieldValue(
      "experienceLetter",
      experienceLetter.filter((x) => x.id !== id)
    );
  };
  const relievingLetterRemove = (id) => {
    setRelievingLetter(relievingLetter.filter((x) => x.id !== id));
    setFieldValue(
      "relievingLetter",
      relievingLetter.filter((x) => x.id !== id)
    );
  };
  const salarySlipsRemove = (id) => {
    setSalarySlips(salarySlips.filter((x) => x.id !== id));
    setFieldValue(
      "salarySlips",
      salarySlips.filter((x) => x.id !== id)
    );
  };
  const uploadForm16Remove = (id) => {
    setUploadForm16(uploadForm16.filter((x) => x.id !== id));
    setFieldValue(
      "uploadForm16",
      uploadForm16.filter((x) => x.id !== id)
    );
  };
  const aadharDocumentRemove = (id) => {
    setAadharDocument(aadharDocument.filter((x) => x.id !== id));
    setFieldValue(
      "aadharDocument",
      aadharDocument.filter((x) => x.id !== id)
    );
  };
  const pancardDocumentRemove = (id) => {
    setPancardDocument(pancardDocument.filter((x) => x.id !== id));
    setFieldValue(
      "pancardDocument",
      pancardDocument.filter((x) => x.id !== id)
    );
  };
  console.log("Values education Details", uploadDocumentsData);

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
    setValues,
    isValid,
    dirty,
  } = useFormik({
    initialValues: initialvalues,
    validationSchema: UploadDocumentSchemas,
    onSubmit: (values, action) => {
      console.log(imageFields);
      console.log("Values education Details", uploadDocumentsData);
      console.log("Submitted Values", values);
      setUploadDocumentsData(values);
      formDataAll(values);
      handleNext();
    },
  });
  const handleBackuploadForm = () => {
    setUploadDocumentsData(values);
    handleBack();
  };
  console.log(values);
  const countryAddress = {
    country: {
      name: "India",
      states: [
        {
          name: "Maharashtra",
          cities: [
            {
              name: "Mumbai",
              areas: [
                {
                  name: "Andheri East",
                  postalCodes: ["400069", "400099"],
                },
                {
                  name: "Bandra West",
                  postalCodes: ["400050", "400051"],
                },
              ],
            },
            {
              name: "Pune",
              areas: [
                {
                  name: "Koregaon Park",
                  postalCodes: ["411001", "411036"],
                },
                {
                  name: "Baner",
                  postalCodes: ["411045", "411007"],
                },
              ],
            },
          ],
        },
        {
          name: "Karnataka",
          cities: [
            {
              name: "Bengaluru",
              areas: [
                {
                  name: "Indiranagar",
                  postalCodes: ["560008", "560038"],
                },
                {
                  name: "Koramangala",
                  postalCodes: ["560034", "560095"],
                },
              ],
            },
            {
              name: "Mysuru",
              areas: [
                {
                  name: "Vijaynagar",
                  postalCodes: ["570017", "570021"],
                },
                {
                  name: "Saraswathipuram",
                  postalCodes: ["570009", "570015"],
                },
              ],
            },
          ],
        },
        {
          name: "Tamil Nadu",
          cities: [
            {
              name: "Chennai",
              areas: [
                {
                  name: "Adyar",
                  postalCodes: ["600020", "600026"],
                },
                {
                  name: "T Nagar",
                  postalCodes: ["600017", "600018"],
                },
              ],
            },
            {
              name: "Coimbatore",
              areas: [
                {
                  name: "RS Puram",
                  postalCodes: ["641002", "641003"],
                },
                {
                  name: "Saibaba Colony",
                  postalCodes: ["641011", "641012"],
                },
              ],
            },
          ],
        },
        {
          name: "Uttar Pradesh",
          cities: [
            {
              name: "Lucknow",
              areas: [
                {
                  name: "Gomti Nagar",
                  postalCodes: ["226010", "226016"],
                },
                {
                  name: "Aliganj",
                  postalCodes: ["226024", "226025"],
                },
              ],
            },
            {
              name: "Agra",
              areas: [
                {
                  name: "Sikandra",
                  postalCodes: ["282007", "282008"],
                },
                {
                  name: "Kamla Nagar",
                  postalCodes: ["282004", "282005"],
                },
              ],
            },
          ],
        },
        {
          name: "Gujarat",
          cities: [
            {
              name: "Ahmedabad",
              areas: [
                {
                  name: "Navrangpura",
                  postalCodes: ["380009", "380014"],
                },
                {
                  name: "Bodakdev",
                  postalCodes: ["380054", "380059"],
                },
              ],
            },
            {
              name: "Surat",
              areas: [
                {
                  name: "Adajan",
                  postalCodes: ["395009", "395007"],
                },
                {
                  name: "Vesu",
                  postalCodes: ["395006", "395002"],
                },
              ],
            },
          ],
        },
      ],
    },
  };

  const handleChangeCheckbox = () => {
    if (values.addressSame === false) {
      setFieldValue("perStreetLine1", "");
      setFieldValue("perStreetLine2", "");
      setFieldValue("perCountry", "");
      setFieldValue("perState", "");
      setFieldValue("perCity", "");
      setFieldValue("perArea", "");
      setFieldValue("perPostalCode", "");
      setFieldValue("perStreetLine1", values.streetLine1);
      setFieldValue("perStreetLine2", values.streetLine2);
      setFieldValue("perCountry", values.country);
      setFieldValue("perState", values.state);
      setFieldValue("perCity", values.city);
      setFieldValue("perArea", values.area);
      setFieldValue("perPostalCode", values.postalCode);
    } else {
      setFieldValue("perStreetLine1", "");
      setFieldValue("perStreetLine2", "");
      setFieldValue("perCountry", "");
      setFieldValue("perState", "");
      setFieldValue("perCity", "");
      setFieldValue("perArea", "");
      setFieldValue("perPostalCode", "");
    }
  };

  const handleSetData = (data) => {
    if (data.aadharDocument) {
      setAadharDocument(data.aadharDocument);
    }
    if (data.pancardDocument) {
      setPancardDocument(data.pancardDocument);
    }
    if (data.experienceLetter) {
      setExperienceLetter(data.experienceLetter);
    }
    if (data.relievingLetter) {
      setRelievingLetter(data.relievingLetter);
    }
    if (data.salarySlips) {
      setSalarySlips(data.salarySlips);
    }
    if (data.uploadForm16) {
      setUploadForm16(data.uploadForm16);
    }
  };

  useEffect(() => {
    if (uploadDocumentsData != null) {
      console.log("Values uploadDocumentsData Details", uploadDocumentsData);
      setValues(uploadDocumentsData);
      handleSetData(uploadDocumentsData);
      let Arr = [];
      uploadDocumentsData.educationCertificateType.map((Img) => {
        let Obj = {
          id: Img.id,
          files: [Img.educationImg],
        };
        if (Img.educationImg) {
          Arr.push(Obj);
          console.log("Obj=====>", Obj);
          setImageFields(Arr);
        }
      });
    }
  }, []);

  const [imageFields, setImageFields] = useState([
    { id: Date.now(), files: [] },
  ]);

  console.log("imageFields", imageFields);
  const addImageField = () => {
    setImageFields([...imageFields, { id: Date.now(), files: [] }]);
    setFieldValue("educationCertificateType", [
      ...values.educationCertificateType,
      {
        educationCertificate: "",
        educationImg: null,
      },
    ]);
  };
  const handleRemoveImage = (indexToRemove) => {
    const updatedCertificateTypes = [...values.educationCertificateType];
    updatedCertificateTypes.splice(indexToRemove, 1);
    
    setImageFields(
      imageFields.filter((field, index) => index !== indexToRemove)
      );
      setFieldValue("educationCertificateType", updatedCertificateTypes);
  }
  const handleRemoveImageField = (indexToRemove) => {
    if(indexToRemove>0){
if(values.educationCertificateType[indexToRemove].educationCertificate || values.educationCertificateType[indexToRemove].educationImg){
    confirmAlert({
      title: 'Confirm to Delete',
      message: 'Are you sure to Delete.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => handleRemoveImage(indexToRemove)
        },
        {
          label: 'No',
        }
      ]
    });
  }else{
    handleRemoveImage(indexToRemove)
  }
  }
  }
    
    
    
    
  const educationCertificates = [
    "10th",
    "12th",
    "Diploma",
    "Degree",
    "Master's degree",
  ];
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
              <Dropzone
                color="#FF9933"
                style={{ width: "100%" }}
                onChange={aadharDocumentFilesAdd}
                value={aadharDocument}
                label="Upload AadharCard Front & Back Side*"
                onBlur={handleBlur}
                name="pancardDocument"
                behaviour={"add"}
                accept={"image/*"}
                maxFileSize={2 * 1024 * 1024}
                maxFiles={2}
                footerConfig={{ customMessage: "Upload Aadharcard Document*" }}
                helperText={
                  errors && <span style={{ color: "red" }}>{errors}</span>
                }
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

              <div style={{ color: "#d32f2f" }}>
                {values.aadharDocument ? "errors aadharDocument" : null}
              </div>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <Dropzone
                color="#FF9933"
                style={{ width: "100%" }}
                onChange={pancardDocumentFilesAdd}
                value={pancardDocument}
                label="Upload PanCard Document*"
                onBlur={handleBlur}
                name="pancardDocument"
                behaviour={"add"}
                accept={"image/*"}
                maxFileSize={2 * 1024 * 1024}
                maxFiles={1}
                footerConfig={{ customMessage: "Upload Pancard Document*" }}
                helperText={
                  errors && <span style={{ color: "red" }}>{errors}</span>
                }
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
            </Item>
          </Grid>
        </Grid>
        <Box
          display="flex"
          justifyContent="space-between"
          sx={{ marginTop: "20px", marginBottom: "20px" }}
        >
          <Typography variant="h4">Present Address</Typography>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Item>
              <TextField
                className={classes.textField}
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
                <InputLabel id="country">Country</InputLabel>
                <Select
                  labelId="country"
                  name="country"
                  // onBlur={handleBlur}
                  label="Country"
                  value={values.country}
                  onChange={(event) =>
                    setFieldValue("country", event.target.value)
                  }
                  sx={{ width: "100%" }}
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
                <InputLabel id="state">State</InputLabel>
                <Select
                  labelId="state"
                  name="state"
                  onBlur={handleBlur}
                  label="State"
                  value={values.state}
                  onChange={(event) =>
                    setFieldValue("state", event.target.value)
                  }
                  sx={{ width: "100%" }}
                >
                  {countryAddress.country.states &&
                    countryAddress.country.states.map((stateAddress, index) => (
                      <MenuItem key={index} value={stateAddress.name}>
                        {stateAddress.name}
                      </MenuItem>
                    ))}
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
                <InputLabel id="city">City</InputLabel>
                <Select
                  labelId="city"
                  name="city"
                  onBlur={handleBlur}
                  label="City"
                  value={values.city}
                  onChange={(event) =>
                    setFieldValue("city", event.target.value)
                  }
                  sx={{ width: "100%" }}
                >
                  {countryAddress.country.states
                    .find((stateAddress) => stateAddress.name === values.state)
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
                <InputLabel id="area">Area</InputLabel>
                <Select
                  labelId="area"
                  name="area"
                  onBlur={handleBlur}
                  label="Area"
                  value={values.area}
                  onChange={(event) =>
                    setFieldValue("area", event.target.value)
                  }
                  sx={{ width: "100%" }}
                >
                  {countryAddress.country.states
                    .find((stateAddress) => stateAddress.name === values.state)
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
                <InputLabel id="postalCode">Postal Code</InputLabel>
                <Select
                  labelId="postalCode"
                  name="postalCode"
                  onBlur={handleBlur}
                  label="postalCode"
                  value={values.postalCode}
                  onChange={(event) =>
                    setFieldValue("postalCode", event.target.value)
                  }
                  sx={{ width: "100%" }}
                >
                  {countryAddress.country.states
                    .find((stateAddress) => stateAddress.name === values.state)
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
        <Box
          display="flex"
          justifyContent="space-between"
          sx={{ marginTop: "20px", marginBottom: "20px" }}
          className={classes.textField}
        >
          <Typography variant="h4">Permenent Address</Typography>
          <Grid item xs={4}>
            <FormControl component="fieldset" className={classes.textField}>
              <FormGroup aria-label="position" row>
                <FormControlLabel
                  value={values.addressSame}
                  control={<Checkbox />}
                  label="Same as Present Address"
                  name="addressSame"
                  sx={{ marginTop: "10px", width: "100%" }}
                  onChange={handleChange}
                  onClick={handleChangeCheckbox}
                />
              </FormGroup>
            </FormControl>
          </Grid>
        </Box>

        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Item>
              <TextField
                className={classes.textField}
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
              <FormControl fullWidth className={classes.textField}>
                <InputLabel id="perCountry">Country</InputLabel>
                <Select
                  labelId="perCountry"
                  name="perCountry"
                  onBlur={handleBlur}
                  label="perCountry"
                  value={values.perCountry}
                  onChange={(event) =>
                    setFieldValue("perCountry", event.target.value)
                  }
                  sx={{ width: "100%" }}
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
              <FormControl fullWidth className={classes.textField}>
                <InputLabel id="perState">State</InputLabel>
                <Select
                  labelId="perState"
                  name="perState"
                  onBlur={handleBlur}
                  label="State"
                  value={values.perState}
                  onChange={(event) =>
                    setFieldValue("perState", event.target.value)
                  }
                  sx={{ width: "100%" }}
                >
                  {countryAddress.country.states &&
                    countryAddress.country.states.map((stateAddress, index) => (
                      <MenuItem key={index} value={stateAddress.name}>
                        {stateAddress.name}
                      </MenuItem>
                    ))}
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
              <FormControl fullWidth className={classes.textField}>
                <InputLabel id="perCity">City</InputLabel>
                <Select
                  labelId="perCity"
                  name="perCity"
                  onBlur={handleBlur}
                  label="City"
                  value={values.perCity}
                  onChange={(event) =>
                    setFieldValue("perCity", event.target.value)
                  }
                  sx={{ width: "100%" }}
                >
                  {countryAddress.country.states
                    .find((stateAddress) => stateAddress.name === values.state)
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
              <FormControl fullWidth className={classes.textField}>
                <InputLabel id="perArea">Area</InputLabel>
                <Select
                  labelId="perArea"
                  name="perArea"
                  onBlur={handleBlur}
                  label="Area"
                  value={values.perArea}
                  onChange={(event) =>
                    setFieldValue("perArea", event.target.value)
                  }
                  sx={{ width: "100%" }}
                >
                  {countryAddress.country.states
                    .find((stateAddress) => stateAddress.name === values.state)
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
              <FormControl fullWidth className={classes.textField}>
                <InputLabel id="perPostalCode">Postal Code</InputLabel>
                <Select
                  labelId="perPostalCode"
                  name="perPostalCode"
                  onBlur={handleBlur}
                  label="perPostalCode"
                  value={values.perPostalCode}
                  onChange={(event) =>
                    setFieldValue("perPostalCode", event.target.value)
                  }
                  sx={{ width: "100%" }}
                >
                  {countryAddress.country.states
                    .find((stateAddress) => stateAddress.name === values.state)
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
            <Grid item xs={12}>
              <Item>
                <FormControl
                  fullWidth
                  error={
                    touched.educationCertificateType?.[index]
                      ?.educationCertificate &&
                    Boolean(
                      errors.educationCertificateType?.[index]
                        ?.educationCertificate
                    )
                  }
                  className={classes.textField}
                >
                  <InputLabel id={`label-${field.id}`}>
                    Education Certificates
                  </InputLabel>
                  <Select
                    label="Education Certificates"
                    id={`select-${field.id}`}
                    name={`educationCertificateType[${index}].educationCertificate`}
                    value={
                      values.educationCertificateType[index]
                        .educationCertificate
                    }
                    onBlur={handleBlur}
                    onChange={handleChange}
                  >
                    {educationCertificates.map((item, idx) => (
                      <MenuItem key={idx} value={item}>
                        {item}
                      </MenuItem>
                    ))}
                  </Select>
                  {touched.educationCertificateType?.[index]
                    ?.educationCertificate &&
                    errors.educationCertificateType?.[index]
                      ?.educationCertificate && (
                      <FormHelperText>
                        {
                          errors.educationCertificateType?.[index]
                            ?.educationCertificate
                        }
                      </FormHelperText>
                    )}
                </FormControl>
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item>
                <Dropzone
                  color="#FF9933"
                  style={{ width: "100%", marginTop: "30px" }}
                  onChange={(files) => {
                    const updatedFields = imageFields.map((f) => {
                      if (f.id === field.id) {
                        return { ...f, files };
                      }
                      return f;
                    });
                    setImageFields(updatedFields);
                    setFieldValue(
                      `educationCertificateType[${index}].educationImg`,
                      files[0]
                    );
                  }}
                  value={field.files}
                  label="Upload"
                  onBlur={handleBlur}
                  name={`imageField_${field.id}`}
                  behaviour="add"
                  accept="image/*"
                  maxFileSize={2 * 1024 * 1024}
                  maxFiles={1}
                  footerConfig={{ customMessage: "Upload Image" }}
                  helperText={
                    touched.educationCertificateType?.[index]?.educationImg &&
                    errors.educationCertificateType?.[index]?.educationImg && (
                      <span style={{ color: "red" }}>
                        {errors.educationCertificateType?.[index]?.educationImg}
                      </span>
                    )
                  }
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
                          setFieldValue(
                            `educationCertificateType[${index}].educationImg`,
                            null
                          );
                        }}
                        info
                        preview
                      />
                    ))}
                </Dropzone>
              </Item>
            </Grid>
            <Grid
              item
              xs={12}
              style={{ display: "flex", justifyContent: "end" }}
            >
              <Button
                style={
                  index > "0" ? { marginLeft: "auto" } : { display: "none" }
                }
                size="small"
                type="button"
                onClick={() => handleRemoveImageField(index)}
              >
                <img
                  src={require("../../../assets/delete60.png")}
                  alt=""
                  width={30}
                  height={30}
                />
              </Button>
            </Grid>
            <Box sx={{ height: "30px" }} />
            <Divider sx={{ marginBottom: "30px" }} />
          </Grid>
        ))}

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Item>
              <Dropzone
                color="#FF9933"
                style={{ width: "100%" }}
                onChange={experienceLetterAdd}
                value={experienceLetter}
                label="Upload Latest Experience Letter*"
                name="latestExperienceLetter"
                onBlur={handleBlur}
                behaviour={"add"}
                accept={"image/*"}
                maxFileSize={2 * 1024 * 1024}
                maxFiles={1}
                footerConfig={{
                  customMessage: "Upload Latest Experience Letter*",
                }}
                helperText={
                  errors && <span style={{ color: "red" }}>{errors}</span>
                }
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
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <Dropzone
                color="#FF9933"
                style={{ width: "100%" }}
                onChange={relievingLetterAdd}
                value={relievingLetter}
                label="Upload Latest Relieving Letter*"
                onBlur={handleBlur}
                name="latestRelievingLetter"
                behaviour={"add"}
                accept={"image/*"}
                maxFileSize={2 * 1024 * 1024}
                maxFiles={1}
                footerConfig={{
                  customMessage: "Upload Latest Relieving Letter*",
                }}
                helperText={
                  errors && <span style={{ color: "red" }}>{errors}</span>
                }
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
            </Item>
          </Grid>

          <Grid item xs={6}>
            <Item>
              <Dropzone
                color="#FF9933"
                style={{ width: "100%" }}
                onChange={salarySlipsAdd}
                value={salarySlips}
                label="Upload Salary Slips (3 Months)*"
                name="salarySlips"
                onBlur={handleBlur}
                behaviour={"add"}
                accept={"image/*"}
                maxFileSize={2 * 1024 * 1024}
                maxFiles={1}
                footerConfig={{
                  customMessage: "Upload Salary Slips (3 Months)*",
                }}
                helperText={
                  errors && <span style={{ color: "red" }}>{errors}</span>
                }
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
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <Dropzone
                color="#FF9933"
                style={{ width: "100%" }}
                onChange={uploadForm16Add}
                value={uploadForm16}
                label="Upload Form 16 of Previous Employer*"
                onBlur={handleBlur}
                name="uploadForm16"
                behaviour={"add"}
                accept={"image/*"}
                maxFileSize={2 * 1024 * 1024}
                maxFiles={1}
                footerConfig={{
                  customMessage: "Upload Form 16 of Previous Employer*",
                }}
                helperText={
                  errors && <span style={{ color: "red" }}>{errors}</span>
                }
              >
                {uploadForm16.length > 0 &&
                  uploadForm16.map((file) => (
                    <FileMosaic
                      key={file.id}
                      {...file}
                      onDelete={uploadForm16Remove}
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
            onClick={handleBackuploadForm}
            sx={{ mr: 1 }}
          >
            Back
          </Button>
          <Box sx={{ flex: "1 1 auto" }} />

          <Button
            type="submit"
            style={
              !isValid || !dirty
                ? {
                    width: "245px",
                    height: "52px",
                    color: "#FFFFFF",
                    borderRadius: "5px",
                    backgroundColor: "#fcbf81",
                  }
                : {
                    width: "245px",
                    height: "52px",
                    backgroundColor: "#FF9933",
                    color: "#FFFFFF",
                    borderRadius: "5px",
                  }
            }
            disabled={!isValid || !dirty}
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
