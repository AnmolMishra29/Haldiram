import { Box, AppBar, Toolbar, Typography, Button, IconButton, styled } from "@mui/material";
import Haldiramlogo from "../../assests/haldiramlogo.jpg";
import Cards from "./Cards";
import { useEffect, useContext, useState } from 'react';
import HalidramContext from "../../context/Haldiramcontext/HaldiramContext";
import { Dialog } from "@mui/material";
import { Link } from "react-router-dom";

import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";


const Text = styled(Typography)`
flex-grow: 1;
text-align: center;
font-size: 2rem;
font-weight: 700;
`
const Taskbar = styled(AppBar)`
background-color: "#ffffff";
height: 75px;
`
const Image = styled("img")({
  height: 66,
  width: 95,
  margin: 'auto',
  paddingRight: 70
})

const Component = styled(Box)`
     height:70vh;
     margin:auto;
     overflow:hidden;
`
const Container = styled(Box)`
     padding: 25px 35px;
     display: flex;
     flex: 1;
     overflow: hidden;
    flex-direction: column;
    margin:auto;
`

// const Textt = styled(TextField)`
//     width:30vw;
//     margin:25px;
// `
const Stylebutto = styled(Button)`
  height: 35px;
  width: 48ch;
  margin: 25px;
  -webkit-box-align:center;
  display: flex;
  align-items:center;
  justify-content: center;
`;

const HeadingText = styled(Typography)`
    font-size:35px;
    font-weight:700;
    margin:25px;
    color: "#1338BE";
`

const Appbar = () => {

  const { getMall , mall} = useContext(HalidramContext);
  const [open, setOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  
  useEffect(() => {
    getMall();
  }, [])
  const openDialog = (el) => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Taskbar position="static" style={{ backgroundColor: "#FFFFFF" }}>
          <Toolbar>
            <Box>
              <Image src={Haldiramlogo} alt='logo' />
            </Box>
            <IconButton
              size="large"
              edge="start"
              //color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              {/* <MenuIcon /> */}
            </IconButton>
            <Text variant="h6" component="div" sx={{ flexGrow: 1, color: "#0047AB" }}>
              Haldiram Retail Private Limited
            </Text>
            {/* <Button color="primary">Login</Button> */}
            <Button variant="contained" onClick={()=> openDialog()}>Login </Button>
          </Toolbar>
        </Taskbar>
      <Dialog open={open} onClose={handleClose} >
        <Component>
          <Container>
            <HeadingText >
              Retail Private Limited
            </HeadingText>

            <FormControl
                        sx={{
                          m: "10px 0px",
                          width: "52ch",
                          display: "flex",
                          alignSelf: "center",
                        }}
                        variant="filled"
                      >
                        <InputLabel htmlFor="outlined-adornment-email">
                          you@gmail.com
                        </InputLabel>
                        <OutlinedInput
                          id="outlined-adornment-email"
                          type="text"
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                              >
                                {/* {showPassword ? (
                                  <VisibilityOff />
                                ) : (
                                  <Visibility />
                                )} */}
                              </IconButton>
                            </InputAdornment>
                          }
                          label="You@gmail.com"
                        />
                      </FormControl>

                      <FormControl
                        sx={{
                          m: "10px 0px",
                          width: "52ch",
                          display: "flex",
                          alignSelf: "center",
                        }}
                        variant="filled"
                      >
                        <InputLabel htmlFor="outlined-adornment-password">
                          Password
                        </InputLabel>
                        <OutlinedInput
                          id="outlined-adornment-password"
                          type={showPassword ? "text" : "password"}
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                              >
                                {showPassword ? (
                                  <VisibilityOff />
                                ) : (
                                  <Visibility />
                                )}
                              </IconButton>
                            </InputAdornment>
                          }
                          label="Password"
                        />
                      </FormControl>

                      <Link to="/MainDashboard" style={{color:"white", textDecoration: "none"}}>
                        <Stylebutto variant="contained">Login</Stylebutto>
                      </Link>
          </Container>
        </Component>
      </Dialog>
      </Box>
      <Cards />
    </>
  )
}

export default Appbar;