import * as React from 'react';
import '../../index.css';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Navbar from '../../layout/Navbar';
import { Paper, TextField } from '@mui/material';
import { useFormik } from 'formik';
import PersonalDetails from './PersonalDetails';
import EducationDetails from './EducationDetails';
import UploadDocuments from './UploadDocuments';
import Confirmation from './Confirmation';
import { makeStyles } from '@mui/styles';



const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    backgroundColor: 'transparent',
  },

  stepper: {
    backgroundColor: 'transparent',
    // change icon color for all steps
    '& .MuiStepIcon-root': {
      color: '#FF9933', // Customize the color of the Stepper icon
    },
    '& .MuiStepIcon-active': {
      color: 'var(--my-brand-color-dark)', // Customize the color of the active Stepper icon
    },
    '& .MuiStepIcon-completed': {
      color: 'var(--my-brand-color-dark)', // Customize the color of the completed Stepper icon
    },

    // change label color for all steps
    '& .MuiStepLabel-label': {
      color: 'var(--my-disabled-step-color)', // Customize the color of the StepLabel text
    },

    '& .MuiStepLabel-active': {
      color: 'var(--my-brand-color-dark)', // Customize the color of the active StepLabel text
    },
    '& .MuiStepLabel-completed': {
      color: 'var(--my-brand-color-dark)', // Customize the color of the completed StepLabel text
    },
    
    // change connector color for all steps
    '& .MuiStepConnector-line': {
      borderColor: 'var(--my-disabled-step-color)', // Customize the color of the StepConnector line
    },
    // change connector color for active steps
    '& .MuiStepConnector-active': {
      '& .MuiStepConnector-line': {
        borderColor: 'var(--my-brand-color-dark)', // Customize the color of the active StepConnector line
      }
    }
  },
}));

  
const steps = ['PersonalDetails', 'Education / Experience', 'Documents','Review Information'];

export default function OnboardingForm() {
  const classes=useStyles()
  const [activeStep, setActiveStep] = React.useState(0);
  const [formData,setFormData] = React.useState({})
  const [personalDetailsData,setPersonalDetailsData] = React.useState({})
  const [educationDetailsData,setEducationDetailsData] = React.useState({})
  // const [skipped, setSkipped] = React.useState(new Set());

  // const isStepOptional = (step) => {
  //   return step === 1;
  // };

  // const isStepSkipped = (step) => {
  //   return skipped.has(step);
  // };

  const pesonalDetailsDataAll=(values)=>{
    setPersonalDetailsData(values)
  }
  const educationDetailsDataAll=(values)=>{
    setEducationDetailsData(values)
  }
  const formDataAll=(values)=>{
    setFormData({...formData, ...values})
  }
  console.log("formData",formData)

  const handleNext = () => {
    console.log("formData",formData)
    // setFormData({...formData, ...
    // })
    // let newSkipped = skipped;
    // if (isStepSkipped(activeStep)) {
    //   newSkipped = new Set(newSkipped.values());
    //   newSkipped.delete(activeStep);
    // }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    // setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // const handleSkip = () => {
  //   if (!isStepOptional(activeStep)) {
  //     // You probably want to guard against something like this,
  //     // it should never occur unless someone's actively trying to break something.
  //     throw new Error("You can't skip a step that isn't optional.");
  //   }

  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  //   setSkipped((prevSkipped) => {
  //     const newSkipped = new Set(prevSkipped.values());
  //     newSkipped.add(activeStep);
  //     return newSkipped;
  //   });
  // };

  const handleReset = () => {
    setActiveStep(0);
  };





  return (
    <>
    <Navbar />
    <Box sx={{height:'40px'}} />
        <Paper sx={{width:'1200px',padding:'20px',marginLeft:'auto',marginRight:'auto'}}>
      
    <Box sx={{ width: '100%' }} className={classes.root}>
      <Stepper activeStep={activeStep}  className={classes.stepper}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          // if (isStepOptional(index)) {
          //   labelProps.optional = (
          //     <Typography variant="caption">Optional</Typography>
          //   );
          // }
          // if (isStepSkipped(index)) {
          //   stepProps.completed = false;
          // }
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
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {
            activeStep === 0 && <PersonalDetails activeStep={activeStep} handleNext={handleNext} formDataAll={formDataAll} handleBack={handleBack} pesonalDetailsDataAll={pesonalDetailsDataAll} personalDetailsData={personalDetailsData}/>
          }
          {
            activeStep === 1 && <EducationDetails activeStep={activeStep} handleNext={handleNext} formDataAll={formDataAll} handleBack={handleBack} educationDetailsDataAll={educationDetailsDataAll} educationDetailsData={educationDetailsData}/>
          }
          {
            activeStep === 2 && <UploadDocuments activeStep={activeStep} handleNext={handleNext} formDataAll={formDataAll} handleBack={handleBack} />
          }
          {
            activeStep === 3 && <Confirmation activeStep={activeStep} handleNext={handleNext} formDataAll={formDataAll} handleBack={handleBack} />
          }
              {
                activeStep === steps.length - 1
              }
          {/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography> */}
          {/* <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            
            

<Button style={{width:'245px',height:'52px',backgroundColor:'#FF9933',color:'#FFFFFF',borderRadius:'5px'}} onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box> */}
        </React.Fragment>
      )}
    </Box>
    </Paper>
    </>
  );
}


