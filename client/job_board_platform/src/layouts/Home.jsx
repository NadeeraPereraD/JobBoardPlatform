import React from 'react';
import Grid from "@mui/material/Grid2";
import { Box } from '@mui/material';

export default function Home() {
  return (
    <Box>
        <Grid container spacing={2} style={{ height: "84vh", marginTop: "10px" }}>
        <Grid size={0.5}></Grid>
        <Grid size={3} style={{ height: "100%", backgroundColor: "yellow" }}>
          {/* <Item>size=4</Item> */}
        </Grid>
        <Grid size={8} style={{ height: "100%", backgroundColor: "green" }}>
          
        </Grid>
        <Grid size={0.5}></Grid>
      </Grid>
    </Box>
  )
}
