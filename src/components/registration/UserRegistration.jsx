import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  IconButton,
  InputAdornment,
  Stack,
  MenuItem,
  Container,
} from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const UserRegistration = () => {
  const [showPassword, setShowPassword] = useState(false);
  //const [gender , setGender] = useState("");

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const genderOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Other" },
  ];

  // const handlegender = gender => {
  //   console.log(gender);
  //   setGender(gender);
  // };

  const isNonMobile = useMediaQuery("(min-width:600px");
  const handleFormSubmit = (values) => {
    console.log(values);
  };

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    userGender: "",
    address1: "",
    password: "",
    confirmpassword: "",
    //dateofBirth: "",
  };

  const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
  const passwordRegExp =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;

  const userSchema = yup.object().shape({
    firstName: yup.string().required("required"),
    lastName: yup.string().required("required"),
    email: yup.string().email("invalid email").required("required"),
    contact: yup.string().matches(phoneRegExp, "Phone number is not valid").required("required"),
    address1: yup.string().required("required"),
    dateofBirth: yup.string().required("required"),
    password: yup.string().matches(passwordRegExp, "Password is not valid").required("required").min(8),
    confirmpassword: yup.string().required("required").oneOf([yup.ref("password"), null], "Passwords must match"),
    //password: yup.string().transform(x => x === '' ? undefined : x).concat(isAddMode ? yup.string().required('Password is required') : null).min(6, 'Password must be at least 6 characters'),
    //confirmPassword: yup.string().transform(x => x === '' ? undefined : x).when('password', (password, schema) => {
    // if (password || isAddMode) return schema.required('Confirm Password is required');}).oneOf([yup.ref('password')], 'Passwords must match'),
    userGender: yup.string().required("required"),
  });

  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50,
      }}
    >
      <Box
        style={{
          width: "40%",
          height: "100% - 20px",
          marginTop: 15,
          boxShadow:
            "0px 4px 8px 0px rgba(0, 0, 0, 0.2), 0px 6px 20px 0px rgba(0, 0, 0, 0.19)",
        }}
      >
        <Container maxWidth="md">

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={3}
          >
            <Formik
              onSubmit={handleFormSubmit}
              initialValues={initialValues}
              validationSchema={userSchema}
            >
              {({
                values,
                errors,
                touched,
                handleBlur,
                handleChange,
                handleSubmit,
              }) => (
                <form onSubmit={handleSubmit}>
                  <Box
                    display="grid"
                    gap="30px"
                    gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                    sx={{
                      "& > div": {
                        gridColumn: isNonMobile ? undefined : "span 4",
                      },
                    }}
                  >
                    <TextField
                      fullWidth
                      variant="outlined"
                      type="text"
                      label="First Name"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.firstName}
                      name="firstName"
                      error={!!touched.firstName && !!errors.firstName}
                      helperText={touched.firstName && errors.firstName}
                      sx={{ gridColumn: "span 2", marginTop:"15px" }}
                      // sx={{ display: "flex", justifyContent:"center"}}
                    />
                    <TextField
                      fullWidth
                      variant="outlined"
                      type="text"
                      label="Last Name"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.lastName}
                      name="lastName"
                      error={!!touched.lastName && !!errors.lastName}
                      helperText={touched.lastName && errors.lastName}
                      sx={{ gridColumn: "span 2", marginTop:"15px" }}
                      // sx={{ display: "flex", justifyContent:"center"}}
                    />

                    <TextField
                      fullWidth
                      variant="outlined"
                      type="text"
                      label="Contact Number"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.contact}
                      name="contact"
                      error={!!touched.contact && !!errors.contact}
                      helperText={touched.contact && errors.contact}
                      sx={{ gridColumn: "span 4" }}
                    />

                    <TextField
                      id="outlined-select-currency"
                      select
                      label="Gender"
                      defaultValue="male"
                      helperText="Please select your gender"
                      error={!!touched.userGender && !!errors.userGender}
                      sx={{ gridColumn: "span 4" }}
                    >
                      {genderOptions.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>

                    <TextField
                      fullWidth
                      variant="outlined"
                      type="text"
                      label="Email"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.email}
                      name="email"
                      error={!!touched.email && !!errors.email}
                      helperText={touched.email && errors.email}
                      sx={{ gridColumn: "span 4" }}
                    />
                    <TextField
                      fullWidth
                      variant="outlined"
                      type="text"
                      label="Address1"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.address1}
                      name="address1"
                      error={!!touched.address1 && !!errors.address1}
                      helperText={touched.address1 && errors.address1}
                      sx={{ gridColumn: "span 4" }}
                    />

                    <TextField
                      fullWidth
                      variant="outlined"
                      type="password"
                      label="Password"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.password}
                      name="password"
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      error={!!touched.password && !!errors.password}
                      helperText={touched.password && errors.password}
                      sx={{ gridColumn: "span 4" }}
                    />
                    <TextField
                      fullWidth
                      variant="outlined"
                      type="password"
                      label="Confirm Password"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.confirmpassword}
                      name="confirmpassword"
                      error={
                        !!touched.confirmpassword && !!errors.confirmpassword
                      }
                      helperText={
                        touched.confirmpassword && errors.confirmpassword
                      }
                      sx={{ gridColumn: "span 4" }}
                    />
                  </Box>
                  <Box display="flex" justifyContent="center" m="20px 3px 30px 3px">
                    <Button type="submit" color="secondary" variant="contained" sx={{width: "90%", borderRadius: "20px"}}>
                      Create New User
                    </Button>
                  </Box>
                </form>
              )}
            </Formik>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default UserRegistration;
