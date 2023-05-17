import { FormHelperText,Box, Button, Container, Divider, FilledInput, FormControl, Grid, InputLabel, OutlinedInput, Paper, Stack, Typography, styled } from '@mui/material';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup'; 
const Item = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  flexGrow: 1,
}));

const initialvalues = {
  password: "",
};

export const Registrationschema = Yup.object({
  password: Yup.string().min(8).required("Password is required"),
});

export default function Login(){

  const navigate=useNavigate()
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
  useFormik({
    initialValues: initialvalues,
    validationSchema: Registrationschema,
    onSubmit: (values, action) => {
      console.log(values);
      if(values.password==="12345678"){
        navigate('/form')
        action.resetForm();
      }
    },
  });
  // const Login=()=>{
 
  // }
    return(
      <Box style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'30px'}}>
        <Paper style={{width:'700px',height:'670px'}} elevation={5}>
      <Box style={{padding:'20px'}}> 
      <Stack
  direction="column"
  justifyContent="center"
  spacing={2}
>


<Item>
    <img src={require('../../assets/logo.png')} alt='' style={{marginLeft:'auto',marginRight:'auto'}} />
</Item>

<Item>
    <Typography variant='h4' style={{textAlign:'left'}}>New Employee Onboarding</Typography>
    </Item>
    <Item>

    <Typography variant='h6' style={{textAlign:'left'}}>Hello! We're looking forward to welcoming you at Cybercom Creation. Please assist us in gathering the necessary information and documents from you.If you have any questions, feel free to email hr@cybercom.co.in.
Please enter the password to proceed further. Thank you.
</Typography>
    </Item>
    <Item>
<form action="post"
          onSubmit={handleSubmit}
          noValidate
          autoComplete="off">

<FormControl style={{width:'650px'}}>
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
    <Divider sx={{marginTop:'15px',marginBottom:'15px'}}/>
  </Item>
    <Item>
    <Button style={{width:'245px',height:'52px',backgroundColor:'#FF9933',color:'#FFFFFF',borderRadius:'5px'}} onClick={handleSubmit}>
      Login
    </Button>
    </Item>
</Stack>
          </Box>
        </Paper>
      </Box>
)
}