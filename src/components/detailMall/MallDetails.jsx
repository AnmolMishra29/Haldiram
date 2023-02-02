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
import { useState } from "react";
import { DeviceThermostat } from "@mui/icons-material";
import { Link } from "react-router-dom";
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

const MallDetails = () => {
  const [value, setValue] = useState(80);
  const [cold, setCold] = useState(10);

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
      {/* Header Ends */}

      {/* Card starts */}

      <Box style={{ backgroundColor: "#5A9BD5" }}>
        <Link to="/engineering">
          <Button
            variant="contained"
            style={{
              margin: 20,
              justifyItems: "right",
              backgroundColor: "#81E8FF",
              color: "#000000",
            }}
          >
            Engineering Mode
          </Button>
        </Link>
        <Grid container spacing={2}>
          <Grid item xs={6} md={4}>
            <Card sx={{ width: 400, height: 200, margin: "2vh" }}>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  CHAAT
                </Typography>

                <Box style={{ display: "flex", justifyContent: "center" }}>
                  {/* Hot Card */}
                  <Card
                    style={
                      value > 75
                        ? {
                            backgroundColor: "red",
                            height: 100,
                            width: 100,
                            margin: "0px 8px",
                          }
                        : {
                            backgroundColor: "green",
                            height: 100,
                            width: 100,
                            margin: "0px 8px",
                          }
                    }
                  >
                    <CardContent>
                      <Box style={{ display: "flex" }}>
                        <Typography style={{ fontSize: 10 }}>Hot</Typography>
                        <DeviceThermostat />
                      </Box>
                      <Typography variant="h4">75</Typography>
                      <Typography style={{ fontSize: 10 }}>sv 75</Typography>
                    </CardContent>
                  </Card>

                  {/* Cold Card */}
                  <Card
                    style={
                      cold < 7
                        ? {
                            backgroundColor: "red",
                            height: 100,
                            width: 100,
                            margin: "0px 8px",
                          }
                        : {
                            backgroundColor: "green",
                            height: 100,
                            width: 100,
                            margin: "0px 8px",
                          }
                    }
                  >
                    <CardContent>
                      <Typography style={{ fontSize: 10 }}>Cold</Typography>
                      <Typography variant="h4">75</Typography>
                      <Typography style={{ fontSize: 10 }}>sv 75</Typography>
                    </CardContent>
                  </Card>

                  {/* Compressor Card */}
                  <Card
                    style={
                      value > 75
                        ? {
                            backgroundColor: "red",
                            height: 100,
                            width: 100,
                            margin: "0px 8px",
                          }
                        : {
                            backgroundColor: "green",
                            height: 100,
                            width: 100,
                            margin: "0px 8px",
                          }
                    }
                  >
                    <CardContent>
                      <Typography style={{ fontSize: 10 }}>
                        Compressor
                      </Typography>
                      <Typography variant="h4">75</Typography>
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

          {/* LIVE */}

          <Grid item xs={12} md={4}>
            <Card sx={{ width: 400, height: 200, margin: "2vh" }}>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  LIVE
                </Typography>

                <Box style={{ display: "flex", justifyContent: "center" }}>
                  {/* Hot Card */}
                  <Card
                    style={
                      value > 75
                        ? {
                            backgroundColor: "red",
                            height: 100,
                            width: 100,
                            margin: "0px 8px",
                          }
                        : {
                            backgroundColor: "green",
                            height: 100,
                            width: 100,
                            margin: "0px 8px",
                          }
                    }
                  >
                    <CardContent>
                      <Typography style={{ fontSize: 10 }}>Hot</Typography>
                      <Typography variant="h4">75</Typography>
                      <Typography style={{ fontSize: 10 }}>sv 75</Typography>
                    </CardContent>
                  </Card>

                  {/* Cold Card */}
                  <Card
                    style={
                      value > 75
                        ? {
                            backgroundColor: "red",
                            height: 100,
                            width: 100,
                            margin: "0px 8px",
                          }
                        : {
                            backgroundColor: "green",
                            height: 100,
                            width: 100,
                            margin: "0px 8px",
                          }
                    }
                  >
                    <CardContent>
                      <Typography style={{ fontSize: 10 }}>Cold</Typography>
                      <Typography variant="h4">75</Typography>
                      <Typography style={{ fontSize: 10 }}>sv 75</Typography>
                    </CardContent>
                  </Card>

                  {/* Compressor Card */}
                  <Card
                    style={
                      value > 75
                        ? {
                            backgroundColor: "red",
                            height: 100,
                            width: 100,
                            margin: "0px 8px",
                          }
                        : {
                            backgroundColor: "green",
                            height: 100,
                            width: 100,
                            margin: "0px 8px",
                          }
                    }
                  >
                    <CardContent>
                      <Typography style={{ fontSize: 10 }}>
                        Compressor
                      </Typography>
                      <Typography variant="h4">75</Typography>
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

          {/* Continental  */}

          <Grid item xs={12} md={4}>
            <Card sx={{ width: 400, height: 200, margin: "2vh" }}>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  CONTI
                </Typography>

                <Box style={{ display: "flex", justifyContent: "center" }}>
                  {/* Hot Card */}
                  <Card
                    style={
                      value > 75
                        ? {
                            backgroundColor: "red",
                            height: 100,
                            width: 100,
                            margin: "0px 8px",
                          }
                        : {
                            backgroundColor: "green",
                            height: 100,
                            width: 100,
                            margin: "0px 8px",
                          }
                    }
                  >
                    <CardContent>
                      <Typography style={{ fontSize: 10 }}>Hot</Typography>
                      <Typography variant="h4">75</Typography>
                      <Typography style={{ fontSize: 10 }}>sv 75</Typography>
                    </CardContent>
                  </Card>

                  {/* Cold Card */}
                  <Card
                    style={
                      value > 75
                        ? {
                            backgroundColor: "red",
                            height: 100,
                            width: 100,
                            margin: "0px 8px",
                          }
                        : {
                            backgroundColor: "green",
                            height: 100,
                            width: 100,
                            margin: "0px 8px",
                          }
                    }
                  >
                    <CardContent>
                      <Typography style={{ fontSize: 10 }}>Cold</Typography>
                      <Typography variant="h4">75</Typography>
                      <Typography style={{ fontSize: 10 }}>sv 75</Typography>
                    </CardContent>
                  </Card>

                  {/* Compressor Card */}
                  <Card
                    style={
                      value > 75
                        ? {
                            backgroundColor: "red",
                            height: 100,
                            width: 100,
                            margin: "0px 8px",
                          }
                        : {
                            backgroundColor: "green",
                            height: 100,
                            width: 100,
                            margin: "0px 8px",
                          }
                    }
                  >
                    <CardContent>
                      <Typography style={{ fontSize: 10 }}>
                        Compressor
                      </Typography>
                      <Typography variant="h4">75</Typography>
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

          {/* BEVERAGES */}
          <Grid item xs={12} md={4}>
            <Card sx={{ width: 400, height: 200, margin: "2vh" }}>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  BEVERAGES
                </Typography>

                <Box style={{ display: "flex", justifyContent: "center" }}>
                  {/* Hot Card */}
                  <Card
                    style={
                      value > 75
                        ? {
                            backgroundColor: "red",
                            height: 100,
                            width: 100,
                            margin: "0px 8px",
                          }
                        : {
                            backgroundColor: "green",
                            height: 100,
                            width: 100,
                            margin: "0px 8px",
                          }
                    }
                  >
                    <CardContent>
                      <Typography style={{ fontSize: 10 }}>Hot</Typography>
                      <Typography variant="h4">75</Typography>
                      <Typography style={{ fontSize: 10 }}>sv 75</Typography>
                    </CardContent>
                  </Card>

                  {/* Cold Card */}
                  <Card
                    style={
                      value > 75
                        ? {
                            backgroundColor: "red",
                            height: 100,
                            width: 100,
                            margin: "0px 8px",
                          }
                        : {
                            backgroundColor: "green",
                            height: 100,
                            width: 100,
                            margin: "0px 8px",
                          }
                    }
                  >
                    <CardContent>
                      <Typography style={{ fontSize: 10 }}>Cold</Typography>
                      <Typography variant="h4">75</Typography>
                      <Typography style={{ fontSize: 10 }}>sv 75</Typography>
                    </CardContent>
                  </Card>

                  {/* Compressor Card */}
                  <Card
                    style={
                      value > 75
                        ? {
                            backgroundColor: "red",
                            height: 100,
                            width: 100,
                            margin: "0px 8px",
                          }
                        : {
                            backgroundColor: "green",
                            height: 100,
                            width: 100,
                            margin: "0px 8px",
                          }
                    }
                  >
                    <CardContent>
                      <Typography style={{ fontSize: 10 }}>
                        Compressor
                      </Typography>
                      <Typography variant="h4">75</Typography>
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
        </Grid>
      </Box>
    </>
  );
};

export default MallDetails;
