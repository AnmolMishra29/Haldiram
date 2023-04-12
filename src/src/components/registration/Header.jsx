import { Typography, Box, AppBar, Toolbar } from "@mui/material";
const drawerWidth = 240;

const Header = ({ title }) => {
  //const theme = useTheme();
  //const colors = tokens(theme.palette.mode)
  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - ${drawerWidth}px)`,
        ml: `${drawerWidth}px`,
        marginBottom: 150,
        backgroundColor: "#007fff",
      }}
    >
      <Toolbar style={{ "justify-content": "center" }}>
        <Typography variant="h6" noWrap component="div">
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
