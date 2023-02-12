import {Box, Button, TextField, Stack } from '@mui/material';
import { Formik} from "formik";
import * as yup from "yup";
import useMediaQuery from '@mui/material/useMediaQuery';


// import Header from '../../components/Header'; 

const DeviceRegistration = () => {
  

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
   const macRegExp = /^(([a-fA-F0-9]{2}-){5}[a-fA-F0-9]{2}|([a-fA-F0-9]{2}:){5}[a-fA-F0-9]{2}|([0-9A-Fa-f]{4}\.){2}[0-9A-Fa-f]{4})?$/ ;


   


   const userSchema = yup.object().shape({
       deviceName: yup.string().required("required"),
       mac: yup.string().matches(macRegExp,"Invalid MAC Address").required("required"),
       email: yup.string().email("invalid email").required("required"),
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
                       <TextField fullWidth variant='filled'  type="text" label="Device Name" onBlur={handleBlur} 
                                  onChange={handleChange} value={values.deviceName} 
                                  name="deviceName" 
                                  error={!!touched.deviceName && !!errors.deviceName}
                                  helperText={touched.deviceName && errors.deviceName}
                                  sx={{ gridColumn: "span 4" }}
                                // sx={{ display: "flex", justifyContent:"center"}}
                        />  
                        <TextField fullWidth variant='filled'  type="text" label="MAC Id" onBlur={handleBlur} 
                                  onChange={handleChange} value={values.mac} 
                                  name="mac" 
                                  error={!!touched.mac && !!errors.mac}
                                  helperText={touched.mac && errors.mac}
                                  sx={{ gridColumn: "span 4"}}
                                // sx={{ display: "flex", justifyContent:"center"}}
                        />
                        <TextField fullWidth variant='filled'  type="text" label="Device Name" onBlur={handleBlur} 
                                  onChange={handleChange} value={values.deviceName} 
                                  name="deviceName" 
                                  error={!!touched.deviceName && !!errors.deviceName}
                                  helperText={touched.deviceName && errors.deviceName}
                                  sx={{ gridColumn: "span 4" }}
                                // sx={{ display: "flex", justifyContent:"center"}}
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

export default DeviceRegistration;