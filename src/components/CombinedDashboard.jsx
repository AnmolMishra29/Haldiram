import { Box,AppBar,Toolbar,styled,Button,IconButton,Typography, CardContent,Card, Grid } from "@mui/material";
import Haldiramlogo from "../../assests/haldiramlogo.jpg";


const Text = styled(Typography)`
  flex-grow: 1;
  text-align: center;
  font-size: 45px;
  font-weight: 700;
`;

const Taskbar = styled(AppBar)`
  background-color: "#ffffff";
  height: 75px;
`;

const Image = styled("Img")({
  height: 66,
  width: 95,
  margin: "auto",
  paddingRight: 70,
});

const Stylebutton = styled(Button)`
  margin: 8px;
`;

const CombinedDashboard =  ()=> {
    return(
        //Header start......
       <>
         <Box sx={{ flexGrow: 1 }}>
        <Taskbar position="static" style={{ backgroundColor: "#FFFFFF" }}>
          <Toolbar>
            <Stylebutton variant="contained">Back</Stylebutton>
            <Text
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, color: "#0047AB" }}
            >
              Haldiram Retail Private Limited
            </Text>
            <Stylebutton variant="contained">Alarm</Stylebutton>
            <Stylebutton variant="contained">Report</Stylebutton>
            <Box>
              <Image
                src={Haldiramlogo}
                alt="logo"
                style={{ marginLeft: "10px" }}
              />
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
          </Toolbar>
        </Taskbar>
      </Box>
       {/* Header ends */}

       {/* Dashboard start */}

       <Card sx={{ maxWidth: 345, marginTop:"10vh", marginLeft: "10vw",height:"30vh" , width:"45vw" }}>
       <CardContent>
           <Typography gutterBottom variant="h5" component="div">
              Ethnic Foods Private Limited
           </Typography>
           <Typography gutterBottom variant="h6" component="div">
              Real Time Alarm
           </Typography>


           <Grid container spacing={2} style={{display:"flex"}}>
               <Grid item xs={4} md={5}>
                    <Box style={{backgroundColor:"green" , borderRadius: "50%" ,height:"40px", width: "40px"}}>
                        30
                   </Box>
                   <Box style={{backgroundColor:"green" , borderRadius: "50%" ,height:"40px", width: "40px"}}>
                        30
                   </Box>
                   <Box style={{backgroundColor:"green" , borderRadius: "50%" ,height:"40px", width: "40px"}}>
                        40
                   </Box>
                   <Box style={{backgroundColor:"green" , borderRadius: "50%" ,height:"40px", width: "40px"}}>
                        50
                   </Box>
                   <Box style={{backgroundColor:"green" , borderRadius: "50%" ,height:"40px", width: "40px"}}>
                        60
                   </Box>
                   <Box style={{backgroundColor:"green" , borderRadius: "50%" ,height:"40px", width: "40px"}}>
                        70
                   </Box>'<Box style={{backgroundColor:"green" , borderRadius: "50%" ,height:"40px", width: "40px"}}>
                        80
                   </Box>
                   <Box style={{backgroundColor:"green" , borderRadius: "50%" ,height:"40px", width: "40px"}}>
                        90
                   </Box>
               </Grid>
           </Grid>
           
      </CardContent>
    </Card>

       </>
    )
}

export default CombinedDashboard;