import {
  Box,
  Button,
  TextField,
  MenuItem,
  FormControl,
  Select,
  Grid,
  InputLabel,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import axios from "axios";
import Header from "./Header";

const UserRegistration = () => {
  //const [showPassword, setShowPassword] = useState(false);

  const genderOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Other" },
  ];

  const designationOptions = [
    { value: "1", label: "Region Manager" },
    { value: "2", label: "Store Manager" },
    { value: "3", label: "Super Admin" },
    { value: "4", label: "User" },
    { value: "5", label: "Techician" },
  ];

  const isNonMobile = useMediaQuery("(min-width:600px");
  const handleFormSubmit = (values) => {
    console.log(values);
  };

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    area: "",
    contact: "",
    userGender: "",
    address: "",
    password: "",
    confirmpassword: "",
    designation: "",
  };

  const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
  const passwordRegExp =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;

  const userSchema = yup.object().shape({
    firstName: yup.string().required("required"),
    lastName: yup.string().required("required"),
    email: yup.string().email("invalid email").required("required"),
    contact: yup
      .string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required("required"),
    area: yup.string().required("required"),
    address: yup.string().required("required"),
    password: yup
      .string()
      .matches(/^(?=.*[a-z])/, " Must Contain One Lowercase Character")
      .matches(/^(?=.*[A-Z])/, "  Must Contain One Uppercase Character")
      .matches(/^(?=.*[0-9])/, "  Must Contain One Number Character")
      .matches(
        /^(?=.*[!@#\$%\^&\*])/,
        "  Must Contain  One Special Case Character"
      )
      .required("required")
      .min(8),
    confirmpassword: yup
      .string()
      .required("required")
      .oneOf([yup.ref("password"), null], "Passwords must match"),
    userGender: yup.string().required("required"),
    designation: yup.string().required("required"),
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowPassword1 = () => setShowPassword1((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Box m="73px 20px 20px 235px">
        <Header title="USER REGISTRATION" />
        <Formik
          initialValues={initialValues}
          validationSchema={userSchema}
          onSubmit={(data, { resetForm }) => {
            console.log(data);
            let formData = new FormData();
            formData.append("firstName", data.firstName);
            formData.append("lastName", data.lastName);
            formData.append("contact", data.contact);
            formData.getAll("genderOptions", data.genderOptions);
            formData.append("designation", data.designation);
            formData.append("area", data.area);
            formData.append("email", data.email);
            formData.append("address", data.address);
            formData.append("password", data.password);
            formData.append("confirmpassword", data.confirmpassword);

            axios({
              method: "POST",
              url: "https://64098152d16b1f3ed6d46246.mockapi.io/user",
              data: data,
            })
              .then(function (res) {
                console.log(res);
                alert("Successfully signed up!");
              })
              .catch(function (res) {
                console.log(res);
              });
            resetForm({ data: "" });
          }}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
            setFieldValue,
          }) => (
            <form onSubmit={handleSubmit}>
              <Box
                style={{ margin: "55px 20px 20px 20px" }}
                // display="grid" gap="30px"  gridTemplateColumns="repeat(4, minmax(0, 1fr))" sx={{"& > div": { gridColumn: isNonMobile ? undefined : "span 4" },}}
              >
                <Grid
                  container
                  alignItems="center"
                  //justifyContent="center"
                  spacing={2}
                  sx={{ margin: "50px, 5px" }}
                >
                  <Grid item md={6} sm={12} xs={12}>
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
                      //sx={{ gridColumn: "span 2", marginTop: "35px" }}
                    />
                  </Grid>

                  <Grid item md={6} xs={12}>
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
                    />
                  </Grid>

                  <Grid item md={6} sm={12} xs={12}>
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
                    />
                  </Grid>

                  <Grid item md={6} sm={12} xs={12}>
                    <FormControl fullWidth>
                      <InputLabel>Gender</InputLabel>
                      <Select
                        name="userGender"
                        fullWidth
                        required
                        label="Gender"
                        value={values.userGender}
                        onChange={handleChange}
                        helperText="Please select your gender"
                        error={!!touched.userGender && !!errors.userGender}
                      >
                        {genderOptions.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.value}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item md={6} sm={12} xs={12}>
                    <FormControl fullWidth>
                      <InputLabel>Designation</InputLabel>
                      <Select
                        name="designation"
                        fullWidth
                        required
                        label="Designation"
                        value={values.designation}
                        onChange={handleChange}
                        helperText="Please select your gender"
                        error={!!touched.designation && !!errors.designation}
                      >
                        {designationOptions.map((option) => (
                          <MenuItem key={option.value} value={option.label}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item md={6} sm={12} xs={12}>
                    <TextField
                      fullWidth
                      variant="outlined"
                      type="text"
                      label="Area"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.area}
                      name="area"
                      error={!!touched.area && !!errors.area}
                      helperText={touched.area && errors.area}
                    />
                  </Grid>

                  <Grid item md={6} sm={12} xs={12}>
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
                    />
                  </Grid>

                  <Grid item md={6} sm={12} xs={12}>
                    <TextField
                      fullWidth
                      variant="outlined"
                      type="text"
                      label="Address"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.address}
                      name="address"
                      error={!!touched.address && !!errors.address}
                      helperText={touched.address && errors.address}
                    />
                  </Grid>

                  <Grid item md={6} sm={12} xs={12}>
                    <TextField
                      fullWidth
                      variant="outlined"
                      type={showPassword ? "text" : "password"}
                      label="Password"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.password}
                      name="password"
                      InputProps={{
                        // <-- This is where the toggle button is added.
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                            >
                              {showPassword ? (
                                <Visibility />
                              ) : (
                                <VisibilityOff />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      error={!!touched.password && !!errors.password}
                      helperText={touched.password && errors.password}
                    />
                  </Grid>

                  <Grid item md={6} sm={12} xs={12}>
                    <TextField
                      fullWidth
                      variant="outlined"
                      type={showPassword1 ? "text" : "password"}
                      label="Confirm Password"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.confirmpassword}
                      name="confirmpassword"
                      InputProps={{
                        // <-- This is where the toggle button is added.
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword1}
                              onMouseDown={handleMouseDownPassword}
                            >
                              {showPassword1 ? (
                                <Visibility />
                              ) : (
                                <VisibilityOff />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      error={
                        !!touched.confirmpassword && !!errors.confirmpassword
                      }
                      helperText={
                        touched.confirmpassword && errors.confirmpassword
                      }
                    />
                  </Grid>
                </Grid>
              </Box>

              <Box display="flex" justifyContent="end" mt="20px" mr="22px">
                <Button
                  type="submit"
                  color="secondary"
                  variant="contained"
                  sx={{ width: "25%", borderRadius: "16px" }}
                >
                  Create New User
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    </>
  );
};

export default UserRegistration;
