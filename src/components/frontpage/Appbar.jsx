import {Box, AppBar, Toolbar,Typography,Button,IconButton, styled} from "@mui/material";
import Haldiramlogo from "../../assests/haldiramlogo.jpg";
import Cards from "./Cards";



const Text = styled(Typography)`
flex-grow: 1;
text-align: center;
font-size: 45px;
font-weight: 700;
`
const Taskbar = styled(AppBar)`
background-color: "#ffffff";
height: 75px;
`
const Image =styled("Img") ({
    height: 66,
    width: 95,
    margin:'auto',
    paddingRight: 70
})

const Appbar = ()=> {
    return(
    <>
        <Box sx={{ flexGrow: 1 }}>
        <Taskbar position="static" style={{backgroundColor: "#FFFFFF"}}>
          <Toolbar>
            <Box>
                <Image src={Haldiramlogo} alt='logo'/>
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
            <Button variant="contained">Login</Button>
          </Toolbar>
        </Taskbar>
      </Box>
      <Cards/>
    </> 
    )
}

 export default Appbar;