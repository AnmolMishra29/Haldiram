import {
  Box,
  Button,
  TextField,
  Stack,
  MenuItem,
  Container,
} from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState, useEffect } from "react";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopTimePicker } from "@mui/x-date-pickers/DesktopTimePicker";
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';

import axios from "axios";

const StoreRegistration = () => {
  const isNonMobile = useMediaQuery("(min-width:600px");
  const handleFormSubmit = (values) => {
    console.log(values);
  };

  const [regionOptions, setRegionOptions] = useState([""]);
  const [value, setValue] = useState(dayjs("2018-01-01T00:00:00.000Z"));

  // const regionOptions = [
  //   { value: "1", label: "Region 1" },
  //   { value: "2", label: "Region 2" },
  //   { value: "3", label: "Region 3" },
  //   { value: "4", label: "Region 4" },
  // ];

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    region: "",
    on_time: "",
    off_time: "",
    counterno: "",
  };

  const counterRegExp = /^[0-9]+$/;

  const userSchema = yup.object().shape({
    firstName: yup.string().required("required"),
    lastName: yup.string().required("required"),
    email: yup.string().email("invalid email").required("required"),
    on_time: yup.string().required("required"),
    off_time: yup.string().required("required"),
    region: yup.string().required("required"),
    counterno: yup
      .string()
      .matches(counterRegExp, "Number of counters cannot be alphabets")
      .required("required"),
  });

  useEffect(() => {
    const getRegionData = async () => {
      const res = await axios.get("http://192.168.29.5:8089/region/all");
      setRegionOptions(res.data);
      console.log(res.data);
    };
    getRegionData();
  }, []);

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
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack direction="row" alignItems="center" justifyContent="center">
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
                        sx={{ gridColumn: "span 2", marginTop: "15px" }}
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
                        sx={{ gridColumn: "span 2", marginTop: "15px" }}
                        // sx={{ display: "flex", justifyContent:"center"}}
                      />

                      <TextField
                        id="outlined-select-currency"
                        select
                        label="Region"
                        defaultValue="1"
                        helperText="Please select your Region Id"
                        error={!!touched.region && !!errors.region}
                        sx={{ gridColumn: "span 4" }}
                      >
                        {regionOptions.map((option) => (
                          <MenuItem
                            key={option.regionName}
                            value={option.regionName}
                          >
                            {option.regionName}
                          </MenuItem>
                        ))}
                      </TextField>

                      <TextField
                        fullWidth
                        variant="outlined"
                        type="text"
                        label="Number of Counters"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.counterno}
                        name="counterno"
                        error={!!touched.counterno && !!errors.counterno}
                        helperText={touched.counterno && errors.counterno}
                        sx={{ gridColumn: "span 4" }}
                        // sx={{ display: "flex", justifyContent:"center"}}
                      />

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

                      <DesktopTimePicker
                        label="On Time"
                        value={values.on_time}
                        error={!!touched.on_time && !!errors.on_time}
                        helperText="Please Input store Opening Time"
                        onBlur={handleBlur}
                        onChange={(newValue) => {
                          setValue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                        sx={{ gridColumn: "span 4" }}
                      />
                      
                      {/* <MobileTimePicker
                        label="For mobile"
                        value={values.on_time}
                        error={!!touched.on_time && !!errors.on_time}
                        helperText="Please Input store Opening Time"
                        onBlur={handleBlur}
                        onChange={(newValue) => {
                          setValue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                        sx={{ gridColumn: "span 4" }}
                      /> */}

                      <TextField
                        fullWidth
                        variant="outlined"
                        type="time"
                        //label="On-Time"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.on_time}
                        name="on_time"
                        error={!!touched.on_time && !!errors.on_time}
                        helperText="Please Input store Opening Time"
                        sx={{ gridColumn: "span 4" }}
                      />

                      <TextField
                        fullWidth
                        variant="outlined"
                        type="time"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.off_time}
                        name="off_time"
                        error={!!touched.off_time && !!errors.off_time}
                        helperText="Please Input store Closing Time"
                        sx={{ gridColumn: "span 4" }}
                      />
                    </Box>

                    <Box
                      display="flex"
                      justifyContent="center"
                      m="20px 3px 30px 3px"
                    >
                      <Button
                        type="submit"
                        color="secondary"
                        variant="contained"
                        sx={{ width: "90%", borderRadius: "20px" }}
                      >
                        Create New Store
                      </Button>
                    </Box>
                  </form>
                )}
              </Formik>
            </Stack>
          </LocalizationProvider>
        </Container>
      </Box>
    </Box>
  );
};

export default StoreRegistration;
