import {
  Box,
  Button,
  TextField,
  Grid,
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
import { useContext } from "react";

import axios from "axios";
import HalidramContext from "../../context/Haldiramcontext/HaldiramContext";

const StoreRegistration = () => {
  const isNonMobile = useMediaQuery("(min-width:600px");
  const handleFormSubmit = (values) => {
    console.log(values);
  };

  const [regionOptions, setRegionOptions] = useState([]);
  const [value, setValue] = useState(dayjs("2018-01-01T00:00:00.000Z"));

  const context = useContext(HalidramContext);

  const { addStore, getAllRegion } = context;

  // const regionOptions = [
  //   { value: "1", label: "Region 1" },
  //   { value: "2", label: "Region 2" },
  //   { value: "3", label: "Region 3" },
  //   { value: "4", label: "Region 4" },
  // ];

  const initialValues = {
    latitude: "",
    longitude: "",
    storeId: 0,
    regionId: 0,
    on_time: "",
    off_time: "",
    counterno: 0,
    storeName: "",
  };
  const [storeData, setStoreData] = useState(initialValues);

  // const handleChange = (e) => {
  //   setStoreData({ ...storeData, [e.target.name]: e.target.value });
  //   console.log(storeData);
  // };
  const counterRegExp = /^[0-9]+$/;

  const userSchema = yup.object().shape({
    longitude: yup.string().required("required"),
    latitude: yup.string().required("required"),
    storeId: yup.number().required("required"),
    on_time: yup.string().required("required"),
    off_time: yup.string().required("required"),
    regionId: yup.number().required("required"),
    storeName: yup.string().required("required"),
    counterno: yup
      .string()
      .matches(counterRegExp, "Number of counters cannot be alphabets")
      .required("required"),
  });

  //const handleClick = () => {
  //console.log(storeData);
  //addStore(storeData);
  //};

  // useEffect(() => {
  //   const getRegionData = async () => {
  //     const res = await axios.get(
  //       "https://64098152d16b1f3ed6d46246.mockapi.io/store"
  //     );
  //     setRegionOptions(res.data);
  //     console.log(res.data);
  //   };
  //   getRegionData();

  //   // setRegionOptions(getAllRegion());
  //   console.log(getAllRegion());
  // }, []);

  return (
    <Box m="20px">
      {/* <Box
        style={{
          width: "40%",
          height: "100% - 20px",
          marginTop: 15,
          boxShadow:
            "0px 4px 8px 0px rgba(0, 0, 0, 0.2), 0px 6px 20px 0px rgba(0, 0, 0, 0.19)",
        }}
      > */}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Formik
          //onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={userSchema}
          onSubmit={(data) => {
            console.log(data);
            let formData = new FormData();
            formData.append("latitude", data.latitude);
            formData.append("longitude", data.longitude);
            formData.append("storeName", data.storeName);
            formData.append("regionId", data.regionId);
            formData.append("storeId", data.storeId);
            formData.append("counterno", data.counterno);
            formData.append("on_time", data.on_time);
            formData.append("off_time", data.off_time);

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
            handleClick,
            handleChange,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <Box style={{ margin: "55px 20px 20px 20px" }}>
                <Grid
                  container
                  alignItems="center"
                  spacing={2}
                  sx={{ margin: "20px, 5px" }}
                >
                  <Grid item md={6} sm={12} sx={12}>
                    <TextField
                      fullWidth
                      variant="outlined"
                      type="text"
                      label="Latitude"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.latitude}
                      //value={storeData.latitude}
                      name="latitude"
                      error={!!touched.latitude && !!errors.latitude}
                      helperText={touched.latitude && errors.latitude}
                    />
                  </Grid>

                  <Grid item md={6} sm={12} xs={12}>
                    <TextField
                      fullWidth
                      variant="outlined"
                      type="text"
                      label="Longitude"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.longitude}
                      name="longitude"
                      error={!!touched.longitude && !!errors.longitude}
                      helperText={touched.longitude && errors.longitude}
                    />
                  </Grid>

                  <Grid item md={6} sm={12} xs={12}>
                    <TextField
                      fullWidth
                      variant="outlined"
                      type="text"
                      label="Store Name"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.storeName}
                      name="storeName"
                      error={!!touched.storeName && !!errors.storeName}
                      helperText={touched.storeName && errors.storeName}
                      sx={{ gridColumn: "span 4" }}
                    />
                  </Grid>

                  {/* <TextField
                    id="outlined-select-currency"
                    select
                    label="Region"
                    //defaultValue="1"
                    error={!!touched.regionId && !!errors.regionId}
                    helperText="Please select your Region Id"
                    value={values.regionId}
                    sx={{ gridColumn: "span 4" }}
                  >
                    {regionOptions.map((option) => (
                      <MenuItem key={option.regionName} value={option.regionId}>
                        {option.regionName}
                      </MenuItem>
                    ))}
                  </TextField> */}
                  <Grid item md={6} sm={12} xs={12}>
                    <TextField
                      fullWidth
                      variant="outlined"
                      type="text"
                      label="Region Id"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.regionId}
                      name="regionId"
                      error={!!touched.regionId && !!errors.regionId}
                      helperText={touched.regionId && errors.regionId}
                    />
                  </Grid>

                  <Grid item md={6} sm={12} xs={12}>
                    <TextField
                      fullWidth
                      variant="outlined"
                      type="text"
                      label="Store Id"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.storeId}
                      name="storeId"
                      error={!!touched.storeId && !!errors.storeId}
                      helperText={touched.storeId && errors.storeId}
                    />
                  </Grid>

                  <Grid item md={6} sm={12} xs={12}>
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
                    />
                  </Grid>

                  <Grid item md={6} sm={12} xs={12}>
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
                    />
                  </Grid>

                  <Grid item md={6} sm={12} xs={12}>
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
                    />
                  </Grid>
                </Grid>
              </Box>

              <Box display="flex" justifyContent="end" mt="20px" mr="22px">
                <Button
                  type="submit"
                  color="secondary"
                  variant="contained"
                  onClick={handleClick}
                  sx={{ width: "30%", borderRadius: "16px" }}
                >
                  Create New Store
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </LocalizationProvider>
      {/* </Box> */}
    </Box>
  );
};

export default StoreRegistration;
