import {
    Box,
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    styled,
    Grid,
    CardActions,
    CardMedia,
    Card,
    CardContent,
  } from "@mui/material";
  import Haldiramlogo from "../../assests/haldiramlogo.jpg";
  import axios from "axios";
  import { useState, useEffect } from "react";
  
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
  const Container = styled(Box)`
    display: flex;
    justify-content: center;
    width: 90vw;
    padding: 5vh 5vw;
  `;
  
  const MarketingDashboard = () => {
    const [marketingproducts, setMarketingProducts] = useState([]);
  
    const getMarketingDetails = async () => {
      try {
        let res = await axios.get("https://fakestoreapi.com/products");
        console.log(res.data);
        setMarketingProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    useEffect(() => {
      getMarketingDetails();
    }, []);
  
    return (
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
                  Marketing Private Limited
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
        <Container>
          <Grid container spacing={2} style={{ marginTop: "7vh" }}>
            {marketingproducts.map((product) => (
              <Grid item xs={6} sm={4} md={3}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {product.category}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button variant="contained" size="small">Proceed</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </>
    );
  };
  
  export default MarketingDashboard;
  