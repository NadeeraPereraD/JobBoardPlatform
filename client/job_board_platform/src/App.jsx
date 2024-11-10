import "./App.css";
import * as React from "react";
import Grid from "@mui/material/Grid2";
import Navbars from "./layouts/Navbars";
import Footer from "./layouts/Footer";
import { Box } from "@mui/material";
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
      <Navbars />
      {/* <Grid container spacing={2} style={{ height: "84vh", marginTop: "10px" }}>
        <Grid size={0.5}></Grid>
        <Grid size={3} style={{ height: "100%", backgroundColor: "yellow" }}>
          {/* <Item>size=4</Item> */}
        {/* </Grid>
        <Grid size={8} style={{ height: "100%", backgroundColor: "green" }}> */}
          {/* <Item>size=8</Item> */}
        {/* </Grid>
        <Grid size={0.5}></Grid> */}
      {/* </Grid> */} 
      <Login/>
      <Footer />
    </Box>
  );
}

export default App;
