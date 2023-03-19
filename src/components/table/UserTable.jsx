import { Button, styled, InputBase, alpha,List,ListItem,Box } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import MOCK_DATA from "../../assests/MOCK_DATA.json"

const ListWrapper = styled(List)`
      position: absolute;
      background: #FFFFFF;
      color: #000;
      margin-top:36px;
`

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(6)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(id, first_name, designation, email, gender ) {
  return { id, first_name, designation, email, gender};
}

// const rows = [
//   createData(1, "Anmol Mishra", "Store Manager", "anmol@gmail.com", 24),
//   createData( 2,"Sankalp Shrivastava","Store Manager","sankalp@gmail.com",37),
//   createData(3, "Ayush yadav", "Region Manager", "ayush@gmail.com", 24),
//   createData(4, "Manish", "Store Manager", "manish@gmail.com", 67),
//   createData(5, "Shadmaan", "Store Manager", "shadman@gmail.com", 49),
// ];

const UserTable = () => {
  const [text, setText] = useState("");

  const getText = (text) => {
    setText(text);
  };

  return (
    <TableContainer component={Paper} sx={{ marginTop: "63px" }}>
      <Table sx={{ minWidth: 300 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Id</StyledTableCell>
            <StyledTableCell align="center">Name </StyledTableCell>
            <StyledTableCell align="center">Designation&nbsp;</StyledTableCell>
            <StyledTableCell align="center">Email&nbsp;</StyledTableCell>
            <StyledTableCell align="center">Gender&nbsp;</StyledTableCell>
            <StyledTableCell align="center">&nbsp;</StyledTableCell>
            <StyledTableCell align="center">

              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                  onChange={(e) => getText(e.target.value)}
                  value={text}
                />
                {
                text &&
                <ListWrapper>
                  {MOCK_DATA.filter((row) => row.first_name.toLowerCase().includes(text.toLowerCase())
                    )
                    .map((row) => (
                      <ListItem>
                        {/* <Link
                          to={`/product/${product.id}`}
                          onClick={() => setText("")}
                          style={{ textDecoration: "none", color: "inherit" }}
                        > */}
                          {row.name}
                        {/* </Link> */}
                      </ListItem>
                    ))
                  }
                </ListWrapper>
                }
                &nbsp;
              </Search>

            </StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {MOCK_DATA.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.id}
              </StyledTableCell>
              <StyledTableCell align="center">{row.first_name}</StyledTableCell>
              <StyledTableCell align="center">{row.designation}</StyledTableCell>
              <StyledTableCell align="center">{row.email}</StyledTableCell>
              <StyledTableCell align="center">{row.gender}</StyledTableCell>
              <StyledTableCell >
                <Button 
                  style={{ backgroundColor: "#1338BE", color: "#FFFFFF" }}
                >
                  Edit
                </Button>
              </StyledTableCell>

              <Box display="row" justifyContent="end">
              <StyledTableCell>
                <Button
                  style={{ backgroundColor: "#FF2400", color: "#FFFFFF" }}
                >
                  Delete
                </Button>
                
              </StyledTableCell>
              </Box>
            </StyledTableRow>
            
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserTable;
