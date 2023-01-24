import { InputLabel, TextField } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import Button from "@mui/material/Button";
import BasicTable from "./BasicTable";

function Edit() {
  const person = {
    name: "",
    spouse: "",
    location: "",
    address: "",
  };

  const [user, setUser] = React.useState(person);

  const [userData, setUserData] = React.useState([]);

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const sendData = () => {
    setUserData([...userData, user]);
   
    
  };

  return (
    <div>
    <Box display="flex" justifyContent="center" sx={{ p: "10px" }}>
      <Stack
        spacing={1}
        direction="column"
        justifyContent="center"
        sx={{
          borderRadius: "5px",
          border: "solid 1px",
          m: "2rem",
          p: "2rem",
          width: "20rem",
        }}
      >
        <InputLabel sx={{ width: "200px" }}>Name:</InputLabel>
        <TextField
          sx={{ width: "20rem" }}
          id="standard-basic"
          variant="standard"
          name="name"
          onChange={handleChange}
        />
        <InputLabel sx={{ width: "200px" }}>Spouse:</InputLabel>
        <TextField
          sx={{ width: "20rem" }}
          id="standard-basic"
          variant="standard"
          name="spouse"
          onChange={handleChange}
        />
        <InputLabel sx={{ width: "200px" }}>Location:</InputLabel>
        <TextField
          sx={{ width: "20rem" }}
          id="standard-basic"
          variant="standard"
          name="location"
          onChange={handleChange}
        />
        <InputLabel sx={{ width: "200px" }}>Address:</InputLabel>
        <TextField
          sx={{ width: "20rem" }}
          id="standard-basic"
          variant="standard"
          name="address"
          onChange={handleChange}
        />
        <Button variant="contained" onClick={sendData}>
          Submit
        </Button>
      </Stack>
    </Box>
    <BasicTable data={userData}/>
    </div>
  );
}

export default Edit;
