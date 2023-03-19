import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  styled,
  Box,
  Grid,
  
} from "@mui/material";
import { Dialog } from "@mui/material";
import Haldiramlogo from "../../assests/haldiramlogo.jpg";
import { useState, useContext } from "react";
import Background from "../../assests/background.jpg";
import HalidramContext from "../../context/Haldiramcontext/HaldiramContext";
import { Link } from "react-router-dom";

import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Stylebutton = styled(Button)`
  display: block;
  width:20ch;
  align-items:center;
  justify-items: center;
  //padding:8px;
`;

const Text = styled(Typography)`
  font-size: 27px;
  font-weight: 700;
  color: "#0047AB";
  text-align: center;
  text-decoration: underline;
  -webkit-text-stroke: thin;
  font-style:italic;
`;

const CardComponent = styled(Card)`
      display: 'flex';
      width: '390px';
      height: "398px";
      margin-top: 200px
      margin-right: 20px;
`;
const Component = styled(Box)`
  height: 70vh;
  margin: auto;
  overflow: hidden;
`;
const Container = styled(Box)`
  padding: 25px 35px;
  display: flex;
  flex: 1;
  overflow: hidden;
  flex-direction: column;
  margin: auto;
`;


const Stylebutto = styled(Button)`
  height: 35px;
  width: 50ch;
  margin: 25px;
  display: flex;
  align-items:center;
  justify-content: center;
`;
const HeadingText = styled(Typography)`
  font-size: 30px;
  font-weight: 700;
  margin: 15px 20px;
  color: "#1338BE";
  text-decoration: underline;
  -webkit-text-stroke: thin;
  font-style:italic;
`;

const Cards = () => {
  const [open, setOpen] = useState(false);
  const [datadailog, setdatadailog] = useState("");
  const [dialogName, SetdilogName] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
};

  const openDialog = (el, index) => {
    setOpen(true);
    setdatadailog(`${el.name}/${index}`);
    SetdilogName(el.name);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { mall } = useContext(HalidramContext);

return (
     <Box style={{ backgroundImage: { Background } }}>
       <Grid container spacing={4} style={{ marginTop: "7vh" }}>
         {mall &&
          mall.map((el, index) => {
            let path = `/${datadailog}`;

            return (
              <Grid item xs={6} sm={4} md={3} key={el.alarm}>
                
                <CardComponent
                  style={{
                    height: "43vh",
                    width: "20vw",
                    margin: "35px",
                    boxShadow: "0 2px 4px 0 rgb(0 0 0/40%)",
                  }}
                >
                  <CardMedia
                    component="img"
                    alt="logo"
                    height="150"
                    src={Haldiramlogo}
                    style={{
                      display: "flex",
                      //WebkitBackgroundPosition: 'center',
                      // alignItems: "center",
                      width: "100%",
                      objectFit: "contain",
                      height: "120px",
                      // width: "170px",
                    
                    }}
                  />
                  <CardContent>
                    <Text>{el.name}</Text>
                  </CardContent>
                  <CardActions>
                    <Stylebutton
                      variant="contained"
                      onClick={() => {
                        openDialog(el, index);
                      }}
                    >
                      Login
                    </Stylebutton>
                  </CardActions>
                </CardComponent>
                



                <Dialog open={open} onClose={handleClose} key={el.alarm}>
                   <Component>
                     <Container>
                       <HeadingText>{dialogName}</HeadingText>
                       {/* <Textt variant="filled" name="email" label="you@gmail.com" />
                       <Textt variant="filled" name="password" label="Password" /> */}

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
                          Email
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
                          label="you@gmail.com"
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
                        <Link
                          to={path}
                          style={{ color: "white", textDecoration: "none" }}
                          >
                      <Stylebutto variant="contained" onClick={()=> console.log("hello")}>
                          {" "}
                          Login
                        {" "}
                      </Stylebutto>
                        </Link>
                    </Container>
                  </Component>
                </Dialog>
              </Grid>
            );
          })}
        {/* {renderlist} */}
      </Grid>
    </Box>
  );
};

export default Cards;
