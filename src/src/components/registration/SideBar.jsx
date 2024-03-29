import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import UserRegistration from "./UserRegistration";
import UserSRegistration from "./UserSRegistration";
import DeviceRegistration from "./DeviceRegistration";
import StoreRegistration from "./StoreRegistration";
import CounterRegistration from "./CounterRegistration";
import UserTable from "../table/UserTable";
import Newlist from "./Newlist";

const drawerWidth = 240;

const SideBar = () => {
  const [menuData, setMenuData] = useState("User Registration");

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          marginBottom: 100,
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Registration
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {[
            "User Registration",
            "Store Registration",
            "Device Registration",
            "Counter Registration",
            "All User",
          ].map((text, index) => (
            <ListItem
              key={text}
              disablePadding
              onClick={() => setMenuData(text)}
            >
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>

      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        {menuData === "User Registration" ? (
          <UserRegistration />
        ) : menuData === "Device Registration" ? (
          <DeviceRegistration />
        ) : menuData === "Store Registration" ? (
          <StoreRegistration />
        ) : menuData === "Counter Registration" ? (
          <CounterRegistration />
        ) : (
          <Newlist />
        )}
      </Box>
    </Box>
  );
};

export default SideBar;
