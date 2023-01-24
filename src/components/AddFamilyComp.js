import React from "react";
import { TextField } from "@mui/material";
import { Box, Stack } from "@mui/system";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { addFamilyMember } from "../redux/features/createFamilySlice";



function AddFamilyComp() {
  const [addFamilyInput, setAddFamilyInput] = React.useState("");

  const disptach = useDispatch();

  const handleAddFamily = () => {
    if (!addFamilyInput) return;
    disptach(addFamilyMember(addFamilyInput));
    setAddFamilyInput("");
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
          <TextField
            id="outlined-basic"
            label="Add Family Member"
            variant="outlined"
            size="small"
            value={addFamilyInput}
            onChange={(e) => setAddFamilyInput(e.target.value)}
          />
          <Button variant="contained" onClick={handleAddFamily} >
            Add Member
          </Button>
        </Stack>
      </Box>
    </div>
  );
}

export default AddFamilyComp;
