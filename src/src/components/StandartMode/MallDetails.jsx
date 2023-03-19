import {
  Box,
  AppBar,
  Toolbar,
  styled,
  Button,
  IconButton,
  Typography,
  CardContent,
  Card,
  CardActions,
  Grid,
} from "@mui/material";
import { useContext, useState, useEffect } from "react";
import { DeviceThermostat, SettingsPowerRounded } from '@mui/icons-material';
import Haldiramlogo from "../../assests/haldiramlogo.jpg";
import HalidramContext from "../../context/Haldiramcontext/HaldiramContext";
import axios from 'axios'
import '../../App.css'
import {Link,useParams} from "react-router-dom";
import AlarmAlert from "../dashboard/AlarmAlert";

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

// const Card =  styled(Card)`
// height: 100;
// width: 100;
// margin: "0px 30px";
// `

const Stylebutton = styled(Button)`
    margin: 8px;
  `;

const MallDetails = () => {

  const { mall } = useContext(HalidramContext);
  const [temp, setTemp] = useState([]);
  const [compareTempe, setCompareTempe] = useState([]);
  const [open, setOpen] = useState(false);

  let mallitems = [];
  mallitems = mall[0].stores[0].Items;


  const compareTemp = async () => {
    try{
      const response = await axios.get(`http://192.168.29.5:8089/telemetry/counter?counterId={id}`);
      setCompareTempe(response.data);
    }
    catch(error){
      console.log();
    }
  }

  const getTemp = async ()=> {
    try{
      const response1 = await axios.get(`http://192.168.29.5:8089/counter-set-Point/get?counterSetPointId={id}`);
      setTemp(response1.data);
    }
    catch(error){
      console.log(error);
    }
  }

  useEffect(() => {
    compareTemp();
    getTemp(); 
  }, [])
  
  setTimeout(() => {
    compareTemp();  
  }, 55000);

  const openDialog =()=> {
     setOpen(true);
  }
  const colorchange = {
    "HotMax": 75,
    "HotMin": 65,
    "ColdMax": 5,
    "ColdMin": 1,
    "CompMax": 33,
    "CompMin": 18
  }

  // const [value, setValue] = useState(80);
  // const [cold, setCold] = useState(10);



  return (
    <>
      {/* Header starts */}

      <Box sx={{ flexGrow: "1" }}>
        <Taskbar position="static" style={{ backgroundColor: "#FFFFFF" }}>
          <Toolbar>
            <Stylebutton variant="contained">Back</Stylebutton>
            <Text
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, color: "#0047AB" }}
            >
              Spice Mall
            </Text>
            <Stylebutton variant="contained" onClick={()=> openDialog()}>Alarm</Stylebutton>
            <Stylebutton variant="contained">Report</Stylebutton>
            <AlarmAlert open={open} setOpen={setOpen}/>
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
      {/* Header Ends */}

      {/* Card starts */}

      <Box style={{ backgroundColor: "#5A9BD5" }}>
        <Link to="/engineeringmode" style={{ textDecoration: "none"}}>
        <Button
          variant="contained"
          style={{
            margin: 20,
            justifyItems: "left",
            backgroundColor: "#81E8FF",
            color: "#000000",
          }}
        >
          Engineering Mode
        </Button>
        </Link>



        <Grid container spacing={2}>
          {temp && temp.map((el, index) => {

            // setTimeout(() => {
            return (

              <Grid item xs={6} md={4} key={index}>
                <Card sx={{ width: 400, height: 200, margin: "2vh" }}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                      {mallitems[index].name}
                    </Typography>
                    <Typography><b>Device Status <input type="radio" defaultChecked style={el.status ? { "accentColor": "green" } : { "accentColor": "red" }} /></b></Typography>

                    <Box style={{ display: "flex", justifyContent: "center" }}>
                      {/* Hot Card */}
                      <Card className="cardd" style={colorchange.HotMin < el.t1 && el.t1 < colorchange.HotMax ? {
                        backgroundColor: "green", height: 100,
                        width: 100,
                        margin: "0px 8px"
                      } :
                        colorchange.HotMin - 3 < el.t1 && el.t1 < colorchange.HotMax + 3 ? {
                          backgroundColor: "#cc9900", height: 100,
                          width: 100,
                          margin: "0px 8px"
                        } : {
                          backgroundColor: "red", height: 100,
                          width: 100,
                          margin: "0px 8px"
                        }
                      }>
                        <CardContent style={{ color: "white", padding: "6px" }}>
                          <Box style={{ display: "flex" }}>

                            <Typography style={{ fontSize: 10 }}>Hot</Typography>
                            <DeviceThermostat style={el.t1 > colorchange.HotMax + 3 ? { display: "block" } : { display: "none" }} />
                          </Box>
                          {/* <Typography variant="h4">{el.Hot}</Typography> */}
                          <Typography variant="h4">{el.t1}</Typography>
                          <Typography style={{ fontSize: 10 }}>sv 75</Typography>
                        </CardContent>
                      </Card>

                      {/* Cold Card */}
                      <Card className="cardd" style={colorchange.ColdMin < el.t2 && el.t2 < colorchange.ColdMax ? {
                        backgroundColor: "green", height: 100,
                        width: 100,
                        margin: "0px 8px"
                      } :

                        colorchange.ColdMin - 3 < el.t2 && el.t2 < colorchange.ColdMax + 3 ? {
                          backgroundColor: "#cc9900", height: 100,
                          width: 100,
                          margin: "0px 8px"
                        } : {
                          backgroundColor: "red", height: 100,
                          width: 100,
                          margin: "0px 8px"
                        }


                        // backgroundColor: "red", height: 100,
                        // width: 100,
                        // margin: "0px 8px"

                      }>
                        <CardContent style={{ color: "white", padding: "6px" }}>
                          <Typography style={{ fontSize: 10 }}>Cold</Typography>
                          {/* <Typography variant="h4">{el.cold}</Typography> */}
                          <Typography variant="h4">{el.t2}</Typography>
                          <Typography style={{ fontSize: 10 }}>sv 75</Typography>
                        </CardContent>
                      </Card>

                      {/* Compressor Card */}
                      <Card className="cardd" style={colorchange.CompMin < el.t3 && el.t3 < colorchange.CompMax ? {
                        backgroundColor: "green", height: 100,
                        width: 100,
                        margin: "0px 8px"
                      } :
                        colorchange.CompMin - 3 < el.t3 && el.t3 < colorchange.CompMax + 3 ? {
                          backgroundColor: "#cc9900", height: 100,
                          width: 100,
                          margin: "0px 8px"
                        } : {
                          backgroundColor: "red", height: 100,
                          width: 100,
                          margin: "0px 8px"
                        }
                      }>
                        <CardContent style={{ color: "white" ,  padding: "6px"}}>
                          <Typography style={{ fontSize: 10 }}>Compressor</Typography>
                          {/* <Typography variant="h4">{el.Compressor}</Typography> */}
                          <Typography variant="h4">{el.t3}</Typography>
                          <Typography style={{ fontSize: 10 }}>sv 75</Typography>
                        </CardContent>
                      </Card>
                    </Box>
                  </CardContent>
                  <CardActions>
                    {/* <Button variant="contained" size="small">
                  Proceed
                </Button> */}
                  </CardActions>
                </Card>
              </Grid>
            )
          // }, 500);
          return 0;
          })}

        </Grid>
      </Box>
    </>
  );
};

export default MallDetails;
