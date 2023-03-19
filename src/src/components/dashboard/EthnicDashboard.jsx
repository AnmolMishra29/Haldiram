import { Box, AppBar, Toolbar, Typography, Button, IconButton, styled, Grid, CardActions, Card, CardContent } from "@mui/material";
import Haldiramlogo from "../../assests/haldiramlogo.jpg";
import { useState, useEffect, useContext } from "react";
import HalidramContext from "../../context/Haldiramcontext/HaldiramContext";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import AlarmAlert from "./AlarmAlert";

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
const Image = styled("img")({
  height: 66,
  width: 95,
  margin: "auto",
  paddingRight: 70,
});

const Stylebutton = styled(Button)`
  margin: 8px;
`;
const Container = styled(Box)`
  display: flex;
  justify-content: center;
  width: 90vw;
  padding: 5vh 5vw;
`;
// const Component = styled(Box)`
//      height:70vh;
//      margin:auto;
//      overflow:hidden;
// `

// const HeadingText = styled(Typography)`
//     font-size:35px;
//     font-weight:700;
//     margin:25px;
//     color: "#1338BE";
// `

const EthnicDashboard = () => {
  const { index } = useParams();


  const [ethnicproducts, setEthnicProducts] = useState([]);
  const [open, setOpen] = useState(false);
  // const [alarmDialog, setAlarmDialog] = useState(false);

  const { mall } = useContext(HalidramContext);
  useEffect(() => {
    setEthnicProducts(mall[index].stores);
  }, [])
  // const openDialog = (el) => {
  //   setOpen(true);
  // }
  
  // const handleClose = () => {
  //   setOpen(false);
  // }

  const openDialog =()=> {
    setOpen(true);
    console.log("open Dialog");
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Taskbar position="static" style={{ backgroundColor: "#FFFFFF" }}>
          <Toolbar>
            <Stylebutton variant="contained"> <Link to="/" style={{color: "white", textDecoration : "none"}}> Back </Link></Stylebutton>
            <Text
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, color: "#0047AB" }}
            >
              {mall[index].name}
            </Text>
            <Stylebutton variant="contained" onClick={()=> openDialog()}>Alarm</Stylebutton>
            <Stylebutton variant="contained">Report</Stylebutton>
            <AlarmAlert open={open} setOpen={setOpen} />
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
      <Container>
        <Grid container spacing={2} style={{ marginTop: "7vh" }}>
          {ethnicproducts && ethnicproducts.map((el) => {
            return (
              <Grid item xs={6} sm={4} md={2.4} key={el.alarmno}>
                <Card sx={{ height:"31vh", width:"14vw",margin: "8px 0px" }} style={el.alarmno > 60 ? { backgroundColor: "rgb(254,14,0)" } : { backgroundColor: "rgb(80,215,0)" }}>
                  <CardContent>
                    {/* <Typography component="div" style={el.alarmno > 60 ? { display: "block", float: "right" } : { display: "none" }}>
                      <i style={{ color: "white", cursor: "pointer" }} className="fa-solid fa-triangle-exclamation" onClick={() => openDialog()}></i>
                    </Typography> */}
                    
                    <Typography gutterBottom variant="h4" component="div" style={{ color: "white" }}>
                      {el.name}
                    </Typography>
                  </CardContent>
                  <CardActions>
                   <Link to="/mallDetails" style={{ textDecoration:"none"}}><Button variant="contained" size="small"><i className="fa-solid fa-arrow-right-long"></i></Button> </Link> 
                  </CardActions>
                </Card>
                {/* Dialog for the alarm  */}
                {/* <Dialog open={open} onClose={handleClose}>
                  <Component>
                  <Typography></Typography>
                      <HeadingText >
                        
                        Alarm Alert {el.alarmno}
                      </HeadingText>
                   
                  </Component>
                </Dialog> */}
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </>
  );
};

export default EthnicDashboard;
