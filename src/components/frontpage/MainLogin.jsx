import React, { useState, useEffect } from "react";
import Haldiramlogo from "../../assests/haldiramlogo.jpg";
import Background from "../../assests/background.jpg";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  TextField,
  Box,
  Button,
  styled,
  MenuItem,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";

import { Formik } from "formik";
import * as yup from "yup";

const Component = styled(Box)`
  width: 400px;
  height: 600px;
  margin: auto;
  background-color: white;
  box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
`;
const Container = styled(Box)`
  background-image: url(${Background});
  background-size: cover;
  object-fit: cover;
  min-height: 84vh;
  min-width: 95vw;
  margin-top: 0;
`;
const Image = styled("img")({
  width: 200,
  height: 100,
  display: "flex",
  margin: "auto",
  padding: "20px 0 0",
});

const Wrapper = styled(Box)`
  padding: 25px 35px;
  display: flex;
  flex: 1;
  overflow: auto;
  flex-direction: column;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: #fff;
  height: 48px;
  border-radius: 2px;
`;

const initialValues = {
  useremail: "",
  password: "",
};

const MainLogin = () => {
  const [login, setLogin] = useState(initialValues);
  const [showPassword, setShowPassword] = useState(false);

  const passwordRegExp =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;

  const userSchema = yup.object().shape({
    useremail: yup.string().email("invalid email").required("required"),
    password: yup
      .string()
      .matches(passwordRegExp, "Password is not valid")
      .required("required")
      .min(8),
  });

  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <Container>
      <Component>
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
            setFieldValue,
          }) => (
            <form onSubmit={handleSubmit}>
              <Box style={{ marginTop: "25px", color: "000000" }}>
                <Image src={Haldiramlogo} alt="blog" />

                <Wrapper>
                  <TextField
                    //fullWidth
                    variant="outlined"
                    type="text"
                    label="User email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.useremail}
                    name="useremail"
                    error={!!touched.useremail && !!errors.useremail}
                    helperText={touched.useremail && errors.useremail}
                    sx={{ gridColumn: "span 4" }}
                  />

                  {/* <TextField
                  id="outlined-adornment-password"
                  variant="standard"
                  type="password"
                  label="Password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.password}
                  name="password"
                 
                          // endAdornment={
                          //   <InputAdornment position="end">
                          //     <IconButton
                          //       aria-label="toggle password visibility"
                          //       onClick={handleClickShowPassword}
                          //       onMouseDown={handleMouseDownPassword}
                          //       edge="end"
                          //     >
                          //       {showPassword ? (
                          //         <VisibilityOff />
                          //       ) : (
                          //         <Visibility />
                          //       )}
                          //     </IconButton>
                          //   </InputAdornment>
                          // }
                  error={!!touched.password && !!errors.password}
                  helperText={touched.password && errors.password}
                  sx={{ gridColumn: "span 4" }}
                /> */}
                  <TextField
                    id="outlined-adornment-password"
                    variant="outlined"
                    type={showPassword ? "text" : "password"}
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
                    helperText="Please enter password"
                    sx={{ gridColumn: "span 4" }}
                  />

                  <LoginButton
                    variant="contained"
                    type="submit"
                    color="secondary"
                    //sx={{ width: "30%", borderRadius: "20px" }}
                  >
                    Login
                  </LoginButton>
                </Wrapper>
              </Box>
            </form>
          )}
        </Formik>
      </Component>
    </Container>
  );
};

export default MainLogin;
