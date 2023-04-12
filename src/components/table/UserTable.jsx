import { CSmartTable } from "@coreui/react-pro";
import { useState, useEffect } from "react";
import { Box } from "@mui/material";

const UserTable = () => {
  const [loading, setLoading] = useState();
  const [users, setUsers] = useState([]);
  const columns = [
    {
      key: "id",
      _style: { display: "flex", alignItems: "center" },
    },
    {
      key: "firstName",
      label: "First Name",
      _style: { minWidth: "130px" },
    },
    {
      key: "lastName",
      label: "Last Name",
      _style: { minWidth: "130px" },
    },
    "email",
    {
      key: "designation",
      label: "Designation",
      _style: { minWidth: "120px" },
    },
    {
      key: "userGender",
      label: "Gender",
    },
    {
      key: "contact",
      label: "Contact",
    },
  ];
  const getUsers = useEffect(() => {
    setLoading(true);
    fetch("https://64098152d16b1f3ed6d46246.mockapi.io/user")
      .then((response) => response.json())
      .then((result) => {
        setUsers(result);
        setLoading(false);
      });
  }, []);
  return (
    <Box mt="50px">
      <CSmartTable
        columns={columns}
        columnFilter
        columnSorter
        footer
        items={users}
        itemsPerPageSelect
        loading={loading}
        pagination
        tableProps={{
          hover: false,
          responsive: true,
        }}
      />
    </Box>
  );
};

export default UserTable;
