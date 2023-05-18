import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
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
  root: {
    marginTop: "0px",
    width: "100%",
    // backgroundColor: 'transparent',
  },
  stepper: {
    backgroundColor: "transparent",
    // change icon color for all steps
    "& .MuiStepIcon-root": {
      color: "#FF9933", // Customize the color of the Stepper icon
    },
    "& .MuiStepIcon-active": {
      color: "#FF9933", // Customize the color of the active Stepper icon
    },
    "& .MuiStepIcon-completed": {
      color: "#FF9933", // Customize the color of the completed Stepper icon
    },

    // change label color for all steps
    "& .MuiStepLabel-label": {
      color: "#FF9933", // Customize the color of the StepLabel text
    },

    "& .MuiStepLabel-active": {
      color: "#FF9933", // Customize the color of the active StepLabel text
    },
    "& .MuiStepLabel-completed": {
      color: "#FF9933", // Customize the color of the completed StepLabel text
    },

    // change connector color for all steps
    "& .MuiStepConnector-line": {
      borderColor: "var(--my-disabled-step-color)", // Customize the color of the StepConnector line
    },
    // change connector color for active steps
    "& .MuiStepConnector-active": {
      "& .MuiStepConnector-line": {
        borderColor: "var(--my-brand-color-dark)", // Customize the color of the active StepConnector line
      },
    },
  },
}));
