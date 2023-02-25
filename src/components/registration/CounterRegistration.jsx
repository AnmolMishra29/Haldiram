import {
  Box,
  Button,
  TextField,
  Stack,
  MenuItem,
  styled,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Switch,
  Divider,
  Container,
} from "@mui/material";
import { useState, useEffect } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Haldiramlogo from "../../assests/haldiramlogo.jpg";
import AddField from "./AddField";
import axios from "axios";

const Text = styled(Typography)`
  flex-grow: 1;
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
`;
const Taskbar = styled(AppBar)`
  background-color: "#ffffff";
  height: 75px;
`;
const Image = styled("img")({
  height: 66,
  width: 95,
  margin: "auto",
  paddingRight: 70,
});

const CounterRegistration = ({
  index,
  item,
  //handleChange,
  //handleRemove,
  //handleAdd,
}) => {
  const isNonMobile = useMediaQuery("(min-width:600px");
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

  // const handleName = (event) => {
  //   setName(event.target.value);
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
      setDeviceOptions(res.data)
    };
    const getStoreData = async () => {
      const res1 = await axios.get("http://192.168.29.5:8089/store/getAll");
      setStoreOptions(res1.data)
      // let storeArr = res1.data.map((obj) => {
      //   return obj.storeId;
      // });
    };
    getDeviceData();
    getStoreData();
  }, []);

  return (
    <Box sx={{ flexGrow: 1, width: "100vw", height: "100vh" }}>
      {/* TextFields */}

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
            width: "50%",
            height: "100% - 20px",
            marginTop: 15,
            boxShadow:
              "0px 4px 8px 0px rgba(0, 0, 0, 0.2), 0px 6px 20px 0px rgba(0, 0, 0, 0.19)",
          }}
        >
          <Container maxWidth="md">
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
                        label="Counter Name"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.countName}
                        name="countName"
                        error={!!touched.countName && !!errors.countName}
                        helperText={touched.countName && errors.countName}
                        sx={{ gridColumn: "span 4", marginTop: "15px" }}
                      />

                      <TextField
                        //id="outlined-select-currency"
                        select
                        label="Device Type"
                        options={deviceOptions}
                        defaultValue="Device 1"
                        helperText="Please select your device"
                        error={!!touched.deviceType && !!errors.deviceType}
                        sx={{ gridColumn: "span 4" }}
                      >
                        {deviceOptions.map((option) => (
                          <MenuItem
                            key={option.deviceId}
                            value={option.deviceId}
                          >
                            {option.deviceId}
                          </MenuItem>
                        ))} 
                      </TextField>

                      <TextField
                        //id="outlined-select-currency"
                        select
                        label="Store Type"
                        defaultValue="1"
                        helperText="Please select store"
                        error={!!touched.storeType && !!errors.storeType}
                        sx={{ gridColumn: "span 4" }}
                      >
                        {storeOptions.map((option) => (
                          <MenuItem key={option.storeId} value={option.storeId}>
                            {option.storeId}
                          </MenuItem>
                        ))}
                      </TextField>

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
                        Create New Counter
                      </Button>
                    </Box>
                  </form>
                )}
              </Formik>
            </Stack>
          </Container>
        </Box>
      </Box>
    </Box>
  );
};

export default CounterRegistration;
