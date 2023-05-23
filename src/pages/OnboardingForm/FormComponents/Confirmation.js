import { Box, Button, Typography, Divider } from "@mui/material";
import React, { useEffect } from "react";

function Confirmation({
  activeStep,
  handleNext,
  formData,
  handleBack,
  setConfirmationData,
  confirmationData,
  handleEditForm,
  handleReset,
}) {
  useEffect(() => {
    console.log("formData====> ", formData);
  }, [formData]);

  const handleFinish = () => {
    handleNext();
  };
  const edit = (value) => {
    console.log("value from Confirmation==>", value);
    handleEditForm(value);
  };

  return (
    <>
      <Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="h4"
            style={{ textAlign: "left", marginBottom: "15px" }}
          >
            Personal Details{" "}
          </Typography>
          <Button onClick={() => edit("PersonalDetails")}>Edit</Button>
        </Box>
        <Box sx={{ marginLeft: "10px" }}>
          <Typography variant="h6" style={{ textAlign: "left" }}>
            {formData.profilePhoto ? "Profile Photo :- Uploaded" : null}
          </Typography>
          <Typography variant="h6" style={{ textAlign: "left" }}>
            {formData.firstName ? "First Name :- " + formData.firstName : null}
          </Typography>
          <Typography variant="h6" style={{ textAlign: "left" }}>
            {formData.middleName
              ? "Middle Name :- " + formData.middleName
              : null}
          </Typography>
          <Typography variant="h6" style={{ textAlign: "left" }}>
            {formData.lastName ? "Last Name :- " + formData.lastName : null}
          </Typography>
          <Typography variant="h6" style={{ textAlign: "left" }}>
            {formData.birthDate ? "Birthdate  :- " + formData.birthDate : null}
          </Typography>
          <Typography variant="h6" style={{ textAlign: "left" }}>
            {formData.email ? "Email :- " + formData.email : null}
          </Typography>
          <Typography variant="h6" style={{ textAlign: "left" }}>
            {formData.contactNumber
              ? "Contact Number :- " + formData.contactNumber
              : null}
          </Typography>
          <Typography variant="h6" style={{ textAlign: "left" }}>
            {formData.alternateContactNumber
              ? "Alternate Contact Number :- " + formData.alternateContactNumber
              : null}
          </Typography>
          <Typography variant="h6" style={{ textAlign: "left" }}>
            {formData.gender ? "Gender :- " + formData.gender : null}
          </Typography>
          <Typography variant="h6" style={{ textAlign: "left" }}>
            {formData.github ? "Github :- " + formData.github : null}
          </Typography>
          <Typography variant="h6" style={{ textAlign: "left" }}>
            {formData.linkdin ? "Linkdin :-  " + formData.linkdin : null}
          </Typography>
          <Typography variant="h6" style={{ textAlign: "left" }}>
            {formData.bloodGroup
              ? "BloodGroup :- " + formData.bloodGroup
              : null}
          </Typography>
          <Typography variant="h6" style={{ textAlign: "left" }}>
            {formData.maritalStatus
              ? "Marital Status :- " + formData.maritalStatus
              : null}
          </Typography>
        </Box>
        <Typography
          variant="h5"
          style={{ textAlign: "left", marginTop: "10px" }}
        >
          Bank Details
        </Typography>
        <Box sx={{ marginLeft: "10px" }}>
          <Typography variant="h6" style={{ textAlign: "left" }}>
            {formData.bankName ? "Bank Name :- " + formData.bankName : null}
          </Typography>
          <Typography variant="h6" style={{ textAlign: "left" }}>
            {formData.accountNumber
              ? "Account Number :- " + formData.accountNumber
              : null}
          </Typography>
          <Typography variant="h6" style={{ textAlign: "left" }}>
            {formData.ifsc ? "IFSC Code :- " + formData.ifsc : null}
          </Typography>
          <Typography variant="h6" style={{ textAlign: "left" }}>
            {formData.branch ? "Branch  :- " + formData.branch : null}
          </Typography>
        </Box>
      </Box>
      <Divider sx={{ marginTop: "15px", marginBottom: "15px" }} />

      <Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="h4"
            style={{ textAlign: "left", marginBottom: "15px" }}
          >
            Education Details{" "}
          </Typography>
          <Button onClick={() => edit("PersonalDetails")}>Edit</Button>
        </Box>
        <Box sx={{ marginLeft: "10px" }}>
          {formData.educationDetails.map((education, index) => {
            return (
              <div key={index}>
                {education.educationType &&
                education.instituteName &&
                education.course &&
                education.cgpa &&
                education.passingYear ? (
                  <Typography variant="h6" style={{ textAlign: "left" }}>
                    {"Sr.No. :- " + index}
                  </Typography>
                ) : null}
                <Typography variant="h6" style={{ textAlign: "left" }}>
                  {education.educationType
                    ? "Education Type :- " + education.educationType
                    : null}
                </Typography>
                <Typography variant="h6" style={{ textAlign: "left" }}>
                  {education.instituteName
                    ? "Institute Name :- " + education.instituteName
                    : null}
                </Typography>
                <Typography variant="h6" style={{ textAlign: "left" }}>
                  {education.course ? "Course :- " + education.course : null}
                </Typography>
                <Typography variant="h6" style={{ textAlign: "left" }}>
                  {education.cgpa
                    ? "CGPA/Percentage :- " + education.cgpa
                    : null}
                </Typography>
                <Typography variant="h6" style={{ textAlign: "left" }}>
                  {education.passingYear
                    ? "Passing Year :- " + education.passingYear
                    : null}
                </Typography>
                <Divider sx={{ marginTop: "15px", marginBottom: "15px" }} />
              </div>
            );
          })}
          <Typography
            variant="h5"
            style={{ textAlign: "left", marginBottom: "15px" }}
          >
            Experience Details
          </Typography>
          {formData.experienceDetails.map((experience, index) => {
            return (
              <div key={index}>
                {experience.company &&
                experience.designation &&
                experience.technology &&
                experience.fromDate &&
                experience.jobChange &&
                (experience.companyPresent || experience.toDate) ? (
                  <Typography variant="h6" style={{ textAlign: "left" }}>
                    "Sr.No. :- "+ {index + 1}
                  </Typography>
                ) : null}

                <Typography variant="h6" style={{ textAlign: "left" }}>
                  {experience.company
                    ? "company :- " + experience.company
                    : null}
                </Typography>
                <Typography variant="h6" style={{ textAlign: "left" }}>
                  {experience.designation
                    ? "designation :- " + experience.designation
                    : null}
                </Typography>
                <Typography variant="h6" style={{ textAlign: "left" }}>
                  {experience.technology
                    ? "technology :- " + experience.technology
                    : null}
                </Typography>
                <Typography variant="h6" style={{ textAlign: "left" }}>
                  {experience.fromDate
                    ? "fromDate :- " + experience.fromDate
                    : null}
                </Typography>
                <Typography variant="h6" style={{ textAlign: "left" }}>
                  {experience.toDate ? "toDate :- " + experience.toDate : null}
                </Typography>
                <Typography variant="h6" style={{ textAlign: "left" }}>
                  {experience.jobChange
                    ? "jobChange :- " + experience.jobChange
                    : null}
                </Typography>
                <Typography variant="h6" style={{ textAlign: "left" }}>
                  {experience.companyPresent
                    ? experience.companyPresent === true
                      ? "companyPresent :- Yes"
                      : "companyPresent :- No"
                    : null}
                </Typography>
                <Divider sx={{ marginTop: "15px", marginBottom: "15px" }} />
              </div>
            );
          })}
        </Box>
      </Box>
      <Box sx={{ marginLeft: "10px" }}>
        <Box sx={{ marginLeft: "10px" }}>
          <Typography variant="h6" style={{ textAlign: "left" }}>
            {formData.aadharNumber
              ? "Aadhar Number :- " + formData.aadharNumber
              : null}
          </Typography>
          <Typography variant="h6" style={{ textAlign: "left" }}>
            {formData.aadharDocument ? "Aadhar Document :-  Uploaded" : null}
          </Typography>
          <Typography variant="h6" style={{ textAlign: "left" }}>
            {formData.pancardNumber
              ? "Pancard Number :- " + formData.pancardNumber
              : null}
          </Typography>
          <Typography variant="h6" style={{ textAlign: "left" }}>
            {formData.pancardDocument ? "Pancard Document  :- Uploaded" : null}
          </Typography>

          <Typography
            variant="h5"
            style={{
              textAlign: "left",
              marginTop: "15px",
              marginBottom: "15px",
            }}
          >
            Address{" "}
          </Typography>

          <Typography variant="h6" style={{ textAlign: "left" }}>
            {formData.streetLine1
              ? "Street Line 1 :- " + formData.streetLine1
              : null}
          </Typography>
          <Typography variant="h6" style={{ textAlign: "left" }}>
            {formData.streetLine2
              ? "Street Line 2 :- " + formData.streetLine2
              : null}
          </Typography>
          <Typography variant="h6" style={{ textAlign: "left" }}>
            {formData.country ? "Country :- " + formData.country : null}
          </Typography>
          <Typography variant="h6" style={{ textAlign: "left" }}>
            {formData.state ? "State :- " + formData.state : null}
          </Typography>
          <Typography variant="h6" style={{ textAlign: "left" }}>
            {formData.city ? "City :- " + formData.city : null}
          </Typography>
          <Typography variant="h6" style={{ textAlign: "left" }}>
            {formData.area ? "Area :-  " + formData.area : null}
          </Typography>
          <Typography variant="h6" style={{ textAlign: "left" }}>
            {formData.postalCode
              ? "PostalCode :- " + formData.postalCode
              : null}
          </Typography>
          <Typography variant="h6" style={{ textAlign: "left" }}>
            {formData.perStreetLine1
              ? "Permanent Street Line 1 :- " + formData.perStreetLine1
              : null}
          </Typography>
          <Typography variant="h6" style={{ textAlign: "left" }}>
            {formData.perStreetLine2
              ? "Permanent Street Line 2 :- " + formData.perStreetLine2
              : null}
          </Typography>
          <Typography variant="h6" style={{ textAlign: "left" }}>
            {formData.perCountry
              ? "Permanent Country :- " + formData.perCountry
              : null}
          </Typography>
          <Typography variant="h6" style={{ textAlign: "left" }}>
            {formData.perState
              ? "Permanent State :- " + formData.perState
              : null}
          </Typography>
          <Typography variant="h6" style={{ textAlign: "left" }}>
            {formData.perCity ? "Permanent City :- " + formData.perCity : null}
          </Typography>
          <Typography variant="h6" style={{ textAlign: "left" }}>
            {formData.perArea ? "Permanent Area :-  " + formData.perArea : null}
          </Typography>
          <Typography variant="h6" style={{ textAlign: "left" }}>
            {formData.perPostalCode
              ? "Permanent PostalCode :- " + formData.perPostalCode
              : null}
          </Typography>
          <Typography variant="h6" style={{ textAlign: "left" }}>
            {formData.latestExperienceLetter
              ? "Latest Experience Letter  :- Uploaded"
              : null}
          </Typography>
          <Typography variant="h6" style={{ textAlign: "left" }}>
            {formData.latestRelievingLetter
              ? "Latest Relieving Letter :- Uploaded"
              : null}
          </Typography>
          <Typography variant="h6" style={{ textAlign: "left" }}>
            {formData.salarySlips ? "salarySlips :- Uploaded" : null}
          </Typography>
          <Typography variant="h6" style={{ textAlign: "left" }}>
            {formData.uploadForm16 ? "Upload Form 16 :- Uploaded" : null}
          </Typography>
        </Box>
        {formData.educationCertificateType.map((certificate, index) => {
          return (
            <div key={index}>
              {certificate.educationCertificate && certificate.educationImg ? (
                <Typography variant="h6" style={{ textAlign: "left" }}>
                  {"Sr.No. :- " + index}
                </Typography>
              ) : null}
              <Typography variant="h6" style={{ textAlign: "left" }}>
                {certificate.educationCertificate
                  ? "Education Certificate :- " +
                    certificate.educationCertificate
                  : null}
              </Typography>
              <Typography variant="h6" style={{ textAlign: "left" }}>
                {certificate.educationImg
                  ? "Education Img :- " + certificate.educationImg
                  : null}
              </Typography>
              <Divider sx={{ marginTop: "15px", marginBottom: "15px" }} />
            </div>
          );
        })}
      </Box>

      <Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="h4"
            style={{ textAlign: "left", marginBottom: "15px" }}
          >
            Upload Documents{" "}
          </Typography>
          <Button onClick={() => edit("PersonalDetails")}>Edit</Button>
        </Box>
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
            marginRight: "10px",
          }}
          onClick={handleReset}
        >
          RESET
        </Button>
        <Button
          style={{
            width: "245px",
            height: "52px",
            backgroundColor: "#FF9933",
            color: "#FFFFFF",
            borderRadius: "5px",
          }}
          onClick={() => handleFinish()}
        >
          Finish
        </Button>
      </Box>
    </>
  );
}

export default Confirmation;
