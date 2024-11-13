import "./App.css";
import * as React from "react";
import { Box } from "@mui/material";
import Common from "./layouts/Common";
import Home from "./layouts/Home";
import SignUp from "./layouts/SignUp";
import Login from "./layouts/Login";

function App() {
  // const Item = styled(Paper)(({ theme }) => ({
  //   backgroundColor: "#fff",
  //   ...theme.typography.body2,
  //   padding: theme.spacing(1),
  //   textAlign: "center",
  //   color: theme.palette.text.secondary,
  //   ...theme.applyStyles("dark", {
  //     backgroundColor: "#1A2027",
  //   }),
  // }));

  return (
    <Box>
      <Common/>
      {/* <Home/> */}
      {/* <Login/> */}
      <SignUp/>
    </Box>
  );
}

export default App;
