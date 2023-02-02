import { Box,TextField, Button,styled,Dialog, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Component =styled(Box)`
     height:65vh;
     width:65vw;
     margin:auto;
`
const Container = styled(Box)`
     padding: 25px 35px;
     display: flex;
     flex: 1;
     overflow: auto;
    flex-direction: column;
    margin:auto;
`

const Text = styled(TextField)`
    width:30vw;
    margin:25px;
`

const Stylebutton = styled(Button)`
    height:35px;
    width: 60px; 
    margin: 25px;
    display:flex;
    justify-content:center;
`
const HeadingText = styled(Typography)`
    font-size:35px;
    font-weight:700;
    margin:25px;
    color: "#1338BE";
`

const UserLogin = ({open, setOpen,flag})=> {

    
    const handleClose =()=> {
        setOpen(false);
    }

    return(
            <Dialog open={open} onClose={handleClose} flag={flag}>
               <Component>
                    <Container>
                       {    
                         flag === 1 ? <HeadingText>Ethnic Foods Private Limited</HeadingText> : flag === 2 ? <HeadingText>Marketing Private Limited</HeadingText> : flag === 3 ? <HeadingText>Manufacturing Private Limited</HeadingText> : <HeadingText>Product Private Limited</HeadingText>
                       }
                         <Text variant="filled" name='email' label="Email"/>
                         <Text variant="filled" name='password' label="Password"/>
                         {
                            flag === 1 ? <Link to="/ethnic"> <Stylebutton variant="contained">Login</Stylebutton> </Link> : 
                            flag === 2 ? <Link to="/manufacturing"> <Stylebutton variant="contained">Login</Stylebutton> </Link> :
                            flag === 3 ? <Link to="/marketing"> <Stylebutton variant="contained">Login</Stylebutton> </Link> :
                            flag === 4 ? <Link to="/product"> <Stylebutton variant="contained">Login</Stylebutton> </Link> : null
                         }
                    </Container>

               </Component> 
            </Dialog>
    )
}

export default UserLogin;