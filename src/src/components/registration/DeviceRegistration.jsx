import {
  Box,
  Button,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Grid,
} from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import ProSidebaar from "./ProSidebaar";

const DeviceRegistration = () => {
  const isNonMobile = useMediaQuery("(min-width:600px");
  const handleFormSubmit = (values) => {
    console.log(values);
  };

  const [deviceOption, setDeviceOption] = useState([""]);

  const initialValues = {
    counterId: 0,
    deviceId: "",
    macId: "",
    deviceTypeId: 0,
  };

  //const counterRegExp = /^[0-9]+$/;
  // const macRegExp =
  //   /^(([a-fA-F0-9]{2}-){5}[a-fA-F0-9]{2}|([a-fA-F0-9]{2}:){5}[a-fA-F0-9]{2}|([0-9A-Fa-f]{4}\.){2}[0-9A-Fa-f]{4})?$/;

  const userSchema = yup.object().shape({
    counterId: yup.number().required("required").positive().integer(),
    deviceId: yup.string().required("required"),
    macId: yup.string().required("required"),
    deviceTypeId: yup.number().required("required").positive().integer(),
  });

  useEffect(() => {
    const getDeviceData = async () => {
      const res = await axios.get("http://192.168.29.5:8089/device/");
      setDeviceOption(res.data);
    };
    getDeviceData();
  }, []);

  return (
    <>
      <ProSidebaar />
      <Box m="76px 20px 20px 235px">
        <Header title="DEVICE REGISTRATION" />
        <Formik
          //onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={userSchema}
          onSubmit={(data, { resetForm }) => {
            data.counterId = Number(data.counterId);
            //console.log("golmal" + data.counterId);
            console.log(data);
            let formData = new FormData();
            formData.append("counterId", data.counterId);
            formData.append("deviceId", data.deviceId);
            formData.append("macId", data.macId);
            formData.append("deviceTypeId", data.deviceTypeId);

            axios({
              method: "POST",
              url: "http://192.168.29.5:8089/device/add",
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
                      type="number"
                      label="counter Id"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.counterId}
                      name="counterId"
                      error={!!touched.counterId && !!errors.counterId}
                      helperText={touched.counterId && errors.counterId}
                    />
                  </Grid>

                  <Grid item md={12} sm={12} xs={12}>
                    <TextField
                      fullWidth
                      variant="outlined"
                      type="text"
                      label="Device Id"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.deviceId}
                      name="deviceId"
                      error={!!touched.deviceId && !!errors.deviceId}
                      helperText={touched.deviceId && errors.deviceId}
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
                      value={values.macId}
                      name="macId"
                      error={!!touched.macId && !!errors.macId}
                      helperText={touched.macId && errors.macId}
                    />
                  </Grid>

                  <Grid item md={12} sm={12} xs={12}>
                    <FormControl fullWidth>
                      <InputLabel>Device Type</InputLabel>
                      <Select
                        name="deviceTypeId"
                        fullWidth
                        required
                        label="Device Type"
                        value={values.deviceTypeId}
                        onChange={handleChange}
                        helperText="Please select your Device"
                        error={!!touched.deviceTypeId && !!errors.deviceTypeId}
                        helpertext={touched.deviceTypeId && errors.deviceTypeId}
                      >
                        {deviceOption.map((option) => (
                          <MenuItem
                            key={option.deviceTypeId}
                            value={option.deviceTypeId}
                          >
                            {option.deviceTypeId}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
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
    </>
  );
};

export default DeviceRegistration;
