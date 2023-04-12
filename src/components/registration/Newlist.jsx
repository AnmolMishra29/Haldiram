import {
  Button,
  styled,
  InputBase,
  alpha,
  List,
  ListItem,
  Box,
} from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import SearchIcon from "@mui/icons-material/Search";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import MOCK_DATA from "../../assests/MOCK_DATA.json";
import Header from "./Header";

const ListWrapper = styled(List)`
  position: absolute;
  background: #ffffff;
  color: #000;
  margin-top: 36px;
`;

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
        width: "12ch",
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

function createData(
  id,
  firstName,
  lastName,
  designation,
  email,
  userGender,
  contact
) {
  return { id, firstName, lastName, designation, email, userGender, contact };
}

const deleteuser = async (id) => {
  await axios.delete("https://64098152d16b1f3ed6d46246.mockapi.io/user");
};

const Newlist = () => {
  const [text, setText] = useState("");

  const getText = (text) => {
    setText(text);
  };
  const [user, setUser] = useState([""]);
  const [searchbyName, setSearchbyName] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get(
        "https://64098152d16b1f3ed6d46246.mockapi.io/user"
      );
      setUser(res?.data);
      //console.log(res?.data);
    };
    getUser();
  }, []);

  return (
    <Box m="73px 20px 20px 246px">
      <Header title="ALL USERS" />

      {/* Button */}
      <Box display="flex" justifyContent="end" mt="20px" mr="22px">
        <Link to="/userregistration" style={{ textDecoration: "none" }}>
          <Button type="submit" color="secondary" variant="contained">
            add user
          </Button>
        </Link>
      </Box>

      {/* Table */}
      <TableContainer component={Paper} sx={{ marginTop: "20px" }}>
        <Table sx={{ minWidth: 300 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Id</StyledTableCell>
              <StyledTableCell align="center">First Name </StyledTableCell>
              <StyledTableCell align="center">Last Name </StyledTableCell>
              <StyledTableCell align="center">Designation</StyledTableCell>
              <StyledTableCell align="center">Email&nbsp;</StyledTableCell>
              <StyledTableCell align="center">Gender&nbsp;</StyledTableCell>
              <StyledTableCell align="center">Contact&nbsp;</StyledTableCell>
              <StyledTableCell align="center">&nbsp;</StyledTableCell>
              <StyledTableCell align="center">
                {/* SearchBar */}
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
                  {text && (
                    <ListWrapper>
                      {searchbyName
                        ? user
                            .filter((row) =>
                              row.firstName
                                .toLowerCase()
                                .includes(text.toLowerCase())
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
                        : user
                            .filter((row) =>
                              row.email
                                .toLowerCase()
                                .includes(text.toLowerCase())
                            )
                            .map((row) => <ListItem>{row.email}</ListItem>)}
                    </ListWrapper>
                  )}
                  &nbsp;
                </Search>
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {user.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row">
                  {row.id}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.firstName}
                </StyledTableCell>
                <StyledTableCell align="center">{row.lastName}</StyledTableCell>
                <StyledTableCell align="center">
                  {row.designation}
                </StyledTableCell>
                <StyledTableCell align="center">{row.email}</StyledTableCell>
                <StyledTableCell align="center">
                  {row.userGender}
                </StyledTableCell>
                <StyledTableCell align="center">{row.contact}</StyledTableCell>
                <StyledTableCell>
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
                      onClick={(id) => deleteuser}
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
    </Box>
  );
};

export default Newlist;
