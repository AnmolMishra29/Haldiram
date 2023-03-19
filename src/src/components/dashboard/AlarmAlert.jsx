import { Dialog,Divider, Typography,Box ,styled} from "@mui/material";

const Component =styled(Box)`
     height:30vh;
     width:30vw;
     margin:auto;
     background-color:#FFF017;
`

const Container = styled(Box)`
     padding: 25px 35px;
     display: flex;
     flex: 1;
     overflow: auto;
    flex-direction: column;
    margin:auto;
`
const Text = styled(Typography)`
    font-size: 22px;
    font-weight:550;
    color:#002CC9;
`
const Textt = styled(Typography)`
    font-size: 22px;
    font-weight:550;
    color:#FF0F00;
    padding-left:15px;
`

const AlarmAlert = ({open, setOpen})=> {

    const handleClose = ()=> {
        setOpen(false);
    }
    
    return(
        <Dialog open={open} onClose={handleClose}>
              <Component>
                 <Container>
                   <Box style={{display:"flex"}}>
                   <Text>CHAAT HOT TEMP</Text>  <Textt>LOW 60</Textt>
                   </Box>
                   <Divider/>
                   <Box style={{display:"flex"}}>
                   <Text>LIVE HOT TEMP</Text>  <Textt>LOW -2</Textt>
                   </Box>
                   <Divider/>
                   <Box style={{display:"flex"}}>
                   <Text>LIVE COLD TEMP</Text> <Textt>HIGH 80</Textt>
                   </Box>
                   <Divider/>
                   <Box style={{display:"flex"}}>
                   <Text>BEVERAGE COLD TEMP</Text>  <Textt>LOW 3</Textt>
                   </Box>
                   <Divider/> 
                </Container>
              </Component>
        </Dialog>
    )
}

export default AlarmAlert;