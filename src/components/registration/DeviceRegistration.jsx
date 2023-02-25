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
import { useState,useEffect } from "react";
import axios from "axios"; 

const DeviceRegistration = () => {
  const isNonMobile = useMediaQuery("(min-width:600px");
  const handleFormSubmit = (values) => {
    console.log(values);
  };

  const [deviceOption,setDeviceOption] = useState([""]);


  const initialValues = {
    deviceName: "",
    mac: "",
    selectdeviceType: "",
  };

  //const counterRegExp = /^[0-9]+$/;
  const macRegExp =
    /^(([a-fA-F0-9]{2}-){5}[a-fA-F0-9]{2}|([a-fA-F0-9]{2}:){5}[a-fA-F0-9]{2}|([0-9A-Fa-f]{4}\.){2}[0-9A-Fa-f]{4})?$/;

  const userSchema = yup.object().shape({
    deviceName: yup.string().required("required"),
    mac: yup
      .string()
      .matches(macRegExp, "Invalid MAC Address")
      .required("required"),
    selectdeviceType: yup.string().required("required"),
  });


useEffect(() => {
  const getDeviceData = async () => {
    const res = await axios.get("http://192.168.29.5:8089/device/");
    setDeviceOption(res.data)
  };
  getDeviceData();
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
          width: "25%",
          height: "50% - 20px",
          marginTop:20 ,
          boxShadow:"0px 4px 8px 0px rgba(0, 0, 0, 0.2), 0px 6px 20px 0px rgba(0, 0, 0, 0.19)",
          display:"flex",
          justifyContent:"center",
          alignItems:"center"
        }}
      >
        <Container maxWidth="md">
          <Stack direction="column" alignItems="center" justifyContent="center">
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
                      label="Device Name"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.deviceName}
                      name="deviceName"
                      error={!!touched.deviceName && !!errors.deviceName}
                      helperText={touched.deviceName && errors.deviceName}
                      sx={{ gridColumn: "span 4", marginTop:"15px" }}
                      // sx={{ display: "flex", justifyContent:"center"}}
                    />
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
                      sx={{ gridColumn: "span 4" }}
                      // sx={{ display: "flex", justifyContent:"center"}}
                    />

                    <TextField
                      id="outlined-select-currency"
                      select
                      label="Device Type"
                      defaultValue="Device 1"
                      helperText="Please select your device"
                      error={
                        !!touched.selectdeviceType && !!errors.selectdeviceType
                      }
                      sx={{ gridColumn: "span 4" }}
                    >
                      {deviceOption.map((option) => (
                        <MenuItem key={option.deviceId} value={option.deviceId}>
                          {option.deviceId}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Box>

                  <Box display="flex" justifyContent="center" m="20px 3px 30px 3px">
                    <Button type="submit" color="secondary" variant="contained" sx={{ width: "90%", borderRadius: "20px"}}>
                      Create New Device
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

export default DeviceRegistration;
