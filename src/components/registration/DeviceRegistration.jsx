import {
  Box,
  Button,
  TextField,
  Stack,
  MenuItem,
  Container,
  Grid,
} from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState, useEffect } from "react";
import axios from "axios";

const DeviceRegistration = () => {
  const isNonMobile = useMediaQuery("(min-width:600px");
  const handleFormSubmit = (values) => {
    console.log(values);
  };

  const [deviceOption, setDeviceOption] = useState([""]);

  const initialValues = {
    deviceName: "",
    mac: "",
    selectdeviceType: "",
  };

  //const counterRegExp = /^[0-9]+$/;
  // const macRegExp =
  //   /^(([a-fA-F0-9]{2}-){5}[a-fA-F0-9]{2}|([a-fA-F0-9]{2}:){5}[a-fA-F0-9]{2}|([0-9A-Fa-f]{4}\.){2}[0-9A-Fa-f]{4})?$/;

  const userSchema = yup.object().shape({
    deviceName: yup.string().required("required"),
    mac: yup.string().required("required"),
    selectdeviceType: yup.string().required("required"),
  });

  // useEffect(() => {
  //   const getDeviceData = async () => {
  //     const res = await axios.get("http://192.168.29.5:8089/device/");
  //     setDeviceOption(res.data);
  //   };
  //   getDeviceData();
  // }, []);

  return (
    <Box m="20px">
      <Formik
        //onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={userSchema}
        onSubmit={(data) => {
          console.log(data);
          let formData = new FormData();
          formData.append("deviceName", data.deviceName);
          formData.append("mac", data.mac);
          formData.append("selectdeviceType", data.selectdeviceType);

          axios({
            method: "POST",
            url: "https://64098152d16b1f3ed6d46246.mockapi.io/store",
            data: data,
          })
            .then(function (res) {
              console.log(res);
              alert("Successfully signed up!");
            })
            .catch(function (res) {
              console.log(res);
            });
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
            <Box style={{ margin: "55px 20px 20px 20px" }}>
              <Grid
                container
                //rowSpacing={2}
                direction="row"
                alignItems="center"
                spacing={2}
                sx={{ margin: "50px, 5px" }}
              >
                <Grid item md={12} sm={12} xs={12}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    type="text"
                    label="Device Name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.deviceName}
                    name="deviceName"
                    error={!!touched.deviceName && !!errors.deviceName}
                    helperText={touched.deviceName && errors.deviceName}
                    sx={{ marginBottom: "15px" }}
                  />
                </Grid>

                <Grid item md={12} sm={12} xs={12}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    type="text"
                    label="MAC Id"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.mac}
                    name="mac"
                    error={!!touched.mac && !!errors.mac}
                    helperText={touched.mac && errors.mac}
                    //sx={{ marginBottom: "15px" }}
                  />
                </Grid>

                <Grid item md={12} sm={12} xs={12}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    type="text"
                    label="Device Type"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.selectdeviceType}
                    name="selectdeviceType"
                    error={
                      !!touched.selectdeviceType && !!errors.selectdeviceType
                    }
                    helperText={
                      touched.selectdeviceType && errors.selectdeviceType
                    }
                    //sx={{ marginBottom: "15px" }}
                  />

                  {/* <TextField
                    //id="outlined-select-currency"
                    fullWidth
                    select
                    label="Device Type"
                    defaultValue="Device 1"
                    helperText="Please select your device"
                    error={
                      !!touched.selectdeviceType && !!errors.selectdeviceType
                    }
                    sx={{ marginBottom: "15px" }}
                  >
                    {deviceOption.map((option) => (
                      <MenuItem key={option.deviceId} value={option.deviceId}>
                        {option.deviceId}
                      </MenuItem>
                    ))}
                  </TextField> */}
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
                Create New Device
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default DeviceRegistration;
