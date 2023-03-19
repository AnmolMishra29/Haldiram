import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
//import { tokens } from "../../theme";
import MOCKDATA from "../../assests/MOCK_DATA.json";
//import Header from "../../components/Header";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";

const Newlist = () => {
  //const theme = useTheme();
  //const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID" },
    { field: "first_name", headerName: "Firstname" },
    {
      field: "last_name",
      headerName: "Lastname",
      //flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "gender",
      headerName: "Gender",
      headerAlign: "left",
      align: "left",
    },
    // { field: "contact", headerName: "Contact", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "designation", headerName: "Designation", flex: 1 },
    {
      field: "access",
      headerName: "Access",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            // backgroundColor={
            //   access === "admin"
            //     ? colors.greenAccent[600]
            //     : colors.greenAccent[700]
            // }
            borderRadius="4px"
          >
            {access === "Super Admin" && <AdminPanelSettingsOutlinedIcon />}
            {access === "Store Manager" && <SecurityOutlinedIcon />}
            {access === "Region Manager" && <SecurityOutlinedIcon />}
            {access === "Technician" && <SecurityOutlinedIcon />}
            {access === "user" && <LockOpenOutlinedIcon />}

            <Typography
            //color={colors.grey[100]} sx={{ ml: "5px" }}
            >
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="60px">
      {/* <Header title="TEAM" subtitle="Managing the Team Members" /> */}
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "&.MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-colomn--cell": {
            //color: colors.greenAccent[300],
          },
          "& .MuiDtaGrid-colomnHeaders": {
            //backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            //backgroundColor: colors.blueAccent[700],
          },
          "& .MuiDataGrid-virtualScroller": {
            //backgroundColor: colors.primary[400],
          },
        }}
      >
        <DataGrid rows={MOCKDATA} columns={columns} />
      </Box>
    </Box>
  );
};

export default Newlist;
