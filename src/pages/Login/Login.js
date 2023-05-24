import {
  FormHelperText,
  Box,
  Button,
  Divider,
  FormControl,
  InputLabel,
  OutlinedInput,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { LoginSchemas } from "../../validation/LoginSchema";
import { Item } from "../../globleComponents/Item";
import { useStyles } from "../../globleComponents/useStyles";

const initialvalues = {
  password: "",
};

function Login() {
  const classes=useStyles()
  const navigate = useNavigate();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit,isValid,dirty } =
    useFormik({
      initialValues: initialvalues,
      validationSchema: LoginSchemas,
      onSubmit: (values, action) => {
        if (values && values.password === "12345678") {
          navigate("/form");
          action.resetForm();
        }
      },
    });

  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "30px",
      }}
    >
      <Paper style={{ width: "700px", height: "670px" }} elevation={5}>
        <Box style={{ padding: "20px" }}>
          <Stack direction="column" justifyContent="center" spacing={2}>
            <Item>
              <img
                src={require("../../assets/logo.png")}
                alt=""
                style={{ marginLeft: "auto", marginRight: "auto" }}
              />
            </Item>

            <Item>
              <Typography variant="h4" style={{ textAlign: "left" }}>
                New Employee Onboarding
              </Typography>
            </Item>
            <Item>
              <Typography variant="h6" style={{ textAlign: "left" }}>
                Hello! We're looking forward to welcoming you at Cybercom
                Creation. Please assist us in gathering the necessary
                information and documents from you.If you have any questions,
                feel free to email hr@cybercom.co.in. Please enter the password
                to proceed further. Thank you.
              </Typography>
            </Item>
            <Item>
              <form
                action="post"
                onSubmit={handleSubmit}
                noValidate
                autoComplete="off"
              >
                <FormControl style={{ width: "650px" }} className={classes.textField}>
                  <InputLabel htmlFor="component-outlined">Password</InputLabel>
                  <OutlinedInput
                    id="component-outlined"
                    label="Password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.password && touched.password}
                    helperText={
                      errors.password && touched.password
                        ? errors.password
                        : null
                    }
                  />

                  {errors.password && touched.password && (
                    <FormHelperText style={{ color: "#d32f2f" }}>
                      {errors.password}
                    </FormHelperText>
                  )}
                </FormControl>
              </form>
            </Item>

            <Item>
              <Divider sx={{ marginTop: "15px", marginBottom: "15px" }} />
            </Item>
            <Item>
              <Button
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
                Login
              </Button>
            </Item>
          </Stack>
        </Box>
      </Paper>
    </Box>
  );
}

export default Login;
