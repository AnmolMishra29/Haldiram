import {Box, Button, TextField, Stack } from '@mui/material';
import { Formik} from "formik";
import * as yup from "yup";
import useMediaQuery from '@mui/material/useMediaQuery';


// import Header from '../../components/Header'; 

const StoreRegistration = () => {
  

  const isNonMobile = useMediaQuery("(min-width:600px");
  const handleFormSubmit = (values) => {
      console.log(values);
  } 

  const initialValues = {
       firstName: "",
       lastName: "",
       email: "",
       region: "",
       on_time:"",
       off_time:"",
       counterno:"",
   }

   const counterRegExp = /^[0-9]+$/ ;

   


   const userSchema = yup.object().shape({
       firstName: yup.string().required("required"),
       lastName: yup.string().required("required"),
       email: yup.string().email("invalid email").required("required"),
       //contact: yup.string().matches(phoneRegExp,"Phone number is not valid").required("required"),
       //address1: yup.string().required("required"),
       //dateofBirth:yup.string().required("required"),
       //password: yup.string().matches(passwordRegExp,"Password is not valid").required("required").min(8),
       //confirmpassword: yup.string().required("required").oneOf([yup.ref("password"), null], "Passwords must match"),
       on_time:yup.string().required("required"),
       off_time:yup.string().required("required"),
       region:yup.string().required("required"),
       counterno: yup.string().matches(counterRegExp,"Number of counters cannot be alphabets").required("required"),
   });
 
  return (

    <Box m="20px">
         {/* <Header title="CREATE USER" subtitle="Create a New User Profile"/> */}

        <Stack direction="row" alignItems="center" justifyContent="center">
         <Formik 
            onSubmit={handleFormSubmit}
            initialValues={initialValues} 
            validationSchema={userSchema}   
        >
            {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <Box display="grid" gap="30px" gridTemplateColumns= "repeat(4, minmax(0, 1fr))"
                      sx={{
                        "& > div": {gridColumn: isNonMobile ? undefined : "span 4"}
                      }}
                    >
                       <TextField fullWidth variant='filled'  type="text" label="First Name" onBlur={handleBlur} 
                                  onChange={handleChange} value={values.firstName} 
                                  name="firstName" 
                                  error={!!touched.firstName && !!errors.firstName}
                                  helperText={touched.firstName && errors.firstName}
                                  sx={{ gridColumn: "span 2" }}
                                // sx={{ display: "flex", justifyContent:"center"}}
                        />  
                        <TextField fullWidth variant='filled'  type="text" label="Last Name" onBlur={handleBlur} 
                                  onChange={handleChange} value={values.lastName} 
                                  name="lastName" 
                                  error={!!touched.lastName && !!errors.lastName}
                                  helperText={touched.lastName && errors.lastName}
                                  sx={{ gridColumn: "span 2"}}
                                // sx={{ display: "flex", justifyContent:"center"}}
                        />
                        
                        <TextField fullWidth variant='filled'  type="text" label="Region" onBlur={handleBlur} 
                                  onChange={handleChange} value={values.region} 
                                  name="region" 
                                  error={!!touched.region && !!errors.region}
                                  helperText={touched.region && errors.region}
                                  sx={{ gridColumn: "span 4" }}
                        />

                        <TextField fullWidth variant='filled'  type="text" label="Number of Counters" onBlur={handleBlur} 
                                  onChange={handleChange} value={values.counterno} 
                                  name="counterno" 
                                  error={!!touched.counterno && !!errors.counterno}
                                  helperText={touched.counterno && errors.counterno}
                                  sx={{ gridColumn: "span 4"}}
                                // sx={{ display: "flex", justifyContent:"center"}}
                        />

                        <TextField fullWidth variant='filled'  type="text" label="Email" onBlur={handleBlur} 
                                  onChange={handleChange} value={values.email} 
                                  name="email" 
                                  error={!!touched.email && !!errors.email}
                                  helperText={touched.email && errors.email}
                                  sx={{ gridColumn: "span 4" }}
                        /> 
                        <TextField fullWidth variant='filled'  type="time" label="On-Time" onBlur={handleBlur} 
                                  onChange={handleChange} value={values.on_time} 
                                  name="on_time" 
                                  error={!!touched.on_time && !!errors.on_time}
                                  helperText={touched.on_time && errors.on_time}
                                  sx={{ gridColumn: "span 4" }}
                        />
                        <TextField fullWidth variant='filled'  type="time" label="Off-Time" onBlur={handleBlur} 
                                  onChange={handleChange} value={values.off_time} 
                                  name="off_time" 
                                  error={!!touched.off_time && !!errors.off_time}
                                  helperText={touched.off_time && errors.off_time}
                                  sx={{ gridColumn: "span 4" }}
                        />
                        
                    </Box>
                    <Box display="flex" justifyContent="end" mt="20px">
                        <Button type="submit" color="secondary" variant="contained">
                            Create New User
                        </Button>
                    </Box>
                </form>
            )}
         </Formik>
         </Stack>
    </Box>
  )
}

export default StoreRegistration;