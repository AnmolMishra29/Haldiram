import {
  Box,
  Button,
  TextField,
  Stack,
  MenuItem,
  styled,
  Typography,
  FormControl,
  Select,
  InputLabel,
  IconButton,
  Switch,
  Divider,
  Grid,
} from "@mui/material";
import { useState, useEffect } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import Haldiramlogo from "../../assests/haldiramlogo.jpg";
import AddField from "./AddField";
import axios from "axios";
import Header from "./Header";
import ProSidebaar from "./ProSidebaar";

const CounterRegistration = ({
  index,
  item,
  //handleChange,
  //handleRemove,
  //handleAdd,
}) => {
  const handleFormSubmit = (values) => {
    console.log(values);
  };

  const [count, setCount] = useState(1);
  const [goodhigh, setGoodhigh] = useState("");

  const [story, setStory] = useState({});
  const [deviceOptions, setDeviceOptions] = useState([""]);
  const [storeOptions, setStoreOptions] = useState([]);
  const [inputFields, setInputFields] = useState([
    {
      goodHigh: "",
      goodLow: "",
      bestHigh: "",
      bestLow: "",
    },
  ]);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   await setStory({ trips: [...inputFields], name });
  //   console.log("jennie", story);
  // };

  // const handleChange = (event, index) => {
  // const values = [...inputFields];
  // console.log("momo", values);
  // values[index][event.target.name] = event.target.value;

  //   setInputFields(values);
  // };

  // adds new input
  const handleAdd = () => {
    setInputFields([
      ...inputFields,
      {
        goodHigh: "",
        goodLow: "",
        bestHigh: "",
        bestLow: "",
      },
    ]);
    setCount(count + 1);
  };

  // removes input
  const handleRemove = (index) => {
    if (inputFields.length !== 1) {
      const values = [...inputFields];
      values.splice(index, 1);
      setInputFields(values);
    }
    setCount(count - 1);
  };

  const initialValues = {
    countName: "",
    storeType: "",
    deviceType: "",
  };

  //const counterRegExp = /^[0-9]+$/;
  const userSchema = yup.object().shape({
    countName: yup.string().required("required"),
    storeType: yup.string().required("required"),
    deviceType: yup.string().required("required"),
  });

  const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 28,
    height: 16,
    padding: 0,
    display: "flex",
    "&:active": {
      "& .MuiSwitch-thumb": {
        width: 15,
      },
      "& .MuiSwitch-switchBase.Mui-checked": {
        transform: "translateX(9px)",
      },
    },
    "& .MuiSwitch-switchBase": {
      padding: 2,
      "&.Mui-checked": {
        transform: "translateX(12px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor:
            theme.palette.mode === "dark" ? "#177ddc" : "#1890ff",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
      width: 12,
      height: 12,
      borderRadius: 6,
      transition: theme.transitions.create(["width"], {
        duration: 200,
      }),
    },
    "& .MuiSwitch-track": {
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor:
        theme.palette.mode === "dark"
          ? "rgba(255,255,255,.35)"
          : "rgba(0,0,0,.25)",
      boxSizing: "border-box",
    },
  }));

  useEffect(() => {
    const getDeviceData = async () => {
      const res = await axios.get("http://192.168.29.5:8089/device/");
      setDeviceOptions(res.data);
    };
    const getStoreData = async () => {
      const res1 = await axios.get("http://192.168.29.5:8089/store/getAll");
      setStoreOptions(res1.data);
      // let storeArr = res1.data.map((obj) => {
      //   return obj.storeId;
      // });
    };
    getDeviceData();
    getStoreData();
  }, []);

  return (
    <>
      <ProSidebaar />
      <Box m="73px 20px 20px 235px">
        <Header title="COUNTER REGISTRATION" />
        <Formik
          initialValues={initialValues}
          validationSchema={userSchema}
          onSubmit={(data, { resetForm }) => {
            console.log(data);
            let formData = new FormData();
            formData.append("counterName", data.counterName);
            formData.append("storeType", data.storeType);
            formData.append("deviceType", data.deviceType);

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
          }) => (
            <form onSubmit={handleSubmit}>
              <Box style={{ margin: "55px 20px 20px 20px" }}>
                <Grid
                  container
                  alignItems="center"
                  spacing={2}
                  sx={{ margin: "20px, 5px" }}
                >
                  <Grid item md={12} xs={12}>
                    <TextField
                      fullWidth
                      variant="outlined"
                      type="text"
                      label="Counter Name"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.countName}
                      name="countName"
                      error={!!touched.countName && !!errors.countName}
                      helperText={touched.countName && errors.countName}
                      //sx={{ gridColumn: "span 4", marginTop: "15px" }}
                    />
                  </Grid>

                  <Grid item md={12} xs={12}>
                    {/* <TextField
                    //id="outlined-select-currency"
                    fullWidth
                    select
                    label="Device Type"
                    options={deviceOptions}
                    defaultValue="Device 1"
                    helperText="Please select your device"
                    error={!!touched.deviceType && !!errors.deviceType}
                    sx={{ gridColumn: "span 4" }}
                  >
                    {deviceOptions.map((option) => (
                      <MenuItem key={option.deviceId} value={option.deviceId}>
                        {option.deviceId}
                      </MenuItem>
                    ))}
                  </TextField> */}
                    <FormControl fullWidth>
                      <InputLabel>Device Type</InputLabel>
                      <Select
                        name="deviceType"
                        fullWidth
                        required
                        label="Device Type"
                        value={values.deviceType}
                        onChange={handleChange}
                        helperText="Please select your device"
                        error={!!touched.deviceType && !!errors.deviceType}
                        helpertext={touched.deviceType && errors.deviceType}
                      >
                        {deviceOptions.map((option) => (
                          <MenuItem
                            key={option.deviceId}
                            value={option.deviceId}
                          >
                            {option.deviceId}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item md={12} xs={12}>
                    <FormControl fullWidth>
                      <InputLabel>Store Type</InputLabel>
                      <Select
                        name="storeType"
                        fullWidth
                        required
                        label="Store Type"
                        value={values.storeType}
                        onChange={handleChange}
                        helperText="Please select your store"
                        error={!!touched.storeType && !!errors.storeType}
                        helpertext={touched.storeType && errors.storeType}
                      >
                        {storeOptions.map((option) => (
                          <MenuItem key={option.storeId} value={option.storeId}>
                            {option.storeId}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>

                {inputFields.map((item, index) => (
                  <Box key={index}>
                    <AddField
                      inputFields={inputFields}
                      index={index}
                      item={item}
                      handleChange={handleChange}
                      handleRemove={handleRemove}
                      handleAdd={handleAdd}
                    />
                    <Divider style={{ marginBottom: 10 }} />
                  </Box>
                ))}
              </Box>

              {/* Toggle Button */}
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                justifyContent="end"
              >
                <Typography>Off</Typography>
                <AntSwitch
                  defaultChecked
                  inputProps={{ "aria-label": "ant design" }}
                />
                <Typography>On</Typography>
              </Stack>

              <Box display="flex" justifyContent="center" mt="20px">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleRemove}
                  disabled={count === 1 ? true : false}
                  sx={{ marginRight: 5, borderRadius: "20px" }}
                >
                  Remove Set Points
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleAdd}
                  disabled={count === 3 ? true : false}
                  sx={{ borderRadius: "20px" }}
                >
                  Add Set Points
                </Button>
              </Box>

              <Box display="flex" justifyContent="center" m="20px 3px 30px 3px">
                <Button
                  type="submit"
                  color="secondary"
                  variant="contained"
                  sx={{ width: "90%", borderRadius: "16px" }}
                >
                  Create New Counter
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    </>
  );
};

export default CounterRegistration;
