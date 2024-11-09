import React from 'react';
import { Button } from '@mui/material';


export default function NavbarButtons(props) {
  return (
    <div>
        <Button variant="contained" style={{backgroundColor: props.color, color: props.fontColor}}>{props.title}</Button>
    </div>
  )
}
