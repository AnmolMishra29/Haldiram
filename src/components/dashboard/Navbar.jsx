import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  styled,
} from "@mui/material";
//import Haldiramlogo from "../../assests/haldiramlogo.jpg;";
import { useEffect, useContext, useState } from "react";
import HalidramContext from "../../context/Haldiramcontext/HaldiramContext";
import { useNavigate } from "react-router-dom";

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
  height: 70,
  width: 140,
  margin: "auto",
});

const Navbar = () => {
  const navigate = useNavigate();

  const { getMall, mall, SetRole, showalert } = useContext(HalidramContext);
  //   const [open, setOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    getMall();
  }, []);
  const openDialog = (el) => {
    SetRole("Admin");
    // showalert('error',"masseage nhi hai")
    // setOpen(true);
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Taskbar position="static" style={{ backgroundColor: "#FFFFFF" }}>
          <Toolbar>
            <Box>{/* <Image src={Haldiramlogo} alt="logo" /> */}</Box>
            <IconButton
              size="large"
              edge="start"
              //color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              {/* <MenuIcon /> */}
            </IconButton>
            <Text
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, color: "#0047AB" }}
            >
              Haldiram Retail Private Limited
            </Text>
            {/* <Button color="primary">Login</Button> */}
            <Button
              variant="contained"
              onClick={() => navigate("/registration/userregistration")}
            >
              Go to DashBoard{" "}
            </Button>
          </Toolbar>
        </Taskbar>
      </Box>
    </>
  );
};

export default Navbar;
