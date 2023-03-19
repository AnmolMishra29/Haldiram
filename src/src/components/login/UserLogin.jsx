import {
  Box,
  TextField,
  Button,
  styled,
  Dialog,
  Typography,
} from "@mui/material";
import InputLabel from "@mui/material/core/";

const Component = styled(Box)`
  height: 65vh;
  width: 80vw;
  margin: auto;
`;
const Error = styled(Typography)``;
const Container = styled(Box)`
  padding: 25px 35px;
  display: flex;
  flex: 1;
  overflow: auto;
  flex-direction: column;
  margin: auto;
`;

const Textt = styled(TextField)`
  width: 30vw;
  margin: 25px;
`;

const Stylebutto = styled(Button)`
  height: 35px;
  width: 60px;
  margin: 25px;
  display: flex;
  justify-content: center;
`;
const HeadingText = styled(Typography)`
  font-size: 35px;
  font-weight: 700;
  margin: 25px;
  color: "#1338BE";
`;

const UserLogin = (props) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const { open, setOpen, flag, departmentName } = props;

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose} flag={flag}>
      <Component>
        <Container>
          {<HeadingText>{departmentName}</HeadingText>}

          <Textt variant="filled" name="email" label="Email" />
          <Textt variant="filled" name="password" label="Password" />
          <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
          {}
          <Stylebutto variant="contained">Login</Stylebutto>
        </Container>
      </Component>
    </Dialog>
  );
};

export default UserLogin;
