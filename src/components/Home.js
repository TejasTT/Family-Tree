import React, { useState, useRef } from "react";
import { Box, Stack } from "@mui/system";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { TreeView, TreeItem } from "@material-ui/lab";
import { Button, InputBase } from "@mui/material";
import { useReactToPrint } from "react-to-print";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import { useSelector } from "react-redux";
import AddFamilyComp from "./AddFamilyComp";

function Home() {
  const createfamily = useSelector((state) => state.createfamily.value);

  //.........Search Functionality..............//
  const [query, setQuery] = useState("");
  console.log(query);

  //.........Print Functionality..............//
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const [show, setShow] = React.useState(false);

  return (
    <Box p={2}>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="center"
        p={1}
      >
        <Box display="flex" flexDirection="column">
          <Box
            flex={2}
            sx={{
              p: 2,
              border: "1px solid lightblue",
              borderRadius: "5px",
              marginTop: "1rem",
              marginRight: "1rem",
            }}
          >
            <InputBase
              sx={{
                p: "3px",
                border: "1px solid lightblue",
                borderRadius: "8px",
              }}
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <IconButton type="button" sx={{ ml: "-40px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
            <Box sx={{ marginTop: "1rem", p: 1 }}>
              <TreeView
                aria-label="file system navigator"
                defaultCollapseIcon={<ExpandMoreIcon />}
                defaultExpandIcon={<ChevronRightIcon />}
                sx={{
                  height: 240,
                  flexGrow: 1,
                  maxWidth: 400,
                  overflowY: "auto",
                }}
              >
                {createfamily.map((name, index) => {
                  return (
                    <TreeItem key={index} nodeId="1" label={name}>
                      <TreeItem nodeId="2" label="subnode" />
                    </TreeItem>
                  );
                })}
              </TreeView>
            </Box>
          </Box>
          <Box display="flex" mt="1rem" sx={{ gap: "5px" }}>
            <Stack spacing={1}>
              <Button variant="outlined">Import JSON</Button>
              <Button variant="outlined">Export JSON</Button>
            </Stack>
            <Stack spacing={1}>
              <Button
                variant="outlined"
                onClick={() => {
                  setShow(!show);
                }}
              >
                Add Family
              </Button>
              <Button variant="outlined" onClick={handlePrint}>
                Print
              </Button>
            </Stack>
          </Box>
        </Box>

        <Box
          ref={componentRef}
          flex={6}
          sx={{
            border: "1px solid lightblue",
            borderRadius: "5px",
            marginTop: "1rem",
            ml: "1rem",
            mr: "15px",
          }}
        >
          <Box
            component="h3"
            mt="5px"
            sx={{
              p: 1,
              borderBottom: "1px solid lightblue",
              textAlign: "center",
            }}
          >
            Family Details
          </Box>
          {show && <AddFamilyComp />}
          <Box sx={{ ml: "15px" }}></Box>
        </Box>
      </Stack>
    </Box>
  );
}

export default Home;
