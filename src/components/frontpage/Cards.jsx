import {  Card,CardActions,CardContent,CardMedia,Button,Typography,styled,Box,Grid} from "@mui/material";
import Haldiramlogo from "../../assests/haldiramlogo.jpg";
import { useState } from "react";
import Background from "../../assests/background.jpg";
import UserLogin from "../login/UserLogin";

const Stylebutton = styled(Button)`
    display: flex;
    justify-content: center;
`

// const Image =styled("Img") ({
//     height: 55,
//     margin:'auto',
//     paddingRight: 70
// })


const Text = styled(Typography)`
    font-size: 27px;
    font-weight:700;
    color: "#0047AB";
`

const CardComponent = styled(Card)`
      display: 'flex';
      width: '390px';
      height: "398px";
      margin-top: 200px
      margin-right: 20px;
`

const Cards = () => {

  const [open, setOpen] = useState(false);
  const [flag, setFlag] = useState(0);

  const openDialog = ()=> {
    setOpen(true);
  }
  return (
      <Box style={{backgroundImage: {Background}}}>
        <Grid container spacing={4} style={{marginTop:'7vh'}}>
            <Grid item xs={6} sm={4} md={3}>
            <CardComponent style={{height:"43vh", width:"20vw" , margin:"35px",boxShadow: "0 2px 4px 0 rgb(0 0 0/40%)"}}>
            <CardMedia
               component="img"
               alt="logo"
               height="150"
               src={Haldiramlogo}
               style={{
                       display: 'block',
                       //WebkitBackgroundPosition: 'center',
                       alignItems:"center",
                       width: '100%',
                       objectFit: 'contain',
                       height: '120px',
                       width: '170px'
                }}
               />
            <CardContent>
               <Text>
                   Ethnic Foods Private Limited
               </Text>
            </CardContent>
            <CardActions>
                  <Stylebutton variant="contained" onClick={() => {openDialog(); setFlag(1)}}>Login</Stylebutton>
            </CardActions>
            </CardComponent>
            <UserLogin open={open} setOpen={setOpen} flag={flag} />
         </Grid>
             

      {/* second card */}
            <Grid item xs={6} sm={4} md={3}>
            <CardComponent style={{height:"43vh", width:"20vw" , margin:"35px",boxShadow: "0 2px 4px 0 rgb(0 0 0/40%)"}}>
            <CardMedia
          component="img"
          alt="logo"
          height="170"
          src={Haldiramlogo}
          style={{
            display: 'block',
            WebkitBackgroundPosition: 'center',
            width: '100%',
            objectFit: 'contain',
            height: '120px',
            width: '170px'
          }}
        />
        <CardContent>
          <Text>
               Marketing Private Limited          
          </Text>
        </CardContent>
        <CardActions>
          <Stylebutton variant="contained" onClick={()=> {openDialog(); setFlag(2)}}>Login</Stylebutton>
        </CardActions>
      </CardComponent>

      <UserLogin open={open} setOpen={setOpen} flag={flag}/>
      
    </Grid>

    {/* third card */}
    <Grid item xs={6} sm={4} md={3}>
            <CardComponent style={{height:"43vh", width:"20vw" , margin:"35px",boxShadow: "0 2px 4px 0 rgb(0 0 0/40%)"}}>
            <CardMedia
          component="img"
          alt="logo"
          height="170"
          src={Haldiramlogo}
          style={{
            display: 'block',
            WebkitBackgroundPosition: 'center',
            width: '100%',
            objectFit: 'contain',
            height: '120px',
            width: '170px'
          }}
        />
        <CardContent>
          <Text>
              Manufacturing Private Limited
          </Text>
        </CardContent>
        <CardActions>
          <Stylebutton variant="contained" onClick={() => {openDialog(); setFlag(3)}}>Login</Stylebutton>
        </CardActions>
      </CardComponent>
      <UserLogin open={open} setOpen={setOpen} flag={flag}/>
    </Grid>

      {/* fourth card */}
      <Grid item xs={6} sm={4} md={3}>
            <CardComponent style={{height:"43vh", width:"20vw", margin:"35px",boxShadow: "0 2px 4px 0 rgb(0 0 0/40%)"}}>
            <CardMedia
          component="img"
          alt="logo"
          height="170"
          src={Haldiramlogo}
          style={{
            display: 'block',
            WebkitBackgroundPosition: 'center',
            width: '100%',
            objectFit: 'contain',
            height: '120px',
            width: '170px'
          }}
        />
        <CardContent>
          <Text>
          Products Private Limited
          </Text>
        </CardContent>
        <CardActions>
          <Stylebutton variant="contained" onClick={() => {openDialog(); setFlag(4)}}>Login</Stylebutton>
        </CardActions>
      </CardComponent>
      <UserLogin open={open} setOpen={setOpen} flag={flag}/>
     </Grid>
    </Grid>
    </Box>
  );
};

export default Cards;
