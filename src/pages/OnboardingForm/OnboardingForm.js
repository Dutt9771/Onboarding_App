import * as React from 'react';
import '../../index.css';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Navbar from '../../layout/Navbar';
import { Paper } from '@mui/material';
import PersonalDetails from './FormComponents/PersonalDetails';
import EducationDetails from './FormComponents/EducationDetails';
import UploadDocuments from './FormComponents/UploadDocuments';
import Confirmation from './FormComponents/Confirmation';
import { useStyles } from '../../globleComponents/useStyles';
import { confirmAlert } from 'react-confirm-alert';

  
const steps = ['PersonalDetails', 'Education / Experience', 'Documents','Review Information'];

 function OnboardingForm() {
  const classes=useStyles()
  const [activeStep, setActiveStep] = React.useState(0);
  const [formData,setFormData] = React.useState({})
  const [personalDetailsData,setPersonalDetailsData] = React.useState({})
  const [educationDetailsData,setEducationDetailsData] = React.useState(null)
  const [uploadDocumentsData,setUploadDocumentsData] = React.useState(null)
  const [confirmationData,setConfirmationData] = React.useState(null)

  const formDataAll=(values)=>{
    setFormData({...formData, ...values})
  }

  const handleEditForm=(value)=>{
    if(value==="PersonalDetails"){
      setActiveStep(0)
    }else if(value==="EducationDetails"){
      setActiveStep(1)
    }else if(value==="UploadDocuments"){
      setActiveStep(2)
    }
  }
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    confirmAlert({
      title: 'Confirm to Reset',
      message: 'Are you sure to Reset.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => setActiveStep(0)
        },
        {
          label: 'No',
        }
      ]
    });
    
  };





  return (
    <>
    <Navbar />
        <Paper sx={{width:'1200px',padding:'20px',marginLeft:'auto',marginRight:'auto'}} >
      
    <Box sx={{ width: '100%' }} className={classes.root}>
      <Stepper activeStep={activeStep}  className={classes.stepper}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps} >
              <StepLabel {...labelProps} style={{marginTop:'20px'}}>{label}</StepLabel><br/>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            Data Uploaded
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset} style={{
                    width: "245px",
                    height: "52px",
                    backgroundColor: "#FF9933",
                    color: "#FFFFFF",
                    borderRadius: "5px",
                  }}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {
            activeStep === 0 && <PersonalDetails activeStep={activeStep} handleNext={handleNext} formDataAll={formDataAll} handleBack={handleBack} setPersonalDetailsData={setPersonalDetailsData} personalDetailsData={personalDetailsData}/>
          }
          {
            activeStep === 1 && <EducationDetails activeStep={activeStep} handleNext={handleNext} formDataAll={formDataAll} handleBack={handleBack} setEducationDetailsData={setEducationDetailsData} educationDetailsData={educationDetailsData}/>
          }
          {
            activeStep === 2 && <UploadDocuments activeStep={activeStep} handleNext={handleNext} formDataAll={formDataAll} handleBack={handleBack} uploadDocumentsData={uploadDocumentsData} setUploadDocumentsData={setUploadDocumentsData}/>
          }
          {
            activeStep === 3 && <Confirmation activeStep={activeStep} handleNext={handleNext} formData={formData} handleBack={handleBack} confirmationData={confirmationData} setConfirmationData={setConfirmationData} handleEditForm={handleEditForm} handleReset={handleReset} />
          }
              {
                activeStep === steps.length - 1
              }

        </React.Fragment>
      )}
    </Box>
    </Paper>
    </>
  );
}


export default OnboardingForm;