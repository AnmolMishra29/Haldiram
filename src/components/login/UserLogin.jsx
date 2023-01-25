import { Box,TextField, Button,styled,Dialog, Typography } from "@mui/material";

const Component =styled(Box)`
     height:65vh;
     width:80vw;
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
                         flag === "1" ?
                             <HeadingText>
                                  Marketing Private Limited
                             </HeadingText>
                             :
                             <HeadingText>
                                  Ethnic Private Limited
                             </HeadingText>
                    }    
                                  
                         <Text variant="filled" name='email' label="Email"/>
                         <Text variant="filled" name='password' label="Password"/>
                         <Stylebutton variant="contained">Login</Stylebutton>
                    </Container>

               </Component> 
            </Dialog>
    )
}

export default UserLogin;