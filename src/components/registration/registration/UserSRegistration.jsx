import React, { useState } from "react";
import {
  Grid,
  TextField,
  FormControl,
  FormControlLabel,
  FormLabel,
  Select,
  MenuItem,
  Button,
  Box,
  InputLabel,
} from "@mui/material";

const defaultValues = {
  firstname: "",
  lastname: "",
  contact: 0,
  gender: "",
  designation: "",
  area: "",
  email: "",
  address: "",
  password: "",
  confirmpassword: "",
};
const UserSRegistration = () => {
  const [formValues, setFormValues] = useState(defaultValues);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const genderOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Other" },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
  };
  return (
    <form onSubmit={handleSubmit}>
      <Box style={{ margin: "55px 20px 20px 20px" }}>
        <Grid
          container
          alignItems="center"
          //justifyContent="center"
          //direction="column"
          spacing={2}
          sx={{ margin: "50px, 5px" }}
        >
          <Grid item md={6}>
            <TextField
              id="name-input"
              fullWidth
              required
              name="firstname"
              label="First Name"
              type="text"
              value={formValues.firstname}
              onChange={handleInputChange}
              //sx={{ gridColumn: "span 2" }}
            />
          </Grid>

          <Grid item md={6}>
            <TextField
              id="name-input"
              fullWidth
              required
              name="lastname"
              label="Last Name"
              type="text"
              value={formValues.lastname}
              onChange={handleInputChange}
              //sx={{ gridColumn: "span 2" }}
            />
          </Grid>

          <Grid item md={6}>
            <TextField
              id="name-input"
              fullWidth
              required
              name="contact"
              label="Contact No."
              type="text"
              value={formValues.contact}
              onChange={handleInputChange}
              //sx={{ gridColumn: "span 2" }}
            />
          </Grid>

          <Grid item md={6}>
            <TextField
              id="name-input"
              fullWidth
              required
              name="email"
              label="Email"
              type="email"
              value={formValues.email}
              onChange={handleInputChange}
              //sx={{ gridColumn: "span 2" }}
            />
          </Grid>

          <Grid item md={6}>
            <TextField
              id="name-input"
              fullWidth
              required
              name="address"
              label="Address"
              type="text"
              value={formValues.address}
              onChange={handleInputChange}
              //sx={{ gridColumn: "span 2" }}
            />
          </Grid>

          <Grid item md={6}>
            <FormControl fullWidth>
              <InputLabel>Gender</InputLabel>
              <Select
                name="gender"
                fullWidth
                required
                label="Gender"
                value={formValues.gender}
                onChange={handleInputChange}
              >
                {genderOptions.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.value}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item md={6}>
            <FormControl fullWidth>
              <InputLabel>Designation</InputLabel>
              <Select
                name="designation"
                fullWidth
                required
                //placeholder="Designation"
                value={formValues.designation}
                onChange={handleInputChange}
              >
                <MenuItem key="1" value="regionManager">
                  Region Manager
                </MenuItem>
                <MenuItem key="2" value="storeManager">
                  Store Manager
                </MenuItem>
                <MenuItem key="3" value="user">
                  User
                </MenuItem>
                <MenuItem key="4" value="technician">
                  Technician
                </MenuItem>
                <MenuItem key="5" value="admin">
                  Super Admin
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item md={6}>
            <TextField
              id="name-input"
              fullWidth
              required
              name="area"
              label="Area"
              type="text"
              value={formValues.area}
              onChange={handleInputChange}
              //sx={{ gridColumn: "span 2" }}
            />
          </Grid>
          {/* <Grid item>
          <div style={{ width: "400px" }}>
            Favorite Number
            <Slider
              value={formValues.favoriteNumber}
              onChange={handleSliderChange("favoriteNumber")}
              defaultValue={1}
              step={1}
              min={1}
              max={3}
              marks={[
                {
                  value: 1,
                  label: "1",
                },
                {
                  value: 2,
                  label: "2",
                },
                {
                  value: 3,
                  label: "3",
                },
              ]}
              valueLabelDisplay="off"
            />
          </div>
        </Grid> */}

          <Grid item md={6}>
            <TextField
              id="name-input"
              fullWidth
              required
              name="password"
              label="Password"
              type="password"
              value={formValues.password}
              onChange={handleInputChange}
              //sx={{ gridColumn: "span 2" }}
            />
          </Grid>

          <Grid item md={6}>
            <TextField
              id="name-input"
              fullWidth
              required
              name="confirmpassword"
              label="Confirm Password"
              type="password"
              value={formValues.confirmpassword}
              onChange={handleInputChange}
              //sx={{ gridColumn: "span 2" }}
            />
          </Grid>
        </Grid>
        <Box display="flex" justifyContent="end" mt="20px">
          <Button
            type="submit"
            color="secondary"
            variant="contained"
            sx={{ width: "20%", borderRadius: "20px" }}
          >
            Create New User
          </Button>
        </Box>
      </Box>
    </form>
  );
};
export default UserSRegistration;
